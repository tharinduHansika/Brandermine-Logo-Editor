// tharindu_div

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import SlideContainer from './common/SlideContainer';
import { getAllFontCategories } from './../../api_calls/logo_maker_editor/getAllFontCategories';
import { getAllFonts} from './../../api_calls/logo_maker_editor/getAllFonts'
import { Divider } from '@mui/material';
import { Oval } from 'react-loader-spinner'
import { useDispatch } from 'react-redux';
import { setLogoTextBusinessNameFontFamily } from '../../store/slice/logoTextSlice';

export default function ChangeFont(props) {
  const [hover, setHover] = useState(false);
  const [visible, setVisible] = useState(false);
  const [fontCategories, setFontCategories] = useState([]);
  const [fonts, setFonts] = useState([]);

  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const [loarder,setLoader] = useState(false);
  const [value, setValue] = useState();

  const [fontsFetchType, setFontsFetchType] = useState(true);
  const [selectedFontIndex, setSelectedFontIndex] = useState(null);

  const dispatch = useDispatch();

  const fetchFontCategoriesData = async () => {
    try {
      setLoader(true)
      const objectFontCategoriesData = await getAllFontCategories();
      console.log("object pass",objectFontCategoriesData.data);
      setLoader(false);
      setFontCategories(objectFontCategoriesData.data);
      console.log("font catrgories",fontCategories);
    } catch (error) {
      setLoader(false);
      console.log('Error fetching font categories:', error);
    }
  };

useEffect(() => {
    fetchFontCategoriesData()  
  }, []);


  const fetchFontsData = async () => {
    try {
      setLoader(true)
      if (isLoading || !hasMore) {
        return;
      }

      setIsLoading(true);

      const objectFontsData = await getAllFonts(page); // Pass selectedFontCategory

      //const objectFontsData = await getAllFonts(page);
      console.log("object Fonts",objectFontsData.data);
      // const response = await fetch(`https://branderminedev.infozenit.com/api/fonts?pagination[page]=${page}`);
      // const objectFontsData = await response.json();
      const newData=objectFontsData.data;
      console.log('newData',newData);

      if (newData.data.length === 0) {
        setHasMore(false);
      } else {
        setLoader(false)
        setFonts(prevData => [...prevData, ...newData.data]);
        setPage(prevPage => prevPage + 1);
      }

      setIsLoading(false);
    } catch (error) {
      setLoader(false)
      console.log('Error fetching fonts:', error);
    }
  };

  //load fonts according to pagination
  useEffect(() => {
    fetchFontsData();
  }, [page]);


  const fetchFontsDataByID = async (id) => {
    console.log('selected id',id)
      console.log('id',id)
      const endpoint = 'https://branderminedev.infozenit.com/api/fonts/getByCategoryId';
      const requestData = {
        categoryIds: [id],
      };
  
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        console.log('updated data',data);
        // setLoader(false)
        setFonts(data);
        
      } catch (error) {
        console.error('Error fetching fonts:', error);
      }
  };



  //font scrollbar handler
  const handleScroll = () => {
    const scrollableElement = document.getElementById('scrollable');
    if (scrollableElement) {
      const scrollableHeight = scrollableElement.scrollHeight;
      const scrollTop = scrollableElement.scrollTop;
      const clientHeight = scrollableElement.clientHeight;

      if (scrollableHeight - scrollTop <= clientHeight + 200) {
        fetchFontsData();
      }
    }
  };

  const handleFontSelection = (fontName, fontExtension) => {
    console.log ("font name", fontName);
    console.log ("font extension", fontExtension);
    // Dispatch the selected font name and extension to the store
    dispatch(setLogoTextBusinessNameFontFamily({ name: fontName, extension: fontExtension }));
  };

  return (
    <SlideContainer translate={props.translate}>
      <div>
        <div style={{ display: 'flex', flexDirection: 'row', margin: '5px', columnGap: '5px', cursor: 'pointer', marginTop: '5px' }} onClick={() => { props.onClick(); }}>
          <Image src="/images/logoMakerImages/svg/symboles/1.svg" width={6} height={6} />
          <h3>Change Font</h3>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', columnGap: '5px', width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: '5px' }}>
            <h3 style={{fontWeight:'500'}}>Font Categories</h3>

          {/* Display fontCategories */}
          <select style={{display: 'flex', flexDirection: 'column', columnGap: '5px', width: '100%', alignItems: 'center', justifyContent: 'center',width: '80%',border:'1px solid #6B42CA',borderRadius:'10px',marginTop:'5px'}}
            onChange={(e) => {
              console.log('Selected Font Category:', e.target.value); // Log the selected font category
              const selectedValue = e.target.value;
                setValue(selectedValue);
                console.log('selected value ',selectedValue);
                setSelectedFontIndex(null);
            
                if (selectedValue === '') {
                  // Reset the relevant states here
                  setFonts([]);
                  setPage(1);
                  setHasMore(true);
                  setIsLoading(false);

                  // Call getAllFonts function when All Fonts is selected
                  fetchFontsData();
                  setFontsFetchType(true);
                  
                } else {
                  // Call fetchFontsDataByID function for other options
                  fetchFontsDataByID(selectedValue);
                  setFontsFetchType(false);
                }
              }}
              value={value}
          >
            <option value={''} selected='All Fonts'>All Fonts</option>
                {fontCategories.data?.map((fontCategory,index) => (
            <option key={index+1} value={index + 1}>
                {fontCategory.attributes.name}
            </option>
          ))}
        </select>

          </div>

          <div style={{ display: 'flex', flexDirection: 'column', columnGap: '5px', width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: '5px' }}>
            <h3 style={{fontWeight:'500'}}>Fonts</h3>
            <Divider style={{height: '2px'}}/>

            
            <div className='customScroll' style={{width: '100%',height:'75vh',overflow: 'auto', padding: '5px', borderTop:'1px solid #00000026'}}>
            
            { loarder ?    
              (fontsFetchType?
                <div>
                {fonts?.map((font, index) => (
                  <>
                  <h5 style={{fontSize: '12px',marginLeft:'25px', marginTop:'10px' }}>{font.attributes.name}</h5>
                  <div key={index} 
                  style={{marginLeft:'25px', width: '80%',borderRadius:'5px', padding:'10px', marginTop:'5px',  border: selectedFontIndex === index ? '2px solid #6B42CA' : '1px solid #00000026', // Apply the background color change effect
                  cursor: 'pointer', // Add a pointer cursor to indicate it's clickable
                }}
                onClick={() => {
                  setSelectedFontIndex(index);
                  handleFontSelection(font.attributes.name, font.attributes.fontExtention);
                }} // Update the selected font index on click
                >
    
                      <style>
                              {`
                                @font-face {
                                  font-family: '${font.attributes.name}';
                                  src: url(./../fonts/${font.attributes.name}${font.attributes.fontExtention}) format('truetype');
                                }
                              `}
                      </style>
    
                    <h3 style={{fontFamily:font.attributes.name}}>
                      {font.attributes.name}</h3>
                    {/* <h3 style={{fontFamily:`'${font.attributes.name}+${font.attributes.fontExtention}'`}}>{font.attributes.name}</h3> */}
                    {/* {console.log("src",font.attributes.name+font.attributes.fontExtention)} */}
                  </div>
                  </>
                ))}
              </div>

              :

              <div>
                  {fonts?.map((font, index) => (
                    <>
                    <h5 style={{fontSize: '12px',marginLeft:'25px', marginTop:'10px' }}>{font.name}</h5>
                    <div key={index} 
                    style={{marginLeft:'25px', width: '80%',borderRadius:'5px', padding:'10px', marginTop:'5px', border: selectedFontIndex === index ? '2px solid #6B42CA' : '1px solid #00000026', // Apply the background color change effect
                    cursor: 'pointer', // Add a pointer cursor to indicate it's clickable
                  }}
                  onClick={() => setSelectedFontIndex(index)} // Update the selected font index on click
                  >

                        <style>
                                {`
                                  @font-face {
                                    font-family: '${font.name}';
                                    src: url(./../fonts/${font.name}${font.fontExtention}) format('truetype');
                                  }
                                `}
                        </style>

                      <h3 style={{fontFamily:font.name}}>
                        {font.name}</h3>
                      {/* <h3 style={{fontFamily:`'${font.attributes.name}+${font.attributes.fontExtention}'`}}>{font.attributes.name}</h3> */}
                      {/* {console.log("src",font.attributes.name+font.attributes.fontExtention)} */}
                    </div>
                    </>
                  ))}
                </div>
              )

              :

              <Oval
                  height={30}
                  width={30}
                  color="#6B42CA"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={loarder ? false : true}
                  ariaLabel='oval-loading'
                  secondaryColor="#6B42CACC"
                  strokeWidth={2}
                  strokeWidthSecondary={2}
              />
    
            }
            </div>
          </div>
        </div>
      </div>

    <SlideContainer translate={visible} onClick={() => { setVisible(false); }} />
    </SlideContainer>
  );
}
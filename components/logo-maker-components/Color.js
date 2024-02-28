import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import SlideContainer from './common/SlideContainer';
import { getAllPalettes } from './../../api_calls/logo_maker_editor/getAllPalettes'
import { Divider } from '@mui/material';
import { Oval } from 'react-loader-spinner'

import { useSelector,useDispatch } from 'react-redux';
import { setSelectedLogoColor, setSelectedNameColor, setSelectedSloganColor, setSelectedBackgroundColor } from './../../store/slice/logoColorSlice'; // Import your Redux actions

import ColumnContainer from './common/ColumnContainer'

import { addStep } from './../../store/slice/undoRedoSlice';

export default function Color() {
    const [loader, setLoader] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [colors, setColors] = useState([]);
    const [page, setPage] = useState(1);
    const [selectedPaletteIndex, setSelectedPaletteIndex] = useState(null);

    const [hover, setHover] = useState()
    const [selected, setSelected] = useState(0)

    const logoTextBusinessNameFontSize = useSelector ((state) => state.logoText.logoTextBusinessNameFontSize);

    console.log("textName", logoTextBusinessNameFontSize?.name)

    const fetchPalettesData = async () => {
        try {
            setLoader(true);
            if (isLoading || !hasMore) {
                return;
            }

            setIsLoading(true);

            const objectColorsData = await getAllPalettes(page);

            console.log("object Colors", objectColorsData.data);
            const newData = objectColorsData.data;
            console.log('newData', newData);

            if (newData.data.length === 0) {
                setHasMore(false);
            } else {
                setLoader(false);
                setColors(prevData => [...prevData, ...newData.data]);
                setPage(prevPage => prevPage + 1);
            }

            setIsLoading(false);
        } catch (error) {
            setLoader(false);
            console.log('Error fetching fonts:', error);
        }
    };

    // Load palettes according to pagination
    useEffect(() => {
        fetchPalettesData();
    }, [page]);



    const dispatch = useDispatch();

    // Retrieve selected colors from the Redux store
    const selectedLogoColor = useSelector((state) => state.logoColor.selectedLogoColor);
    const selectedNameColor = useSelector((state) => state.logoColor.selectedNameColor);
    const selectedSloganColor = useSelector((state) => state.logoColor.selectedSloganColor);
    const selectedBackgroundColor = useSelector((state) => state.logoColor.selectedBackgroundColor);

    const handleColorClick = (color) => {
      console.log('Selected color for logoIcon.layer_1:', color.attributes.logoIcon.layer_1);
      //dispatch(selectedLogoColor(color.attributes.logoIcon.layer_1));
    //   dispatch(setSelectedLogoColor(color.attributes.logoIcon.layer_1));
    //   dispatch(setSelectedNameColor(color.attributes.logoIcon.layer_1));
    //   dispatch(setSelectedSloganColor(color.attributes.logoIcon.layer_2));

      // Fetch the colors of the logo icon and the two h1 tags from the color object
        const logoIconColor = color.attributes.logoIcon.layer_1;
        const firstH1TagColor = color.attributes.text_1;
        const secondH1TagColor = color.attributes.text_2;
        const backgroundColor = color.attributes.background;

        // Dispatch these colors to the Redux store
        dispatch(setSelectedLogoColor(logoIconColor));
        dispatch(setSelectedNameColor(firstH1TagColor));
        dispatch(setSelectedSloganColor(secondH1TagColor));
        dispatch(setSelectedBackgroundColor(backgroundColor));

        // Dispatch the addStep action to add the current state to the history
        // dispatch(addStep({ type: 'UPDATE_SELECTED_LOGO_COLOR', payload: logoIconColor }));
        // dispatch(addStep({ type: 'UPDATE_SELECTED_NAME_COLOR', payload: firstH1TagColor }));
        // dispatch(addStep({ type: 'UPDATE_SELECTED_SLOGAN_COLOR', payload: secondH1TagColor }));
        // dispatch(addStep({ type: 'UPDATE_SELECTED_BACKGROUND_COLOR', payload: backgroundColor }));

        const colorObject = {
            logoIconColor,
            firstH1TagColor,
            secondH1TagColor,
            backgroundColor
        };

        dispatch(addStep({ type: 'UPDATE_COLOR', payload: colorObject }));
    };

    return (
        <div>
            <h3 className='m-2 text-lg'>Add Color</h3>
            <div style={{ margin: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <p className='mb-2'>Choose a beautiful color combination for your design (individual element colors can be adjusted in other tabs).</p>
            </div>
            <hr />

            <ul style={{display:'flex',flexDirection:'column',alignItems:'center',overflowX:'hidden',overflowY:'scroll',height: '70vh',}} className='customScroll'>
                {colors.map((color,index)=>{
                const isActive = selected === index;
                const isHovered = hover === index  && !isActive; 
                    return(
                        <li key={index} style={{width:'90%'}}>
                            <div style={{border:`2px solid ${isHovered ? "#6B42CA": isActive  ? "#6B42CA":"#6B42CA80"}` ,width:'100%' ,height:'120px',margin:'5px',borderRadius:'10px',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer', backgroundColor: color.attributes.background}} 
                                onMouseEnter={() => {setHover(index)}} 
                                onMouseLeave={() => {setHover(null)}}
                                onClick={()=>{setSelected(index); 
                                    handleColorClick(color);}}

                            >
                                    <ColumnContainer>
                                        <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
                                            {/* <Image src="/images/logoMakerImages/svg/layout/bird.svg" width={50} height={50}/> */}
                                            <svg xmlns="http://www.w3.org/2000/svg"  width={50} height={50} viewBox="0 0 565.58 574.09"><g id="Layer_2" data-name="Layer 2">
                                                <polygon points="280.82 434.82 261.54 421.53 234.02 441.11 282.32 474.4 329.48 438.29 299.99 420.13 280.82 434.82" fill={color.attributes.logoIcon.layer_3}/>
                                                <polygon points="216.05 254 168.25 254 191.76 293.96 237.99 287.05 216.05 254" fill={color.attributes.logoIcon.layer_2}/>
                                                <polygon points="329.77 286.75 376.01 293.67 399.52 253.7 351.71 253.7 329.77 286.75" fill={color.attributes.logoIcon.layer_2}/>
                                                </g><g id="Layer_1" data-name="Layer 1"><path d="M878.08,435c0-58.25-1.2-166-1.21-167.19L876.24,213l-40.12,37.28-2.61,2.4c-1.67,1.52-2.86,2.63-4,3.75l-18.66,18.63c-24,24-48.84,48.78-73.28,73.39q-23.85-.12-47.71-.1c-20.83,0-42.34,0-63.5-.21-22-21.62-44.11-43.78-65.54-65.24l-24.46-24.46c-2.07-2.07-4.12-3.84-6.28-5.72-1-.88-2.12-1.84-3.39-3l-40.06-35.68-.32,53.64c0,1.16-.65,110.57-.58,168.66-28.89,32-67.66,75-70.44,77.92l-15.58,16.31L523.15,666.82l23.35-26.47,76.67,128.22c6.06,12.12,17,18.7,30.62,18.46,20.78-.29,38.92-.27,55.43.05h.83c13.84,0,24.75-6.76,31-19.16l78.1-127,16.65,31.3,129.56-143ZM822.16,543.44l-120,195c-6.61-.09-13.46-.14-20.62-.14q-9.57,0-19.92.11l-107.61-180-31.38,35.57-57.09-63c20.07-22.18,53.69-59.45,62.44-69.15l6.27-7,0-9.36c-.09-30.11.09-80.85.27-120.4,19.63,19.64,39.76,39.75,59.78,59.44a43.49,43.49,0,0,0,29,12c22.22.21,44.76.23,66.56.24q25,0,50,.11c12,.08,21.93-4.08,30.48-12.69,19.41-19.57,39.17-39.33,58.59-58.73.36,39,.72,88.77.61,118.79l0,9.54,70,75.73-53.42,59Z" transform="translate(-399.73 -213)" fill={color.attributes.logoIcon.layer_1}/></g>
                                            </svg>      
                                            {/* <div style={{width:'100px',height:'11px',backgroundColor: color.attributes.text_1, borderRadius:'5px',margin:'2px'}}/>
                                            <div style={{width:'80px',height:'8px',backgroundColor:color.attributes.text_2, borderRadius:'5px',margin:'2px'}}/> */}
                                            <h3 style={{fontSize:'16px',fontWeight:'500', height:'20px', color:color.attributes.text_1}}>Brandermine</h3>
                                            <h3 style={{fontSize:'10px',fontWeight:'100', color:color.attributes.text_2}}>The Logo Maker</h3>
                                        </div>       
                                    </ColumnContainer>
                            </div>
                    </li>
                    )})
                }     
            </ul>
        </div>
    )
}

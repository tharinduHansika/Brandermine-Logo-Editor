import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import { getAllShapes } from "./../../api_calls/logo_maker_editor/getAllShapes";
import { getAllShapePacks } from "./../../api_calls/logo_maker_editor/getAllShapePacks";
import { useDispatch } from "react-redux";
import { setLogoShapeIcon } from "../../store/slice/logoShapeSlice";
import OptionModal from "./common/OptionModal";
import ManageShape from "./ManageShape";
import ManageText from "./ManageText";
import SlideContainer from './common/SlideContainer'
import { red } from "@mui/material/colors";
import { setShapeSVG } from "../../store/slice/ShapeSlice";

import InfiniteScroll from 'react-infinite-scroll-component';

export default function Shapes() {
  const [shapeCategories, setShapeCategories] = useState([]);
  const [value, setValue] = useState();
  //const [shapes, setShapesDetails] = useState([]);
  const [loarder, setLoader] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  //const [hasMore, setHasMore] = useState(true);
  const [shapes, setShapes] = useState([]);
  //const [page, setPage] = useState(1);

  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const [move, setMove] = useState(false);
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const [shapesFetchType, setShapesFetchType] = useState(true);
  const [selectedShapeIndex, setSelectedShapeIndex] = useState(null);

  const dispatch = useDispatch();

  const fetchShapeCategoriesData = async () => {
    try {
      setLoader(true);
      const objectShapeCategoriesData = await getAllShapePacks();
      console.log("object pass", objectShapeCategoriesData.data);
      setLoader(false);
      setShapeCategories(objectShapeCategoriesData.data);
      console.log("font catrgories", shapeCategories);
    } catch (error) {
      setLoader(false);
      console.log("Error fetching font categories:", error);
    }
  };

  useEffect(() => {
    fetchShapeCategoriesData();
  }, []);

  const fetchShapesData = async () => {
    // try {
    //   setLoader(true);
    //   if (isLoading || !hasMore) {
    //     return;
    //   }

    //   setIsLoading(true);

    //   const objectShapesData = await getAllShapes(page); // Pass selectedFontCategory

    //   //const objectFontsData = await getAllFonts(page);
    //   console.log("object Shapes", objectShapesData.data);
    //   // const response = await fetch(`https://branderminedev.infozenit.com/api/fonts?pagination[page]=${page}`);
    //   // const objectFontsData = await response.json();
    //   const newData = objectShapesData.data;
    //   console.log("newData", newData);

    //   if (newData.data.length === 0) {
    //     setHasMore(false);
    //   } else {
    //     setLoader(false);
    //     setShapes((prevData) => [...prevData, ...newData.data]);
    //     setPage((prevPage) => prevPage + 1);
    //   }

    //   setIsLoading(false);
    // } catch (error) {
    //   setLoader(false);
    //   console.log("Error fetching fonts:", error);
    // }

    //////////////////////////////////////////////////////
    // Fetch data from your API or any other data source
    // Update the URL or data fetching logic as per your application's requirements

    const objectShapesData = await getAllShapes(page); // Pass selectedFontCategory
    console.log("newData 1", objectShapesData);
    const data1 = objectShapesData.data;
    console.log("newData 2", data1);
    const data2 = data1.data;
    console.log("newData 3", data2);

    //const response = await fetch(`/api/items?page=${page}`);
    //const data = await response.json();

    // Update the items state with the new data
    setItems([...items, ...data2]);
    //setShapes([...shapes, ...data2]);

    // Determine if there's more data to fetch
    if (data2.length === 0) {
      setHasMore(false);
    }

    // Increment the page number for the next data fetch
    setPage(page + 1);
  };

  //load shapes according to pagination
  useEffect(() => {
    fetchShapesData();
  }, []);


  const fetchShapesDataByID = async (id) => {
    console.log("selected id", id);
    console.log("id", id);
    const endpoint =
      "https://core.brandermine.com/api/shapes/getByPackId";
    const requestData = {
      shapePackIds: [id],
    };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("updated data", data);
      // setLoader(false)
      setShapes(data);
    } catch (error) {
      console.error("Error fetching fonts:", error);
    }
  };

  const handleShapeSelection = (svg) => {
    console.log("selected svg", svg);
    // Dispatch the selected font name and extension to the store
    dispatch(setLogoShapeIcon({ svg }));
    //dispatch(setLogoShapeIcon((prevShapes) => [...prevShapes, svg ]));

    dispatch (setShapeSVG({
      svg:  svg , // shape svg
      svgColor: 'null', 
      svgOpacity: 1,
      svgStroke: 'null',
      svgStrokeWidth: 0,
      svgStrokeOpacity: 1,
      svgWidth: 0,
      svgHeight: 0,
      svgCornerRadius: 'null',
      svgHorizontalFlip: 'null',
      svgRotate: 'null',
      svgHorizontalPosition: 0,
      svgVerticalPosition: 0,
      svgShadow: 'null',
      svgShadowColor: 'null',
      svgShadowOpacity: 'null',
      svgShadowHorizontalPosition: 'null',
      svgShadowVerticalPosition: 'null',
      svgShadowBlur: 'null',
      svgBlur: 'null',
      svgBlurLevel: 'null',
    }));
  };

  const handleManageShape = (e) => {
    // setManageTextVisible(prev => !prev)
    //setMove((prev) => !prev);
  };

  return (
    <div style={{}}>
      <div>
        <div >
          <h3 className="m-2 text-lg">Add Shape</h3>
          <div
            style={{
              margin: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p className="mb-2">
              Get creative by adding shapes to your design.
            </p>
            {/* <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Image
                src="/images/logoMakerImages/svg/search.svg"
                width={15}
                height={15}
                style={{ position: "absolute", left: "10px" }}
              />
              <input
                className="focusNone"
                type="text"
                style={{
                  width: "100%",
                  border: "2px solid #6B42CA33",
                  borderRadius: "10px",
                  height: "35px",
                  lineHeight: "5px",
                  paddingLeft: "35px",
                  outline: "none",
                }}
                placeholder="Search..."
              />
            </div> */}
          </div>
          <hr />

          <div className="m-2 text-lg">
            <select
              className="item-selected"
              style={{
                fontSize: "13px",
                border: "1px solid #6B42CA",
                borderRadius: "10px",
                outlineColor: "transparent",
              }}
              onChange={(e) => {
                //setValue(e.target.value);
                //getll(e.target.value);
                //getAllShapes(e.target.value)

                console.log("Selected Font Category:", e.target.value); // Log the selected font category
                const selectedValue = e.target.value;
                setValue(selectedValue);
                console.log("selected value ", selectedValue);
                setSelectedShapeIndex(null);

                if (selectedValue === "") {
                  // Reset the relevant states here
                  setShapes([]);
                  setPage(1);
                  setHasMore(true);
                  setIsLoading(false);

                  // Call getAllFonts function when All Fonts is selected
                  fetchShapesData();
                  setShapesFetchType(true);
                } else {
                  // Call fetchFontsDataByID function for other options
                  fetchShapesDataByID(selectedValue);
                  setShapesFetchType(false);
                }
              }}
              value={value}
            >
              <option value={""} selected="GetAll">
                GetAll
              </option>
              {shapeCategories.data?.map((item, index) => {
                return (
                  <option
                    value={index + 1}
                    key={index + 1}
                    style={{ fontSize: "13px" }}
                  >
                    {item.attributes.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div
            id="scrollableDiv"
            className="customScroll m-3"
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              rowGap: "10px",
              columnGap: "10px",
              overflowY: "scroll",
              overflowX: "hidden",
              position: "relative",
              maxHeight: "65vh",
            }}

            onScroll={(e) => {
              const { scrollTop, scrollHeight, clientHeight } = e.target;
          
              // Check if the user has scrolled to the bottom
              if (scrollHeight - scrollTop === clientHeight) {
                console.log("loading now");
                {fetchShapesData()}
              }
            }}

          >
            {console.log("loaded")}

              <InfiniteScroll
                    dataLength={items.length}
                    next={fetchShapesData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}

                    style={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                      rowGap: "10px",
                      columnGap: "10px",
                      position: "relative",
                    }}
              >
                {items?.map((shape, index) => {
                          // {console.log('shapes loaded')}
                          // {console.log("shapes display",shapes.data)}
                          const svg = shape.attributes.svg;
                          {console.log('svg img', svg) }
                          return (
                            <div
                              key={index}
                              style={{
                                width: "60px",
                                height: "60px",
                                border:
                                  selectedShapeIndex === index
                                    ? "2px solid #6B42CA"
                                    : "1px solid #00000026",
                                borderRadius: "10px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                setSelectedShapeIndex(index);
                                handleShapeSelection(svg);
                                handleManageShape();
                              }}
                              dangerouslySetInnerHTML={{
                                __html: `<svg width="${40}" height="${40}" xmlns="http://www.w3.org/2000/svg">${svg}</svg>`,
                              }}
                            ></div>
                          );
                        })}
              </InfiniteScroll>

            
            {loarder ? (
              shapesFetchType ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    rowGap: "10px",
                    columnGap: "10px",
                    position: "relative",
                  }}
                >
                  {/* <InfiniteScroll
                    dataLength={shapes.length}
                    next={fetchShapesData}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}
                  > */}

                      {items?.map((shape, index) => {
                        // {console.log('shapes loaded')}
                        // {console.log("shapes display",shapes.data)}
                        const svg = shape.attributes.svg;
                        {console.log('svg img', svg) }
                        return (
                          <div
                            key={index}
                            style={{
                              width: "60px",
                              height: "60px",
                              border:
                                selectedShapeIndex === index
                                  ? "2px solid #6B42CA"
                                  : "1px solid #00000026",
                              borderRadius: "10px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              setSelectedShapeIndex(index);
                              handleShapeSelection(svg);
                              handleManageShape();
                            }}
                            dangerouslySetInnerHTML={{
                              __html: `<svg width="${40}" height="${40}" xmlns="http://www.w3.org/2000/svg">${svg}</svg>`,
                            }}
                          ></div>
                        );
                      })}

                  {/* </InfiniteScroll>     */}
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    rowGap: "10px",
                    columnGap: "10px",
                    position: "relative",
                  }}
                >
                  {items?.map((shape, index) => {
                    const svg = shape.svg;
                    return (
                      <div
                        key={index}
                        style={{
                          width: "60px",
                          height: "60px",
                          border:
                            selectedShapeIndex === index
                              ? "2px solid #6B42CA"
                              : "1px solid #00000026",
                          borderRadius: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setSelectedShapeIndex(index);
                          handleShapeSelection(svg);
                          handleManageShape();
                        }}
                        dangerouslySetInnerHTML={{
                          __html: `<svg width="${40}" height="${40}" xmlns="http://www.w3.org/2000/svg">${svg}</svg>`,
                        }}
                      ></div>
                    );
                  })}
                </div>
              )
            ) : (
              <div style={{ display: "flex", justifyContent: "center" }}>
                {/* <Oval
                  height={30}
                  width={30}
                  color="#6B42CA"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={loarder ? false : true}
                  ariaLabel="oval-loading"
                  secondaryColor="#6B42CACC"
                  strokeWidth={2}
                  strokeWidthSecondary={2}
                /> */}
              </div>
            )}
            
          </div> 
          <ManageText translate={move} onClick={() => { setMove((prev) => !prev);}}>
            </ManageText>
          
        </div>
        <SlideContainer translate={visible}  onClick={()=>{setVisible(false)}}/>
        
      </div>
        
    </div>
    
  );
}

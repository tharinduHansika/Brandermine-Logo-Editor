import Head from "next/head"
import Header from "../../components/logo-maker-components/Header"
import Image from "next/image"
import React,{useState, useEffect, useRef} from "react"
import Suggestions from "../../components/logo-maker-components/Suggestions"
import Text from "../../components/logo-maker-components/Text"
import Shapes from "../../components/logo-maker-components/Shapes"
import Layout from "../../components/logo-maker-components/Layout"
import Background from "../../components/logo-maker-components/Background"
import Icons from "../../components/logo-maker-components/Icons"
import Color from "../../components/logo-maker-components/Color"
import ManageShape from "../../components/logo-maker-components/ManageShape"

import { useSelector } from 'react-redux';
import Draggable from 'react-draggable'; // The default

//for undo & redo
import { useDispatch} from 'react-redux';
import { undo, redo } from './../../store/slice/undoRedoSlice';
import { setLogoTextBusinessNameAlignment, setLogoTextBusinessNameEditText, setLogoTextBusinessNameLetterSpacing, setLogoTextBusinessNameRotate, setLogoTextBusinessNameTextOpacity, 
         setLogoTextSloganNameEditText, setLogoTextSloganNameLetterSpacing, setLogoTextSloganNameRotate, setLogoTextSloganNameTextOpacity,  setLogoTextSloganNameAlignnment,  } from "../../store/slice/logoTextSlice"
import { setLogoIconBlurLevel, setLogoIconColor, setLogoIconHorizontalFlip, setLogoIconRotate, setLogoIconShadowColor, setLogoIconShadowHorizontalPosition, setLogoIconShadowOpacity, setLogoIconVerticalFlip } from "../../store/slice/logoIconSlice"
import { setLogoIcon } from "../../store/slice/logoSuggestionSlice"
//import { undoAsync, redoAsync } from "./../../store/slice/logoBackgroundSlice"; // Import your async actions
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';

const blackIcons = [
    ["black/1.svg",'Suggested',"white/1.svg"],
    ["black/2.svg",'Text',"white/2.svg"],
    ["black/3.svg",'Color',"white/3.svg"],
    ["black/4.svg",'Icons',"white/4.svg"],
    ["black/5.svg",'Background',"white/5.svg"],
    ["black/6.svg",'Shape',"white/6.svg"],
    ["black/7.svg",'Layout',"white/7.svg"],
    ["black/8.svg",'My Draft',"white/8.svg"]
]

export default function logomaker_main() {
     const [hover, setHover] = useState()
     const [selected, setSelected] = useState(0)

    const dispatch = useDispatch();
    const undoRedo = useSelector((state) => state.undoRedo);

      const selectedLogoColor = useSelector((state) => state.logoColor.selectedLogoColor);
      const selectedNameColor = useSelector((state) => state.logoColor.selectedNameColor);
      const selectedSloganColor = useSelector((state) => state.logoColor.selectedSloganColor);
      const selectedBackgroundColor = useSelector((state) => state.logoColor.selectedBackgroundColor);

      const logoBackgroundColor = useSelector((state) => state.logoBackground.logoBackgroundColor);

      const logoIconSize = useSelector((state) => state.logoIcon.logoIconSize);
      const logoIconColor = useSelector((state) => state.logoIcon.logoIconColor); 
      const logoIconOpacity = useSelector((state) => state.logoIcon.logoIconOpacity);
      const logoIconHorizontalFlip = useSelector((state) => state.logoIcon.logoIconHorizontalFlip);
      const logoIconVerticalFlip = useSelector((state) => state.logoIcon.logoIconVerticalFlip);
      const logoIconRotate = useSelector((state) => state.logoIcon.logoIconRotate);
      const logoIconHorizontalPosition = useSelector((state) => state.logoIcon.logoIconHorizontalPosition);
      const logoIconVerticalPosition = useSelector((state) => state.logoIcon.logoIconVerticalPosition);
      const logoIconShadow = useSelector((state) => state.logoIcon.logoIconShadow);
      const logoIconShadowColor = useSelector((state) => state.logoIcon.logoIconShadowColor);
      const logoIconShadowOpacity = useSelector((state) => state.logoIcon.logoIconShadowOpacity);
      const logoIconShadowHorizontalPosition = useSelector((state) => state.logoIcon.logoIconShadowHorizontalPosition);
      const logoIconShadowVerticalPosition = useSelector((state) => state.logoIcon.logoIconShadowVerticalPosition);
      const logoIconShadowBlur = useSelector((state) => state.logoIcon.logoIconShadowBlur);
      const logoIconBlur = useSelector((state) => state.logoIcon.logoIconBlur);
      const logoIconBlurLevel = useSelector((state) => state.logoIcon.logoIconBlurLevel);

      const logoTextBusinessNameEditText = useSelector ((state) => state.logoText.logoTextBusinessNameEditText);
      const logoTextBusinessNameFontFamily = useSelector ((state) => state.logoText.logoTextBusinessNameFontFamily);
      const logoTextBusinessNameFontSize = useSelector ((state) => state.logoText.logoTextBusinessNameFontSize);
      const logoTextBusinessNameLetterSpacing = useSelector ((state) => state.logoText.logoTextBusinessNameLetterSpacing);
      const logoTextBusinessNameRotate = useSelector ((state) => state.logoText.logoTextBusinessNameRotate);
      const logoTextBusinessNameCurve = useSelector ((state) => state.logoText.logoTextBusinessNameCurve);
      const logoTextBusinessNameAlignment = useSelector ((state) => state.logoText.logoTextBusinessNameAlignment);
      const logoTextBusinessNameTextColor = useSelector ((state) => state.logoText.logoTextBusinessNameTextColor);
      const logoTextBusinessNameTextOpacity = useSelector ((state) => state.logoText.logoTextBusinessNameTextOpacity);

      const logoTextSloganNameEditText = useSelector ((state) => state.logoText.logoTextSloganNameEditText);
      const logoTextSloganNameFontFamily = useSelector ((state) => state.logoText.logoTextSloganNameFontFamily);
      const logoTextSloganNameFontSize = useSelector ((state) => state.logoText.logoTextSloganNameFontSize);
      const logoTextSloganNameLetterSpacing = useSelector ((state) => state.logoText.logoTextSloganNameLetterSpacing);
      const logoTextSloganNameRotate = useSelector ((state) => state.logoText.logoTextSloganNameRotate);
      const logoTextSloganNameCurve = useSelector ((state) => state.logoText.logoTextSloganNameCurve);
      const logoTextSloganNameAlignment = useSelector ((state) => state.logoText.logoTextSloganNameAlignment);
      const logoTextSloganNameTextColor = useSelector ((state) => state.logoText.logoTextSloganNameTextColor);
      const logoTextSloganNameTextOpacity = useSelector ((state) => state.logoText.logoTextSloganNameTextOpacity);
      
      const logoShapeIcon = useSelector ((state) => state.logoShape.logoShapeIcon);

      const shapeColor = useSelector ((state) => state.shapeManage.shapeColor);
      const shapeOpacity = useSelector ((state) => state.shapeManage.shapeOpacity);
      const shapeBorder =  useSelector ((state) => state.shapeManage.shapeBorder);
      const shapeBorderWidth =  useSelector ((state) => state.shapeManage.shapeBorderWidth);
      const shapeBorderColor =  useSelector ((state) => state.shapeManage.shapeBorderColor);
      const shapeBorderOpacity =  useSelector ((state) => state.shapeManage.shapeBorderOpacity);
      const shapeWidth =  useSelector ((state) => state.shapeManage.shapeWidth);
      const shapeHeight =  useSelector ((state) => state.shapeManage.shapeHeight);
      const shapeCornerRadius =  useSelector ((state) => state.shapeManage.shapeCornerRadius);
      const shapeHorizontalFlip = useSelector ((state) => state.shapeManage.shapeHorizontalFlip);
      const shapeVerticalFlip = useSelector ((state) => state.shapeManage.shapeVerticalFlip);
      const shapeRotate = useSelector ((state) => state.shapeManage.shapeRotate);
      const shapeHorizontalPosition = useSelector ((state) => state.shapeManage.shapeHorizontalPosition);
      const shapeVerticalPosition = useSelector ((state) => state.shapeManage.shapeVerticalPosition);
      const shapeShadow =  useSelector ((state) => state.shapeManage.shapeShadow);
      const shapeShadowColor =  useSelector ((state) => state.shapeManage.shapeShadowColor);
      const shapeShadowOpacity =  useSelector ((state) => state.shapeManage.shapeShadowOpacity);
      const shapeShadowHorizontalPosition =  useSelector ((state) => state.shapeManage.shapeShadowHorizontalPosition);
      const shapeShadowVerticalPosition =  useSelector ((state) => state.shapeManage.shapeShadowVerticalPosition);
      const shapeShadowBlur =  useSelector ((state) => state.shapeManage.shapeShadowBlur);
      const shapeBlur =  useSelector ((state) => state.shapeManage.shapeBlur);
      const shapeBlurLevel =  useSelector ((state) => state.shapeManage.shapeBlurLevel);
    
      const shapeSVG =  useSelector ((state) => state.shape.shapeSVG);

      const logoIcon = useSelector ((state) => state.logoSuggestion.logoIcon);

      const logoLayoutDetails = useSelector ((state) => state.logoLayout.logoLayoutDetails);
      const logoLayoutLogoIconIconSize = useSelector ((state) => state.logoLayout.logoLayoutDetails.attributes.logo_icon.iconSize);
      const logoLayoutLogoIconXPosition = useSelector ((state) => state.logoLayout.logoLayoutDetails.attributes.logo_icon.position.x);
      const logoLayoutLogoIconYPosition = useSelector ((state) => state.logoLayout.logoLayoutDetails.attributes.logo_icon.position.y);
      const logoLayoutBusinessNameName = useSelector ((state) => state.logoLayout.logoLayoutDetails.attributes.brand_name.name);
      const logoLayoutBusinessNameFontSize = useSelector ((state) => state.logoLayout.logoLayoutDetails.attributes.brand_name.fontSize);
      const logoLayoutBusinessNameXPosition = useSelector ((state) => state.logoLayout.logoLayoutDetails.attributes.brand_name.position.x);
      const logoLayoutBusinessNameYPosition = useSelector ((state) => state.logoLayout.logoLayoutDetails.attributes.brand_name.position.y);
      const logoLayoutSloganNameName = useSelector ((state) => state.logoLayout.logoLayoutDetails.attributes.slog_name.name);
      const logoLayoutSloganNameFontSize = useSelector ((state) => state.logoLayout.logoLayoutDetails.attributes.slog_name.fontSize);
      const logoLayoutSloganNameXPosition = useSelector ((state) => state.logoLayout.logoLayoutDetails.attributes.slog_name.position.x);
      const logoLayoutSloganNameYPosition = useSelector ((state) => state.logoLayout.logoLayoutDetails.attributes.slog_name.position.y);
      const logoLayoutSloganNameFontSpacing = useSelector ((state) => state.logoLayout.logoLayoutDetails.attributes.slog_name.letterSpacing);

      const prevLogoIconHorizontalPosition = useRef(logoIconHorizontalPosition);
      const prevLogoLayoutLogoIconXPosition = useRef(logoLayoutLogoIconXPosition);
      const prevLogoIconVerticalPosition = useRef(logoIconVerticalPosition);
      const prevLogoLayoutLogoIconYPosition = useRef(logoLayoutLogoIconYPosition);
      const prevLogoIconSize = useRef(logoIconSize);
      const prevLogoLayoutIconSize = useRef(logoLayoutLogoIconIconSize);
      const prevLogoLayoutBusinessNameName = useRef(logoLayoutBusinessNameName);
      const prevLogoTextBusinessNameEditText = useRef(logoTextBusinessNameEditText);
      const prevLogoLayoutSloganNameName = useRef(logoLayoutSloganNameName);
      const prevLogoTextSloganNameEditText = useRef(logoTextSloganNameEditText);
      const prevLogoIconColor = useRef(logoIconColor);
      const prevSelectedLogoColor = useRef(selectedLogoColor);

      // const prevLogoIconHorizontalFlip = useRef(logoIconHorizontalFlip);
      // const prevLogoIconVerticalFlip = useRef(logoIconVerticalFlip);


      console.log("logo bg state", undoRedo)

      const handleUndo = () => {
        console.log('undo triggered');
        dispatch(undo());
        //dispatch(undoAsync());
      };
      
      const handleRedo = () => {
        console.log('redo triggered');
        dispatch(redo());
        //dispatch(redoAsync());
      };

      useEffect(() => {
        console.log("undo & redo triggered")
        console.log("current step",undoRedo.currentStep)
        const currentState = undoRedo.currentStep;
        const selectedHistory = undoRedo.history[currentState];
        console.log("selected history", selectedHistory)

        if(selectedHistory?.type=='UPDATE_BACKGROUND_COLOR'){
          console.log("updated bg color",selectedHistory.payload)
          const updatedBGColor = selectedHistory.payload;
          setCombinedBackgroundColor(updatedBGColor)
        }
        else if(selectedHistory?.type=='UPDATE_COLOR'){
          console.log("updated color",selectedHistory.payload)
          const logoIconColor = selectedHistory.payload.logoIconColor;
          const firstH1TagColor = selectedHistory.payload.firstH1TagColor;
          const secondH1TagColor = selectedHistory.payload.secondH1TagColor;
          const backgroundColor = selectedHistory.payload.backgroundColor;

          console.log("updated icon color", logoIconColor)
          console.log("updated first h1 tag color", firstH1TagColor)

          setCombinedIconColor(logoIconColor)
          setCombinedBusinessNameColor(firstH1TagColor)
          setCombinedBackgroundColor(backgroundColor)
          
        }
        else if(selectedHistory?.type=='UPDATE_BUSINESS_NAME_TEXT'){
          console.log("updated business name text", selectedHistory.payload);
          const updatedBusinessNameText = selectedHistory.payload;
          setCombinedLogoBusinessNameEditText(updatedBusinessNameText)
        }
        else if(selectedHistory?.type=='UPDATE_BUSINESS_NAME_FONT_SIZE'){
          console.log("updated business name font size", selectedHistory.payload);
          const updatedBusinessNameFontSize = selectedHistory.payload;
          setCombinedLogoBusinessNameFontSize(updatedBusinessNameFontSize)
        }
        else if(selectedHistory?.type=='UPDATE_BUSINESS_NAME_LETTER_SPACING'){
          console.log("updated business name font spacing", selectedHistory.payload);
          const updatedBusinessNameFontSpacing = selectedHistory.payload;
          setLogoTextBusinessNameLetterSpacing(updatedBusinessNameFontSpacing)
        }
        else if(selectedHistory?.type=='UPDATE_BUSINESS_NAME_ROTATE'){
          console.log("updated business name rotate", selectedHistory.payload);
          const updatedBusinessNameRotate = selectedHistory.payload;
          setLogoTextBusinessNameRotate(updatedBusinessNameRotate)
        }
        else if(selectedHistory?.type=='UPDATE_BUSINESS_NAME_ALIGNMENT'){
          console.log("updated business name alignment", selectedHistory.payload);
          const updatedBusinessNameAlignment = selectedHistory.payload;
          setLogoTextBusinessNameAlignment(updatedBusinessNameAlignment)
        }
        else if(selectedHistory?.type=='UPDATE_BUSINESS_NAME_COLOR'){
          console.log("updated business name color", selectedHistory.payload);
          const updatedBusinessNameColor = selectedHistory.payload;
          setCombinedBusinessNameColor(updatedBusinessNameColor)
        }
        else if(selectedHistory?.type=='UPDATE_BUSINESS_NAME_OPACITY'){
          console.log("updated business name opacity", selectedHistory.payload);
          const updatedBusinessNameOpacity = selectedHistory.payload;
          setLogoTextBusinessNameTextOpacity(updatedBusinessNameOpacity)
        }
        else if(selectedHistory?.type=='UPDATE_ICON_COLOR'){
          console.log("updated icon color", selectedHistory.payload);
          const updatedIconColor = selectedHistory.payload;
          setCombinedIconColor(updatedIconColor)
        }
        else if(selectedHistory?.type=='UPDATE_ICON_OPACITY'){
          console.log("updated icon opacity", selectedHistory.payload);
          const updatedIconOpacity = selectedHistory.payload;
          //setLogoIconShadowOpacity(updatedIconOpacity)
        }
        else if(selectedHistory?.type=='UPDATE_ICON_SIZE'){
          console.log("updated icon size", selectedHistory.payload);
          const updatedIconSize = selectedHistory.payload;
          //setCombinedLogoIconSize(updatedIconSize)
        }
        else if(selectedHistory?.type=='UPDATE_ICON_HORIZONTAL_FLIP'){
          console.log("updated icon horizontal flip", selectedHistory.payload);
          const updatedIconHorizontalFlip = selectedHistory.payload;
          setLogoIconHorizontalFlip(updatedIconHorizontalFlip)
        }
        else if(selectedHistory?.type=='UPDATE_ICON_VERTICAL_FLIP'){
          console.log("updated icon vertital flip", selectedHistory.payload);
          const updatedIconVerticalFlip = selectedHistory.payload;
          setLogoIconVerticalFlip(updatedIconVerticalFlip)
        }
        else if(selectedHistory?.type=='UPDATE_ICON_ROTATE'){
          console.log("updated icon rotate", selectedHistory.payload);
          const updatedIconRotate = selectedHistory.payload;
          setLogoIconRotate(updatedIconRotate)
        }
        else if(selectedHistory?.type=='UPDATE_ICON_HORIZONTAL_POSITION'){
          console.log("updated icon horizontal position", selectedHistory.payload);
          const updatedIconHorizontalPosition = selectedHistory.payload;
          setCombinedLogoIconXPosition(updatedIconHorizontalPosition)
        }
        else if(selectedHistory?.type=='UPDATE_ICON_VERTICAL_POSITION'){
          console.log("updated icon vertical position", selectedHistory.payload);
          const updatedIconVerticalPosition = selectedHistory.payload;
          setCombinedLogoIconYPosition(updatedIconVerticalPosition)
        }
        else if(selectedHistory?.type=='UPDATE_ICON_SHADOW_COLOR'){
          console.log("updated icon shadow color", selectedHistory.payload);
          const updatedIconShadowColor = selectedHistory.payload;
          setLogoIconShadowColor(updatedIconShadowColor)
        }
        else if(selectedHistory?.type=='UPDATE_ICON_SHADOW_OPACITY'){
          console.log("updated icon shadow opacity", selectedHistory.payload);
          const updatedIconShadowOpacity = selectedHistory.payload;
          setLogoIconShadowOpacity(updatedIconShadowOpacity)
        }
        else if(selectedHistory?.type=='UPDATE_ICON_SHADOW_HORIZONTAL_POSITION'){
          console.log("updated icon shadow horizontal position", selectedHistory.payload);
          const updatedIconShadowHorizontalPosition = selectedHistory.payload;
          setLogoIconShadowHorizontalPosition(updatedIconShadowHorizontalPosition)
        }
        else if(selectedHistory?.type=='UPDATE_ICON_SHADOW_VERTICAL_POSITION'){
          console.log("updated icon shadow vertical position", selectedHistory.payload);
          const updatedIconShadowVerticalPosition = selectedHistory.payload;
          setLogoIconShadowHorizontalPosition(updatedIconShadowVerticalPosition)
        }
        else if(selectedHistory?.type=='UPDATE_ICON_SHADOW_OPACITY'){
          console.log("updated icon shadow opacity", selectedHistory.payload);
          const updatedIconShadowOpacity = selectedHistory.payload;
          setLogoIconShadowOpacity(updatedIconShadowOpacity)
        }
        else if(selectedHistory?.type=='UPDATE_ICON_BLUR_LEVEL'){
          console.log("updated icon blur level", selectedHistory.payload);
          const updatedIconBlurLevel = selectedHistory.payload;
          setLogoIconBlurLevel(updatedIconBlurLevel)
        }
        else if(selectedHistory?.type=='UPDATE_LOGO_ICON'){
          console.log("updated logo icon", selectedHistory.payload);
          const updatedLogoIcon = selectedHistory.payload;
          setLogoIcon(updatedLogoIcon)
        }
      }, [undoRedo]);

      
      const [selectedShape, setSelectedShape] = useState(null)

      const [combinedBackgroundColor, setCombinedBackgroundColor] = useState(null);


      console.log("logoLayoutDetails", logoLayoutDetails);
      console.log("logoLayoutIconSize test", logoLayoutLogoIconIconSize)

      // Use the useEffect hook to listen for changes in selectedBackgroundColor and logoBackgroundColor
      useEffect(() => {
        if (logoBackgroundColor !== combinedBackgroundColor) {
          setCombinedBackgroundColor(logoBackgroundColor);
        }
        else if (selectedBackgroundColor !== combinedBackgroundColor) {
          setCombinedBackgroundColor(selectedBackgroundColor);
        }
      }, [selectedBackgroundColor, logoBackgroundColor]);


      const [combinedIconColor, setCombinedIconColor] = useState(null);

      // Use the useEffect hook to listen for changes in selectedLogoColor and logoIconColor
      useEffect(() => {

        if (selectedLogoColor !== prevSelectedLogoColor.current) {
          setCombinedIconColor(selectedLogoColor)
          prevSelectedLogoColor.current = selectedLogoColor;

        } else if (logoIconColor !== prevLogoIconColor.current) {
          setCombinedIconColor(logoIconColor)
          prevLogoIconColor.current = logoIconColor;
        }
      }, [selectedLogoColor, logoIconColor]);


      const [combinedIconFlip, setCombinedIconFlip] = useState(null);

      // Use the useEffect hook to listen for changes in selectedLogoFlip and logoIconFlip
      useEffect(() => {
        // if (logoIconHorizontalFlip !== combinedIconFlip) {
        //   setCombinedIconFlip(logoIconHorizontalFlip);
        // } else if (logoIconVerticalFlip !== combinedIconFlip) {
        //   setCombinedIconFlip(logoIconVerticalFlip);
        // }


        if (logoIconHorizontalFlip !== prevLogoIconHorizontalPosition.current) {
          setCombinedLogoIconYPosition(logoIconHorizontalFlip)
          prevLogoIconHorizontalPosition.current = logoIconHorizontalFlip;

        } else if (logoIconVerticalPosition !== prevLogoIconVerticalPosition.current) {
          setCombinedLogoIconYPosition(logoIconVerticalPosition)
          prevLogoIconVerticalPosition.current = logoIconVerticalPosition;
        }
      }, [logoIconHorizontalFlip, logoIconVerticalFlip]);


      const [combinedBusinessNameColor, setCombinedBusinessNameColor] = useState(null);

      // Use the useEffect hook to listen for changes in selectedNameColor and logoTextBusinessNameTextColor
      useEffect(() => {
        if (selectedNameColor !== combinedBusinessNameColor) {
          setCombinedBusinessNameColor(selectedNameColor);
        } else if (logoTextBusinessNameTextColor !== combinedBusinessNameColor) {
          setCombinedBusinessNameColor(logoTextBusinessNameTextColor);
        }
      }, [selectedNameColor, logoTextBusinessNameTextColor]);


      // Use the selected font name and extension in your font style
      // const brandNameFontName = logoTextBusinessNameFontFamily.name;
      // const brandNameFontExtension = logoTextBusinessNameFontFamily.extension;

      const [brandNameFontName, setBrandNameFontName] = useState(null);
      const [brandNameFontExtension, setBrandNameFontExtension] = useState(null);

      // Use the useEffect hook to listen for changes in selectedNameColor and logoTextBusinessNameTextColor
      useEffect(() => {
        setBrandNameFontName(logoTextBusinessNameFontFamily.name);
        setBrandNameFontExtension(logoTextBusinessNameFontFamily.extension);
      }, [logoTextBusinessNameFontFamily]);

      // shapeAppend

      const [currentLogoShape, setCurrentLogoShape] = useState([]);

      useEffect(() => {
        setCurrentLogoShape(prevImages => [...prevImages, logoShapeIcon]);
      }, [logoShapeIcon]);


      // shapeSVG

      const [currentShapeSVG, setCurrentShapeSVG] = useState([]);

      // useEffect(() => {
      //   setCurrentShapeSVG(prevImages => [...prevImages, shapeSVG]);
      // }, [shapeSVG]);

      console.log("shape svg test", shapeSVG)

      useEffect(() => {
        if (shapeSVG.svg !== null) {
          setCurrentShapeSVG(prevImages => [...prevImages, shapeSVG]);
        }
      }, [shapeSVG]);
      


      // icon properties
      const [combinedLogoIconSize, setCombinedLogoIconSize] = useState(null);
      // Use the useEffect hook to listen for changes in logoIconSize and logoLayoutLogoIconIconSize
      useEffect(() => {
        // if (logoLayoutLogoIconIconSize !== combinedLogoIconSize) {
        //   setCombinedLogoIconSize(logoLayoutLogoIconIconSize);
        // } 
        // else if (logoIconSize !== combinedLogoIconSize) {
        //   setCombinedLogoIconSize(logoIconSize*4);
        // } 
        
        //setCombinedLogoIconSize(logoIconSize*4);

        if (logoLayoutLogoIconIconSize !== prevLogoLayoutIconSize.current) {
          setCombinedLogoIconSize(logoLayoutLogoIconIconSize)
          prevLogoLayoutIconSize.current = logoLayoutLogoIconIconSize;

        } else if (logoIconSize !== prevLogoIconSize.current) {
          setCombinedLogoIconSize(logoIconSize)
          prevLogoIconSize.current = logoIconSize;
        }

      }, [logoIconSize, logoLayoutLogoIconIconSize]);
      //console.log("Combined logo icon size", combinedLogoIconSize);

      const [combinedLogoIconXPosition, setCombinedLogoIconXPosition] = useState(90);
      // Use the useEffect hook to listen for changes in logoIconSize and logoLayoutLogoIconIconSize
      useEffect(() => {

        if (logoLayoutLogoIconXPosition !== prevLogoLayoutLogoIconXPosition.current) {
          setCombinedLogoIconXPosition(logoLayoutLogoIconXPosition)
          prevLogoLayoutLogoIconXPosition.current = logoLayoutLogoIconXPosition;

        } else if (logoIconHorizontalPosition !== prevLogoIconHorizontalPosition.current) {
          setCombinedLogoIconXPosition(logoIconHorizontalPosition)
          prevLogoIconHorizontalPosition.current = logoIconHorizontalPosition;
        }

      },[logoIconHorizontalPosition, logoLayoutLogoIconXPosition] );

      const [combinedLogoIconYPosition, setCombinedLogoIconYPosition] = useState(10);
      // Use the useEffect hook to listen for changes in logoIconSize and logoLayoutLogoIconIconSize
      useEffect(() => {
        // if (logoLayoutLogoIconYPosition !== combinedLogoIconYPosition) {
        //   setCombinedLogoIconYPosition(logoLayoutLogoIconYPosition);
        // } else if (logoIconVerticalPosition !== combinedLogoIconYPosition) {
        //   setCombinedLogoIconYPosition(logoIconVerticalPosition);
        // }

        if (logoLayoutLogoIconYPosition !== prevLogoLayoutLogoIconYPosition.current) {
          setCombinedLogoIconYPosition(logoLayoutLogoIconYPosition)
          prevLogoLayoutLogoIconYPosition.current = logoLayoutLogoIconYPosition;

        } else if (logoIconVerticalPosition !== prevLogoIconVerticalPosition.current) {
          setCombinedLogoIconYPosition(logoIconVerticalPosition)
          prevLogoIconVerticalPosition.current = logoIconVerticalPosition;
        }

      }, [logoIconVerticalPosition, logoLayoutLogoIconYPosition]);
      //console.log("Combined logo icon y position", combinedLogoIconYPosition);


      //business name properties
      const [combinedLogoBusinessNameFontSize, setCombinedLogoBusinessNameFontSize] = useState(null);
      // Use the useEffect hook to listen for changes in Business Name Font Size and logoTextBusinessNameTextColor
      useEffect(() => {
        if (logoLayoutBusinessNameFontSize !== combinedLogoBusinessNameFontSize) {
          setCombinedLogoBusinessNameFontSize(logoLayoutBusinessNameFontSize);
        } else if (logoTextBusinessNameFontSize !== combinedLogoBusinessNameFontSize) {
          setCombinedLogoBusinessNameFontSize(logoTextBusinessNameFontSize);
        }
      }, [logoTextBusinessNameFontSize, logoLayoutBusinessNameFontSize]);
      //console.log("Combined  business  Name Font size", combinedLogoBusinessNameFontSize);

      const [combinedLogoBusinessNameEditText, setCombinedLogoBusinessNameEditText] = useState(null);
      // Use the useEffect hook to listen for changes in BusinessNameName and logoTextBusinessNameEditText
      useEffect(() => {
        // if (logoLayoutBusinessNameName !== combinedLogoBusinessNameEditText) {
        //   setCombinedLogoBusinessNameEditText(logoLayoutBusinessNameName);
        // } else if (logoTextBusinessNameEditText !== combinedLogoBusinessNameEditText) {
        //   setCombinedLogoBusinessNameEditText(logoTextBusinessNameEditText);
        // }

        if (logoLayoutBusinessNameName !== prevLogoLayoutBusinessNameName.current) {
          setCombinedLogoBusinessNameEditText(logoLayoutBusinessNameName)
          prevLogoLayoutBusinessNameName.current = logoLayoutBusinessNameName;

        } else if (logoTextBusinessNameEditText !== prevLogoTextBusinessNameEditText.current) {
          setCombinedLogoBusinessNameEditText(logoTextBusinessNameEditText)
          prevLogoTextBusinessNameEditText.current = logoTextBusinessNameEditText;
        }


      }, [logoTextBusinessNameEditText, logoLayoutBusinessNameName]);
      //console.log("Combined  business  Name Name", combinedLogoBusinessNameEditText);


      //slogan name properties
      const [combinedLogoSloganNameEditText, setCombinedLogoSloganNameEditText] = useState(null);

      // Use the useEffect hook to listen for changes in BusinessNameName and logoTextBusinessNameEditText
      useEffect(() => {

        if (logoLayoutSloganNameName !== prevLogoLayoutSloganNameName.current) {
          setCombinedLogoSloganNameEditText(logoLayoutSloganNameName)
          prevLogoLayoutSloganNameName.current = logoLayoutSloganNameName;

        } else if (logoTextSloganNameEditText !== prevLogoTextSloganNameEditText.current) {
          setCombinedLogoSloganNameEditText(logoTextSloganNameEditText)
          prevLogoTextSloganNameEditText.current = logoTextSloganNameEditText;
        }

      }, [logoTextSloganNameEditText, logoLayoutSloganNameName]);
      

      const updateShapes = (indexToUpdate) => {
      };


      useEffect(() => {
        setCurrentShapeSVG((prevShapes) => {
          // Find the shape object to update based on the index
          console.log("selected index : ",selectedShape)
          const updatedShapes = prevShapes.map((shape, index) => {
            if (index === selectedShape) {
              // Update the attributes
              return {
                ...shape,
                svgColor: shapeColor, // replace 'newColor' with the desired color value
                svgOpacity: shapeOpacity, // replace 0.5 with the desired opacity value
                svgStroke: shapeBorderColor, // replace 'newStrokeColor' with the desired stroke color value
                svgStrokeWidth: shapeBorderWidth, // replace 2 with the desired stroke width value
                svgStrokeOpacity: shapeBorderOpacity, // replace 0.8 with the desired stroke opacity value
                svgWidth: shapeWidth,
                svgHeight: shapeHeight,
                svgCornerRadius: shapeCornerRadius,
                svgHorizontalFlip: shapeHorizontalFlip,
                svgVerticalFlip: shapeVerticalFlip,
                svgRotate: shapeRotate,
                svgHorizontalPosition: shapeHorizontalPosition,
                svgVerticalPosition: shapeVerticalPosition,
                svgShadow: shapeShadow,
                svgShadowColor: shapeShadowColor,
                svgShadowOpacity: shapeShadowOpacity,
                svgShadowHorizontalPosition: shapeShadowHorizontalPosition,
                svgShadowVerticalPosition: shapeShadowVerticalPosition,
                svgShadowBlur: shapeShadowBlur,
                svgBlur: shapeBlur,
                svgBlurLevel: shapeBlurLevel,
                
              };
            }
            
            return shape;
          });
          return updatedShapes;
        });
      }, [shapeColor,shapeOpacity, shapeRotate, shapeWidth, shapeHeight, shapeBorder, shapeBorderColor, 
        shapeBorderOpacity, shapeBorderWidth, shapeBlurLevel, shapeHorizontalPosition, shapeVerticalPosition, 
        shapeShadowHorizontalPosition, shapeShadowVerticalPosition, shapeShadowBlur, shapeShadowColor, shapeShadowOpacity]);

      //console.log("svg Width : "+svgWidth)

      
      

     function changeOption(){
        switch(selected){
          case 0: return <Suggestions/>;
          case 1: return <Text/>;
          case 2: return <Color/>;
          case 3: return <Icons/>;
          case 4: return <Background/>;
          case 5: return <Shapes/>;
          case 6: return <Layout/>;
          case 7: return "My Draft";
          case 8: return <ManageShape/>;
      }
     }
        
     const disableRightClick = (event) => {
      event.preventDefault();
    }

    function hexToRgba( hex, alpha) {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    const svgMarkup = `
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <g
            
            filter=${logoIconBlur ? "url(#blur-filter)" : "none"}
            transform="scale(${logoIconSize/100 || 0.62}, ${logoIconSize/100 || 0.62})"
            style={{
              transformOrigin: "center",
              transformBox: "fill-box",
            }}
          >
            <g id="Layer_2" data-name="Layer 2" filter={logoIconShadow ? "url(#shadow-filter)" : ""}>
              <polygon
                points="280.82 434.82 261.54 421.53 234.02 441.11 282.32 474.4 329.48 438.29 299.99 420.13 280.82 434.82"
                fill={combinedIconColor}
                opacity={logoIconOpacity}
              />
              <polygon points="216.05 254 168.25 254 191.76 293.96 237.99 287.05 216.05 254" fill={combinedIconColor} opacity={logoIconOpacity} />
              <polygon
                points="329.77 286.75 376.01 293.67 399.52 253.7 351.71 253.7 329.77 286.75"
                fill={combinedIconColor}
                opacity={logoIconOpacity}
              />
            </g>

            <g id="Layer_1" data-name="Layer 1">
              <path
                d="M878.08,435c0-58.25-1.2-166-1.21-167.19L876.24,213l-40.12,37.28-2.61,2.4c-1.67,1.52-2.86,2.63-4,3.75l-18.66,18.63c-24,24-48.84,48.78-73.28,73.39q-23.85-.12-47.71-.1c-20.83,0-42.34,0-63.5-.21-22-21.62-44.11-43.78-65.54-65.24l-24.46-24.46c-2.07-2.07-4.12-3.84-6.28-5.72-1-.88-2.12-1.84-3.39-3l-40.06-35.68-.32,53.64c0,1.16-.65,110.57-.58,168.66-28.89,32-67.66,75-70.44,77.92l-15.58,16.31L523.15,666.82l23.35-26.47,76.67,128.22c6.06,12.12,17,18.7,30.62,18.46,20.78-.29,38.92-.27,55.43.05h.83c13.84,0,24.75-6.76,31-19.16l78.1-127,16.65,31.3,129.56-143ZM822.16,543.44l-120,195c-6.61-.09-13.46-.14-20.62-.14q-9.57,0-19.92.11l-107.61-180-31.38,35.57-57.09-63c20.07-22.18,53.69-59.45,62.44-69.15l6.27-7,0-9.36c-.09-30.11.09-80.85.27-120.4,19.63,19.64,39.76,39.75,59.78,59.44a43.49,43.49,0,0,0,29,12c22.22.21,44.76.23,66.56.24q25,0,50,.11c12,.08,21.93-4.08,30.48-12.69,19.41-19.57,39.17-39.33,58.59-58.73.36,39,.72,88.77.61,118.79l0,9.54,70,75.73-53.42,59Z"
                transform="translate(-399.73 -213)"
                fill={combinedIconColor}
                opacity={logoIconOpacity}
                filter={logoIconShadow ? "url(#shadow-filter)" : "" || logoIconBlur ? "url(#blur-filter)" : ""}
              />
            </g>
          </g>
        </svg>;
      `;

// Note: Ensure that the variables like logoIconBlur, logoIconSize, etc. are correctly defined in your code.


return (
     <div style={{overflow:'hidden'}}>
       <Head>
          <title>BranderMind-LogoMaker</title>
          <link rel='icon' href='/favicon.ico' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
       </Head>
       <Header 
        handleUndo={handleUndo} handleRedo={handleRedo}
        isUndoDisabled={undoRedo.currentStep <= 0}
        isRedoDisabled={undoRedo.currentStep >= undoRedo.history.length - 1}
       />
       <div style={{display:'flex',flexDirection:'row'}}>
           <div style={{borderRight:'2px solid #00000026',width:'90px',height:'88vh',overflowY:'hidden',zIndex:'10' ,backgroundColor:'white'}}>
                <ul style={{alignItems:'center',justifyContent:'center',paddingTop:'10px',zIndex:'20'}}>
                   {
                    blackIcons.map((data,index)=>{
                        const isActive = selected === index;
                        const isHovered = hover === index  && !isActive; 
                      return(
                        <li key={index} className="flex flex-col justify-center items-center mb-2 align-middle">
                          <div className="cursor-pointer flex flex-col items-center"  
                                onMouseEnter={() => {setHover(index)}} 
                                onMouseLeave={() => {setHover(null)}}
                                onClick={()=>{setSelected(index)}}
                          >
                              <div style={{border:`1px solid ${isHovered ? '#6B42CACC' : '#00000080'}`,width:'35px',height:'35px',borderRadius:'100%',display:'flex',alignItems:'center',justifyContent:'center',backgroundColor: isActive ? '#6B42CA' : isHovered ? '#6B42CACC' : 'white'}}>
                                  <Image src={`/images/logoMakerImages/svg/navigation/${isActive ? data[2] : isHovered ? data[2]: data[0]}`} width={15} height={15}/>                          
                              </div>
                              <h3 style={{fontSize:'12px',color:isActive ? "#6B42CA" : isHovered ? "#6B42CACC": "#00000080"}}>{data[1]}</h3>
                          </div>  
                        </li>
                      )
                    }) 
                   }
                  
                </ul>
            </div>

             <div style={{width:'300px', height:'450px'}}>
                        { changeOption() }
             </div>
             
            <div className="dotted" style={{ width:'100vw', height:'86vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} onContextMenu={disableRightClick}>
             <div style={{width: '250px', height: '35px',backgroundColor: 'white', marginBottom: '0%', borderRadius: '5px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', boxShadow: '1px 2px 9px #FFFFFFF', marginBottom: '1em', padding: '1em', }}>
              {/* <h3 onClick={handleUndo} disabled={undoRedo.currentStep <= 0} style={{ cursor: 'pointer' }}>Undo</h3>
              <h3 onClick={handleRedo} disabled={undoRedo.currentStep >= undoRedo.history.length - 1} style={{ cursor: 'pointer' }}>Redo</h3> */}
              <div style={{ display: 'flex', flexDirection: 'row'}}>
                <UndoIcon onClick={handleUndo} disabled={undoRedo.currentStep <= 0} style={{ cursor: 'pointer' }}/>
                <h3>Undo</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row'}}>
                <RedoIcon onClick={handleRedo} disabled={undoRedo.currentStep >= undoRedo.history.length - 1} style={{ cursor: 'pointer' }}/>
                <h3>Redo</h3>
              </div>
              {/* <UndoIcon onClick={handleUndo} disabled={undoRedo.currentStep <= 0} style={{ cursor: 'pointer' }}/>
              <RedoIcon onClick={handleRedo} disabled={undoRedo.currentStep >= undoRedo.history.length - 1} style={{ cursor: 'pointer' }}/> */}
             </div>
             <div style={{ width: '350px', height: '350px', marginTop: '0%', marginLeft: '0%', marginRight: '0%', marginBottom: '0%', backgroundColor: combinedBackgroundColor , display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
              <div style={{ width: '100%', height: '100%' , marginTop: '0%', marginLeft: '0%', marginRight: '0%', marginBottom: '0%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  // width={`${logoIconSize}%`}
                  // height={`${logoIconSize}%`}
                  width="100%"
                  height="100%"
                  viewBox={`0 0 565.58 574.09`}
                >

                  {/* ... your existing Logo Icon SVG code */}

                  
                  <foreignObject 
                    x={combinedLogoIconXPosition ? combinedLogoIconXPosition : 90} 
                    y={combinedLogoIconYPosition ? combinedLogoIconYPosition : 10} 
                    //width={combinedLogoIconSize ? combinedLogoIconSize  : 100}
                    //height={combinedLogoIconSize ? combinedLogoIconSize  : 100}

                    // x={combinedLogoIconXPosition} 
                    // y={combinedLogoIconYPosition} 
                    //  width={combinedLogoIconSize}
                    //  height={combinedLogoIconSize}

                    // width={500}
                    // height={500 }

                    width='100%'
                    height='100%'


                    // width={`${logoIconSize}%`}
                    // height={`${logoIconSize}%`}
                    fill={combinedIconColor}>
                    
                    
                    {/* <div xmlns="http://www.w3.org/1999/xhtml" dangerouslySetInnerHTML={{ __html: logoIcon?.svg }}
                      style={{ 
                      fill: `${combinedIconColor}`, 
                      opacity: `${logoIconOpacity}`, 
                      transform: ` scaleX(${logoIconHorizontalFlip ? -1 : 1}) scaleY(${logoIconVerticalFlip ? -1 : 1}) rotate(${logoIconRotate}deg)`,
                      filter: logoIconBlur ? "url(#blur-filter)": "" ,
                      filter: logoIconShadow ? "url(#shadow-filter)" : "" ,
                      color: `${combinedIconColor}`, 
                    }}
                    /> */}

                  {logoIcon? (
                    <div
                      xmlns="http://www.w3.org/1999/xhtml"
                      dangerouslySetInnerHTML={{ __html: logoIcon?.svg }}
                      style={{
                        fill: `${combinedIconColor}`,
                        opacity: `${logoIconOpacity}`,
                        transform: ` scaleX(${logoIconHorizontalFlip ? -1 : 1}) scaleY(${logoIconVerticalFlip ? -1 : 1}) rotate(${logoIconRotate}deg)`,
                        filter: logoIconBlur ? "url(#blur-filter)" : "",
                        filter: logoIconShadow ? "url(#shadow-filter)" : "",
                        color: `${combinedIconColor}`,
                      }}
                    />
                  ) : (
                    // Default SVG when logoIcon is null
                    
                      // <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                      //   {<g filter={ logoIconBlur ? "url(#blur-filter)": "" }
                      //   style={{ transformOrigin : "center", transformBox: "fill-box", transform: `scale(${(logoIconSize || 62) / 100}) scaleX(${logoIconHorizontalFlip ? -1 : 1}) scaleY(${logoIconVerticalFlip ? -1 : 1}) rotate(${logoIconRotate}deg)`}}
                      //   >
                      //     <g id="Layer_2" data-name="Layer 2" filter={logoIconShadow ? "url(#shadow-filter)" : "" } >
                      //     <polygon points="280.82 434.82 261.54 421.53 234.02 441.11 282.32 474.4 329.48 438.29 299.99 420.13 280.82 434.82" fill={combinedIconColor} opacity={logoIconOpacity} />
                      //     <polygon points="216.05 254 168.25 254 191.76 293.96 237.99 287.05 216.05 254" fill={combinedIconColor} opacity={logoIconOpacity}/>
                      //     <polygon points="329.77 286.75 376.01 293.67 399.52 253.7 351.71 253.7 329.77 286.75" fill={combinedIconColor} opacity={logoIconOpacity}/>
                      //     </g>

                      //     <g id="Layer_1" data-name="Layer 1">
                      //     <path d="M878.08,435c0-58.25-1.2-166-1.21-167.19L876.24,213l-40.12,37.28-2.61,2.4c-1.67,1.52-2.86,2.63-4,3.75l-18.66,18.63c-24,24-48.84,48.78-73.28,73.39q-23.85-.12-47.71-.1c-20.83,0-42.34,0-63.5-.21-22-21.62-44.11-43.78-65.54-65.24l-24.46-24.46c-2.07-2.07-4.12-3.84-6.28-5.72-1-.88-2.12-1.84-3.39-3l-40.06-35.68-.32,53.64c0,1.16-.65,110.57-.58,168.66-28.89,32-67.66,75-70.44,77.92l-15.58,16.31L523.15,666.82l23.35-26.47,76.67,128.22c6.06,12.12,17,18.7,30.62,18.46,20.78-.29,38.92-.27,55.43.05h.83c13.84,0,24.75-6.76,31-19.16l78.1-127,16.65,31.3,129.56-143ZM822.16,543.44l-120,195c-6.61-.09-13.46-.14-20.62-.14q-9.57,0-19.92.11l-107.61-180-31.38,35.57-57.09-63c20.07-22.18,53.69-59.45,62.44-69.15l6.27-7,0-9.36c-.09-30.11.09-80.85.27-120.4,19.63,19.64,39.76,39.75,59.78,59.44a43.49,43.49,0,0,0,29,12c22.22.21,44.76.23,66.56.24q25,0,50,.11c12,.08,21.93-4.08,30.48-12.69,19.41-19.57,39.17-39.33,58.59-58.73.36,39,.72,88.77.61,118.79l0,9.54,70,75.73-53.42,59Z"
                      //     transform="translate(-399.73 -213)"  fill={combinedIconColor} opacity={logoIconOpacity} filter={logoIconShadow ? "url(#shadow-filter)" : "" || logoIconBlur ? "url(#blur-filter)": "" }/></g>
                      //   </g>}
                      // </svg>

                      <div id="i want"
                      xmlns="http://www.w3.org/1999/xhtml"
                      dangerouslySetInnerHTML={{ __html: svgMarkup }}
                      style={{
                        fill: `${combinedIconColor}`,
                        opacity: `${logoIconOpacity}`,
                        width: '100%',
                        height: '100%',
                        // width: `${logoIconSize}%`,
                        // height: `${logoIconSize}%`,
                        transform: ` scaleX(${logoIconHorizontalFlip ? -1 : 1}) scaleY(${logoIconVerticalFlip ? -1 : 1}) rotate(${logoIconRotate}deg)`,
                        filter: logoIconBlur ? "url(#blur-filter)" : "",
                        filter: logoIconShadow ? "url(#shadow-filter)" : "",
                        color: `${combinedIconColor}`,
                      }}
                    />

                  )}
                  </foreignObject> 


                  {/* logo icon shadow effect */}
                  <defs>
                    <filter id="shadow-filter">
                      <feDropShadow dx={logoIconShadowHorizontalPosition} dy={logoIconShadowVerticalPosition} stdDeviation={logoIconShadowBlur} floodColor={logoIconShadowColor} flood-opacity={logoIconShadowOpacity}/>
                    </filter>
                    <rect x="0" y="0" width="100%" height="100%"  />
                  </defs>

                  {/* logo icon blur effect */}
                  <filter id="blur-filter">
                    <feGaussianBlur in="SourceGraphic" stdDeviation={logoIconBlurLevel} />
                  </filter>

                  <style>
                              {`
                                @font-face {
                                  font-family: '${brandNameFontName}';
                                  src: url(./fonts/${brandNameFontName}${brandNameFontExtension}) format('truetype');
                                }
                              `}
                  </style>
                   
                  <text
                    style={{ fontFamily:`${brandNameFontName}` , transformOrigin: "center", transformBox: "fill-box", transform: `rotate(${logoTextBusinessNameRotate}deg)`}}
                    x={logoLayoutBusinessNameXPosition? logoLayoutBusinessNameXPosition : "160"} y={logoLayoutBusinessNameYPosition? logoLayoutBusinessNameYPosition : "305"}
                    fontSize={logoTextBusinessNameFontSize? `${logoTextBusinessNameFontSize}px` : "60px"} 
                    //fontSize={combinedLogoBusinessNameFontSize? `${combinedLogoBusinessNameFontSize}px` : "60px"} 
                    textAnchor={logoTextBusinessNameAlignment? logoTextBusinessNameAlignment : "middle"} 
                    opacity={logoTextBusinessNameTextOpacity} 
                    letterSpacing={logoTextBusinessNameLetterSpacing} 
                    fill={combinedBusinessNameColor}>
                      {/* {logoTextBusinessNameEditText} */}
                      {combinedLogoBusinessNameEditText ? (combinedLogoBusinessNameEditText) : ("Business Name")}
                  </text>

                  <text 
                  x={logoLayoutSloganNameXPosition? logoLayoutSloganNameXPosition : "160"}
                  y={logoLayoutSloganNameYPosition? logoLayoutSloganNameYPosition : "335"}
                  fontSize={logoLayoutSloganNameFontSize? `${logoLayoutSloganNameFontSize}px` : "24px"} 
                  textAnchor="middle" fill={selectedSloganColor} 
                  letterSpacing={logoLayoutSloganNameFontSpacing} >
                    {/* {logoLayoutSloganNameName ? (logoLayoutSloganNameName) : ("Your Slogan")} */}
                    {combinedLogoSloganNameEditText ? (combinedLogoSloganNameEditText) : ("Slogan Name")}
                  </text>
                  

                  {currentShapeSVG?.map((svgImg, index) => (
                    <Draggable>

                      <foreignObject key={index} onClick={()=>{setSelected(8); updateShapes(index); setSelectedShape(index) }} x="100" y="200" width= {shapeWidth ? `${shapeWidth}%` : '150%'} height= {shapeHeight ? `${shapeHeight}%` : '150%'} style={{ filter: `drop-shadow(${svgImg.svgShadowHorizontalPosition}px ${svgImg.svgShadowVerticalPosition}px ${svgImg.svgShadowBlur}px rgba(0, 0, 0, 0.5)`,}} transform={`translate(${svgImg.svgHorizontalPosition}, ${svgImg.svgVerticalPosition})`}>
                        {/* Assuming logoShapeIcon is an object with an svg property */}
                        {svgImg.svg && (
                          <div xmlns="http://www.w3.org/1999/xhtml" dangerouslySetInnerHTML={{ __html: svgImg?.svg}} 
                            style={{ 
                              fill: `${svgImg.svgColor}`, 
                              opacity: `${svgImg.svgOpacity}`, 
                              stroke: `${svgImg.svgStroke}`, 
                              strokeWidth: `${svgImg.svgStrokeWidth}`, 
                              strokeOpacity: `${svgImg.svgStrokeOpacity}`,
                              transform: `rotate(${svgImg.svgRotate}deg)`,
                              // boxShadow: `5px 5px 10px 0px rgba(0, 0, 0, 0.5)`,
                              //filter: `drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5))`, // Adjust values as needed
                              filter: `blur(${svgImg.svgBlurLevel}px)`,  
                              margin: '150'
                            }}
                            />
                          )}
                      </foreignObject>
                    </Draggable>
                  ))}



                </svg>
              </div>
            </div> 
          </div>             
       </div>       
   </div>
  )
}
import Image from 'next/image'
import React,{useState, useEffect} from 'react'
import RowContainer from './common/RowContainer'
import ColumnContainer from './common/ColumnContainer'
import { getAllLayouts } from './../../api_calls/logo_maker_editor/getAllLayouts'
import { setLogoLayoutDetails} from './../../store/slice/logoLayoutSlice'; // Import your Redux actions
import { useSelector,useDispatch } from 'react-redux';
import { addStep } from './../../store/slice/undoRedoSlice';


const layouts = [
    {
      key: "layout1",
      id: 1,
      element: (
              <div style={{ marginTop:'15%', marginLeft:'20%', marginRight:'20%', marginBottom:'15%', width:'50%' }}>
                <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
                    <div style={{ marginTop:'10%', marginLeft:'10%', marginRight:'10%' }}>
                      {/* <Image src="/images/logoMakerImages/svg/layout/bird.svg" width={50} height={50}/>  */}
                      <svg xmlns="http://www.w3.org/2000/svg"  width={50} height={50} viewBox="0 0 565.58 574.09"><g id="Layer_2" data-name="Layer 2">
                          <polygon points="280.82 434.82 261.54 421.53 234.02 441.11 282.32 474.4 329.48 438.29 299.99 420.13 280.82 434.82" fill='#D9D9D9'/>
                          <polygon points="216.05 254 168.25 254 191.76 293.96 237.99 287.05 216.05 254" fill='#D9D9D9'/>
                          <polygon points="329.77 286.75 376.01 293.67 399.52 253.7 351.71 253.7 329.77 286.75" fill='#D9D9D9'/>
                          </g><g id="Layer_1" data-name="Layer 1"><path d="M878.08,435c0-58.25-1.2-166-1.21-167.19L876.24,213l-40.12,37.28-2.61,2.4c-1.67,1.52-2.86,2.63-4,3.75l-18.66,18.63c-24,24-48.84,48.78-73.28,73.39q-23.85-.12-47.71-.1c-20.83,0-42.34,0-63.5-.21-22-21.62-44.11-43.78-65.54-65.24l-24.46-24.46c-2.07-2.07-4.12-3.84-6.28-5.72-1-.88-2.12-1.84-3.39-3l-40.06-35.68-.32,53.64c0,1.16-.65,110.57-.58,168.66-28.89,32-67.66,75-70.44,77.92l-15.58,16.31L523.15,666.82l23.35-26.47,76.67,128.22c6.06,12.12,17,18.7,30.62,18.46,20.78-.29,38.92-.27,55.43.05h.83c13.84,0,24.75-6.76,31-19.16l78.1-127,16.65,31.3,129.56-143ZM822.16,543.44l-120,195c-6.61-.09-13.46-.14-20.62-.14q-9.57,0-19.92.11l-107.61-180-31.38,35.57-57.09-63c20.07-22.18,53.69-59.45,62.44-69.15l6.27-7,0-9.36c-.09-30.11.09-80.85.27-120.4,19.63,19.64,39.76,39.75,59.78,59.44a43.49,43.49,0,0,0,29,12c22.22.21,44.76.23,66.56.24q25,0,50,.11c12,.08,21.93-4.08,30.48-12.69,19.41-19.57,39.17-39.33,58.59-58.73.36,39,.72,88.77.61,118.79l0,9.54,70,75.73-53.42,59Z" transform="translate(-399.73 -213)" fill='#D9D9D9'/></g>
                      </svg>
                    </div>
                    <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
                      <h1 style={{ fontSize:'14px', marginTop:'0%', marginBottom:'0%', color: '#D9D9D9'}}>Your Brand</h1>
                      <h1 style={{ fontSize:'10px', marginTop:'0%', marginBottom:'10%', color: '#D9D9D9'}}>Your Slogan</h1>
                    </div>
                </div>

              </div>  
      )
    },
    {
      key: "layout2",
      id: 2,
      element: (
              <div style={{ marginTop:'15%', marginLeft:'20%', marginRight:'20%', marginBottom:'15%', width:'50%' }}>
                <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
                    <div style={{ marginTop:'10%', marginLeft:'10%', marginRight:'10%' }}>
                      {/* <Image src="/images/logoMakerImages/svg/layout/bird.svg" width={50} height={50}/>  */}
                      <svg xmlns="http://www.w3.org/2000/svg"  width={30} height={30} viewBox="0 0 565.58 574.09"><g id="Layer_2" data-name="Layer 2">
                          <polygon points="280.82 434.82 261.54 421.53 234.02 441.11 282.32 474.4 329.48 438.29 299.99 420.13 280.82 434.82" fill='#D9D9D9'/>
                          <polygon points="216.05 254 168.25 254 191.76 293.96 237.99 287.05 216.05 254" fill='#D9D9D9'/>
                          <polygon points="329.77 286.75 376.01 293.67 399.52 253.7 351.71 253.7 329.77 286.75" fill='#D9D9D9'/>
                          </g><g id="Layer_1" data-name="Layer 1"><path d="M878.08,435c0-58.25-1.2-166-1.21-167.19L876.24,213l-40.12,37.28-2.61,2.4c-1.67,1.52-2.86,2.63-4,3.75l-18.66,18.63c-24,24-48.84,48.78-73.28,73.39q-23.85-.12-47.71-.1c-20.83,0-42.34,0-63.5-.21-22-21.62-44.11-43.78-65.54-65.24l-24.46-24.46c-2.07-2.07-4.12-3.84-6.28-5.72-1-.88-2.12-1.84-3.39-3l-40.06-35.68-.32,53.64c0,1.16-.65,110.57-.58,168.66-28.89,32-67.66,75-70.44,77.92l-15.58,16.31L523.15,666.82l23.35-26.47,76.67,128.22c6.06,12.12,17,18.7,30.62,18.46,20.78-.29,38.92-.27,55.43.05h.83c13.84,0,24.75-6.76,31-19.16l78.1-127,16.65,31.3,129.56-143ZM822.16,543.44l-120,195c-6.61-.09-13.46-.14-20.62-.14q-9.57,0-19.92.11l-107.61-180-31.38,35.57-57.09-63c20.07-22.18,53.69-59.45,62.44-69.15l6.27-7,0-9.36c-.09-30.11.09-80.85.27-120.4,19.63,19.64,39.76,39.75,59.78,59.44a43.49,43.49,0,0,0,29,12c22.22.21,44.76.23,66.56.24q25,0,50,.11c12,.08,21.93-4.08,30.48-12.69,19.41-19.57,39.17-39.33,58.59-58.73.36,39,.72,88.77.61,118.79l0,9.54,70,75.73-53.42,59Z" transform="translate(-399.73 -213)" fill='#D9D9D9'/></g>
                      </svg>
                    </div>
                    <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
                      <h1 style={{ fontSize:'14px', marginTop:'0%', marginBottom:'0%', color: '#D9D9D9'}}>Your Brand</h1>
                      <h1 style={{ fontSize:'10px', marginTop:'0%', marginBottom:'10%', color: '#D9D9D9'}}>Your Slogan</h1>
                    </div>
                </div>

              </div>  
      )
    },
    {
      key: "layout3",
      id: 3,
      element: (
              <div style={{ marginTop:'15%', marginLeft:'20%', marginRight:'20%', marginBottom:'15%', width:'50%' }}>
                <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
                    <div style={{ marginTop:'10%', marginLeft:'10%', marginRight:'10%' }}>
                      {/* <Image src="/images/logoMakerImages/svg/layout/bird.svg" width={50} height={50}/>  */}
                      <svg xmlns="http://www.w3.org/2000/svg"  width={50} height={50} viewBox="0 0 565.58 574.09"><g id="Layer_2" data-name="Layer 2">
                          <polygon points="280.82 434.82 261.54 421.53 234.02 441.11 282.32 474.4 329.48 438.29 299.99 420.13 280.82 434.82" fill='#D9D9D9'/>
                          <polygon points="216.05 254 168.25 254 191.76 293.96 237.99 287.05 216.05 254" fill='#D9D9D9'/>
                          <polygon points="329.77 286.75 376.01 293.67 399.52 253.7 351.71 253.7 329.77 286.75" fill='#D9D9D9'/>
                          </g><g id="Layer_1" data-name="Layer 1"><path d="M878.08,435c0-58.25-1.2-166-1.21-167.19L876.24,213l-40.12,37.28-2.61,2.4c-1.67,1.52-2.86,2.63-4,3.75l-18.66,18.63c-24,24-48.84,48.78-73.28,73.39q-23.85-.12-47.71-.1c-20.83,0-42.34,0-63.5-.21-22-21.62-44.11-43.78-65.54-65.24l-24.46-24.46c-2.07-2.07-4.12-3.84-6.28-5.72-1-.88-2.12-1.84-3.39-3l-40.06-35.68-.32,53.64c0,1.16-.65,110.57-.58,168.66-28.89,32-67.66,75-70.44,77.92l-15.58,16.31L523.15,666.82l23.35-26.47,76.67,128.22c6.06,12.12,17,18.7,30.62,18.46,20.78-.29,38.92-.27,55.43.05h.83c13.84,0,24.75-6.76,31-19.16l78.1-127,16.65,31.3,129.56-143ZM822.16,543.44l-120,195c-6.61-.09-13.46-.14-20.62-.14q-9.57,0-19.92.11l-107.61-180-31.38,35.57-57.09-63c20.07-22.18,53.69-59.45,62.44-69.15l6.27-7,0-9.36c-.09-30.11.09-80.85.27-120.4,19.63,19.64,39.76,39.75,59.78,59.44a43.49,43.49,0,0,0,29,12c22.22.21,44.76.23,66.56.24q25,0,50,.11c12,.08,21.93-4.08,30.48-12.69,19.41-19.57,39.17-39.33,58.59-58.73.36,39,.72,88.77.61,118.79l0,9.54,70,75.73-53.42,59Z" transform="translate(-399.73 -213)" fill='#D9D9D9'/></g>
                      </svg>
                    </div>
                    <div style={{ display:'flex',alignItems:'center',flexDirection:'column'}}>
                      <h1 style={{ fontSize:'14px', marginTop:'0%', marginBottom:'0%', color: '#D9D9D9'}}>Your Brand</h1>
                      <h1 style={{ fontSize:'10px', marginTop:'0%', marginBottom:'10%', letterSpacing: '1.5px', color: '#D9D9D9'}}>Your Slogan</h1>
                    </div>
                </div>

              </div>  
      )
    },
    {
      key: "layout4",
      id: 4,
      element: (
              <div style={{ marginTop:'15%', marginLeft:'20%', marginRight:'20%', marginBottom:'15%', width:'50%' }}>
                <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
                    <div style={{ marginTop:'10%', marginLeft:'10%', marginRight:'10%' }}>
                      {/* <Image src="/images/logoMakerImages/svg/layout/bird.svg" width={50} height={50}/>  */}
                      <svg xmlns="http://www.w3.org/2000/svg"  width={30} height={30} viewBox="0 0 565.58 574.09"><g id="Layer_2" data-name="Layer 2">
                          <polygon points="280.82 434.82 261.54 421.53 234.02 441.11 282.32 474.4 329.48 438.29 299.99 420.13 280.82 434.82" fill='#D9D9D9'/>
                          <polygon points="216.05 254 168.25 254 191.76 293.96 237.99 287.05 216.05 254" fill='#D9D9D9'/>
                          <polygon points="329.77 286.75 376.01 293.67 399.52 253.7 351.71 253.7 329.77 286.75" fill='#D9D9D9'/>
                          </g><g id="Layer_1" data-name="Layer 1"><path d="M878.08,435c0-58.25-1.2-166-1.21-167.19L876.24,213l-40.12,37.28-2.61,2.4c-1.67,1.52-2.86,2.63-4,3.75l-18.66,18.63c-24,24-48.84,48.78-73.28,73.39q-23.85-.12-47.71-.1c-20.83,0-42.34,0-63.5-.21-22-21.62-44.11-43.78-65.54-65.24l-24.46-24.46c-2.07-2.07-4.12-3.84-6.28-5.72-1-.88-2.12-1.84-3.39-3l-40.06-35.68-.32,53.64c0,1.16-.65,110.57-.58,168.66-28.89,32-67.66,75-70.44,77.92l-15.58,16.31L523.15,666.82l23.35-26.47,76.67,128.22c6.06,12.12,17,18.7,30.62,18.46,20.78-.29,38.92-.27,55.43.05h.83c13.84,0,24.75-6.76,31-19.16l78.1-127,16.65,31.3,129.56-143ZM822.16,543.44l-120,195c-6.61-.09-13.46-.14-20.62-.14q-9.57,0-19.92.11l-107.61-180-31.38,35.57-57.09-63c20.07-22.18,53.69-59.45,62.44-69.15l6.27-7,0-9.36c-.09-30.11.09-80.85.27-120.4,19.63,19.64,39.76,39.75,59.78,59.44a43.49,43.49,0,0,0,29,12c22.22.21,44.76.23,66.56.24q25,0,50,.11c12,.08,21.93-4.08,30.48-12.69,19.41-19.57,39.17-39.33,58.59-58.73.36,39,.72,88.77.61,118.79l0,9.54,70,75.73-53.42,59Z" transform="translate(-399.73 -213)" fill='#D9D9D9'/></g>
                      </svg>
                    </div>
                    <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
                      <h1 style={{ fontSize:'14px', marginTop:'0%', marginBottom:'0%', color: '#D9D9D9'}}>Your Brand</h1>
                      <h1 style={{ fontSize:'10px', marginTop:'0%', marginBottom:'10%', letterSpacing: '1.5px', color: '#D9D9D9'}}>Your Slogan</h1>
                    </div>
                </div>

              </div>  
      )
    },
    {
      key: "layout5",
      id: 5,
      element: (
              <div style={{ width: '80%', alignItems: 'center' }}>
                <div style={{display:'flex',alignItems:'center',flexDirection:'row',}}>
                    <div style={{marginRight:'5%', marginLeft:'10%'}}>
                      {/* <Image src="/images/logoMakerImages/svg/layout/bird.svg" width={50} height={50}/>  */}
                      <svg xmlns="http://www.w3.org/2000/svg"  width={50} height={50} viewBox="0 0 565.58 574.09"><g id="Layer_2" data-name="Layer 2">
                          <polygon points="280.82 434.82 261.54 421.53 234.02 441.11 282.32 474.4 329.48 438.29 299.99 420.13 280.82 434.82" fill='#D9D9D9'/>
                          <polygon points="216.05 254 168.25 254 191.76 293.96 237.99 287.05 216.05 254" fill='#D9D9D9'/>
                          <polygon points="329.77 286.75 376.01 293.67 399.52 253.7 351.71 253.7 329.77 286.75" fill='#D9D9D9'/>
                          </g><g id="Layer_1" data-name="Layer 1"><path d="M878.08,435c0-58.25-1.2-166-1.21-167.19L876.24,213l-40.12,37.28-2.61,2.4c-1.67,1.52-2.86,2.63-4,3.75l-18.66,18.63c-24,24-48.84,48.78-73.28,73.39q-23.85-.12-47.71-.1c-20.83,0-42.34,0-63.5-.21-22-21.62-44.11-43.78-65.54-65.24l-24.46-24.46c-2.07-2.07-4.12-3.84-6.28-5.72-1-.88-2.12-1.84-3.39-3l-40.06-35.68-.32,53.64c0,1.16-.65,110.57-.58,168.66-28.89,32-67.66,75-70.44,77.92l-15.58,16.31L523.15,666.82l23.35-26.47,76.67,128.22c6.06,12.12,17,18.7,30.62,18.46,20.78-.29,38.92-.27,55.43.05h.83c13.84,0,24.75-6.76,31-19.16l78.1-127,16.65,31.3,129.56-143ZM822.16,543.44l-120,195c-6.61-.09-13.46-.14-20.62-.14q-9.57,0-19.92.11l-107.61-180-31.38,35.57-57.09-63c20.07-22.18,53.69-59.45,62.44-69.15l6.27-7,0-9.36c-.09-30.11.09-80.85.27-120.4,19.63,19.64,39.76,39.75,59.78,59.44a43.49,43.49,0,0,0,29,12c22.22.21,44.76.23,66.56.24q25,0,50,.11c12,.08,21.93-4.08,30.48-12.69,19.41-19.57,39.17-39.33,58.59-58.73.36,39,.72,88.77.61,118.79l0,9.54,70,75.73-53.42,59Z" transform="translate(-399.73 -213)" fill='#D9D9D9'/></g>
                      </svg>
                    </div>
                    <div style={{display:'flex',alignItems:'left',flexDirection:'column', marginLeft:'0%'}}>
                      <h1 style={{ fontSize:'14px', marginTop:'0%', marginBottom:'0%', color: '#D9D9D9' }}>Your Brand</h1>
                      <h1 style={{ fontSize:'10px', marginTop:'0%', marginBottom:'0%', color: '#D9D9D9'}}>Your Slogan</h1>
                    </div>
                </div>

              </div>  
      )
    },
    {
      key: "layout6",
      id: 6,
      element: (
              <div style={{ width:'60%', alignItems:'center' }}>
                <div style={{display:'flex',alignItems:'center',flexDirection:'row'}}>
                    <div style={{marginRight: '5%', marginLeft: '10%'}}>
                      {/* <Image src="/images/logoMakerImages/svg/layout/bird.svg" width={50} height={50}/>  */}
                      <svg xmlns="http://www.w3.org/2000/svg"  width={30} height={30} viewBox="0 0 565.58 574.09"><g id="Layer_2" data-name="Layer 2">
                          <polygon points="280.82 434.82 261.54 421.53 234.02 441.11 282.32 474.4 329.48 438.29 299.99 420.13 280.82 434.82" fill='#D9D9D9'/>
                          <polygon points="216.05 254 168.25 254 191.76 293.96 237.99 287.05 216.05 254" fill='#D9D9D9'/>
                          <polygon points="329.77 286.75 376.01 293.67 399.52 253.7 351.71 253.7 329.77 286.75" fill='#D9D9D9'/>
                          </g><g id="Layer_1" data-name="Layer 1"><path d="M878.08,435c0-58.25-1.2-166-1.21-167.19L876.24,213l-40.12,37.28-2.61,2.4c-1.67,1.52-2.86,2.63-4,3.75l-18.66,18.63c-24,24-48.84,48.78-73.28,73.39q-23.85-.12-47.71-.1c-20.83,0-42.34,0-63.5-.21-22-21.62-44.11-43.78-65.54-65.24l-24.46-24.46c-2.07-2.07-4.12-3.84-6.28-5.72-1-.88-2.12-1.84-3.39-3l-40.06-35.68-.32,53.64c0,1.16-.65,110.57-.58,168.66-28.89,32-67.66,75-70.44,77.92l-15.58,16.31L523.15,666.82l23.35-26.47,76.67,128.22c6.06,12.12,17,18.7,30.62,18.46,20.78-.29,38.92-.27,55.43.05h.83c13.84,0,24.75-6.76,31-19.16l78.1-127,16.65,31.3,129.56-143ZM822.16,543.44l-120,195c-6.61-.09-13.46-.14-20.62-.14q-9.57,0-19.92.11l-107.61-180-31.38,35.57-57.09-63c20.07-22.18,53.69-59.45,62.44-69.15l6.27-7,0-9.36c-.09-30.11.09-80.85.27-120.4,19.63,19.64,39.76,39.75,59.78,59.44a43.49,43.49,0,0,0,29,12c22.22.21,44.76.23,66.56.24q25,0,50,.11c12,.08,21.93-4.08,30.48-12.69,19.41-19.57,39.17-39.33,58.59-58.73.36,39,.72,88.77.61,118.79l0,9.54,70,75.73-53.42,59Z" transform="translate(-399.73 -213)" fill='#D9D9D9'/></g>
                      </svg>
                    </div>
                    <div style={{display:'flex',alignItems:'left',flexDirection:'column'}}>
                      <h1 style={{ fontSize:'14px', marginTop:'0%', marginBottom:'0%', color: '#D9D9D9'}}>Your Brand</h1>
                      <h1 style={{ fontSize:'10px', marginTop:'0%', marginBottom:'10%', color: '#D9D9D9'}}>Your Slogan</h1>
                    </div>
                </div>

              </div>  
      )
    },
    {
      key: "layout7",
      id: 7,
      element: (
              <div style={{ width: '80%' }}>
                <div style={{display:'flex',alignItems:'center',flexDirection:'row'}}>
                    <div style={{ marginLeft: '5%', marginRight: '10%' }}>
                      {/* <Image src="/images/logoMakerImages/svg/layout/bird.svg" width={50} height={50}/>  */}
                      <svg xmlns="http://www.w3.org/2000/svg"  width={50} height={50} viewBox="0 0 565.58 574.09"><g id="Layer_2" data-name="Layer 2">
                          <polygon points="280.82 434.82 261.54 421.53 234.02 441.11 282.32 474.4 329.48 438.29 299.99 420.13 280.82 434.82" fill='#D9D9D9'/>
                          <polygon points="216.05 254 168.25 254 191.76 293.96 237.99 287.05 216.05 254" fill='#D9D9D9'/>
                          <polygon points="329.77 286.75 376.01 293.67 399.52 253.7 351.71 253.7 329.77 286.75" fill='#D9D9D9'/>
                          </g><g id="Layer_1" data-name="Layer 1"><path d="M878.08,435c0-58.25-1.2-166-1.21-167.19L876.24,213l-40.12,37.28-2.61,2.4c-1.67,1.52-2.86,2.63-4,3.75l-18.66,18.63c-24,24-48.84,48.78-73.28,73.39q-23.85-.12-47.71-.1c-20.83,0-42.34,0-63.5-.21-22-21.62-44.11-43.78-65.54-65.24l-24.46-24.46c-2.07-2.07-4.12-3.84-6.28-5.72-1-.88-2.12-1.84-3.39-3l-40.06-35.68-.32,53.64c0,1.16-.65,110.57-.58,168.66-28.89,32-67.66,75-70.44,77.92l-15.58,16.31L523.15,666.82l23.35-26.47,76.67,128.22c6.06,12.12,17,18.7,30.62,18.46,20.78-.29,38.92-.27,55.43.05h.83c13.84,0,24.75-6.76,31-19.16l78.1-127,16.65,31.3,129.56-143ZM822.16,543.44l-120,195c-6.61-.09-13.46-.14-20.62-.14q-9.57,0-19.92.11l-107.61-180-31.38,35.57-57.09-63c20.07-22.18,53.69-59.45,62.44-69.15l6.27-7,0-9.36c-.09-30.11.09-80.85.27-120.4,19.63,19.64,39.76,39.75,59.78,59.44a43.49,43.49,0,0,0,29,12c22.22.21,44.76.23,66.56.24q25,0,50,.11c12,.08,21.93-4.08,30.48-12.69,19.41-19.57,39.17-39.33,58.59-58.73.36,39,.72,88.77.61,118.79l0,9.54,70,75.73-53.42,59Z" transform="translate(-399.73 -213)" fill='#D9D9D9'/></g>
                      </svg>
                    </div>
                    <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
                      <h1 style={{ fontSize:'14px', marginTop:'0%', marginBottom:'0%', color: '#D9D9D9'}}>Your Brand</h1>
                      <h1 style={{ fontSize:'10px', marginTop:'0%', marginBottom:'0%', color: '#D9D9D9'}}>Your Slogan</h1>
                    </div>
                </div>

              </div>  
      )
    },
    {
      key: "layout8",
      id: 8,
      element: (
              <div style={{ width: '60%' }}>
                <div style={{display:'flex',alignItems:'center',flexDirection:'row'}}>
                    <div style={{ marginRight: '10%', marginLeft: '5%'}}>
                      {/* <Image src="/images/logoMakerImages/svg/layout/bird.svg" width={50} height={50}/>  */}
                      <svg xmlns="http://www.w3.org/2000/svg"  width={30} height={30} viewBox="0 0 565.58 574.09"><g id="Layer_2" data-name="Layer 2">
                          <polygon points="280.82 434.82 261.54 421.53 234.02 441.11 282.32 474.4 329.48 438.29 299.99 420.13 280.82 434.82" fill='#D9D9D9'/>
                          <polygon points="216.05 254 168.25 254 191.76 293.96 237.99 287.05 216.05 254" fill='#D9D9D9'/>
                          <polygon points="329.77 286.75 376.01 293.67 399.52 253.7 351.71 253.7 329.77 286.75" fill='#D9D9D9'/>
                          </g><g id="Layer_1" data-name="Layer 1"><path d="M878.08,435c0-58.25-1.2-166-1.21-167.19L876.24,213l-40.12,37.28-2.61,2.4c-1.67,1.52-2.86,2.63-4,3.75l-18.66,18.63c-24,24-48.84,48.78-73.28,73.39q-23.85-.12-47.71-.1c-20.83,0-42.34,0-63.5-.21-22-21.62-44.11-43.78-65.54-65.24l-24.46-24.46c-2.07-2.07-4.12-3.84-6.28-5.72-1-.88-2.12-1.84-3.39-3l-40.06-35.68-.32,53.64c0,1.16-.65,110.57-.58,168.66-28.89,32-67.66,75-70.44,77.92l-15.58,16.31L523.15,666.82l23.35-26.47,76.67,128.22c6.06,12.12,17,18.7,30.62,18.46,20.78-.29,38.92-.27,55.43.05h.83c13.84,0,24.75-6.76,31-19.16l78.1-127,16.65,31.3,129.56-143ZM822.16,543.44l-120,195c-6.61-.09-13.46-.14-20.62-.14q-9.57,0-19.92.11l-107.61-180-31.38,35.57-57.09-63c20.07-22.18,53.69-59.45,62.44-69.15l6.27-7,0-9.36c-.09-30.11.09-80.85.27-120.4,19.63,19.64,39.76,39.75,59.78,59.44a43.49,43.49,0,0,0,29,12c22.22.21,44.76.23,66.56.24q25,0,50,.11c12,.08,21.93-4.08,30.48-12.69,19.41-19.57,39.17-39.33,58.59-58.73.36,39,.72,88.77.61,118.79l0,9.54,70,75.73-53.42,59Z" transform="translate(-399.73 -213)" fill='#D9D9D9'/></g>
                      </svg>
                    </div>
                    <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
                      <h1 style={{ fontSize:'14px', marginTop:'0%', marginBottom:'0%', color: '#D9D9D9'}}>Your Brand</h1>
                      <h1 style={{ fontSize:'10px', marginTop:'0%', marginBottom:'0%', color: '#D9D9D9'}}>Your Slogan</h1>
                    </div>
                </div>

              </div>  
      )
    },
    {
      key: "layout9",
      id: 9,
      element: (
              <div style={{ width: '60%'}}>
                <div style={{display:'flex',alignItems:'center',flexDirection:'row'}}>
                    <div style={{marginRight: '10%', marginLeft: '5%'}}>
                      {/* <Image src="/images/logoMakerImages/svg/layout/bird.svg" width={50} height={50}/>  */}
                      <svg xmlns="http://www.w3.org/2000/svg"  width={30} height={30} viewBox="0 0 565.58 574.09"><g id="Layer_2" data-name="Layer 2">
                          <polygon points="280.82 434.82 261.54 421.53 234.02 441.11 282.32 474.4 329.48 438.29 299.99 420.13 280.82 434.82" fill='#D9D9D9'/>
                          <polygon points="216.05 254 168.25 254 191.76 293.96 237.99 287.05 216.05 254" fill='#D9D9D9'/>
                          <polygon points="329.77 286.75 376.01 293.67 399.52 253.7 351.71 253.7 329.77 286.75" fill='#D9D9D9'/>
                          </g><g id="Layer_1" data-name="Layer 1"><path d="M878.08,435c0-58.25-1.2-166-1.21-167.19L876.24,213l-40.12,37.28-2.61,2.4c-1.67,1.52-2.86,2.63-4,3.75l-18.66,18.63c-24,24-48.84,48.78-73.28,73.39q-23.85-.12-47.71-.1c-20.83,0-42.34,0-63.5-.21-22-21.62-44.11-43.78-65.54-65.24l-24.46-24.46c-2.07-2.07-4.12-3.84-6.28-5.72-1-.88-2.12-1.84-3.39-3l-40.06-35.68-.32,53.64c0,1.16-.65,110.57-.58,168.66-28.89,32-67.66,75-70.44,77.92l-15.58,16.31L523.15,666.82l23.35-26.47,76.67,128.22c6.06,12.12,17,18.7,30.62,18.46,20.78-.29,38.92-.27,55.43.05h.83c13.84,0,24.75-6.76,31-19.16l78.1-127,16.65,31.3,129.56-143ZM822.16,543.44l-120,195c-6.61-.09-13.46-.14-20.62-.14q-9.57,0-19.92.11l-107.61-180-31.38,35.57-57.09-63c20.07-22.18,53.69-59.45,62.44-69.15l6.27-7,0-9.36c-.09-30.11.09-80.85.27-120.4,19.63,19.64,39.76,39.75,59.78,59.44a43.49,43.49,0,0,0,29,12c22.22.21,44.76.23,66.56.24q25,0,50,.11c12,.08,21.93-4.08,30.48-12.69,19.41-19.57,39.17-39.33,58.59-58.73.36,39,.72,88.77.61,118.79l0,9.54,70,75.73-53.42,59Z" transform="translate(-399.73 -213)" fill='#D9D9D9'/></g>
                      </svg>
                    </div>
                    <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
                      <h1 style={{ fontSize:'14px', marginTop:'0%', marginBottom:'0%', color: '#D9D9D9'}}>Your Brand</h1>
                      <h1 style={{ fontSize:'10px', marginTop:'0%', marginBottom:'0%', letterSpacing:'1px', color: '#D9D9D9'}}>Your Slogan</h1>
                    </div>
                </div>

              </div>  
      )
    },
    {
      key: "layout10",
      id: 10,
      element: (
              <div style={{ width: '80%', alignItems:'center'}}>
                <div style={{display:'flex',alignItems:'center',flexDirection:'row', marginLeft: '10%', marginRight: '0%' }}>
                    <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
                      <h1 style={{ fontSize:'14px', marginTop:'0%', marginBottom:'0%', color:'#D9D9D9'}}>Your Brand</h1>
                      <h1 style={{ fontSize:'10px', marginTop:'0%', marginBottom:'10%', color:'#D9D9D9'}}>Your Slogan</h1>
                    </div>
                    <div style={{ marginLeft:'5%', marginRight:'5%'}}>
                      {/* <Image src="/images/logoMakerImages/svg/layout/bird.svg" width={50} height={50}/>  */}
                      <svg xmlns="http://www.w3.org/2000/svg"  width={50} height={50} viewBox="0 0 565.58 574.09"><g id="Layer_2" data-name="Layer 2">
                          <polygon points="280.82 434.82 261.54 421.53 234.02 441.11 282.32 474.4 329.48 438.29 299.99 420.13 280.82 434.82" fill='#D9D9D9'/>
                          <polygon points="216.05 254 168.25 254 191.76 293.96 237.99 287.05 216.05 254" fill='#D9D9D9'/>
                          <polygon points="329.77 286.75 376.01 293.67 399.52 253.7 351.71 253.7 329.77 286.75" fill='#D9D9D9'/>
                          </g><g id="Layer_1" data-name="Layer 1"><path d="M878.08,435c0-58.25-1.2-166-1.21-167.19L876.24,213l-40.12,37.28-2.61,2.4c-1.67,1.52-2.86,2.63-4,3.75l-18.66,18.63c-24,24-48.84,48.78-73.28,73.39q-23.85-.12-47.71-.1c-20.83,0-42.34,0-63.5-.21-22-21.62-44.11-43.78-65.54-65.24l-24.46-24.46c-2.07-2.07-4.12-3.84-6.28-5.72-1-.88-2.12-1.84-3.39-3l-40.06-35.68-.32,53.64c0,1.16-.65,110.57-.58,168.66-28.89,32-67.66,75-70.44,77.92l-15.58,16.31L523.15,666.82l23.35-26.47,76.67,128.22c6.06,12.12,17,18.7,30.62,18.46,20.78-.29,38.92-.27,55.43.05h.83c13.84,0,24.75-6.76,31-19.16l78.1-127,16.65,31.3,129.56-143ZM822.16,543.44l-120,195c-6.61-.09-13.46-.14-20.62-.14q-9.57,0-19.92.11l-107.61-180-31.38,35.57-57.09-63c20.07-22.18,53.69-59.45,62.44-69.15l6.27-7,0-9.36c-.09-30.11.09-80.85.27-120.4,19.63,19.64,39.76,39.75,59.78,59.44a43.49,43.49,0,0,0,29,12c22.22.21,44.76.23,66.56.24q25,0,50,.11c12,.08,21.93-4.08,30.48-12.69,19.41-19.57,39.17-39.33,58.59-58.73.36,39,.72,88.77.61,118.79l0,9.54,70,75.73-53.42,59Z" transform="translate(-399.73 -213)" fill='#D9D9D9'/></g>
                      </svg>
                    </div>
                </div>
              </div>  
      )
    },
    {
      key: "layout11",
      id: 11,
      element: (
            <div style={{width: '60%', alignItems:'center'}}>
              <div style={{display:'flex',alignItems:'center',flexDirection:'row', marginLeft: '10%', marginRight: '0%' }}>
                  <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
                    <h1 style={{ fontSize:'14px', marginTop:'0%', marginBottom:'0%', color: '#D9D9D9'}}>Your Brand</h1>
                    <h1 style={{ fontSize:'10px', marginTop:'0%', marginBottom:'10%', letterSpacing: '1px', color: '#D9D9D9'}}>Your Slogan</h1>
                  </div>
                  <div style={{ marginLeft:'10%', marginRight:'5%'}}>
                    {/* <Image src="/images/logoMakerImages/svg/layout/bird.svg" width={50} height={50}/>  */}
                    <svg xmlns="http://www.w3.org/2000/svg"  width={30} height={30} viewBox="0 0 565.58 574.09"><g id="Layer_2" data-name="Layer 2">
                        <polygon points="280.82 434.82 261.54 421.53 234.02 441.11 282.32 474.4 329.48 438.29 299.99 420.13 280.82 434.82" fill='#D9D9D9'/>
                        <polygon points="216.05 254 168.25 254 191.76 293.96 237.99 287.05 216.05 254" fill='#D9D9D9'/>
                        <polygon points="329.77 286.75 376.01 293.67 399.52 253.7 351.71 253.7 329.77 286.75" fill='#D9D9D9'/>
                        </g><g id="Layer_1" data-name="Layer 1"><path d="M878.08,435c0-58.25-1.2-166-1.21-167.19L876.24,213l-40.12,37.28-2.61,2.4c-1.67,1.52-2.86,2.63-4,3.75l-18.66,18.63c-24,24-48.84,48.78-73.28,73.39q-23.85-.12-47.71-.1c-20.83,0-42.34,0-63.5-.21-22-21.62-44.11-43.78-65.54-65.24l-24.46-24.46c-2.07-2.07-4.12-3.84-6.28-5.72-1-.88-2.12-1.84-3.39-3l-40.06-35.68-.32,53.64c0,1.16-.65,110.57-.58,168.66-28.89,32-67.66,75-70.44,77.92l-15.58,16.31L523.15,666.82l23.35-26.47,76.67,128.22c6.06,12.12,17,18.7,30.62,18.46,20.78-.29,38.92-.27,55.43.05h.83c13.84,0,24.75-6.76,31-19.16l78.1-127,16.65,31.3,129.56-143ZM822.16,543.44l-120,195c-6.61-.09-13.46-.14-20.62-.14q-9.57,0-19.92.11l-107.61-180-31.38,35.57-57.09-63c20.07-22.18,53.69-59.45,62.44-69.15l6.27-7,0-9.36c-.09-30.11.09-80.85.27-120.4,19.63,19.64,39.76,39.75,59.78,59.44a43.49,43.49,0,0,0,29,12c22.22.21,44.76.23,66.56.24q25,0,50,.11c12,.08,21.93-4.08,30.48-12.69,19.41-19.57,39.17-39.33,58.59-58.73.36,39,.72,88.77.61,118.79l0,9.54,70,75.73-53.42,59Z" transform="translate(-399.73 -213)" fill='#D9D9D9'/></g>
                    </svg>
                  </div>
              </div>
            </div> 
      )
    },
    {
      key: "layout12",
      id: 12,
      element: (
              <div style={{width: '80%', alignItems:'center'}}>
                <div style={{display:'flex',alignItems:'center',flexDirection:'row', marginLeft: '10%', marginRight: '0%' }}>
                  <div style={{ marginLeft:'0%', marginRight:'10%'}}>
                      {/* <Image src="/images/logoMakerImages/svg/layout/bird.svg" width={50} height={50}/>  */}
                      <svg xmlns="http://www.w3.org/2000/svg"  width={50} height={50} viewBox="0 0 565.58 574.09"><g id="Layer_2" data-name="Layer 2">
                          <polygon points="280.82 434.82 261.54 421.53 234.02 441.11 282.32 474.4 329.48 438.29 299.99 420.13 280.82 434.82" fill='#D9D9D9'/>
                          <polygon points="216.05 254 168.25 254 191.76 293.96 237.99 287.05 216.05 254" fill='#D9D9D9'/>
                          <polygon points="329.77 286.75 376.01 293.67 399.52 253.7 351.71 253.7 329.77 286.75" fill='#D9D9D9'/>
                          </g><g id="Layer_1" data-name="Layer 1"><path d="M878.08,435c0-58.25-1.2-166-1.21-167.19L876.24,213l-40.12,37.28-2.61,2.4c-1.67,1.52-2.86,2.63-4,3.75l-18.66,18.63c-24,24-48.84,48.78-73.28,73.39q-23.85-.12-47.71-.1c-20.83,0-42.34,0-63.5-.21-22-21.62-44.11-43.78-65.54-65.24l-24.46-24.46c-2.07-2.07-4.12-3.84-6.28-5.72-1-.88-2.12-1.84-3.39-3l-40.06-35.68-.32,53.64c0,1.16-.65,110.57-.58,168.66-28.89,32-67.66,75-70.44,77.92l-15.58,16.31L523.15,666.82l23.35-26.47,76.67,128.22c6.06,12.12,17,18.7,30.62,18.46,20.78-.29,38.92-.27,55.43.05h.83c13.84,0,24.75-6.76,31-19.16l78.1-127,16.65,31.3,129.56-143ZM822.16,543.44l-120,195c-6.61-.09-13.46-.14-20.62-.14q-9.57,0-19.92.11l-107.61-180-31.38,35.57-57.09-63c20.07-22.18,53.69-59.45,62.44-69.15l6.27-7,0-9.36c-.09-30.11.09-80.85.27-120.4,19.63,19.64,39.76,39.75,59.78,59.44a43.49,43.49,0,0,0,29,12c22.22.21,44.76.23,66.56.24q25,0,50,.11c12,.08,21.93-4.08,30.48-12.69,19.41-19.57,39.17-39.33,58.59-58.73.36,39,.72,88.77.61,118.79l0,9.54,70,75.73-53.42,59Z" transform="translate(-399.73 -213)" fill='#D9D9D9'/></g>
                      </svg>
                    </div>
                    <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
                      <h1 style={{ fontSize:'14px', marginTop:'0%', marginBottom:'0%', color: '#D9D9D9'}}>Your Brand</h1>
                      <h1 style={{ fontSize:'10px', marginTop:'0%', marginBottom:'10%', letterSpacing: '1px', color: '#D9D9D9'}}>Your Slogan</h1>
                    </div>
                </div>
              </div>
      )
    },
      
  ];



export default function Layout() {
    const [hover, setHover] = useState()
    const [selected, setSelected] = useState(0)

    const [selectedLayoutId, setSelectedLayoutId] = useState(null);
    const [selectedLayoutDetails, setSelectedLayoutDetails] = useState(null);

    const dispatch = useDispatch();

    // Function to fetch layout details based on the selected layout ID
    const fetchLayoutDetails = async (layoutId) => {
      const objectLayoutData = await getAllLayouts(); // Pass selectedLayout

      const newData=objectLayoutData.data;
      //console.log('newData',newData);

      const selectedLayout = newData.data.find((layout) => layout.id === layoutId);
      console.log('selected layout', selectedLayout)
      //console.log('selected layouts brnd name', selectedLayout.attributes.brand_name.fontSize)
      dispatch(setLogoLayoutDetails(selectedLayout));

      // Dispatch the addStep action to add the current state to the history
      dispatch(addStep({ type: 'UPDATE_LAYOUT', payload: selectedLayout }));

      // Check if the layout is found
      // if (selectedLayout) {
      //   setSelectedLayoutDetails(selectedLayout.attributes);
      // } else {
      //   // Handle the case where the layout is not found
      //   console.error('Layout not found for ID:', layoutId);
      // }
    };

    // useEffect to fetch layout details when the selectedLayoutId changes
    useEffect(() => {
      if (selectedLayoutId !== null) {
        fetchLayoutDetails(selectedLayoutId);
      }
      else {
        fetchLayoutDetails(1);
      }
    }, [selectedLayoutId]);

    const handleLayoutChange = async (id) => {
      //const layoutId = id.target.value;
      // Log the selected layout to the console
      console.log('Selected layout id :', id);
      // const objectLayoutData = await getAllLayouts(); // Pass selectedLayout

      // const newData=objectLayoutData.data;
      // console.log('newData',newData);

      setSelectedLayoutId(id);

      //dispatch(setLogoIconVerticalPosition(verticalPosition));
    }

  return (
    <div style={{width:'100%',display:'flex',flexDirection:'column'}}>
        <div style={{display:'flex',flexDirection:'column'}}>
           <h3 className='m-2 text-lg'>Layouts</h3>
            <div style={{display:'flex',flexDirection:'row',width:'90%',columnGap:'10px'}} className='m-2'>
                <button style={{border:'1px solid #6B42CA',borderRadius:'10px',color:'#6B42CA',fontSize:'14px',width:'90px'}}>
                    All Layouts
                </button>
                
                <div style={{display:'flex',alignItems:'center',justifyContent:'center',paddingLeft:'10px',paddingRight:'10px',border:'1px solid #6B42CA33',borderRadius:'5px',cursor:'pointer'}}>
                    <Image src="/images/logoMakerImages/svg/layout/1.png" width={10} height={10}/> 
                </div>

                <div style={{display:'flex',alignItems:'center',justifyContent:'center',paddingLeft:'10px',paddingRight:'10px',border:'1px solid #6B42CA33',borderRadius:'5px',cursor:'pointer'}}>
                    <Image src="/images/logoMakerImages/svg/layout/2.png" width={10} height={10}/> 
                </div>
                
            </div>
        </div>
         <hr/>
         <ul style={{display:'flex',flexDirection:'column',alignItems:'center',overflowX:'hidden',overflowY:'scroll',height: '82vh',}} className='customScroll'>
                 {
                    layouts.map((layout,index)=>{
                        const isActive = selected === index;
                        const isHovered = hover === index  && !isActive; 
                             return(
                                <li key={index} style={{width:'90%'}}>
                                    <div style={{border:`2px solid ${isHovered ? "#6B42CA": isActive  ? "#6B42CA":"#6B42CA80"}` ,width:'100%' ,height:'120px',margin:'5px',borderRadius:'10px',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer'}} 
                                         onMouseEnter={() => {setHover(index)}} 
                                         onMouseLeave={() => {setHover(null)}}
                                         onClick={()=>{
                                          setSelected(index)
                                          handleLayoutChange(layout.id)
                                        }}
                                     >
                                            {layout.element}
                                    </div>
                               </li>
                             )
                    })
                 }     
         </ul>
        </div>
  )
}

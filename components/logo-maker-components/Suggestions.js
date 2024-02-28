import React,{useEffect,useState} from 'react'
import ColumnContainer from './common/ColumnContainer'
import { setLogoIcon } from '../../store/slice/logoSuggestionSlice'
import { useDispatch } from "react-redux";
import { addStep } from './../../store/slice/undoRedoSlice';

const data = [
    "#8FE1F3","#DBABAB",'#9C9C9C',
    "#8FE1F3","#DBABAB",'#9C9C9C',
    "#8FE1F3","#DBABAB",'#9C9C9C',
    "#8FE1F3","#DBABAB",'#9C9C9C',"#8FE1F3","#DBABAB",'#9C9C9C'
]


export default function Suggestions(){
   
    const [hover, setHover] = useState()
    const [selected, setSelected] = useState(0)

    const [logoSuggestions, setLogoSuggestions] = useState([]);

    const dispatch = useDispatch();

    //load shapes according to pagination
    useEffect(() => {
        fetchLogoSuggestions();
    }, []);


    const fetchLogoSuggestions = async () => {
        console.log("method invoked")
        //const logoName = "Orange";
        //const logoIndustries = "academy", "animal";

        const endpoint = 'https://branderminedev.infozenit.com/custom-logo/logo-suggestions';
          const requestData = {
            logo_name: "Orange",
            logo_industries: ["academy", "animal"],
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
            //console.log('updated data',data);
            // setLoader(false)
            setLogoSuggestions(data);
            
          } catch (error) {
            console.error('Error fetching fonts:', error);
          }
    }

    const handleSuggestionChange = (svg) => {
      console.log("selected svg", svg);
      // Dispatch the selected logo suggestion to the store
      dispatch(setLogoIcon({ svg }));
      //dispatch(setLogoShapeIcon((prevShapes) => [...prevShapes, svg ]));

      // Dispatch the addStep action to add the current state to the history
      dispatch(addStep({ type: 'UPDATE_LOGO_ICON', payload: svg }));
    }


   return (
       <div style={{display:'flex',flexDirection:'column'}}>
           <h3 style={{margin:'5px',color:'#000000',fontSize:'16px',fontWeight:'500'}}>Suggestions</h3>
           <div style={{display:'flex',justifyContent:'center',overflowY:'scroll',height:'80vh'}} className='customScroll'>
               <ul>
                  {
                    logoSuggestions.map((suggestions,index)=>{
                        const isActive = selected === index;
                        const isHovered = hover === index  && !isActive; 
                          return(
                             <li key={index} style={{marginBottom:'10px'}}>
                                <div style={{width:"200px",height:'110px',border:`2px solid ${isHovered ? "#6B42CA99" : isActive ? "#6B42CA":"#BFBFBF"}`,borderRadius:'5px',backgroundColor:'white'}}
                                    onMouseEnter={() => {setHover(index)}} 
                                    onMouseLeave={() => {setHover(null)}}
                                    onClick={()=>{
                                      setSelected(index);
                                      handleSuggestionChange(suggestions.logo.svg);
                                    }} 
                                >
                                    
                                    <ColumnContainer>
                                        <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
                                          <div style={{ height: '50px', width: '50px'}}>
                                            <div dangerouslySetInnerHTML={{ __html: suggestions.logo.svg }} />
                                          </div>
                                        </div>
                                    </ColumnContainer>
                                </div>
                             </li>
                          )
                    })
                  }
               </ul>
           </div>
       </div>
  )
}

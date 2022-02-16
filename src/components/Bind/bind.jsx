import React, { useEffect, useState } from 'react';

import { Container } from './bind.Styles';
import arrow from '../../images/icons/arrow.png';
function Bind({bindType, description, descPosition, isArrow}) {
    const [bind, setBind] = useState([])
    

    useEffect(() => {
        var auxBind = []
        if(descPosition == "first"){
            switch(bindType){
                case "rightTop":
                    auxBind.push(<p draggable="false" id="bindDescription">{description}</p>);
                    auxBind.push(<div>
                        <div id="bindSecondContainer">
                            <div id="bindSecond"><img draggable="false" id="bindArrow" src={arrow}/></div>
                        </div>
                        <div id="bind"></div>
                    </div>);

                   
                break;   
                case "topRight":
                    auxBind.push(<p id="bindDescription">{description}</p>);
                    auxBind.push(
                        <div id="bindContainer">
                            <div id="bindSecondContainer"><div id="bindSecond"/></div>
                            <div id="bind"><img draggable="false" id="bindArrow" src={arrow}/></div>
                        </div>);

                break;
                case "rightBottom":
                    auxBind.push(<p id="bindDescription">{description}</p>);
                    auxBind.push(
                        <div  id="bindContainer">
                             <div id="bind"></div>
                            <div id="bindSecondContainer">
                            
                                <div id="bindSecond"><img draggable="false" id="bindArrow" src={arrow}/></div>
                            </div>
                           
                        </div>);
       
                
                break;

                case "bottomRight":
                    auxBind.push(<p id="bindDescription">{description}</p>);
                    auxBind.push(<div id="bindContainer">
                        <div id="bind"><img draggable="false" id="bindArrow" src={arrow}/></div>
                        <div id="bindSecondContainer"><div id="bindSecond"></div></div>
                        </div>);
            
                    
                
                break;
                
                case "rightLeft":
                    auxBind.push(<p id="bindDescription">{description}</p>);
                    auxBind.push(<div id="bind"><img draggable="false" id="bindArrow" src={arrow}/></div>);
                break;

                case "leftRight":
                    auxBind.push(<p id="bindDescription">{description}</p>);
                    auxBind.push(<div id="bind"><img draggable="false" id="bindArrow" src={arrow}/></div>);
                break;
                case "topBottom":
                    auxBind.push(<p id="bindDescription">{description}</p>);
                    auxBind.push(<div id="bind"><img draggable="false" id="bindArrow" src={arrow}/></div>);
                break;
                case "bottomTop":
                    auxBind.push(<p id="bindDescription">{description}</p>);
                    auxBind.push(<div id="bind"><img draggable="false" id="bindArrow" src={arrow}/></div>);
                break;
            }
            
        }else if(descPosition =="last"){
            switch(bindType){
                case "leftTop":

                    auxBind.push(<div id="bindContainer">
                       <div id="bind"></div>
                        <div id="bindSecondContainer">
                            <div id="bindSecond"><img draggable="false" id="bindArrow" src={arrow}/></div>
                        </div>
                        
                    </div>);
     
                    auxBind.push(<p id="bindDescription">{description}</p>);
                break;   
                case "topLeft":
                    auxBind.push(<div id="bindContainer">
                        <div id="bind"><img draggable="false" id="bindArrow" src={arrow}/></div>
                        <div id="bindSecondContainer"><div id="bindSecond"></div></div>
                     </div>);
                    auxBind.push(<p id="bindDescription">{description}</p>);
                break;
                case "leftBottom":
                    auxBind.push(<div/>)
                    
                    auxBind.push(
                        <div className="bindContainer">
                            <div id="bind"></div>
                            <div id="bindSecondContainer">
                                <div id="bindSecond">
                                    <img draggable="false" id="bindArrow" src={arrow}/>
                                </div>
                            </div>
                        </div>);
                   
                    auxBind.push(<p id="bindDescription">{description}</p>);
                
                break;

                case "bottomLeft":
                    
                    auxBind.push(<div/>)
                    auxBind.push(<div className="bindContainer">
                        <div id="bind"><img id="bindArrow" src={arrow}/></div>
                        <div id="bindSecondContainer"><div id="bindSecond"></div></div>
                    </div>);
                    
                    auxBind.push(<p id="bindDescription">{description}</p>);
                break;
            }
        }else{
            auxBind.push(<div id="bind"><img id="bindArrow" src={arrow}/></div>);
        }

        setBind(auxBind);
    },[])

  return(
    <Container bindType={bindType} isArrow={isArrow}>
        {bind}
    </Container>
  )}

export default Bind;
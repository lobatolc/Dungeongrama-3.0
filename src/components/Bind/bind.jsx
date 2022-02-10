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
                    auxBind.push(<p id="bindDescription">{description}</p>);
                    auxBind.push(<div id="bindSecondContainer"><div id="bindSecond"><img id="bindArrow" src={arrow}/></div></div>);
                    auxBind.push(<div id="bind"></div>);
                break;   
                case "topRight":
                    auxBind.push(<p id="bindDescription">{description}</p>);
                    auxBind.push(<div id="bindSecondContainer"><div id="bindSecond"/></div>);
                    auxBind.push(<div id="bind"><img id="bindArrow" src={arrow}/></div>);
                break;
                case "rightBottom":
                    auxBind.push(<p id="bindDescription">{description}</p>);
                    auxBind.push(<div id="bindSecondContainer"><div id="bindAux"/><div id="bindSecond"><img id="bindArrow" src={arrow}/></div></div>);
                    auxBind.push(<div id="bind"></div>);
                
                break;

                case "bottomRight":
                    auxBind.push(<p id="bindDescription">{description}</p>);
                    auxBind.push(<div id="bindSecondContainer"><div id="bindAux"/><div id="bindSecond"></div></div>);
                    auxBind.push(<div id="bind"><img id="bindArrow" src={arrow}/></div>);
                
                break;
                
                case "rightLeft":
                    auxBind.push(<p id="bindDescription">{description}</p>);
                    auxBind.push(<div id="bind"><img id="bindArrow" src={arrow}/></div>);
                break;

                case "leftRight":
                    auxBind.push(<p id="bindDescription">{description}</p>);
                    auxBind.push(<div id="bind"><img id="bindArrow" src={arrow}/></div>);
                break;
                case "topBottom":
                    auxBind.push(<p id="bindDescription">{description}</p>);
                    auxBind.push(<div id="bind"><img id="bindArrow" src={arrow}/></div>);
                break;
                case "bottomTop":
                    auxBind.push(<p id="bindDescription">{description}</p>);
                    auxBind.push(<div id="bind"><img id="bindArrow" src={arrow}/></div>);
                break;
            }
            
        }else if(descPosition =="last"){
            switch(bindType){
                case "leftTop":
                    
                    
                    auxBind.push(<div id="bind"></div>);
                    auxBind.push(<div id="bindSecondContainer"><div id="bindSecond"><img id="bindArrow" src={arrow}/></div></div>);
                    auxBind.push(<p id="bindDescription">{description}</p>);
                break;   
                case "topLeft":
                    auxBind.push(<div id="bind"><img id="bindArrow" src={arrow}/></div>);
                    auxBind.push(<div id="bindSecondContainer"><div id="bindSecond"></div></div>);
                    
                    auxBind.push(<p id="bindDescription">{description}</p>);
                break;
                case "leftBottom":
                    
                    
                    auxBind.push(<div id="bind"></div>);
                    auxBind.push(<div id="bindSecondContainer"><div id="bindAux"/><div id="bindSecond"><img id="bindArrow" src={arrow}/></div></div>);
                    auxBind.push(<p id="bindDescription">{description}</p>);
                
                break;

                case "bottomLeft":
                    
                    
                    auxBind.push(<div id="bind"><img id="bindArrow" src={arrow}/></div>);
                    auxBind.push(<div id="bindSecondContainer"><div id="bindAux"/><div id="bindSecond"></div></div>);
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
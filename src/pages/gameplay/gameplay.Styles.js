import styled, {css} from 'styled-components';
import {colors, shadow, margin, padding, button, border, font, gradient} from '../../global.Styles';
export const Container = styled.div`
    width: 100%;
    max-width: 150rem;
    max-height:80rem;
    height: 100%;
    display: grid;
    grid-template-areas: 
        " inventory interface " 
        " inventory construct";
    grid-template-rows: 1fr 9fr;
    grid-template-columns: 1fr 9fr;
 
`;

export const Inventory = styled.div`
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    margin-left: 1rem;
    grid-area: inventory;
    #inventoryBox{
        height: 100%;
        max-height: 45rem;
        overflow-y: auto;
        ::-webkit-scrollbar {
            width: 0.25rem;
            background: rgba(0,0,0,0.8);
            
           
        }

        ::-webkit-scrollbar-thumb{
            background: ${colors.purpleAscent}50;
        }
    }
`;

export const Interface = styled.div`
    grid-area: interface;
    display: flex;
    align-items: center;
    padding: 1rem;
    justify-content: space-between;
    font-size: 1.5rem;
    font-weight: 500;
    color: ${colors.purple};
    #buttonsContainer{
        display: flex;
        gap: 1rem;
        .imgButtons{
            display: flex;
            align-items: center;
            justify-content: center;
            width:3rem;
            height: 3rem;
            padding: 0.5rem;
            background-image:  ${gradient.orangeLight};
            border-radius: ${border.radius.small};
            cursor: pointer;
            box-shadow: ${shadow.small};
        }
    }
        button{
        height:  ${button.size.big};
        box-sizing: border-box;
        border: none;
        cursor: pointer;
        border-radius:  0.5rem;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        font-size: 1.2rem;
        color: ${colors.white};
        background-image:  ${gradient.orangeLight};
        box-shadow: ${shadow.small};
        }
        img{
            
            height: 1.25rem;
            width: 1.25rem;
   
        }
`;

export const Construct = styled.div`
    grid-area: construct;
    margin: 1rem;
    margin-top: 0rem;
    border: 0.2rem dashed ${colors.purple}50;
    border-radius: ${border.radius.small};
   
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;


    ${({ template }) => {
        return css`    
             grid-template-areas: 
             "${template[0]} ${template[1]} ${template[2]} ${template[3]} ${template[4]} ${template[5]} ${template[6]}"
             "${template[7]} ${template[8]} ${template[9]} ${template[10]} ${template[11]} ${template[12]} ${template[13]}"
             "${template[14]} ${template[15]} ${template[16]} ${template[17]} ${template[18]} ${template[19]} ${template[20]}"
             "${template[21]} ${template[22]} ${template[23]} ${template[24]} ${template[25]} ${template[26]} ${template[27]}"
             "${template[28]} ${template[29]} ${template[30]} ${template[31]} ${template[32]} ${template[33]} ${template[34]}"
             "${template[35]} ${template[36]} ${template[37]} ${template[38]} ${template[39]} ${template[40]} ${template[41]}"
             "${template[42]} ${template[43]} ${template[44]} ${template[45]} ${template[46]} ${template[47]} ${template[48]}"
             "${template[49]} ${template[50]} ${template[51]} ${template[52]} ${template[53]} ${template[54]} ${template[55]}"
             "${template[56]} ${template[57]} ${template[58]} ${template[59]} ${template[60]} ${template[61]} ${template[62]}";
        `;
    }};

`;

export const VoidContainer = styled.div`
     width: 100%;
    height: 100%;
    ${({ area }) => {
      return css`
             
             grid-area: ${area};
        `;
    }};


`;



export const BindContainer = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  
    ${({ h, marginB }) => {
        if(h!=null && h!=undefined){
            return css`
                height: ${h};
                margin-bottom: ${marginB};
                cursor: grab;

            ` 
        }
            
    }}
    
    ${({ area }) => {
      return css`
            
             grid-area: ${area};
        `;
    }};

`;

export const StaticActivityContainer = styled.div`
    width: 100%;
    height: 100%;

    ${({ area }) => {
            return css`
            
             grid-area: ${area};

        `;

    }};
`;

export const ActivityContainer = styled.div`
    width: 100%;
    height: 100%;

    ${({ area }) => {
            return css`
            border: 0.2rem dashed ${colors.purple}50;
             border-radius: ${border.radius.small};
             grid-area: ${area};
             display: flex;
             align-items: center;
             justify-content: center;
             text-align: center;
             font-size: 1rem;
             color: ${colors.purple}80;
        `;

    }};
`;

export const DecisionContainer = styled.div`
    height:100%;
    width:100%;
    display: grid;
    grid-template-rows: 1fr 0.2fr 1fr;

    ${({ h, marginB }) => {
        if(h!=null && h!=undefined){
            return css`
                height: ${h};
                margin-bottom: ${marginB};
                cursor: grab;

            ` 
        }
            
    }}

    #firstBindContainer, #lastBindContainer{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: "binding blanking"
    }

    #firstBind{
        display: flex;
        #arrowContainer{
            height: 100%;
            width: 0.2rem;
             
            display: flex;
            justify-content: center;
            align-items: flex-end;
            background: black;
        }
        img{
                -webkit-touch-callout: none;  /* iPhone OS, Safari */
                -webkit-user-select: none;    /* Chrome, Safari 3 */
                -khtml-user-select: none;     /* Safari 2 */
                -moz-user-select: none;       /* Firefox */
                -ms-user-select: none;        /* IE10+ */
                user-select: none;  
                
                position: inherit;
                color: black;
                padding:0;
                margin:0;
                height: 1rem;
                transform: rotate(90deg);

                ${({ firstArrow }) => {
                    if(firstArrow){
                        return css`
                            opacity: 1;
                        `
                    }else{
                        return css`
                            opacity: 0;
                        `
                    }
                    
                }};

        }
    }
    #auxSecondThird{
        display: flex;
        
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: center;
        align-items: center;
        #secondBindContainer, #thirdBindContainer{
            width: 100%;
            height:100%;
            display: grid;
            grid-template-rows: 1fr 1fr;

            grid-template-areas: 
            "topBind" 
            "downBind";
        
        }

        #secondBind{
            display: flex;

            #arrowContainer{
                width: 100%;
                height:0.188rem;
                background-color: black;

                display: flex;
                justify-content: flex-end;
                align-items: center;
             

                img{
                    -webkit-touch-callout: none;  /* iPhone OS, Safari */
                    -webkit-user-select: none;    /* Chrome, Safari 3 */
                    -khtml-user-select: none;     /* Safari 2 */
                    -moz-user-select: none;       /* Firefox */
                    -ms-user-select: none;        /* IE10+ */
                    user-select: none;  
                    
                    position: inherit;
                    color: black;
                    padding:0;
                    margin:0;
                    height: 1rem;
                    transform: rotate(360deg);

                    ${({ secondArrow }) => {
                        if(secondArrow){
                            return css`
                                opacity: 1;
                            `
                        }else{
                            return css`
                                opacity: 0;
                            `
                        }
                        
                    }};

                }
            }

            ${({ isLeftSecond }) => {
                if(isLeftSecond){
                    return css`
                        align-items: flex-end;
                        grid-area: topBind;
                   
                    
                    `;
                }else{
                    return css`
                        align-items: flex-start;
                        grid-area: downBind;   
                    `;
                } 
            }};
            
        }
        #thirdBind{
            height: 100%;
            width: 100%;

            display: flex;

            #arrowContainer{
                width: 100%;
                height:0.188rem;
                background-color: black;

                display: flex;
                justify-content: flex-start;
                align-items: center;

                img{
                    -webkit-touch-callout: none;  /* iPhone OS, Safari */
                    -webkit-user-select: none;    /* Chrome, Safari 3 */
                    -khtml-user-select: none;     /* Safari 2 */
                    -moz-user-select: none;       /* Firefox */
                    -ms-user-select: none;        /* IE10+ */
                    user-select: none;  
                    
                    position: inherit;
                    color: black;
                    padding:0;
                    margin:0;
                    height: 1rem;
                    transform: rotate(180deg);

                    ${({ thirdArrow }) => {
                        if(thirdArrow){
                            return css`
                                opacity: 1;
                            `
                        }else{
                            return css`
                                opacity: 0;
                            `
                        }
                        
                    }};

                }

            }

            ${({ isLeftThird }) => {
                if(isLeftThird){
                    return css`
                        align-items: flex-end;
                        grid-area: topBind;
                   
                    
                    `;
                }else{
                    return css`
                        align-items: flex-start;
                        grid-area: downBind;   
                    `;
                } 
            }};
            
        }

    }

    #lastBind{
        display: flex;
        justify-content: center;
        #arrowContainer{
            width: 0.188rem;
            height:100%;
             
            display: flex;
            justify-content: center;
            align-items: flex-start;
            background: black;

            img{
                -webkit-touch-callout: none;  /* iPhone OS, Safari */
                -webkit-user-select: none;    /* Chrome, Safari 3 */
                -khtml-user-select: none;     /* Safari 2 */
                -moz-user-select: none;       /* Firefox */
                -ms-user-select: none;        /* IE10+ */
                user-select: none;  
                    
                position: inherit;
                color: black;
                padding:0;
                margin:0;
                height: 1rem;
                transform: rotate(-90deg);

                ${({ lastArrow }) => {
                    if(lastArrow){
                        return css`
                            opacity: 1;
                        `
                    }else{
                        return css`
                            opacity: 0;
                        `
                    }
                        
                }};

            }

        }
    }

    ${({ isLeftFirst }) => {
        if(isLeftFirst){
            return css`

                #firstBind{
                    justify-content: flex-end;
                    grid-area: binding;
                }
               
            `;
        }else{
            return css`
                #firstBind{
                    justify-content: flex-start;
                    grid-area: blanking;
                }
                
            `;
        } 

    }};

    

    ${({ isLeftLast }) => {
        if(isLeftLast){
            return css`

                #lastBind{
                    justify-content: flex-end;
                    grid-area: binding;
                }
               
            `;
        }else{
            return css`
                #lastBind{
                    justify-content: flex-start;
                    grid-area: blanking;
                }
                
            `;
        } 

    }};

${({ isLeftFirst }) => {
        if(isLeftFirst){
            return css`

                #firstBind{
                    justify-content: flex-end;
                    grid-area: binding;
                }
               
            `;
        }else{
            return css`
                #firstBind{
                    justify-content: flex-start;
                    grid-area: blanking;
                }
                
            `;
        } 

    }};

    ${({ firstBind }) => {
        if(firstBind){
            return css`
                #firstBind{
                    opacity:1;
                }
            `;
        }else{
            return css`
                #firstBind{
                    opacity:0;
                }
            `;
        } 

    }};

    ${({ secondBind }) => {
        if(secondBind){
            return css`
                #secondBind{
                    opacity:1;
                }
            `;
        }else{
            return css`
                #secondBind{
                    opacity:0;
                }
            `;
        } 

    }};

    ${({ thirdBind }) => {
        if(thirdBind){
            return css`
                #thirdBind{
                    opacity:1;
                }
            `;
        }else{
            return css`
                #thirdBind{
                    opacity:0;
                }
            `;
        } 

    }};

${({ lastBind }) => {
        if(lastBind){
            return css`
                #lastBind{
                    opacity:1;
                }
            `;
        }else{
            return css`
                #lastBind{
                    opacity:0;
                }
            `;
        } 

    }};



    
`;

export const BarContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    
    ${({ h, marginB }) => {
        if(h!=null && h!=undefined){
            return css`
                height: ${h};
                margin-bottom: ${marginB};
                cursor: grab;

            ` 
        }
            
    }}

    ${({ isVertical }) => {
        if(isVertical){
            return css`
                grid-template-columns: 1fr 0.1fr 1fr;

                #firstBindContainer{
  
                    display: grid;
                    grid-template-rows: 1fr 1fr;
                    grid-template-areas: "first" "last";
                    
    
        ${({ firstBind }) => {
            if(firstBind){
         
                return css`
                
                        opacity:1;
                    
                `;
            }else{
            
                return css`
                     
                        opacity:0;
                    
                `;
            } 

        }};
    


                    #firstBarBind{
                        display: flex;
                        #arrowContainer{
                            height: 0.2rem;
                            width: 100%;
                            
                            display: flex;
                            align-items: center;
                           
                            background: black;
                           
                            ${({ isInitialFirst }) => {
                                if(isInitialFirst ){
                                    return css`
                                        justify-content: flex-end;
                                        img{
                                            transform: rotate(360deg);
                                        }
                                    `
                                }else{
                                    return css`
                                        justify-content: flex-start;
                                        img{
                                            transform: rotate(180deg);
                                        }
                                    `
                                }
                                
                            }};
                        }
                        img{
                            -webkit-touch-callout: none;  /* iPhone OS, Safari */
                            -webkit-user-select: none;    /* Chrome, Safari 3 */
                            -khtml-user-select: none;     /* Safari 2 */
                            -moz-user-select: none;       /* Firefox */
                            -ms-user-select: none;        /* IE10+ */
                            user-select: none;  
                            
                            position: inherit;
                            color: black;
                            padding:0;
                            margin:0;
                            height: 1rem;
                            

                            ${({ firstArrow }) => {
                                if(firstArrow){
                                    return css`
                                        opacity: 1;
                                    `
                                }else{
                                    return css`
                                        opacity: 0;
                                    `
                                }
                                
                            }};

                        }

                        ${({ isLeftFirst }) => {
                                if(isLeftFirst){
                                    return css`
                                        grid-area: first;
                                        align-items: flex-end;
                                    `
                                }else{
                                    return css`
                                        grid-area: last;
                                        align-items: flex-start;
                                    `
                                }
                                
                            }};
                    }  
                }

                #lastBindContainer{
      
                    display: grid;
                    grid-template-rows: 1fr 1fr;
                    grid-template-areas: "first" "last";
                    
                    ${({ lastBind }) => {
                        if(lastBind){
                    
                            return css`
                            
                                    opacity:1;
                                
                            `;
                        }else{
                        
                            return css`
                                
                                    opacity:0;
                                
                            `;
                        } 

                    }};

                    
                    #lastBarBind{
                        display: flex;
                        #arrowContainer{
                            height: 0.2rem;
                            width: 100%;
                            
                            display: flex;
                            align-items: center;
                            justify-content: flex-end; /*vamo usar isso aqui pra rotacionar as setas*/
                            background: black;
                           
                            ${({ isInitialLast }) => {
                                if(isInitialLast ){
                                    return css`
                                        justify-content: flex-end;
                                        img{
                                            transform: rotate(360deg);
                                        }
                                    `
                                }else{
                                    return css`
                                        justify-content: flex-start;
                                        img{
                                            transform: rotate(180deg);
                                        }
                                    `
                                }
                                
                            }};
                        }
                        img{
                            -webkit-touch-callout: none;  /* iPhone OS, Safari */
                            -webkit-user-select: none;    /* Chrome, Safari 3 */
                            -khtml-user-select: none;     /* Safari 2 */
                            -moz-user-select: none;       /* Firefox */
                            -ms-user-select: none;        /* IE10+ */
                            user-select: none;  
                            
                            position: inherit;
                            color: black;
                            padding:0;
                            margin:0;
                            height: 1rem;
                            

                            ${({ lastArrow }) => {
                                if(lastArrow){
                                    return css`
                                        opacity: 1;
                                    `
                                }else{
                                    return css`
                                        opacity: 0;
                                    `
                                }
                                
                            }};

                        }

                        ${({ isLeftLast }) => {
                                if(isLeftLast){
                                    return css`
                                        grid-area: first;
                                        align-items: flex-end;
                                    `
                                }else{
                                    return css`
                                        grid-area: last;
                                        align-items: flex-start;
                                    `
                                }
                                
                            }};
                    }  
                }
            `;
        }else{
            return css`
                grid-template-rows: 1fr 0.1fr 1fr;

                #firstBindContainer{
  
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-areas: "first last";
  
                ${({ firstBind }) => {
                    if(firstBind){
                
                        return css`
                        
                                opacity:1;
                            
                        `;
                    }else{
                    
                        return css`
                            
                                opacity:0;
                            
                        `;
                    } 
                }};

                #firstBarBind{
                    display: flex;
                    #arrowContainer{
                        height: 100%;
                        width: 0.2rem;
                        
                        display: flex;
                        justify-content: center;
                        
                        background: black;
                        
                        ${({ isInitialFirst }) => {
                            if(isInitialFirst ){
                                return css`
                                    align-items: flex-end;
                                    img{
                                        transform: rotate(90deg);
                                    }
                                `
                            }else{
                                return css`
                                    align-items: flex-start;
                                    img{
                                        transform: rotate(-90deg);
                                    }
                                `
                            }
                            
                        }};
                    }
                    img{
                        -webkit-touch-callout: none;  /* iPhone OS, Safari */
                        -webkit-user-select: none;    /* Chrome, Safari 3 */
                        -khtml-user-select: none;     /* Safari 2 */
                        -moz-user-select: none;       /* Firefox */
                        -ms-user-select: none;        /* IE10+ */
                        user-select: none;  
                        
                        position: inherit;
                        color: black;
                        padding:0;
                        margin:0;
                        height: 1rem;
                        
                        ${({ firstArrow }) => {
                            if(firstArrow){
                                return css`
                                    opacity: 1;
                                `
                            }else{
                                return css`
                                    opacity: 0;
                                `
                            }
                            
                        }};
                    }

                    ${({ isLeftFirst }) => {
                            if(isLeftFirst){
                                return css`
                                    grid-area: first;
                                    justify-content: flex-end;
                                `
                            }else{
                                return css`
                                    grid-area: last;
                                    justify-content: flex-start;
                                `
                            }
                            
                        }};
                    }  
                }

                #lastBindContainer{
  
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-template-areas: "first last";


                    ${({ lastBind }) => {
                        if(lastBind){
                    
                            return css`
                            
                                    opacity:1;
                                
                            `;
                        }else{
                        
                            return css`
                                
                                    opacity:0;
                                
                            `;
                        } 

                    }};
                    
                    #lastBarBind{
                        display: flex;
                        #arrowContainer{
                            height: 100%;
                            width: 0.2rem;
                            
                            display: flex;
                            justify-content: center;
                            
                            background: black;
                            
                            ${({ isInitialLast }) => {
                                if(isInitialLast ){
                                    return css`
                                        align-items: flex-end;
                                        img{
                                            transform: rotate(90deg);
                                        }
                                    `
                                }else{
                                    return css`
                                        align-items: flex-start;
                                        img{
                                            transform: rotate(-90deg);
                                        }
                                    `
                                }
                                
                            }};
                        }
                        img{
                            -webkit-touch-callout: none;  /* iPhone OS, Safari */
                            -webkit-user-select: none;    /* Chrome, Safari 3 */
                            -khtml-user-select: none;     /* Safari 2 */
                            -moz-user-select: none;       /* Firefox */
                            -ms-user-select: none;        /* IE10+ */
                            user-select: none;  
                            
                            position: inherit;
                            color: black;
                            padding:0;
                            margin:0;
                            height: 1rem;
                            
                            ${({ lastArrow }) => {
                                if(lastArrow){
                                    return css`
                                        opacity: 1;
                                    `
                                }else{
                                    return css`
                                        opacity: 0;
                                    `
                                }
                                
                            }};
                        }

                        ${({ isLeftLast }) => {
                                if(isLeftLast){
                                    return css`
                                        grid-area: first;
                                        justify-content: flex-end;
                                    `
                                }else{
                                    return css`
                                        grid-area: last;
                                        justify-content: flex-start;
                                    `
                                }
                                
                            }};
                        }  
                    }
            `;
        }
    }};

        

        

        

        #lastBarBind{
            img{
                ${({ lastArrow }) => {
                    if(lastArrow){
                        return css`
                            opacity: 1;
                        `
                    }else{
                        return css`
                            opacity: 0;
                        `
                    }
                    
                }};
            }
            
        }

    




`;

export const BallContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 0.1fr 1fr;

    ${({ h, marginB }) => {
        if(h!=null && h!=undefined){
            return css`
                height: ${h};
                margin-bottom: ${marginB};
                cursor: grab;

            ` 
        }
            
    }}
    
    #firstBindContainer, #lastBindContainer{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: "leftBinding rightBinding";
    }

   

    #firstBind{
        display: flex;
        

        ${({ isLeftFirst }) => {
                if(isLeftFirst){
                    return css`
                        justify-content: flex-end;
                        grid-area: leftBinding;
                   
                    
                    `;
                }else{
                    return css`
                        justify-content: flex-start;
                        grid-area: rightBinding;   
                    `;
                } 
            }};

        #arrowContainer{
            height: 100%;
            width: 0.2rem;
             
            display: flex;
            justify-content: center;
            align-items: flex-end;
            background: black;
        }
        img{
                -webkit-touch-callout: none;  /* iPhone OS, Safari */
                -webkit-user-select: none;    /* Chrome, Safari 3 */
                -khtml-user-select: none;     /* Safari 2 */
                -moz-user-select: none;       /* Firefox */
                -ms-user-select: none;        /* IE10+ */
                user-select: none;  
                
                position: inherit;
                color: black;
                padding:0;
                margin:0;
                height: 1rem;
                transform: rotate(90deg);

                ${({ firstArrow }) => {
                    if(firstArrow){
                        return css`
                            opacity: 1;
                        `
                    }else{
                        return css`
                            opacity: 0;
                        `
                    }
                    
                }};

        }
    }

    #auxSecondThird{
        display: flex;
        
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: center;
        align-items: center;
        #secondBindContainer, #thirdBindContainer{
            width: 100%;
            height:100%;
            display: grid;
            grid-template-rows: 1fr 1fr;

            grid-template-areas: 
            "topBind" 
            "downBind";
        
        }

        #secondBind{
            display: flex;

            #arrowContainer{
                width: 100%;
                height:0.188rem;
                background-color: black;

                display: flex;
                justify-content: flex-end;
                align-items: center;
             

                img{
                    -webkit-touch-callout: none;  /* iPhone OS, Safari */
                    -webkit-user-select: none;    /* Chrome, Safari 3 */
                    -khtml-user-select: none;     /* Safari 2 */
                    -moz-user-select: none;       /* Firefox */
                    -ms-user-select: none;        /* IE10+ */
                    user-select: none;  
                    
                    position: inherit;
                    color: black;
                    padding:0;
                    margin:0;
                    height: 1rem;
                    transform: rotate(360deg);

                    ${({ secondArrow }) => {
                        if(secondArrow){
                            return css`
                                opacity: 1;
                            `
                        }else{
                            return css`
                                opacity: 0;
                            `
                        }
                        
                    }};

                }
            }

            ${({ isLeftSecond }) => {
                if(isLeftSecond){
                    return css`
                        align-items: flex-end;
                        grid-area: topBind;
                   
                    
                    `;
                }else{
                    return css`
                        align-items: flex-start;
                        grid-area: downBind;   
                    `;
                } 
            }};
            
        }
        #thirdBind{
            height: 100%;
            width: 100%;

            display: flex;

            #arrowContainer{
                width: 100%;
                height:0.188rem;
                background-color: black;

                display: flex;
                justify-content: flex-start;
                align-items: center;

                img{
                    -webkit-touch-callout: none;  /* iPhone OS, Safari */
                    -webkit-user-select: none;    /* Chrome, Safari 3 */
                    -khtml-user-select: none;     /* Safari 2 */
                    -moz-user-select: none;       /* Firefox */
                    -ms-user-select: none;        /* IE10+ */
                    user-select: none;  
                    
                    position: inherit;
                    color: black;
                    padding:0;
                    margin:0;
                    height: 1rem;
                    transform: rotate(180deg);

                    ${({ thirdArrow }) => {
                        if(thirdArrow){
                            return css`
                                opacity: 1;
                            `
                        }else{
                            return css`
                                opacity: 0;
                            `
                        }
                        
                    }};

                }

            }

            ${({ isLeftThird }) => {
                if(isLeftThird){
                    return css`
                        align-items: flex-end;
                        grid-area: topBind;
                   
                    
                    `;
                }else{
                    return css`
                        align-items: flex-start;
                        grid-area: downBind;   
                    `;
                } 
            }};
            
        }

    }

    #lastBind{
        display: flex;
    

        ${({ isLeftLast }) => {
            if(isLeftLast){
                return css`
                    justify-content: flex-end;
                    grid-area: leftBinding;
                    
                
                `;
            }else{
                return css`

                    justify-content: flex-start;
                    grid-area: rightBinding;
                    
                    
                `;
            } 

        }};
        
        #arrowContainer{
            width: 0.188rem;
            height:100%;
             
            display: flex;
            justify-content: center;
            align-items: flex-start;
            background: black;

            img{
                -webkit-touch-callout: none;  /* iPhone OS, Safari */
                -webkit-user-select: none;    /* Chrome, Safari 3 */
                -khtml-user-select: none;     /* Safari 2 */
                -moz-user-select: none;       /* Firefox */
                -ms-user-select: none;        /* IE10+ */
                user-select: none;  
                    
                position: inherit;
                color: black;
                padding:0;
                margin:0;
                height: 1rem;
                transform: rotate(-90deg);

                ${({ lastArrow }) => {
                    if(lastArrow){
                        return css`
                            opacity: 1;
                        `
                    }else{
                        return css`
                            opacity: 0;
                        `
                    }
                        
                }};

            }

        }

        
    }

    ${({ firstBind }) => {
        if(firstBind){
            return css`
                #firstBind{
                    opacity:1;
                }
            `;
        }else{
            return css`
                #firstBind{
                    opacity:0;
                }
            `;
        } 

    }};

    ${({ secondBind }) => {
        if(secondBind){
            return css`
                #secondBind{
                    opacity:1;
                }
            `;
        }else{
            return css`
                #secondBind{
                    opacity:0;
                }
            `;
        } 

    }};

    ${({ thirdBind }) => {
        if(thirdBind){
            return css`
                #thirdBind{
                    opacity:1;
                }
            `;
        }else{
            return css`
                #thirdBind{
                    opacity:0;
                }
            `;
        } 

    }};

${({ lastBind }) => {
        if(lastBind){
            return css`
                #lastBind{
                    opacity:1;
                }
            `;
        }else{
            return css`
                #lastBind{
                    opacity:0;
                }
            `;
        } 

    }};
`;
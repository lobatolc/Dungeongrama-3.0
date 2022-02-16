import styled, {css} from 'styled-components';
import { colors } from '../../global.Styles';

export const Container = styled.div`
   width: 100%;
   height:100%;
    display: grid;

    img{
        -webkit-touch-callout: none;  /* iPhone OS, Safari */
        -webkit-user-select: none;    /* Chrome, Safari 3 */
        -khtml-user-select: none;     /* Safari 2 */
        -moz-user-select: none;       /* Firefox */
        -ms-user-select: none;        /* IE10+ */
        user-select: none;            /* Possível implementação no futuro */
    }
   
    #bindDescription{
        width: 100%;
        padding: 0.25rem;
        box-sizing: border-box;
        max-height: 4rem;
  
        height: 3rem;
        overflow: auto;
    
        ::-webkit-scrollbar {
            width: 0px;
        }

    }

    
     
   ${({ bindType }) => {
        switch(bindType){
            case "topBottom":
                return css`   
                grid-template-columns: 1fr 1fr;
                align-items: center;
                #bind{
                 
                 height: 100%;
                 width: 0.2rem;
             
                 display: flex;
                 justify-content: center;
                 align-items: flex-end;
                 background: black;
               
                 
                 }

                 #bindArrow{
                     position: inherit;

                     color: black;
                     padding:0;
                     margin:0;
                     height: 1rem;
                     transform: rotate(90deg);
                     
                 }

                 #bindDescription{
                     text-align: center;
                     word-wrap: break-word;
                     margin-right: 0.5rem
                 }
                   
                `;

            case "bottomTop":
                return css`   
                    grid-template-columns: 1fr 1fr;
                    align-items: center;
                    #bind{
                 
                        height: 100%;
                        width: 0.2rem;
                    
                        display: flex;
                        justify-content: center;
                        align-items: flex-start;
                        background: black;
               
                 
                    }

                    #bindArrow{
                        position: inherit;

                        color: black;
                        padding:0;
                        margin:0;
                        height: 1rem;
                        transform: rotate(-90deg);
                     
                 }

                 #bindDescription{
                     text-align: center;
                     word-wrap: break-word;
                     margin-right: 0.5rem
                 }
                `;

            case "leftRight":
                
                return css` 
                    grid-template-rows: 1fr 1fr;
                   
                    #bindDescription{
                        width:80%;
                    }
                    #bind{
                 
                    height: 0.2rem;
                    width: 100%;
                
                    display: flex;
                    
                    justify-content: flex-end;
                    align-items: center;
                    background: black;
                  
                    
                    }

                    #bindArrow{
                        position: inherit;
                    
                        color: black;
                        padding:0;
                        margin:0;
                        height: 1rem;
                        transform: rotate(360deg);
                        
                    }

                    #bindDescription{
                        text-align: center;
                        word-wrap: break-word;
                        margin-right: 0.5rem
                    }
                `;

            case "rightLeft":
                return css`  
                     grid-template-rows: 1fr 1fr;
                   #bind{
                        height: 0.2rem;
                        width: 100%;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        background: black;
                 }

                 #bindDescription{
                        width:80%;
                    }

                 #bindArrow{
                     position: inherit;
                 
                     color: black;
                     padding:0;
                     margin:0;
                     height: 1rem;
                     transform: rotate(180deg);
                     
                 }

                 #bindDescription{
                     text-align: center;
                     word-wrap: break-word;
                     margin-right: 0.5rem
                 }
                `;

            case "topRight":
                return css`    
            
                    grid-template-columns: 1fr 1fr;
                    grid-template-rows: 1fr 1fr;
                    grid-template-areas:
                    "desc bind"
                    "desc aux";
                    
                    #bindDescription{
                        grid-area: desc;
                    }
                 

                    #bind{
                        height: 0.2rem;
                        width: 100%;
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                        background: black;
                    }

                    #bindSecondContainer{
                        height:100%;
                    
                        #bindSecond{
                        height:100%;
                        width: 0.2rem;
                        background: black;
                    }
                    }
                    

                    #bindArrow{
                        position: inherit;
                    
                        color: black;
                        padding:0;
                        margin:0;
                        height: 1rem;
                        transform: rotate(360deg);
                     
                    }

                    #bindDescription{
                        text-align: center;
                        word-wrap: break-word;
                        height: 100%;
                      
                        
                    }
            
                `;

            case "rightTop":
                return css`    
                     grid-template-columns: 1fr 1fr;
                    grid-template-rows: 1fr 1fr;
                    grid-template-areas:
                    "desc bind"
                    "desc aux";
                    
                    #bindDescription{
                        grid-area: desc;
                    }
                    #bind{
                        height: 0.2rem;
                        width:103%;
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                        background: black;
                    }

                    #bindSecondContainer{
                        height: 100%;
                        width:0.2rem;
                        
                    
                        #bindSecond{
                            height:100%;
                            width: 100%;
                            background: black;
                            display: flex;
                            justify-content: center;
                        }
                    }
                    

                    #bindArrow{
                        position: inherit;
                    
                        color: black;
                        padding:0;
                        margin:0;
                        height: 1rem;
                        transform: rotate(-90deg);
                     
                    }

                    #bindDescription{
                        text-align: center;
                        word-wrap: break-word;
                        height: 100%;
                        padding-right: 0.5rem;
                        
                    }
                `;
            
            case "rightBottom":
                return css`    
                    grid-template-columns: 1fr 1fr;
                    grid-template-rows: 1fr 1fr;
                    grid-template-areas:
                    "desc blank"
                    "desc arrow";

             
                    
                    #bindDescription{
                        grid-area: desc;
                    }

                    #bindContainer{
                        grid-area: arrow;
                    }

                    #bind{
                        
                        height: 0.2rem;
                        width: 100%;
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                        background: black;
                    }

                    #bindSecondContainer{
                        
                        height: 100%;
                        
                        width:0.2rem;
                       
                    
                        #bindSecond{
                            
                            height:100%;
                  
                            width: 100%;
                            background: black;
                            display: flex;
                            align-items: flex-end;
                            justify-content: center;
                        }

                        #bindAux{
                            height:48%;
                            background: ${colors.white};
                        }
                    }
                    

                    #bindArrow{
                        position: inherit;
                    
                        color: black;
                        padding:0;
                        margin:0;
                        height: 1rem;
                        transform: rotate(90deg);
                     
                    }

                    #bindDescription{
                        text-align: center;
                        word-wrap: break-word;
                        height: 100%;
                        padding-right: 0.5rem;
                        
                    }
                `;
            
            case "bottomRight":
                return css`    
                   grid-template-columns: 1fr 1fr;
                    grid-template-rows: 1fr 1fr;
                    grid-template-areas:
                    "desc blank"
                    "desc arrow";
               

             
                    
                    #bindDescription{
                        grid-area: desc;
                    }

                    #bindContainer{
                 
                        grid-area: arrow;
                    }
                    #bind{
                        height: 0.2rem;
                        width: 100%;
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                        background: black;
                    }

                    #bindSecondContainer{
                        height: 100%;
                        
                        width:0.2rem;

                        #bindSecond{
                            height:100%;
                  
                            width: 100%;
                            background: black;
                            display: flex;
                            align-items: flex-end;
                            justify-content: center;
                        }

                        #bindAux{
                            height:48%;
                            background: ${colors.white};
                        }
                    }
                    

                    #bindArrow{
                        position: inherit;
                    
                        color: black;
                        padding:0;
                        margin:0;
                        height: 1rem;
                        transform: rotate(360deg);
                     
                    }

                    #bindDescription{
                        text-align: center;
                        word-wrap: break-word;
                        height: 100%;
                        padding-right: 0.5rem;
                        
                    }
                `;
            
            case "leftTop":
                return css`    
                    grid-template-columns: 1fr 1fr;
                    grid-template-rows: 1fr 1fr;
                    grid-template-areas:
                    "bind desc"  
                    "aux desc";
                    justify-content: center;
                    #bindDescription{
                        grid-area: desc;
                    }

                    #bindContainer{
                        grid-area: bind;
                        display: flex;
                        align-items: flex-end;
                    }

                    #bind{
                        height: 0.2rem;
                        width: 100%;
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                        
                        background: black;
                        
                    }

                    #bindSecondContainer{
                        height:100%;
                    
                        #bindSecond{
                        height:100%;
                        width: 0.2rem;
                        background: black;
                        display: flex;
                        justify-content: center;
                        align-items: flex-start;
                    }
                    }
                    

                    #bindArrow{
                        position: inherit;
                    
                        color: black;
                        padding:0;
                        margin:0;
                        height: 1rem;
                        transform: rotate(-90deg);
                     
                    }

                    #bindDescription{
                        text-align: center;
                        word-wrap: break-word;
                        height: 100%;
                        padding-left: 0.5rem;
                        
                    }
            
                `;
            break;
            
            case "topLeft":
                return css`    
            
            grid-template-columns: 1fr 1fr;
                    grid-template-rows: 1fr 1fr;
                    grid-template-areas:
                    "bind desc"  
                    "aux desc";
                    justify-content: center;
                    #bindDescription{
                        grid-area: desc;
                    }

                    #bindContainer{
                        grid-area: bind;
                        display: flex;
                        align-items: flex-end;
                    }
            #bind{
                height: 0.2rem;
                width: 100%;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                background: black;
            }

            #bindSecondContainer{
                height:100%;
            
                #bindSecond{
                height:100%;
                width: 0.2rem;
                background: black;
                
            }
            }
            

            #bindArrow{
                position: inherit;
            
                color: black;
                padding:0;
                margin:0;
                height: 1rem;
                transform: rotate(180deg);
             
            }

            #bindDescription{
                text-align: center;
                word-wrap: break-word;
                height: 100%;
                padding-left: 0.5rem;
                
            }
    
        `;
            
            case "leftBottom":
                return css`    
                    grid-template-columns: 1fr 1fr;
                    grid-template-areas:
                    "blank desc"
                    "arrow desc";
           

                    #bindContainer{
                        grid-area: arrow;
                        display: flex;
                        align-items: center;
                    
                        background: red;
                    }
                   
                    #bindDescription{
                        grid-area: desc;
                   
                    }

                   
                    
                    #bind{
                        height: 0.2rem;
                        width: 100%;
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                        background: black;
                    }

                    #bindSecondContainer{
                        height: 100%;
                        width: 100%;
                        display: flex;
                       justify-content: flex-end;
      
                    
                        #bindSecond{
                            height:100%;
                  
                           
                            width:0.2rem;
                            background: black;
                            display: flex;
                            align-items: flex-end;
                            justify-content: center;
                        }

                        #bindAux{
                            height:100%;
                            background: ${colors.white};
                        }
                    }
                    

                    #bindArrow{
                        position: inherit;
                    
                        color: black;
                        padding:0;
                        margin:0;
                        height: 1rem;
                        transform: rotate(90deg);
                     
                    }

                    #bindDescription{
                        text-align: center;
                        word-wrap: break-word;
                        height: 100%;
                        padding-right: 0.5rem;
                        
                    }
                `;
        
            case "bottomLeft":
                return css`    
                    grid-template-columns: 1fr 1fr;
                    grid-template-areas:
                    "blank desc"
                    "arrow desc";
           

                    #bindContainer{
                        grid-area: arrow;
                        display: flex;
                        align-items: center;
                    
                        background: red;
                    }
                   
                    #bindDescription{
                        grid-area: desc;
                   
                    }
                    #bind{
                        height: 0.2rem;
                        width: 100%;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        background: black;
                    }

                    #bindSecondContainer{
                        height: 100%;
                        
                        width: 100%;
                        display: flex;
                        justify-content: flex-end;
                        #bindSecond{
                            height:100%;
                  
                            
                            width:0.2rem;
                            background: black;
                            display: flex;
                            align-items: flex-end;
                            justify-content: center;
                        }

                        #bindAux{
                            height:48%;
                            background: ${colors.white};
                        }
                    }
                    

                    #bindArrow{
                        position: inherit;
                    
                        color: black;
                        padding:0;
                        margin:0;
                        height: 1rem;
                        transform: rotate(180deg);
                     
                    }

                    #bindDescription{
                        text-align: center;
                        word-wrap: break-word;
                        height: 100%;
                        padding-right: 0.5rem;
                        
                    }
                `;

        }
    }};

${({ isArrow }) => {
        if(isArrow){
            return css`   
                 #bindArrow{
                     opacity: 1;
                 }      
            `;
        }else{
            return css`   
                 #bindArrow{
                     opacity: 0;
                 }      
            `;
        }
    }};



    
`
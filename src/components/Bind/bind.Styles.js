import styled, {css} from 'styled-components';
import { colors } from '../../global.Styles';

export const Container = styled.div`
   width: 100%;
   height:100%;
   display: flex;
    align-items: center;
     
   ${({ bindType }) => {
        switch(bindType){
            case "topBottom":
                return css`   
                
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
                    flex-direction: column;  
                    justify-content: center;
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
                    flex-direction: column;  
                    justify-content: center;
                   #bind{
                        height: 0.2rem;
                        width: 100%;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        background: black;
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
            
                    justify-content: center;
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
                        height:52%;
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
                        padding-right: 0.5rem;
                        
                    }
            
                `;

            case "rightTop":
                return css`    
                    justify-content: center;
                    #bind{
                        height: 0.2rem;
                        width: 50%;
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                        background: black;
                    }

                    #bindSecondContainer{
                        height: 100%;
                        width:0.2rem;
                        
                    
                        #bindSecond{
                            height:52%;
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
                    justify-content: center;
                    
                    #bind{
                        height: 0.2rem;
                        width: 50%;
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                        background: black;
                    }

                    #bindSecondContainer{
                        height: 100%;
                        
                        width:0.2rem;
                        background: red;
                    
                        #bindSecond{
                            height:52%;
                  
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
                    justify-content: center;
                    
                    #bind{
                        height: 0.2rem;
                        width: 50%;
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                        background: black;
                    }

                    #bindSecondContainer{
                        height: 100%;
                        
                        width:0.2rem;

                        #bindSecond{
                            height:52%;
                  
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
            
                    justify-content: center;
                    #bind{
                        height: 0.2rem;
                        width: 50%;
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                        
                        background: black;
                    }

                    #bindSecondContainer{
                        height:100%;
                    
                        #bindSecond{
                        height:52%;
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
            
            justify-content: center;
            #bind{
                height: 0.2rem;
                width: 50%;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                background: black;
            }

            #bindSecondContainer{
                height:100%;
            
                #bindSecond{
                height:52%;
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
                    justify-content: center;
                    
                    #bind{
                        height: 0.2rem;
                        width: 50%;
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                        background: black;
                    }

                    #bindSecondContainer{
                        height: 100%;
                        
                        width:0.2rem;
                        background: red;
                    
                        #bindSecond{
                            height:52%;
                  
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
        
            case "bottomLeft":
                return css`    
                    justify-content: center;
                    
                    #bind{
                        height: 0.2rem;
                        width: 50%;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        background: black;
                    }

                    #bindSecondContainer{
                        height: 100%;
                        
                        width:0.2rem;

                        #bindSecond{
                            height:52%;
                  
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
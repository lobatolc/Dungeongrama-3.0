import styled from 'styled-components';
import {colors, shadow, margin, padding, button, border, font, gradient} from '../../global.Styles';

export const Container = styled.div`
   position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    padding: 0 !important;
    background-color: rgba(0, 0, 0, 0.25);
    z-index: 9999;
    top: 0;
    left: 0;
`;

export const Dev = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-template-rows: 2fr 8fr;
    grid-template-areas: 
        "photo status"
        "info info";

    img{
       
        height: 5rem;
        width: 5rem;
        border-radius: 100rem;
        border: 2px solid ${colors.purple};

    }

    #status{
        display: flex;
        flex-direction: column;
        padding-left: 0.5rem;
        box-sizing: border-box;
        justify-content: center;
        gap: 0.5rem;
        font-size: 0.75rem;
        #energyContainer{
            display: flex;
            align-items: center;
            gap: 2rem;
            #energy{
                height:0.75rem;
                width: 100%;
                border-radius: 100rem;
                background: yellow;
                background-image: ${gradient.yellowDark}
            }
        }
       
        #experienceContainer{
            display: flex;
            align-items: center;
            gap: 0.73rem;
            #experience{
                height:0.75rem;
                width: 100%;
                border-radius: 100rem;
                background: yellow;
                background-image: ${gradient.blueLight}
            }
        }
    }

    #infoContainer{
        grid-area: info;
        padding-top: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        #phrase{
            text-align: center;
            font-style: italic;
        }
    }

    #social{
        display: flex;
        align-items: center;
        text-align: center;
        margin-top: 0.5rem;
        gap: 0.25rem;
        img{
       
            height: 2.5rem;
            width: 2.5rem;
            cursor: pointer;
        }

    }
    
`;
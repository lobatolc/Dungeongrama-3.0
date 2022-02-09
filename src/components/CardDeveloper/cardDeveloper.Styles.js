import styled from 'styled-components';
import {colors, shadow, margin, padding, button, border, font, gradient} from '../../global.Styles';

export const Container = styled.div`
    display: absolute;
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

    #info{
        grid-area: info;
        padding-top: 1rem;

        #phrase{
            text-align: center;
            font-style: italic;
        }
    }
    
`;
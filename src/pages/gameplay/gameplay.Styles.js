import styled from 'styled-components';
import {colors, shadow, margin, padding, button, border, font, gradient} from '../../global.Styles';
export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-areas: 
        " inventory interface " 
        " inventory construct";
    grid-template-rows: 1fr 9fr;
    grid-template-columns: 2fr 8fr;
`;

export const Inventory = styled.div`
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    grid-area: inventory;
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
    border-radius: ${border.radius.small}
`;
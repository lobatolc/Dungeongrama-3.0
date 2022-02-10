import styled, { css } from 'styled-components';
import {colors, shadow, margin, padding, button, border, font, gradient} from '../../global.Styles';



export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: auto;
    ${({ height, width }) => {
      return css`
            width: ${width};
            height: ${height};
    
        `;
    }};

`;

export const Header = styled.div`
    border-radius: 0.5rem;
    background-image: ${gradient.orangeLight};
    font-size: ${font.medium};
    color: ${colors.white};
    height: 3rem;
    padding: ${padding.medium};
    
    text-align: center;
    box-shadow: ${shadow.small};
    ${({ width, titleType }) => {
        if(titleType){
            return css`
                width: ${width};
                display: grid;
                grid-template-columns: 1fr 3fr 3fr 3fr 3fr;
                align-items: center;
                padding-right: 2rem;
                padding-left: 2rem;
        `;
        }else{
            return css`
            width: ${width};
        `;
        }
      return css`
            width: ${width};
            if(titleType){
                display: grid;
                grid-template-columns: 1fr 1fr 3fr 3fr 3fr 3fr;
                align-items: center;
                background-color: red;
            }else{
                background-color: blue;
            }
        `;
    }};
`;

export const Body = styled.div`
    padding: ${padding.big};

    box-sizing: border-box;
    font-size: ${font.small};
    border-radius: 0 0 ${border.size.small} ${border.size.small};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: auto;

    backdrop-filter: blur(0.25rem);
    p{
        margin-top: 0.5rem;
    }
    button{
        background-color: red;
        width: fit-content;
        height:  ${button.size.medium};
        font-size: ${font.small};
        box-sizing: border-box;
        border: none;
        cursor: pointer;
        border-radius:  0.25rem;
        padding-left: 1rem;
        padding-right: 1rem;
        color: ${colors.white};
        background-image:  ${gradient.orangeLight};
        float: right;
        box-shadow: ${shadow.small};
        
    }

    ${({ width, height, bgColor, color, border }) => {
        return css`
            width: ${width};
            height: ${height};
            border-right: ${border};
            border-left: ${border};
            border-bottom: ${border};
            background-color: ${bgColor};
            color: ${color}
        `;
    }};

`;
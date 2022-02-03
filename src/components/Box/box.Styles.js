import styled, { css } from 'styled-components';
import {colors, shadow, margin, padding, button, border, font, gradient} from '../../global.Styles';



export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: fit-content;
    padding: ${padding.medium};
`;

export const Header = styled.div`
    border-radius: 0.5rem;
    background-image: ${gradient.light};
    font-size: ${font.medium};
    color: ${colors.white};
    height: 3rem;
    padding: ${padding.medium};
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: ${shadow.small};
    ${({ width }) => {
      return css`
            width: ${(width+1.5)+'rem'};
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
        background-image:  ${gradient.light};
        float: right;
        box-shadow: ${shadow.small};
    }

    ${({ width, height, bgColor, color, border }) => {
        return css`
            width: ${width+'rem'};
            height: ${height+'rem'};
            border-right: ${border};
            border-left: ${border};
            border-bottom: ${border};
            background-color: ${bgColor};
            color: ${color}
        `;
    }};

`;
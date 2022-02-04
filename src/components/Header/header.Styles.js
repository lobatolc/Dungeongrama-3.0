import styled from 'styled-components';
import {colors, shadow, margin, padding, button, border, font, gradient} from '../../global.Styles';

export const Container = styled.div`
    height: 4rem;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    background-color: ${colors.purple};

    div{
        display: flex;
        align-items: center;
        gap: ${margin.medium};
        margin: ${margin.small};
        box-sizing: border-box;
        img{
            height: 3rem;
        }
        h1{
            color: ${colors.white};
            height: 400;
            font-size: ${font.medium};
        }
        a{
            color:${colors.white};
            font-size: 1.2rem;
            font-weight: 500;
            height: 100%;
            border-radius: 0.25rem;
            padding: ${padding.big};
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            text-decoration: none;
            &:hover{
                background-color: ${colors.white}10;
            }
        }
    }
`;


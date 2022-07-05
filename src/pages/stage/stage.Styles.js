import styled from 'styled-components';
import {colors, spacing, shadow, margin, padding, button, border, font, gradient} from '../../global.Styles';

export const Container = styled.div`
    background-color: ${colors.white};
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;

    flex-direction: column;
    #title{
        color: ${colors.purple};
        padding: ${padding.medium};
        margin: 1rem;
    }
    #text{
        font-size:${font.small};
        margin-bottom: 1.5rem;
        padding: ${padding.medium};
        color: ${colors.purple};
        text-align: justify;
        margin: 1rem;
        margin-top: 0rem;
    }
    #boxes{
        display: flex;
        width:100%;
        justify-content: center;
        flex-wrap: wrap; 
        gap: 1rem;
    }


`;

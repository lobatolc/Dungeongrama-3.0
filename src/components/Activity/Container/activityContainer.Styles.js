import styled, { css } from 'styled-components';
import {colors, shadow, margin, padding, button, border, font, gradient} from '../../../global.Styles';

export const Container = styled.div`
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

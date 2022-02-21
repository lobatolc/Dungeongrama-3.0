import styled, {css} from 'styled-components';

export const Container = styled.div`
   ${({ isVertical }) => {
        if(isVertical){
            return css`
                height:100%;
                width: 1rem;
                background-color: black;
            `;
        }else{
            return css`
                height: 1rem;
                width:100%;
                background-color: black;
            `;
        } 

    }};
`
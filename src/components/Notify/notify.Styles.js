import styled, { css } from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    margin-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    box-sizing: border-box;
    top: 0;
`

export const NotifyBox = styled.div`
    display: flex;

    align-items: center;
    justify-content:center;
    border-radius: 30rem;
    padding-left: 2rem;
    padding-right: 2rem;
    font-size: 1.25rem;
    transition: 0.2s all ease;
    cursor: pointer;
    z-index: 999999999;
    color: white;
    
    ${({ state }) => {
            return css`  
                height: ${state.style.height};
                 width: ${state.style.width};   
                 background-image: ${state.style.backgroundImage};   
                 border: ${state.style.border};
                 box-shadow: ${state.style.shadow};

            `; 
            
    }};
`;


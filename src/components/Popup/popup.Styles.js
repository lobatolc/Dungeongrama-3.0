import styled, { css } from 'styled-components';

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
    #stageDescription{
        text-align: justify;
       
        .zeroContainer{
            
            img{
                height: 2rem;
                width: 2rem;
                margin-top: 1rem;
            }
        }
    }
    #buttonContainer{
        margin-top: 1rem;
    }
`;


import styled, {css} from 'styled-components';

export const Container = styled.div`
    width:1.8rem;
    height:1.8rem;
    padding: 0.2rem;
    background: black;
    border-radius:100rem;
    

    ${({ isInitial }) => {
            if(isInitial){
                return css`
                    #auxBall{
                        opacity: 0;
                    }
                `;
                
            }else{
                return css`
                    #auxBall{
                        background: black;
                        width: 100%;
                        height:100%;
                        border-radius:100rem;
                        border: 0.2rem solid white;
                    }
                `;
            }

    }};
`
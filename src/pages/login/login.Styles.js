import styled from 'styled-components';
import {colors, shadow, margin, padding, button, border, font, gradient} from '../../global.Styles';


export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-areas: 
    "info login"
    "dev login"
    ;
    grid-template-columns: 5fr 2fr;
    grid-template-rows: 2fr 1fr;
    gap: ${margin.big};
    box-sizing: border-box;
    padding:${margin.big};
    background-color: ${colors.purple};
`;

export const InfoContainer = styled.div`
    grid-area: info
    background-color: blue;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    h2{
        color: ${colors.white};
        font-weight: 500;
        font-size: 1.75rem;
    }
    
`;

export const LoginContainer = styled.div`
    background-color: ${colors.white};
    grid-area: login;
    box-sizing: border-box;
    border-radius: ${border.radius.small};
    padding: ${margin.medium};
    display: flex;
    justify-content: space-between;
    gap: ${margin.medium};
    align-items: center;
    flex-direction: column;
    box-shadow: ${shadow.big};

    h1{
        background-image: ${gradient.orangeDark};
        font-size: 3rem;
        background-clip: text;
        -webkit-background-clip: text;
        /* a cor do texto deve estar como transparent */
        color: transparent;
    }

    img{
        height:15rem;
        width:15rem;

    }

    button{
        height:  ${button.size.big};
        font-size: 1.5rem;
        box-sizing: border-box;
        border: none;
        cursor: pointer;
        border-radius:  ${border.radius.small};
        padding-left: 2rem;
        padding-right: 2rem;
        color: ${colors.white};
        background-image:  ${gradient.orangeLight};
        float: right;
        margin-top:5rem;
        box-shadow: ${shadow.small};
    }

    p{
        margin-top: 1rem;
        font-size: 1.2rem;
        color:  ${colors.red};
        font-weight: 500;
    }

    
`;

export const TopContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 4rem;
    align-items: center;
`;

export const BottomContainer = styled.div`
    width: 100%;
    p{
        margin-bottom: 0.25rem;
        font-size:1.5;
        color: ${colors.purple};
    }
    #register{
        color: ${colors.red};
        cursor: pointer;
    }
`;

export const DevContainer = styled.div`
    grid-area: dev;
    box-sizing: border-box;
    display:flex;
    gap: 1rem;
    align-items: flex-end;
    justify-content: center;
    border-radius: 0.75rem;
    img{
        height: 17.5rem;
    }
    #wizard{
        transform: scaleX(-1);
    }
`;

export const LoginInput = styled.input`
  width: 100%;
  height: 3rem;
  padding: 1rem;
  box-sizing: border-box;
  border: 0.15rem solid ${colors.purple};
  outline: none;
  color: ${colors.purple};
  background-color: ${colors.purpleAscent};
  font-size: 1.5rem;
  border-radius: 0.5rem;

`;

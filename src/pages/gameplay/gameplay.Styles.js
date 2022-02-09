import styled, {css} from 'styled-components';
import {colors, shadow, margin, padding, button, border, font, gradient} from '../../global.Styles';
export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-areas: 
        " inventory interface " 
        " inventory construct";
    grid-template-rows: 1fr 9fr;
    grid-template-columns: 2fr 8fr;
`;

export const Inventory = styled.div`
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    grid-area: inventory;
`;

export const Interface = styled.div`
    grid-area: interface;
    display: flex;
    align-items: center;
    padding: 1rem;
    justify-content: space-between;
    font-size: 1.5rem;
    font-weight: 500;
    color: ${colors.purple};
    #buttonsContainer{
        display: flex;
        gap: 1rem;
        .imgButtons{
            display: flex;
            align-items: center;
            justify-content: center;
            width:3rem;
            height: 3rem;
            padding: 0.5rem;
            background-image:  ${gradient.orangeLight};
            border-radius: ${border.radius.small};
            cursor: pointer;
            box-shadow: ${shadow.small};
        }
    }
        button{
        height:  ${button.size.big};
        box-sizing: border-box;
        border: none;
        cursor: pointer;
        border-radius:  0.5rem;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        font-size: 1.2rem;
        color: ${colors.white};
        background-image:  ${gradient.orangeLight};
        box-shadow: ${shadow.small};
        }
        img{
            
            height: 1.25rem;
            width: 1.25rem;
   
        }
`;

export const Construct = styled.div`
    grid-area: construct;
    margin: 1rem;
    margin-top: 0rem;
    border: 0.2rem dashed ${colors.purple}50;
    border-radius: ${border.radius.small};
   
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;


    ${({ template }) => {
        return css`    
             grid-template-areas: 
             "${template[0]} ${template[1]} ${template[2]} ${template[3]} ${template[4]} ${template[5]} ${template[6]}"
             "${template[7]} ${template[8]} ${template[9]} ${template[10]} ${template[11]} ${template[12]} ${template[13]}"
             "${template[14]} ${template[15]} ${template[16]} ${template[17]} ${template[18]} ${template[19]} ${template[20]}"
             "${template[21]} ${template[22]} ${template[23]} ${template[24]} ${template[25]} ${template[26]} ${template[27]}"
             "${template[28]} ${template[29]} ${template[30]} ${template[31]} ${template[32]} ${template[33]} ${template[34]}"
             "${template[35]} ${template[36]} ${template[37]} ${template[38]} ${template[39]} ${template[40]} ${template[41]}"
             "${template[42]} ${template[43]} ${template[44]} ${template[45]} ${template[46]} ${template[47]} ${template[48]}"
             "${template[49]} ${template[50]} ${template[51]} ${template[52]} ${template[53]} ${template[54]} ${template[55]}"
             "${template[56]} ${template[57]} ${template[58]} ${template[59]} ${template[60]} ${template[61]} ${template[62]}";
        `;
    }};

`;

export const VoidContainer = styled.div`
     width: 100%;
    height: 100%;
    ${({ area }) => {
      return css`
             
             grid-area: ${area};
        `;
    }};


`;



export const BindContainer = styled.div`
    width: 100%;
    height: 100%;
    ${({ area }) => {
      return css`
            
             grid-area: ${area};
        `;
    }};


`;

export const ActivityContainer = styled.div`
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

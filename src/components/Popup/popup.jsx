import React from 'react';
import { Container } from "./popup.Styles";
import Box from '../Box/box';
import { colors, border } from '../../global.Styles';
// import { Container } from './styles';

function Popup({title, width, widthHeader, widthContainer, heightContainer, height, className, children, popupState, setPopupState}, ...props) {

    function closePopup(node){
        if(node.target.className.includes("popup") || node.target.className.includes("boxContainer")){
            setPopupState(!popupState) 
        }
    }

    return (
        <Container onClick={closePopup.bind(this)} className={"popup"}>
            <Box 
                title={title}
                width={width} 
                height={height} 
                widthHeader={widthHeader} 
                widthContainer={'100%'}
                heightContainer={'100%'}
                border={border.color.lilac} 
                bgColor={colors.white} 
                color={colors.purple}
                children={children}
            />
        </Container>
    );
}

export default Popup;


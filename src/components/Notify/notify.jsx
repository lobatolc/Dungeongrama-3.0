import React, { useState, useEffect } from "react";
import { Container, NotifyBox } from "./notify.Styles";
import { gradient, shadow } from '../../global.Styles';
import soundError from '../../audio/ui/soundError.wav';
import soundInfo from '../../audio/ui/soundInfo.wav';
import soundSuccess from '../../audio/ui/soundSuccess.wav';
function NotifyModal(props) {
    const [notifyState, setNotifyState] = useState({
        style: {

            height: "0rem",
            width: "0%",
            backgroundImage: "",
            border:"0px solid black",
            shadow: "",
        },
        log: "",
    });
    const [lastTimeOpen, setLastTimeOpen] = useState(Date.now());
    const [modalTimer, setModalTimer] = useState();
    
    function warningType(params) {
        let background;
        let border;
        switch (params.type) {
            
            case 1:
            case "success":
                background = gradient.greenAlert;
                border = "0.25rem solid #139648";
                const soundSuc = document.getElementById("soundSuccess");
                soundSuc.volume = 0.25;
                soundSuc.play();
                break;

            case 2:
            case "error":
                background = gradient.redAlert;
                border = "0.25rem solid #9F0B0B";
                const soundErr = document.getElementById("soundError");
                soundErr.volume = 0.25;
                soundErr.play();
                
                break;
            
            case 3:
            case "info":
                background = gradient.blueAlert;
                border = "0.25rem solid #0257D8";
                const soundInf = document.getElementById("soundInfo");
                soundInf.volume = 0.35;
                soundInf.play();
                
                break;
            default:
                background = "#fff";
        }

        if (params.type != 0 && lastTimeOpen != Date.now()) {
            setNotifyState({
                style: {
                    height: "4rem",
                    width: "fit-content",
                    backgroundImage: background,
                    border: border,
                    
                    shadow: shadow.small,
                },
                log: params.log,
            });
        }
        setLastTimeOpen(Date.now);
    }

    useEffect(() => {
        warningType(props);
        clearInterval(modalTimer);
        setModalTimer(setInterval(CloseModal, 5000));
    }, [props.time]);

    function CloseModal() {
    
        setNotifyState({
            style: { height: "0px", padding: "0px", fontSize: "0px" },
        });
    }

    // função pra não fechar a modal com o mouse em cima
    function handleOnMouseEnter(node) {
        clearInterval(modalTimer);
    }

    // função pra não fechar a modal instantaneamente quando tirar o mouse
    function handleOnMouseLeave(node) {
        clearInterval(modalTimer);
        setModalTimer(setInterval(CloseModal, 5000));
    }

    // função para fechar a modal
    function HandleModalClick() {
        CloseModal();
    }



    return (
        <Container className="notifyContainer">
            <audio id="soundError" src={soundError}/>
            <audio id="soundSuccess" src={soundSuccess}/>
            <audio id="soundInfo" src={soundInfo}/>
            <NotifyBox
                notifyHeight={"50px"}
                notifyWidth={"100px"}
                state={notifyState}
                onMouseEnter={handleOnMouseEnter.bind(this)}
                onMouseLeave={handleOnMouseLeave.bind(this)}
                onClick={HandleModalClick.bind(this)}
                className="notifyBox"
            >
                <p>{notifyState.log}</p>
            </NotifyBox>
        </Container>
    );
}

export default NotifyModal;

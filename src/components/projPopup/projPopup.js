import React from 'react';
import { WhatButton } from '../whatBlock/styledWhatBlockHover';
import { Overlay, PopupLink, PopupButtonContainer, PopupContainer, PopupInfo, PopupText, PopupTitle, PopupExit } from './styledProjPopup';


const ProjPopup = (props) => {

    const closePopup = () => {
        props.close();
    }

    return (
        <Overlay
            open={props.open}>
            <PopupContainer>
                <PopupExit
                    onClick={closePopup} />
                < PopupText >
                    <PopupTitle>Hey</PopupTitle>
                    <PopupInfo>This app does cool things and steff</PopupInfo>
                    <PopupButtonContainer>
                        <PopupLink>
                            <WhatButton>
                                Visit Site
                            </WhatButton>
                        </PopupLink>
                        <PopupLink>
                            <WhatButton>
                                Visit Code
                            </WhatButton>
                        </PopupLink>
                    </PopupButtonContainer>
                </PopupText>
            </PopupContainer>
        </Overlay >
    )
}

export default ProjPopup;
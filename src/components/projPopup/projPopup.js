import { WhatButton } from '../whatBlock/styledWhatBlockHover';
import { Overlay, PopupLink, PopupButtonContainer, PopupContainer, PopupInfo, PopupText, PopupTitle, PopupExit, PopupImg } from './styledProjPopup';
import Carousel from 'react-elastic-carousel';

const ProjPopup = (props) => {

    const closePopup = () => {
        props.close();
    }

    return (
        <Overlay
            open={props.open}>
            {props.project &&
                <PopupContainer>
                    <PopupExit
                        onClick={closePopup} />
                    {props.project.images &&
                        <Carousel>
                            {props.project.images.map((image) => {
                                return (
                                    <PopupImg src={image} />
                                )
                            })}
                        </Carousel>
                    }
                    < PopupText >
                        <PopupTitle>{props.project.title}</PopupTitle>
                        <PopupInfo>{props.project.about}</PopupInfo>
                        <PopupButtonContainer>
                            <PopupLink href={props.project.site} target={'_blank'}>
                                <WhatButton $popup={true}>
                                    Visit Site
                                </WhatButton>
                            </PopupLink>
                            <PopupLink href={props.project.code} target={'_blank'}>
                                <WhatButton $popup={true}>
                                    Visit Code
                                </WhatButton>
                            </PopupLink>
                        </PopupButtonContainer>
                    </PopupText>
                </PopupContainer>
            }
        </Overlay >
    )
}

export default ProjPopup;
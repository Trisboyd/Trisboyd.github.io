import { WhatBlockInfo, WhatTitle, WhatStack, WhatButton } from "./styledWhatBlockHover"

const WhatBlockHover = (props) => {

    const openPopup = () => {
        props.openPopup();
    }

    return (
        <WhatBlockInfo>
            <WhatTitle>
                {props.title}
            </WhatTitle>
            <WhatStack>
                {props.stack}
            </WhatStack>
            <WhatButton
                onClick={openPopup}>
                Learn More
            </WhatButton>
        </WhatBlockInfo>
    )
}

export default WhatBlockHover;
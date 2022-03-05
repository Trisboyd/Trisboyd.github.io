import { WhatBlockInfo, WhatTitle, WhatStack, WhatButton } from "./styledWhatBlockHover"

const WhatBlockHover = (props) => {

    const handlePopupClick = () => {
        props.handlePopupClick(props.data);
    }

    const { title, stack } = props.data;

    return (
        <WhatBlockInfo>
            <WhatTitle>
                {title}
            </WhatTitle>
            <WhatStack>
                {stack}
            </WhatStack>
            <WhatButton
                onClick={handlePopupClick}>
                Learn More
            </WhatButton>
        </WhatBlockInfo>
    )
}

export default WhatBlockHover;
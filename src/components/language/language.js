import { useState } from 'react';
import { LangContainer, LangPic, LangText } from './styledLanguage';

const Language = (props) => {

    const [active, setActive] = useState(false);

    return (
        <LangContainer
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}>
            <LangPic src={props.image} />
            <LangText
                $active={active}>
                {props.text}
            </LangText>
        </LangContainer>
    )
}

export default Language;
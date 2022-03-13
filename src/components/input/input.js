import { ContactInput, ContactTextArea, InputContainer, InputLabel } from "./styledInput"

const Input = (props) => {

    return (
        <>
            <InputContainer>
                <InputLabel>
                    {props.label}
                </InputLabel>
                {props.input ?
                    <ContactInput
                        placeholder={props.placeholder}
                    ></ContactInput>
                    :
                    <ContactTextArea
                        height={props.height}
                        placeholder={'Creative and entertaining message!'}
                    />}
            </InputContainer>
        </>
    )
}

export default Input
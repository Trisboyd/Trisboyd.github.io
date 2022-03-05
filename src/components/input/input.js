import { ContactInput, ContactTextArea, InputContainer, InputLabel } from "./styledInput"

const Input = (props) => {

    return (
        <>
            <InputContainer
                columnStart={props.columnStart}
                columnEnd={props.columnEnd}
                rowStart={props.rowStart}
                rowEnd={props.rowEnd}
                marginL={props.marginL}
                marginR={props.marginR}
            >
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
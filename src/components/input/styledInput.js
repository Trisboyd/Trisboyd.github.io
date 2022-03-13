import styled from 'styled-components';

export const InputContainer = styled.div`
    background: #EAEBEC;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    width: 80%;
    margin: 0 auto 15px;
    padding-left: 10px;

    @media (max-width: 1024px) {
        width: 90%;
        margin: 0 auto 10px;
    }
`
export const InputLabel = styled.label`
    font-size: 20px;
    margin: 10px 0;

    @media (max-width: 525px) {
        font-size: 16px;
    }
`
export const ContactInput = styled.input`
    border: none;
    background: #EAEBEC;
    margin-bottom: 10px;
    font-size: 20px;
    line-height: 1.2;

    @media (max-width: 525px) {
        font-size: 12px;
    }
`
export const ContactTextArea = styled.textarea`
    border: none;
    background: #EAEBEC;
    margin-bottom: 10px;
    width: 100%;
    font-size: 20px;
    line-height: 1.2;
    height: ${props => props.height};

    @media (max-width: 525px) {
        font-size: 12px;
    }
    @media (max-width: 425px) {
        height: 120px;
    }
`
import styled from 'styled-components';

export const ContactSection = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: auto;
    padding: 50px 0;
    background: linear-gradient( rgb(0, 0, 0), rgb(0, 0, 149));

    @media (max-width: 525px) {
        flex-direction: column;
    }
`
export const ContactPic = styled.img`
    width: 40%;
    max-height: 635px;
    border-radius: 250px;

    @media (max-width: 525px) {
        width: 80%;
    }
`

export const ContactForm = styled.form`
    width: 40%;
    display: flex;
    flex-direction: column;
    background: #F6F7F8;
    border-radius: 20px;

    @media (max-width: 525px) {
        display: flex;
        flex-direction: column;
        width: 90%;
        margin-top: 20px;
    }
`
export const ContactTitle = styled.h3`
    font-size: 40px;
    margin: 20px auto;
    text-align: center;

    @media (max-width: 525px) {
        font-size: 32px;
    }
`
export const ContactSubmit = styled.button`
    margin: 20px auto 50px;
    width: 50%;
    height: 50px;
    background: ${props => props.$valid ? 'rgb(0, 0, 149)' : 'rgb(0, 0, 149, 0.5)'};
    color: #F1F2F4;
    font-size: 18px;
    border-radius: 40px;
    cursor: pointer;

    @media (max-width: 525px) {
        margin: 10px auto 30px;
    }
`
export const Thanks = styled.p`
    font-size: 24px;
    line-height: 1.2;
    color: white;
    text-align: center;
`

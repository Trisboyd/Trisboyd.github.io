import styled from "styled-components"

export const LangContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 50px;
    background: rgba(255,255,255,0.3);
`
export const LangPic = styled.img`
    width: 75px;
    height: 75px;

    @media (max-width: 525px) {
        width: 40px;
        height: 40px;
    }
`
export const LangText = styled.p`
    font-size: 24px;
    text-align: center;
    margin: 0;
    opacity: ${props => props.$active ? '1' : '0'};
    color: white;
    transition: opacity .2s ease-in-out;

    @media (max-width: 525px) {
        font-size: 14px;
        opacity: 1;
    }
`
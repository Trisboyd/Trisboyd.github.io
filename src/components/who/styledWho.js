import styled from 'styled-components';

export const WhoSection = styled.section`
    display: flex;
    padding: 100px 0;
    width: 85%;
    margin: 0 auto;
    align-items: center;

    @media (max-width: 525px) {
        flex-direction: column;
        width: 100%;
    }
`
export const WhoText = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;
`
export const SectionTitle = styled.h2`
    font-size: 44px;
    text-align: center;
    color: white;
    margin-bottom: 75px;
`
export const WhoInfo = styled.p`
    font-size: 24px;
    color: white;
    margin-bottom: 30px;
    text-align: center;

    @media (max-width: 525px) {
        font-size: 18px;
    }
`
export const Pic = styled.img`
    max-width: 30vw;
    max-height: 500px;
    border-radius: 28%;

    @media (max-width: 525px) {
        max-width: 50vw;
    }
`
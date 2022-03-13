import styled from 'styled-components';
import club from '../../images/clubEdit.jpg';

export const HeroSection = styled.section`
    height: 100vh;
    background-image: url(${club});
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
`
export const Profile = styled.div`
    margin-right: 5%;

    @media (max-width: 769px) {
        margin: 0;
    }
`
export const ProfileText = styled.div`
    display: flex;
    flex-direction: column;
`
export const Name = styled.h1`
    text-align: center;
    font-size: 68px;
    color: white;
    margin: 0;

    @media (max-width: 769px) {
        font-size: 48px;
    }
`
export const Job = styled.p`
    text-align: center;
    font-size: 35px;
    color: white;
    margin: 0;

    @media (max-width: 769px) {
        font-size: 24px;
    }
`
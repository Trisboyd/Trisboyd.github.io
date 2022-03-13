import styled from 'styled-components';
import exit from '../../images/exit.svg';

export const Overlay = styled.section`
    display: flex;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: center;
    align-items: center;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: ${props => props.open ? '1' : '0'};
    visibility: ${props => props.open ? 'visible' : 'hidden'};
    transition: visibility 1s, opacity 1s ease;
`
export const PopupContainer = styled.div`
    width: 50vw;
    max-width: 600px;
    max-height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 2;
    position: relative;
    background: white;
    padding: 15px 10px;
    border-radius: 20px;

    @media (max-width: 525px) {
        width: 80vw;
    }
`
export const PopupExit = styled.button`
    position: absolute;
    width: 30px;
    height: 30px;
    top: -35px;
    left: -35px;
    cursor: pointer;
    background-image: url(${exit});
    background-color: rgba(0, 0, 0, 0);
    background-size: cover;
    background-repeat: no-repeat;
    border: none;
    transition: opacity .5s ease-in-out .5s;
    `
export const PopupImgContainer = styled.div`
    position: relative;
    width: 90%;
    height: 50%;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
`
export const PopupImg = styled.img`
    width: 100%;
    margin: 0;
    align-self: center;
`
export const PopupText = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 10% auto 0 auto;
`
export const PopupTitle = styled.h4`
    font-size: 30px;
    border-bottom: solid 1px gray;
    margin-bottom: 10px;

    @media (max-width: 769px) {
        font-size: 24px;
    }
`
export const PopupInfo = styled.p`
    font-size: 18px;
    margin-bottom: 50px;

    @media (max-width: 769px) {
        font-size: 14px;
    }
`
export const PopupButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`
export const PopupLink = styled.a`
    background: inherit;
    width: 150px;
`
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
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 2;
    position: relative;
    background: white;
    `
export const PopupExit = styled.button`
    position: absolute;
    width: 20px;
    height: 20px;
    top: -25px;
    right: -25px;
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
    width: 100%;
    background-image = url(${props => props.image});
`
export const PopupText = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;
`
export const PopupTitle = styled.h4`
    font-size: 30px;
    border-bottom: solid 1px gray;
`
export const PopupInfo = styled.p`
    font-size: 18px;
    margin-bottom: 50px;
`
export const PopupButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const PopupLink = styled.a`
    background: inherit;
    width: 150px;
`
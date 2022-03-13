import styled from "styled-components";

export const Player = styled.div`
    width: 15%;
    height: 14%;
    border: solid 1px white;
    background-color: rgba(7, 99, 247, 0.4);
    position: fixed;
    z-index: 3;
    top: 5px;
    right: 5px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media (max-width: 400px) {
        width: 20%;
    }
`
export const PlayerTitle = styled.p`
    font-size: 20px;
    font-style: italic;
    text-align: center;
    color: yellow;
    margin: 0;

    @media (max-width: 769px) {
        font-size: 16px;
    }
`
export const Subtitle = styled.p`
    font-size: 16px;
    font-style: italic;
    text-align: center;
    margin: 0;
    color: white;

    @media (max-width: 769px) {
        font-size: 12px;
    }
`
export const PlayStation = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 2%;
`
export const PlayButton = styled.button`
    width: 50px;
    height: 40px;
    background: inherit;
    border: none;
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;
    opacity: 1;

    :hover {
        opacity: 0.7;
    }

    @media (max-width: 769px) {
        width: 40px;
        height: 30px;
    }
`
export const PlaySym = styled.img`
    width: 100%;
    height: 100%;
`
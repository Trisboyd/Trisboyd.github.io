import styled from "styled-components";

export const Player = styled.div`
    width: 30%;
    height: 15%;
    border: solid 1px white;
    background-color: rgba(7, 99, 247, 0.4);
    position: absolute;
    top: 5px;
    right: 5px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
`
export const PlayerTitle = styled.p`
    font-size: 20px;
    text-align: center;
    color: white;
    margin: 0;
`
export const PlayerSpan = styled.span`
    font-style: italic;
    color: yellow;
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
`
export const PlaySym = styled.img`
    width: 100%;
    height: 100%;
`
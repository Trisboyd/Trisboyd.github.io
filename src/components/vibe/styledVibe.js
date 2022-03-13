import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { glow1, glow2, glow3, glow4, glow5 } from '../../constants/vibeAnimation';

export const Vibe = styled.nav`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const VibeBar = styled.div`
    width: 15vw;
    height: 12%;
    box-sizing: border-box;
    background-image: linear-gradient(to bottom right, rgba(131, 103, 103, .4), rgb(181, 207, 231));
    border-radius: 0 18px 18px 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    transition: background-image .2s ease-in-out;
    // border: solid 4px white;

    :hover {
        background-image: linear-gradient(to top left, rgba(131, 103, 103, .4), rgb(181, 207, 231));;
        cursor: pointer;
    }
    &:first-of-type {
        animation: ${glow1} 16s linear infinite;
    }
    &:nth-of-type(2) {
        animation: ${glow2} 16s linear infinite;
    }
    &:nth-of-type(3) {
        animation: ${glow3} 16s linear infinite;
    }
    &:nth-of-type(4) {
        animation: ${glow4} 16s linear infinite;
    }
    &:nth-of-type(5) {
        animation: ${glow5} 16s linear infinite;
    }

    @media (max-width: 769px) {
        width: 20vw;
    }

`
export const Link = styled(LinkS)`
    color: #c0edfd;
    color: #f6f665;
    margin-bottom: 10%;
    font-size: 22px;

    @media (max-width: 525px) {
        font-size: 14px;
    }
`
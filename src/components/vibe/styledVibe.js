import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { glow1, glow2, glow3, glow4, glow5 } from '../../constants/vibeAnimation';

// const glow1 = keyframes`
//     0.2% {
//         border: 4px solid white;
//     }
//     3% {
//         border: 3.5px solid white;
//     }
//     4% {
//         border: 3px solid gray;
//     }
//     5% {
//         border: 2px solid gray;
//     }
//     6% {
//         border: 1px solid gray;
//     }
//     7% {
//         border: none;
//     }
//     50% {
//         border: 4px solid white;
//     }
//     60% {
//         border: none;
//     }
// `
// const glow3 = keyframes`
//     25% {
//         border: 4px solid white;
//     }
//     35% {
//         border: none;
//     }
// `
// const glow2 = keyframes`
// 13% {
//     border: 4px solid white;
// }
// 15.4% {
//     border: 3.5px solid white;
// }
// 16.4% {
//     border: 3px solid white;
// }
// 17.4% {
//     border: 2.5px solid gray;
// }
// 18.4% {
//     border: 1px solid gray;
// }
// 19.4% {
//     border: none;
// }
// `

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

`
export const Link = styled(LinkS)`
    color: #c0edfd;
    color: #f6f665;
    margin-bottom: 10%;
    font-size: 22px;
`
import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const Vibe = styled.nav`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const VibeBar = styled.div`
    width: 15vw;
    height: 10vw;
    background-image: linear-gradient(to bottom right, rgba(131, 103, 103, .5), rgb(181, 207, 231));
    border-radius: 0 18px 18px 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    transition: background .2s ease-in-out;
    // border: solid 4px white;

    :hover {
        background-image: rgba(181, 207, 231, 1);
        cursor: pointer;
    }
`
export const Link = styled(LinkS)`
    color: #c0edfd;
    color: #f6f665;
    margin-bottom: 10%;
    font-size: 22px;
`
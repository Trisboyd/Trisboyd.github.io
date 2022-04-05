import styled from 'styled-components';

export const WhatSection = styled.section`
    padding: 50px 0 0 0;
    background: linear-gradient( rgb(0, 0, 149), rgb(0, 0, 0));
    margin: auto;
`
export const WhatGrid = styled.div`
    width: 85%;
    margin: 50px auto;
    min-height: 500px;
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(3, minmax(150px, 350px));
    grid-template-rows: repeat(3, minmax(150px, 300px));
    grid-row-gap: 15px;
    grid-column-gap: 15px;

    @media (max-width: 1024px) {
        width: 90%;
    }

    @media (max-width: 768px) {
        width: 60%;
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 525px) {
        width: 75%;
    }
    `
export const WhatBlock = styled.div`
    background-image: url(${props => props.pic});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
    border-radius: 20px;
    transition: visibility .3s ease-in-out;
    opacity: ${props => props.$real ? 1 : 0};

    :hover {
        visibility: hidden;
    }

    :hover:after {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    @media (max-width: 768px) {
        height: 350px;
        display: ${props => props.$real ? 'block' : 'none'};
    }

    @media (max-width: 375px) {
        height: 200px;
    }
`
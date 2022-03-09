import styled from 'styled-components';

export const WhatSection = styled.section`
    padding: 50px 0;
    background: linear-gradient( rgb(0, 0, 149), rgb(0, 0, 0));
    margin: auto;
`
export const WhatGrid = styled.div`
    margin: 50px auto;
    min-height: 500px;
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(3, minmax(300px, 450px));
    grid-template-rows: repeat(auto-fit, minmax(200px, 400px));
    grid-row-gap: 15px;
    grid-column-gap: 15px;
    `
export const WhatBlock = styled.div`
    background-image: url(${props => props.pic});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    grid-row-start: ${props => props.rStart};
    grid-column-start: ${props => props.cStart};
    position: relative;
    border-radius: 20px;
    transition: visibility .3s ease-in-out;

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
`
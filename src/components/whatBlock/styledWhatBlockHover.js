import styled from "styled-components";
import { WhatBlock } from "../what/styledWhat";

export const WhatBlockInfo = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 20px;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;

    ${WhatBlock}:hover & {
        visibility: visible;
        opacity: 1;
    }
`
export const WhatTitle = styled.h4`
    font-size: 30px;
    text-align: center;
    margin: 8% 0;

    @media (max-width: 769px) {
        font-size: 22px;
    } 

    @media (max-width: 525px) {
        font-size: 30px;
    }
`
export const WhatStack = styled.p`
    font-size: 20px;
    color: red;
    text-align: center;

    @media (max-width: 769px) {
        font-size: 14px;
    }

    @media (max-width: 525px) {
        font-size: 24px;
    }
`
export const WhatButton = styled.button`
    font-size: 24px;
    line-height: 1.3;
    max-width: 90%;
    margin: auto;
    background: inherit;
    border: solid 1px blue;
    cursor: pointer;
    transition: background .4s ease-in-out;

    :hover {
        background: #000095;
        color: white;
        border-radius: 15px;
    }

    @media (max-width: 769px) {
        font-size: 20px;
    }

    @media (max-width: 525px) {
        font-size: ${props => props.$popup ? '18px' : '28px'};
    }

    @media (max-width: 400px) {
        font-size: ${props => props.$popup ? '14px' : '28px'};
    }
`
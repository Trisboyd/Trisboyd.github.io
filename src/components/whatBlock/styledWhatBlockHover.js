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
    visibility: hidden;

    ${WhatBlock}:hover & {
        visibility: visible;
    }
`
export const WhatTitle = styled.h4`
    font-size: 30px;
    text-align: center;
`
export const WhatStack = styled.p`
    font-size: 20px;
    color: red;
    text-align: center;
`
export const WhatButton = styled.button`
    font-size: 24px;
    line-height: 1.3;
    width: 150px;
    margin: auto;
    background: inherit;
    border: solid 1px blue;
    cursor: pointer;
    transition: background .4s ease-in-out;

    :hover {
        background: #000095;
        color: white;
    }
`
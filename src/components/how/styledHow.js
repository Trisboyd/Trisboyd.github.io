import styled from "styled-components";

export const HowSection = styled.section`
    width: 100%;
    padding: 50px 0;
`
export const HowGrid = styled.div`
    width: 60%;
    display: grid;
    grid-template-columns: repeat(3, minmax(100px, 300px));
    grid-template-rows: repeat(3, minmax(100px, 200px));
    margin: auto;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    margin: auto;
`
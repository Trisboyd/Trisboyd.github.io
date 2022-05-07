import styled from "styled-components";

export const FooterSection = styled.footer`
    max-width: 1440px;
    padding: 50px 0;
    border-top: 1px solid #7a7a7a;
    display: flex;
    flex-direction: column;
    margin: auto;
`
export const FooterText = styled.p`
    font-size: 18px;
    text-align: center;
    margin: auto;
    color: white;
`
export const Links = styled.div`
    width: 50%;
    margin: 0 auto 25px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const Link = styled.a`
    cursor: pointer;
`
export const Image = styled.img`
    width: 40px;
    height: 40px;
    padding: ${props => props.padding};

    :hover {
        opacity: 0.8;
    }
`
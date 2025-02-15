import styled from "styled-components";

export const content = styled.div`
    width: 100%;
    margin: 0 auto;
    max-width: 1216px;
    padding: 0rem 1rem;
    @media screen and (min-width: 1920px){
        width: 100%;
        margin: 0 auto;
        max-width: 1546px;
    }

    @media screen and (max-width: 768px){
        max-width: 315px;
        padding: 0rem 1rem;
    }
`
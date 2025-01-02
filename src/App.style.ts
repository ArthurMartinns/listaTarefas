import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;
`
export const Header = styled.div`
    width: 100%;
    height: 10%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-between;

    border: 1px solid #000;
`

export const Lista = styled.ul`
    > li {
        list-style: none;
    }
`
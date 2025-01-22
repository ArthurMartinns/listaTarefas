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

    padding: 0 1rem;
`

export const Lista = styled.ul`
    > li {
        list-style: none;
    }
    padding: 0 1rem;
`

export const ListItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    > li {
        list-style: none;
    }
`

export const input = styled.input`
    padding: .6rem;
`

export const plus = styled.button`
    padding: .6rem;
`
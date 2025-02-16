import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    background-color: #e9f1f7;
`
export const Nav = styled.div`
    width: 100%;
    height: 10%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-between;

    > form {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
`

export const Lista = styled.ul`
    > li {
        list-style: none;
    }
    padding: 1rem;
    background-color:rgb(195, 202, 207);
    margin-top: 1rem;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const ListItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 1rem;

    > li {
        list-style: none;
    }
    background-color: #fff;
`

export const input = styled.input`
    padding: .6rem;
    border: 1px solid #6d6d6d;
    border-radius: 6px;
    background-color: transparent;
`

export const plus = styled.button`
    padding: .8rem;
    background-color: rgb(108, 169, 216);
    color: #fff;
    font-weight: 500;
    border: none;
    border-radius: 8px;
    font-family: "Roboto Slab", serif;
    cursor: pointer;
`
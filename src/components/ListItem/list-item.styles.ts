import styled from "styled-components";

export const ListItemContainer = styled.div`
    width: 100%;

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

    border: 6px;
`
import styled from "styled-components";

export const ListItemContent = styled.div`
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
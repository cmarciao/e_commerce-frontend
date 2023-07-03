import styled from "styled-components";

export const Container = styled.div`
    max-width: 1180px;
    width: 100%;
    
    margin: 0 auto;
    padding: 6rem 1rem 2rem;
`;

export const Content = styled.div`
    display: grid;
    grid-template-areas: 
    "div div div div";
    justify-content: space-between;
    
    margin-top: 3rem;
    gap: 1rem;

    @media(max-width: 1025px) {
        grid-template-areas: "div div div";
        justify-content: space-between;
    }

    @media(max-width: 662px) {
        grid-template-areas: "div div";
        justify-content: space-between;
    }

    @media(max-width: 414px) {
        grid-template-areas: "div";
        justify-content: center;
    }
`;
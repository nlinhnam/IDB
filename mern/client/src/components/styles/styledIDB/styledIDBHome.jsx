import styled from "styled-components";

export const StyledPrevPosts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    align-self: center;
    border: 1px solid black;
    border-radius: 25px;
    width: 70vw;
    height: 60vh;
    background-color: #d3d3d3;
    box-shadow: 2px 2px 2px 1px rgba(5, 60, 10, 0.8);
    li{
    list-style-type: none;
    margin: 1rem 1rem;
    }
    ul{
    display: flex;
    flex-direction: column;
    padding: 0;
    }
    li a {
 // increases the surface area of the anchor tag to span more than just the anchor text
    text-decoration: none;
    display: block;
    width: 100%;   
   }

`;


export const StyledBoard= styled.div `
    display:flex;
    flex-direction:column;
    align-items: center;
    width: 70vw;
    height: 100vh;
    margin-left:auto;
`;

export const IDBLayout= styled.div `
display:flex;
flex-direction:row;
width: 100vw;
height: 100vh;
`

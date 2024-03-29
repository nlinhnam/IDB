import styled from "styled-components";

export const StyledExistingPost = styled.div `
display: flex;
flex-direction: row;
align-items: stretch;
justify-content:stretch;
position:relative;
border: 1px solid black;
width: 75vw;
background-color: #EEEEEE;
box-shadow: 2px 2px 2px 1px rgba(5, 60, 10, 0.8);
`;
export const StyledPostText = styled.div `
display: flex;
flex-direction: column;
align-self: center;
float:right;
background-color: #EEEEEE;
width: 55vw;
margin-top: 10px ;
margin-left: 20px;
margin-bottom: 10px;
overflow-y: scroll;
`;

export const StyledButton = styled.button `
    color : rgb(5, 60, 10);
    font-family : sans-serif;
    border:0;
    width: 5vw;
    margin-left:auto;
    border-radius: 20px;
    bottom:0;
    margin-left: 5px;
`
export const StyledCourseName= styled.div`
    align-self:center;
`
export const StyledPostName = styled.div `
     font-family : sans-serif;
     color: black;
     align-self: left;
     margin-top: 10px;
`
export const StyledPostDate = styled.div`
    color: grey;
    font-family: sans-serif;
    top: 0;
    left: 0;
`

export const StyledDetails = styled.div`
    display: flex;
    flex-direction: row;
    border:0;
    bottom:0;
    margin-left:auto;
`

export const StyledRHS = styled.div`
    display: flex;
    flex-direction: column;
    border:0;
    bottom:0;
    margin-left:auto;
`
export const StyledClosedThread = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:stretch;
    border: 1px solid black;
    width: 75vw;
    height: 6vh;
    background-color: #EEEEEE;
    box-shadow: 2px 2px 2px 1px rgba(5, 60, 10, 0.8);
`
export const StyledThreadDate = styled.div`
    color: grey;
    font-family: sans-serif;
    top: 0;
    margin-left: auto;
`

export const StyledThreadTitle = styled.button`
    color : rgb(5, 60, 10);
    font-family : sans-serif;
    border:0;
    bottom:0;
    padding-left: 20px;
`

export const StyledOpenThread = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
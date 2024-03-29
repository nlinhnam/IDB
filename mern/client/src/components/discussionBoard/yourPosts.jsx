import React,{useState, useEffect} from "react"
import {useLocation} from 'react-router-dom';
import { Nav } from "./nav/nav";
import { StyledMark} from "../styles/styledDesign"
import { Mark } from "../design";
import {StyledIDBLayout, StyledPostDisplay, StyledMyPrevPosts,StyledCourseName } from "../styles/history/styledHistory";
import { StyledTitle } from "../styles/authStyles/styledLogin";
import {Post} from "./posts/post"

export const YourPosts = () => {
    const location = useLocation();
    const userId = location.state.id;
    const [myPosts, setMyPosts] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:3000/api/user/posts?id=' + userId,{method: 'get'})
        .then(response => {return response.json()})
        .then(data => {setMyPosts(data)});
    }, [])

    return(
        <StyledIDBLayout>
            <div>
            <Nav {...{userId}}/>
            <StyledMark><Mark/></StyledMark>
            </div>
            <StyledPostDisplay>
            <StyledTitle><h1>Intelligent Discussion Board</h1></StyledTitle>
            <StyledMyPrevPosts>
                <StyledCourseName><h2>Your Posts</h2></StyledCourseName>
                <ul>
                {myPosts.map(post => (<li key={post._id}>
                    <Post {...{post,userId}}/>
                </li>))}
                </ul>    
            </StyledMyPrevPosts>
            </StyledPostDisplay>
        </StyledIDBLayout>
    )
}
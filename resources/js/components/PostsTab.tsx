import * as React from "react";
import Post from "@/components/Post";

export default function PostsTab({posts, userid}) {
    
    let postsElements = [];

    for (let i = 0; i < posts.length; i++)
        postsElements.push(<Post titulo = "teste" texto = "teste" userid = {userid}/>);

    return (
        <div className = "relative top-20 left-20">
            {postsElements}
        </div>
    );
}
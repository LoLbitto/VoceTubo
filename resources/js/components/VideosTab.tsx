import * as React from 'react';
import Video from "@/components/Video.tsx";

export default function VideosTab({userid, videos}) {

    let videosArr = [];

    if (videos.length > 0) {
        for (let i = 0; i < videos.length; i++) {
            videosArr.push(
                <Video titulo = {videos[i].title} id = {videos[i].id} user = {userid} poster = {videos[i].user}/>
            );
        }
    } else {
        videosArr = (
            <div className = "w-full text-center">
                <h1> Não há vídeos postados! </h1>
            </div>
        );
    }


    return (
        <div className = "flex pt-20 pl-30 flex-wrap gap-5 w-screen h-fit">
            {videosArr}
        </div>
    );
}

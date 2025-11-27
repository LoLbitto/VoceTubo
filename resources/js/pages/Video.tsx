import * as React from 'react';
import Header from '@/components/Header';
import VideoElement from "@/components/VideoElement.tsx";

export default function Video({video, channel, user, subs, videos, issub}) {

    let videosArr = [];


    if (videos.length > 0) {
        for (let i = 0; i < videos.length; i++) {
            videosArr.push(
                <VideoElement titulo = {videos[i].title} id = {videos[i].id} user = {user} poster = {videos[i].user}/>
            );
        }
    } else {
        videosArr = (
            <div className = "w-full text-center">
                <h1> Não há vídeos postados! </h1>
            </div>
        );
    }

    document.addEventListener('click', (event) => {
        let popUps = document.getElementsByClassName("popUp");

        if (popUps.length > 0) {
            for (let i = 0; i < popUps.length; i++) {
                if (popUps[i].classList.contains('removable')) {
                    popUps[i].remove();
                    console.log("a");
                }
            }
        }
    });

    return (
        <div className = "">
            <Header/>

            <div className = "grid grid-cols-[1000px_1fr]">
                <div className = "w-230 h-fit ml-15 mt-10">
                    <div className = "w-230 rounded-xl">
                        <video width = "1000" height = "550" className = "rounded-xl" controls>
                            <source src = {"/storage/uploads/videos/" + video.id + ".mp4"} type = "video/mp4"/>
                        </video>
                    </div>
                    <div className = "w-full">
                        <h1 className = "text-2xl">{video.title}</h1>
                        <br/>
                        <div className = "grid grid-cols-2 w-230">
                            <div className = "flex">
                                <img className = "w-14 dark:invert" src = "/images/user.webp" onClick = {() => {
                                    window.location = "/channel/" + channel.username;
                                }}></img>
                                <h1 className = "ml-3 text-xl" onClick = {() => {
                                    window.location = "/channel/" + channel.username;
                                }}>{channel.username}<p className = "text-sm">{subs} subs</p></h1>
                            </div>
                            { user == channel.id ?
                            <div/>
                            :
                           <button className = "justify-self-end font-mono border-0 font-semibold outline-foreground outline-4 p-1 w-fit rounded-3xl text-lg text-foreground hover:bg-foreground hover:outline-foreground hover:text-background transition delay-40 furation-300" onClick = {() => {
                                window.location = "/sub/" + channel.id;
                            }}> {issub ? "Desinscrever-se" : "Inscrever-se"} </button>
                            }
                        </div>
                        <br/>
                        <div className = "w-230 rounded-xl bg-card p-3">
                            <p className = "text-bold text-2xl"> Descrição </p>
                            <p> {video.description} </p>
                        </div>
                    </div>
                </div>
                <div className = "text-center">
                    <div className = "h-full w-full">
                        {videosArr}
                    </div>
                </div>
            </div>
        </div>
    );
}

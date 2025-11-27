import * as React from 'react';
import Header from '@/components/Header';


export default function Video({video, user, subs}) {


    return (
        <div>
            <Header/>

            <div className = "w-230 h-125 ml-15 mt-10 rounded-xl">
                <video width = "1000" height = "550" className = "rounded-xl" controls>
                    <source src = {"/storage/uploads/videos/" + video.id + ".mp4"} type = "video/mp4"/>
                </video>
            </div>
            <div className = "ml-15">
                <h1 className = "text-2xl">{video.title}</h1>
                <br/>
                <div className = "flex">
                    <img className = "w-14 dark:invert" src = "/images/user.webp" onClick = {() => {
                        window.location = "/channel/" + user.username;
                    }}></img>
                    <h1 className = "ml-3 text-xl" onClick = {() => {
                        window.location = "/channel/" + user.username;
                    }}>{user.username}<p className = "text-sm">{subs} subs</p></h1>
                </div>
            </div>
        </div>
    );
}

import ReactDOM from "react-dom/client";
import Header from "@/components/Header.tsx";
import VideoElement from "@/components/VideoElement.tsx";
import ChannelMenu from "@/components/ChannelMenu.tsx";
import PostsTab from "@/components/PostsTab.tsx";
import VideosTab from "@/components/VideosTab.tsx";
import * as React from "react";

export default function Channel({username, subs, userid, user, posts, videos}) {
    console.log(posts);
    var [tab, setTab] = React.useState(0);

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
        <div className = "h-full">
            <Header />
            <ChannelMenu tab = {tab} setTab = {setTab} username = {username} subs = {subs} userid = {userid}/>
            <br/>
            <br/>
            <br/>
            <br/>
            {tab == 0 ?
            <div className = " h-fit">
                <button className = "absolute left-20 border-3 border-foreground rounded-xl p-2" onClick = {() => {window.location = "/videos"}}>
                    Novo
                </button>
                <VideosTab videos = {videos} userid = {userid == -1? user : userid}/>
            </div>
            : tab == 1 ?
            <div className = "relative top-20 h-fit">
                <button className = "absolute left-20 border-3 border-foreground rounded-xl p-2" onClick = {() => {window.location = "/posts"}}>
                    Novo
                </button>
                <PostsTab posts = {posts} userid = {userid}/>
            </div>
            :
            <div className = "relative top-20">
                <p className = "text-center">Ainda não implementado</p>
            </div>
            }
        </div>
    );
}

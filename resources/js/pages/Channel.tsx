import ReactDOM from "react-dom/client";
import Header from "@/components/Header.tsx";
import Video from "@/components/Video.tsx";
import ChannelMenu from "@/components/ChannelMenu.tsx";
import PostsTab from "@/components/PostsTab.tsx";
import * as React from "react";

export default function Channel({username, subs, userid}) {
    var [tab, setTab] = React.useState(0);
    return (
        <div>
            <Header />
            <ChannelMenu tab = {tab} setTab = {setTab} username = {username} subs = {subs} userid = {userid}/>
            {tab == 0 ?
            <div className = "relative top-20">
                <p className = "text-center">Ainda não implementado</p>
            </div>
            : tab == 1 ?
            <div className = "relative top-20">
                <button className = "absolute left-20 border-3 border-foreground rounded-xl p-2">
                    Novo
                </button>
                <PostsTab posts = {[2, 3]} userid = {userid}/>
            </div>
            : 
            <div className = "relative top-20">
                <p className = "text-center">Ainda não implementado</p>
            </div>
            }
        </div>
    );
}

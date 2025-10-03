import ReactDOM from "react-dom/client";
import Header from "@/components/Header.tsx";
import Video from "@/components/Video.tsx";
import ChannelMenu from "@/components/ChannelMenu.tsx";
import * as React from "react";

export default function Channel({username, subs, userid}) {
    var [tab, setTab] = React.useState(0);
    return (
        <div>
            <Header />
            <ChannelMenu tab = {tab} setTab = {setTab} username = {username} subs = {subs} userid = {userid}/>
        </div>
    );
}

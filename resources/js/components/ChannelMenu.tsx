import ReactDOM from "react-dom/client";
import * as React from "react";

export default function ChannelMenu({tab, setTab, username, subs, userid}) {
    return (
        <div>
            <img src = "/images/banner.jpg" className = "w-full h-90 object-none" />
            <div className = "rounded-full bg-background absolute top-90 left-20 object-none border-background border-10">
                <img src = "/images/user.webp" className = "w-40 h-40 dark:invert rounded-3xl"/>
            </div>
            <div className = "relative left-70 pt-2">
                <h1 className = "font-bold font-sans text-5xl"> {username} </h1>
                <p> {subs} subscribers </p>
            </div>
            { userid != -1 ?
            <button className = "absolute top-113 right-10 font-sans border-foreground border-3 rounded-xl p-2 text-xl hover:bg-foreground hover:text-background transition duration-200 delay-100" onClick = {() => {sendSubFetch(userid)}}> Inscrever-se </button>
            :
            null
            }
            <nav className = "relative top-15 border-b-2 grid grid-cols-3 text-lg">
                <button className = {tab == 0 ? "border-b-5" : ""} onClick = {() => {setTab(0)}}> Videos </button>
                <button className = {tab == 1 ? "border-b-5" : ""} onClick = {() => {setTab(1)}}> Posts </button>
                <button className = {tab == 2 ? "border-b-5" : ""} onClick = {() => {setTab(2)}}> Canais </button>
            </nav>
        </div>
    );
}

function sendSubFetch(id) {
    return fetch("/api/subrequest", {
        method: "POST",
        headers: {
            'Content-Type' : "application/json"
        },
        body: JSON.stringify({
            id : id,
        }),
    }).then(function (response) {
        return response;
    });
}

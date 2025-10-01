import ReactDOM from "react-dom/client";
import * as React from "react";

export default function ChannelMenu({tab, setTab}) {
    return (
        <div>
            <img src = "/images/banner.jpg" class = "w-full h-90 object-none" />
            <div class = "rounded-full bg-background absolute top-90 left-20 object-none border-background border-10">
                <img src = "/images/user.webp" class = "w-40 h-40 invert rounded-3xl"/>
            </div>
            <div class = "relative left-70 pt-2">
                <h1 class = "font-bold font-sans text-5xl"> Nome do canal </h1>
                <p> 2.000 subscribers </p>
            </div>
            <button class = "absolute top-113 right-10 font-sans border-foreground border-3 rounded-xl p-2 text-xl hover:bg-foreground hover:text-background transition duration-200 delay-100"> Inscrever-se </button>
            <nav class = "relative top-15 border-b-2 grid grid-cols-3 text-lg">
                <button class = {tab == 0 ? "border-b-5" : ""} onClick = {() => {setTab(0)}}> Videos </button>
                <button class = {tab == 1 ? "border-b-5" : ""} onClick = {() => {setTab(1)}}> Posts </button>
                <button class = {tab == 2 ? "border-b-5" : ""} onClick = {() => {setTab(2)}}> Canais </button>
            </nav>
        </div>
    );
}

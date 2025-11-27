import ReactDOM from "react-dom/client";
import Header from "@/components/Header.tsx";
import VideoElement from "@/components/VideoElement.tsx";

export default function Home({ user, videos }) {

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
        <div>
            <Header user = {user}/>
            <div className = "flex mt-10 pl-30 flex-wrap gap-5 w-screen">
                {videosArr}
            </div>
        </div>
    );
}


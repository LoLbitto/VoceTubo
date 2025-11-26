import ReactDOM from "react-dom/client";
import Header from "@/components/Header.tsx";
import Video from "@/components/Video.tsx";

export default function Home({ user, videos }) {

    let videosArr = [];

    for (let i = 0; i < videos.length; i++) {
        videosArr.push(
            <Video titulo = {videos[i].title} id = {videos[i].id} user = {videos[i].user}/>
        );
    }

    return (
        <div>
            <Header user = {user}/>
            <div className = "flex mt-10 pl-30 flex-wrap gap-5 w-screen">
                {videosArr}
            </div>
        </div>
    );
}


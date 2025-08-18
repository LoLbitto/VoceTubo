import ReactDOM from "react-dom/client";
import Header from "./components/Header.tsx";
import Video from "./components/Video.tsx";

export default function Teste() {
    const videos = document.getElementsByClassName("videoData");

    return (
        <div id = "videosList">
            <Video titulo = {videos[0].getAttribute("title")}/>
            <Video titulo = "teste2"/>
            <Video titulo = "teste3"/>
        </div>
    );
}

const entryPoint = document.getElementById("root");
const header = document.getElementById("header");

ReactDOM.createRoot(entryPoint).render(<Teste/>);
ReactDOM.createRoot(header).render(<Header />);

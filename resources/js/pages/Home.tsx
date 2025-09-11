import ReactDOM from "react-dom/client";
import Header from "@/components/Header.tsx";
import Video from "@/components/Video.tsx";

export default function Home() {
    return (
        <div>
            <Header />
            <div className = "flex mt-10 pl-30 flex-wrap gap-5 w-screen">
                <Video titulo = "teste1"/>
                <Video titulo = "teste2"/>
                <Video titulo = "teste3"/>
                <Video titulo = "teste1"/>
                <Video titulo = "teste1"/>
                <Video titulo = "teste1"/>
                <Video titulo = "teste1"/>
            </div>
        </div>
    );
}


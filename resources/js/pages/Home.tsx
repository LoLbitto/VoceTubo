import ReactDOM from "react-dom/client";
import Header from "@/components/Header.tsx";
import Video from "@/components/Video.tsx";

export default function Home() {
    return (
        <div>
            <Header />
            <Video titulo = "teste1"/>
            <Video titulo = "teste2"/>
            <Video titulo = "teste3"/>
        </div>
    );
}


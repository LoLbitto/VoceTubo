import ReactDOM from "react-dom/client";
import Header from "./components/Header.tsx";

export default function Teste() {
    return (
        <div>
            <h1> Teste </h1>
        </div>
    );
}

const entryPoint = document.getElementById("root");
const header = document.getElementById("header");

ReactDOM.createRoot(entryPoint).render(<Teste />);
ReactDOM.createRoot(header).render(<Header />);

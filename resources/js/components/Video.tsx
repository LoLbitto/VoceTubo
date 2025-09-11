export default function Video(props) {
    return (
        <div className = "rounded-xl w-60 h-60 inline-block hover:bg-card">
            <div className = "rounded-xl ml-4 mt-4 w-51 h-30 bg-gray-200">
            </div>
            <p className = "ml-5 mt-1">{props.titulo}</p>
        </div>
    );
}

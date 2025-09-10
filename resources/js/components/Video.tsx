export default function Video(props) {
    return (
        <div className = "pt-10 mt-5 ml-5 mr-5 mb-5 rounded-xl w-90 h-110 inline-block">
            <div className = "rounded-xl ml-10 w-80 h-11 bg-grey-200">
            </div>
            <p>{props.titulo}</p>
        </div>
    );
}

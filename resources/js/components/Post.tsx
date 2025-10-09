

export default function Post({titulo, texto, id, userid}) {

    return (
        <div className = "p-3 mb-5 border-3 border-foreground w-435 rounded-xl">
            <button className = "absolute left-420" onClick = {() => {window.location.href = "/posts/" + id + "/edit"}}>
                Edit
            </button>
            <h1 className = "text-2xl font-bold">
                {titulo}
            </h1>
            <p className = "">
                {texto}
            </p>
        </div>
    );
}
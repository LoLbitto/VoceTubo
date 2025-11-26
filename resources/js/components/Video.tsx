export default function Video({titulo, id, user}) {
    return (
        <div className = "rounded-xl w-60 h-60 inline-block hover:bg-card">
            <div className = "rounded-xl ml-4 mt-4 w-51 h-30 bg-background bg-contain bg-center bg-no-repeat" id = {"thumb-" + id} style = {{
                backgroundImage: `url(${"/storage/uploads/thumbs/" + id + ".jpg"})`,
            }}>
            </div>
            <p className = "ml-5 mt-1 text-xl font-bold">{titulo}</p>
            <p className = "ml-5 mt-1">{user.username}</p>
        </div>
    );
}

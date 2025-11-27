export default function Header({ user }) {
    return(
        <header className = "h-20 grid grid-cols-3">
            <a className = "pt-5 pl-5 font-sans text-x2 font-medium text-gray-900 text-3xl dark:text-gray-200 justify-self-start inline-box" href = "/">
                <t className = "text-red-500">Você</t>Tubo
            </a>

            <form method = "GET" className = "inline-block w-fit h-full justify-self-center">
                <div className = "grid place-items-center h-full">
                    <div className = "inline-block h-9 w-190">
                        <div className = "inline-block border-2 border-r-0 h-full border-foreground rounded-l-2xl">
                            <input type = "text" name = "pesquisa" className = "h-full w-150 outline-0 pl-3" />
                        </div>
                        <div className = "grid place-items-center inline-block align-top rounded-r-2xl h-full w-25 border-foreground bg-foreground">
                            <button type = "submit" className = "text-background text-center w-full font-mono h-full rounded-r-2xl outline-0 border-foreground bg-foreground "> Pesquisar </button>
                        </div>
                    </div>
                </div>
            </form>

            {user != null ?
            <a className = "pt-3 pr-3 inline-box justify-self-end" href = "/login/">
                <img className = "w-14 dark:invert" src = "/images/user.webp"></img>
            </a>
            :
            <button className = "border-2 border-foreground h-10 mt-5 mr-5 rounded-xl w-20 inline-box justify-self-end hover:bg-foreground hover:text-background" onClick = {() => {
                window.location = "/login/";
            }}> Entrar </button>
            }
        </header>
    )
}

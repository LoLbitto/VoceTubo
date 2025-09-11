export default function Header() {
    return(
        <header className = "h-20 grid grid-cols-3">
            <p className = "pt-5 pl-5 font-sans text-x2 font-medium text-gray-900 text-3xl dark:text-gray-200 justify-self-start inline-box">
                <t className = "text-red-500">Você</t>Tubo
            </p>

            <form method = "GET" className = "inline-block w-fit h-full justify-self-center">
                <div className = "grid place-items-center h-full">
                    <div className = "inline-block h-9 w-170">
                        <div className = "inline-block border-2 border-r-0 h-full border-foreground rounded-l-2xl">
                            <input type = "text" name = "pesquisa" className = "h-full w-150 outline-0 pl-3" />
                        </div>
                        <div className = "grid place-items-center inline-block align-top rounded-r-2xl h-full w-19 border-foreground bg-foreground">
                            <input type = "submit" className = "text-background text-center w-full font-mono h-full rounded-r-2xl outline-0 border-foreground bg-foreground "/>
                        </div>
                    </div>
                </div>
            </form>

            <a className = "pt-3 pr-3 inline-box justify-self-end" href = "login/">
                <img className = "w-14 invert" src = "images/user.webp"></img>
            </a>
        </header>
    )
}

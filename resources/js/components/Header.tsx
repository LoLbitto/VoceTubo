export default function Header() {
    return(
        <header className = "h-20 grid grid-cols-3">
            <p className = "pt-5 pl-5 font-sans text-x2 font-medium text-gray-900 text-3xl dark:text-gray-200 justify-self-start inline-box">
                <t className = "text-red-500">Você</t>Tubo
            </p>

            <form method = "GET" className = "inline-block w-fit h-full justify-self-center">
                <div className = "grid place-items-center h-full">
                    <div className = "inline-block border-1 border-gray-900 h-9 w-170 rounded-2xl dark:border-gray-400">
                        <input type = "text" name = "pesquisa" className = "h-6 mt-1.5 ml-3 w-150 outline-0" />
                        <input type = "submit" className = "inline-block text-gray-900 font-mono h-full border-1 border-gray-400 float-right bg-gray-400 rounded-r-2xl"/>
                    </div>
                </div>
            </form>

            <a className = "pt-3 pr-3 inline-box justify-self-end" href = "login/">
                <img className = "w-14" src = "images/user.webp"></img>
            </a>
        </header>
    )
}



export default function Header() {
    return(
        <div>
            <p id = "logo" class = "font-sans text-x2 font-medium text-gray-900 dark:text-gray-200 float-start inline">
                <t class = "text-red-500">Você</t>Tubo
            </p>

            <form method = "GET" class = "inline">
                <div id = "search-bar" class = "inline-block">
                    <div id = "search-bar-body" class = "inline-block">
                        <input type = "text" id = "ipesquisa" name = "pesquisa" />
                    </div>
                    <input type = "submit" id = "search-bt-div" class = "inline-block float-right"/>
                </div>
            </form>

            <a class = "inline float-right" href = "login/">
                <img src = "images/user.webp" id = "user-icon"></img>
            </a>
        </div>
    )
}

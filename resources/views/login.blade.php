<!DOCTYPE html>
<html>

    <head>
        @viteReactRefresh
        @vite(['resources/js/login.tsx', 'resources/css/theme.css'])
    </head>
    <body>
        <div class = "flex items-center h-screen w-screen p-10">
            <div class = "rounded-2xl bg-gray-300 h-full w-1/3 p-5 ">
                <h1 class = "text-5xl text-center font-sans text-gray-800 antialised font-semibold"> Junte-se ao <t class = "text-5xl text-center font-sans text-red-800 antialised font-semibold">Você</t>Tubo! </h1>
            </div>
            <div class = "h-full w-2/3 p-5">
                <t class = "text-4xl text-center font-mono font-medium antialised">Login</t>

                <form class = "pt-10">
                    <label for= "email" class = "text-2xl font-light">
                        E-Mail
                    </label>
                    <br>
                    <input type= "text" placeholder = "E-Mail" name = "email" class= "rounded-2xl border-gray-300 border-solid border-2 w-60 h-10">
                    <br>
                    <br>
                    <label for= "senha" class = "text-2xl font-light">
                        Senha
                    </label>
                    <br>
                    <input type= "text" placeholder = "Senha" name = "senha" class= "rounded-2xl border-gray-300 border-solid border-2 w-60 h-10">
                </form>
            </div>
        </div>
    </body>
</html>

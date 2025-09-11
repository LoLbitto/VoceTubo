
@extends('layouts.main_layout')

@section('js')
    @viteReactRefresh
    @vite(['resources/js/login.tsx', 'resources/css/app.css'])
@endsection

@section('content')
    <a href = "/" class = "fixed mt-1 ml-1"><button class = "font-mono border-0 font-semibold outline-gray-300 outline-2 p-1 w-20 rounded-3xl text-lg text-gray-400 hover:bg-gray-300 hover:text-gray-700 hover:outline-gray-300 hover:border-gray-300 transition delay-40 furation-300"> Voltar </button></a>
    <div class = "flex h-screen w-screen p-10">
        <div class = "rounded-2xl bg-gray-300 dark:bg-card h-full w-1/3 p-5 ml-55">
            <h1 class = "text-5xl text-center font-sans text-gray-800 dark:text-gray-200 antialised font-semibold"> Junte-se ao <t class = "text-5xl text-center font-sans text-red-800 antialised font-semibold">Você</t>Tubo! </h1>
        </div>
        <div class = "h-full w-1/3 p-5 text-center">
            <t class = "text-4xl text-center font-mono font-medium antialised">Registro</t>
            <div class = "text-left">
                <form class = "pt-10">
                    <label for= "email" class = "text-2xl font-light">
                        E-Mail
                    </label>
                    <br>
                    <input type= "text" placeholder = "E-Mail" name = "email" class= "font-mono font-medium rounded-2xl border-gray-300 border-3 border-solid p-2 w-50 focus:border-gray-400 focus:outline-0 transition delay-40 duration-300 w-full">
                    <br>
                    <br>
                    <label for= "username" class = "text-2xl font-light">
                        Nome de Usuário
                    </label>
                    <br>
                    <input type= "text" placeholder = "Nome" name = "username" class= "font-mono font-medium rounded-2xl border-gray-300 border-3 border-solid p-2 w-50 focus:border-gray-400 focus:outline-0 transition delay-40 duration-300 w-full">
                    <br>
                    <br>
                    <label for= "senha" class = "text-2xl font-light">
                        Senha
                    </label>
                    <br>
                    <input type= "text" placeholder = "Senha" name = "senha" class= "font-mono font-medium rounded-2xl border-gray-300 border-3 border-solid p-2 w-50 focus:border-gray-400 focus:outline-0 transition delay-40 duration-300 w-full">
                    <br>
                    <br>
                    <div class = "text-center">
                        <input type= "submit" value= "Criar conta" class= "font-mono border-0 font-semibold outline-gray-300 outline-4 p-2 w-60 rounded-3xl text-xl text-gray-400 hover:bg-gray-300 hover:text-gray-700 hover:outline-gray-300 hover:border-gray-300 transition delay-40 furation-300">
                    </div>
                </form>
            </div>
            <br>
            <div class = "flex">
                <div class = "ml-4 w-4/10 h-1 bg-gray-300 border-gray-300 border-solid border-1 rounded-2xl mt-3.5"></div>
                <p class = "ml-4 mr-4 font-mono font-semibold text-xl text-gray-400">Ou</p>
                <div class = "w-4/10 h-1 bg-gray-300 border-gray-300 border-solid border-1 rounded-2xl mt-3.5"></div>
            </div>
            <br>
            <a href= "/login"><button class = "font-mono border-0 font-semibold outline-gray-300 outline-4 p-2 w-60 rounded-3xl text-xl text-gray-400 hover:bg-gray-300 hover:text-gray-700 hover:outline-gray-300 hover:border-gray-300 transition delay-40 furation-300"> Entrar </button></a>
        </div>
    </div>
@endsection

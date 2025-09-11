@extends('layouts.main_layout')

@section('js')
    @viteReactRefresh
    @vite(['resources/js/login.tsx', 'resources/css/app.css'])
@endsection

@section('content')

    <div class = "flex h-screen w-screen p-10">
        <div class = "rounded-2xl bg-gray-300 dark:bg-card h-full w-1/3 p-5 ml-55">
            <h1 class = "text-5xl text-center font-sans text-gray-800 dark:text-gray-200 antialised font-semibold"> Junte-se ao <t class = "text-5xl text-center font-sans text-red-800 antialised font-semibold">Você</t>Tubo! </h1>
        </div>
        <div class = "h-full w-1/3 p-5 text-center">
            <t class = "text-4xl text-center font-mono font-medium antialised">Login</t>
            <div class = "text-left">
                <form method = "POST" class = "pt-10" action = "{{route('login.submit')}}">
                    @csrf
                    <label for= "email" class = "text-2xl font-light">
                        E-Mail
                    </label>
                    <br>
                    <input type= "text" placeholder = "E-Mail" name = "email" value = "{{old('email')}}" class= "font-mono font-medium rounded-2xl border-gray-300 border-3 border-solid p-2 w-50 focus:border-gray-400 focus:outline-0 transition delay-40 duration-300 w-full">
                    <br>

                    @error('email')
                        <p class = "text-red-400"> {{$message}} </p>
                    @enderror
                    <br>
                    <label for= "password" class = "text-2xl font-light">
                        Senha
                    </label>
                    <br>
                    <input type= "password" placeholder = "Senha" name = "password" value = "{{old('password')}}" class= "font-mono font-medium rounded-2xl border-gray-300 border-3 border-solid p-2 w-50 focus:border-gray-400 focus:outline-0 transition delay-40 duration-300 w-full">
                    <br>

                    @error('password')
                        <p class = "text-red-400"> {{$message}} </p>
                    @enderror

                    <br>
                    <div class = "text-center">
                        <input type= "submit" value= "Entrar" class= "font-mono border-0 font-semibold outline-gray-300 outline-4 p-2 w-60 rounded-3xl text-xl text-gray-400 hover:bg-gray-300 hover:text-gray-700 hover:outline-gray-300 hover:border-gray-300 transition delay-40 furation-300">
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
            <a href= "/register"><button class = "font-mono border-0 font-semibold outline-gray-300 outline-4 p-2 w-60 rounded-3xl text-xl text-gray-400 hover:bg-gray-300 hover:text-gray-700 hover:outline-gray-300 hover:border-gray-300 transition delay-40 furation-300"> Registrar-se </button></a>
        </div>
    </div>

@endsection

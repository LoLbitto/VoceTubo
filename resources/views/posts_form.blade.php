@extends('layouts.main_layout')

@section('js')
    @viteReactRefresh
    @vite(['resources/js/login.tsx', 'resources/css/app.css'])
@endsection

@section('content')
    <a href = "/channel" class = "fixed mt-1 ml-1"><button class = "font-mono border-0 font-semibold outline-gray-300 outline-2 p-1 w-20 rounded-3xl text-lg text-gray-400 hover:bg-gray-300 hover:text-gray-700 hover:outline-gray-300 hover:border-gray-300 transition delay-40 furation-300"> Voltar </button></a>
    <div class = "flex h-screen w-screen p-10">
        <div class = "h-full w-full p-5 grid place-items-center text-center">
            <t class = "text-4xl text-center font-mono font-medium antialised"><?=$post != null ? "Editar" : "Criar"?> Post</t>
            <div class = "text-left w-full">
                <form method = "POST" action = <?=$post != null ? "/postsedit" : "/postssubmit"?>>
                    @csrf
                    <?php
                    if ($post != null) {
                    ?>
                    <input type = "hidden" name = "id" value = <?=$post->id?>>
                    <?php
                    }
                    ?>
                    <label for= "title" class = "text-2xl font-light">
                        Título
                    </label>
                    <br>
                    <br>
                    <input type= "text" value = "<?=$post != null ? $post->title : (old('title'))?>" placeholder = "Titulo" name = "title"  class= "font-mono font-medium rounded-2xl border-gray-300 border-3 border-solid p-2 w-50 focus:border-gray-400 focus:outline-0 transition delay-40 duration-300 w-full">
                    <br>
                    <div class = "h-2">
                        @error('title')
                            <p class = "text-red-400"> {{$message}} </p>
                        @enderror
                    </div>
                    <br>
                    <label for= "text" class = "text-2xl font-light">
                        Texto
                    </label>
                    <br>
                    <br>
                    <textarea name = "text" class= "font-mono font-medium rounded-2xl border-gray-300 border-3 border-solid p-2 w-50 focus:border-gray-400 focus:outline-0 transition delay-40 duration-300 h-70 w-full"><?=$post != null ? $post->text : old('text')?></textarea>
                    <br>
                    <div class = "h-2">
                        @error('text')
                            <p class = "text-red-400"> {{$message}} </p>
                        @enderror
                    </div>
                    <br>
                    <br>
                    <div class = "text-center">
                        <input type= "submit" value= "Submit" class= "font-mono border-0 font-semibold outline-gray-300 outline-4 p-2 w-60 rounded-3xl text-xl text-gray-400 hover:bg-gray-300 hover:text-gray-700 hover:outline-gray-300 hover:border-gray-300 transition delay-40 furation-300">
                    </div>
                </form>
            </div>
        </div>
    </div>

@endsection

<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\MainController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\FetchController;
use App\Http\Middleware\CheckLogin;
use App\Http\Middleware\CheckNotLogged;

Route::get('/', [MainController::class, 'index'])->name('home');

Route::middleware([CheckNotLogged::class])->group(
    function() {
        Route::get('/login/', [LoginController::class, 'login']);
        Route::post('/loginsubmit', [LoginController::class, 'loginSubmit'])->name('login.submit');
        Route::get('/register/', [LoginController::class, 'register']);
        Route::post('/registersubmit/', [LoginController::class, 'registerSubmit'])->name('register.submit');
    }
);

Route::middleware([CheckLogin::class])->group(
    function() {
        Route::get('/channel/', [MainController::class, 'channel'])->name('user.home');
        Route::get('/channel/{channel}', [MainController::class, 'visitChannel'])->name('visit.channel');
        Route::get('/posts', [PostController::class,'post']);
        Route::post('/postssubmit', [PostsController::class . '@create'])->name('posts');
        Route::get('/posts/{post}/edit', [PostsController::class .'@edit'])->name('posts.edit');
        Route::delete('/posts/{post}', [PostsController::class .'@destroy'])->name('posts.destroy');

    }
);


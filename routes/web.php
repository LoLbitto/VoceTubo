<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\MainController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\FetchController;
use App\Http\Controllers\PostsController;
use App\Http\Controllers\VideosController;
use App\Http\Middleware\CheckLogin;
use App\Http\Middleware\CheckNotLogged;

Route::get('/', [MainController::class, 'index'])->name('home');
Route::get('/video/{videoCode}', [MainController::class, 'video'])->name('video');

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

        Route::get('/posts', [PostsController::class,'posts']);
        Route::post('/postssubmit', [PostsController::class, 'postsSubmit'])->name('posts.submit');
        Route::get('/posts/{post}/edit', [PostsController::class, 'edit'])->name('posts.edit');
        Route::post('/postsedit', [PostsController::class, 'postsEdit'])->name('posts.edit.submit');
        Route::get('/posts/{post}', [PostsController::class, 'destroy'])->name('posts.destroy');

        Route::get('/videos', [VideosController::class, 'videos']);
        Route::post('/videossubmit', [VideosController::class, 'videosSubmit'])->name('videos.submit');
        Route::get('/videos/{id}/delete', [VideosController::class, 'destroy'])->name('videos.delete');
    }
);

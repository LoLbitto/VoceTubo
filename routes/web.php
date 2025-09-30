<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\MainController;
use App\Http\Controllers\LoginController;
use App\Http\Middleware\CheckLogin;

Route::get('/', [MainController::class, 'index'])->name('home');

Route::middleware([CheckNotLogged::class])->group(
    function() {
        Route::get('/login/', [LoginController::class, 'login']);
        Route::post('/loginsubmit', [LoginController::class, 'loginSubmit'])->name('login.submit');
        Route::get('/register/', [LoginController::class, 'register']);
    }
);

Route::middleware([CheckLogin::class])->group(
    function() {
        Route::get('/channel/', [LoginController::class, 'channel'])->name('user.home');
    }
);


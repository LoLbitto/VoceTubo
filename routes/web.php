<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\MainController;
use App\Http\Controllers\LoginController;

Route::get('/', [MainController::class, 'index'])->name('home');
Route::get('/login/', [LoginController::class, 'login']);
Route::post('/loginsubmit', [LoginController::class, 'loginSubmit'])->name('login.submit');
Route::get('/register/', [LoginController::class, 'register']);

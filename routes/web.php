<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\MainController;
use App\Http\Controllers\LoginController;

Route::get('/', [MainController::class, 'index']);
Route::get('/login/', [LoginController::class, 'login']);
Route::get('/register/', [LoginController::class, 'register']);

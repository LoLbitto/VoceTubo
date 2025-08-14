<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\MainController;

Route::get('/', [MainController::class, 'index']);

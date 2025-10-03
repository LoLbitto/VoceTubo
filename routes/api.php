<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\FetchController;

use App\Http\Middleware\CheckLogin;
use App\Http\Middleware\CheckNotLogged;


Route::middleware([CheckLogin::class])->group(
    function() {
        Route::post('/subrequest', [FetchController::class, 'subscribe']);
    }
);

// Route::post('/subrequest', [FetchController::class, 'subscribe']);

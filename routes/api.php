<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\FetchController;
use App\Http\Controllers\LikeController;
use App\Http\Middleware\CheckLogin;
use App\Http\Middleware\CheckNotLogged;


Route::middleware([CheckLogin::class])->group(
    function() {
        Route::post('/subrequest', [FetchController::class, 'subscribe']);
    }
);

Route::middleware([CheckLogin::class])->group(function () {
    Route::post('/subscribe', [SubscripitionController::class, 'subscribe']);
    Route::post('/unsubscribe', [SubscripitionController::class, 'unsubscribe']);
});


Route::middleware([CheckLogin::class])->group(function () {
    Route::post('/like', [LikeController::class, 'like']);
    Route::post('/unlike', [LikeController::class, 'unlike']);
    Route::post('/check-like', [LikeController::class, 'check']);
});

// Route::post('/subrequest', [FetchController::class, 'subscribe']);

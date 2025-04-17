<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\FaunaController;

Route::prefix('auth')->group(function () {
    Route::post('/register', [AuthController::class, 'register'])->name('auth.register');
    Route::post('/login', [AuthController::class, 'login'])->name('auth.login');
    Route::post('/logout', [AuthController::class, 'logout'])->name('auth.logout')->middleware('auth:sanctum');
});

Route::prefix('fauna')->group(function (){
    Route::get('/', [FaunaController::class, 'show_all_fauna'])->name('fauna.all');
});
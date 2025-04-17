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
    Route::get('/{id}', [FaunaController::class, 'get_one_fauna'])->name('fauna.single');
    Route::delete('/{id}', [FaunaController::class, 'delete_fauna'])->name('fauna.delete')->middleware('auth:sanctum');
    Route::post('/', [FaunaController::class, 'create_fauna'])->name('fauna.create')->middleware('auth:sanctum');
    Route::put('/{id}', [FaunaController::class, 'update_fauna'])->name('fauna.update')->middleware('auth:sanctum');
});

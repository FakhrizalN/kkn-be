<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::prefix('auth')->group(function () {
    Route::post('/register', [AuthController::class, 'register'])->name('auth.register');
    Route::post('/login', [AuthController::class, 'login'])->name('auth.login');
    Route::post('/logout', [AuthController::class, 'logout'])->name('auth.logout')->middleware('auth:sanctum');
    // Route::post('/otp', [AuthController::class, 'sendOtp'])->name('auth.sendOtp');
    // Route::post('/otp/verify', [AuthController::class, 'verifyOtp'])->name('auth.verifyOtp');
    // Route::get('/otp/verify-page', [AuthController::class, 'verifyOtpPage'])->name('auth.verifyOtpPage');
});
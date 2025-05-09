<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/flora', function () {
    return Inertia::render('Flora');
});

// Route::get('/flora/17', function () {
//     return Inertia::render('FloraDetail');
// });
Route::get('/flora/{id}', function ($id) {
    return Inertia::render('FloraDetail', [
        'floraId' => $id,
    ]);
})->name('flora.detail');
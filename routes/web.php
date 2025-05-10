<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/flora', function () {
    return Inertia::render('Flora');
});

Route::get('/flora/{slug}', function ($slug) {
    return Inertia::render('FloraDetail', [
        'floraSlug' => $slug,
    ]);
})->name('flora.detail');
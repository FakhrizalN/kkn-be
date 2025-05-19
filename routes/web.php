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

Route::get('/fauna', function () {
    return Inertia::render('Fauna');
});

Route::get('/fauna/{slug}', function ($slug) {
    return Inertia::render('FaunaDetail', [
        'faunaSlug' => $slug,
    ]);
})->name('fauna.detail');

Route::get('/artikel', function () {
    return Inertia::render('Artikel');
});

Route::get('/artikel/{slug}', function ($slug) {
    return Inertia::render('ArtikelDetail', [
        'artikelSlug' => $slug,
    ]);
})->name('artikel.detail');

Route::get('/layanan', function () {
    return Inertia::render('Layanan');
});

Route::get('/tentang', function () {
    return Inertia::render('Tentang');
});

Route::get('/form', function () {
    return Inertia::render('Form');
});

// Route::inertia('/layanan', 'Layanan');
// Route::inertia('/form', 'Form');
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Artikels extends Model
{
    protected $table = 'artikels';

    protected $fillable = [
        'judul',
        'konten',
        'tanggal_publikasi',
        'gambar',
    ];

    protected $casts = [
        'tanggal_publikasi' => 'date',
    ];
}

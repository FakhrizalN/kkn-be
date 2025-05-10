<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Artikels extends Model
{
    protected $table = 'artikels';

    protected $fillable = [
        'judul',
        'slug',
        'konten',
        'tanggal_publikasi',
        'gambar',
    ];

    protected $casts = [
        'tanggal_publikasi' => 'date',
    ];

    public function setJudulAttribute($value)
    {
        $this->attributes['judul'] = $value;
        $this->attributes['slug'] = Str::slug($value, '-'); // Membuat slug dari judul
    }
}

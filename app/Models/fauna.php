<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class fauna extends Model
{
    protected $table = 'fauna';

    protected $fillable = [
        'nama',
        'nama_latin',
        'nama_family',
        'deskripsi',
        'berat',
        'panjang',
        'foto',
    ];
}

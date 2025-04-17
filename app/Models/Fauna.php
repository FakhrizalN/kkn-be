<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fauna extends Model
{
    use HasFactory;
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
    public $timestamps = false;

}

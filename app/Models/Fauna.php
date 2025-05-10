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
        'slug',
        'nama_latin',
        'nama_family',
        'deskripsi',
        'berat',
        'panjang',
        'foto',
    ];
    public $timestamps = false;
    public function setNamaAttribute($value)
    {
        $this->attributes['nama'] = $value;
        $this->attributes['slug'] = Str::slug($value, '-'); // Membuat slug dari nama
    }

}

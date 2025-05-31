<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Flora extends Model
{
    protected $table = 'flora';

    protected $fillable = [
        'local_name',
        'latin_name',
        'family',
        'description',
        'ekologi',
        'distribusi',
        'foto',
        'kategori',
        'familyDesc',
    ];
    public function setLatinNameAttribute($value)
    {
        $this->attributes['latin_name'] = $value;
        $this->attributes['slug'] = Str::slug($value, '-');
    }
    public $timestamps = false;
}

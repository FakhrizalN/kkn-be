<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

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
    ];
    public $timestamps = false;
}

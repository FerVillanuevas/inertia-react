<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Sound extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function getSrcAttribute($value)
    {
        return Storage::url($value);
    }
}

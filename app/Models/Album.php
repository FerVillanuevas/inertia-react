<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Album extends Model
{
    use HasFactory;

    public function user()
    {
        $this->belongsTo('App\Models\User');
    }

    public function getCoverArtAttribute($value)
    {
        return Storage::url($value);
    }

    public function sounds()
    {
        return $this->hasMany('App\Models\Sound');
    }

}

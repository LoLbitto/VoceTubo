<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    protected $fillable = [
        'title',
        'description',
        'user_id',
        'created_at'
    ];

    protected $guarded = [
        'id'
    ];
}

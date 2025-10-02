<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = [
        'title',
        'text',
        'has_image',
        'user_id',
    ];

    protected $guarded = [
        'id',
    ];
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = [
        'text',
    ];

    protected $guarded = [
        'id',
        'user_id',
        'video_id',
    ];
}

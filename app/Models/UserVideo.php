<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserVideo extends Model {
    protected $table = 'user_video';

    protected $fillable = [
        'user_id',
        'video_id',
    ];
}

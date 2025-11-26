<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Video extends Model {
    protected $fillable = [
        'title',
        'description',
        'user_id',
        'created_at'
    ];

    protected $guarded = [
        'id'
    ];

    public function likedByUsers() {
        return $this->belongsToMany( User::class, 'user_video', 'video_id', 'user_id' );
    }

    public function likesCount() {
        return $this->likedByUsers()->count();
    }

}

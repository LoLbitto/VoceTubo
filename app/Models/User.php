<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable {
    use HasFactory, Notifiable;

    protected $fillable = [
        'username',
        'viewname',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected function casts(): array {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function subscripitions() {
        return $this->belongsToMany(
            User::class,
            'user_user',
            'subber_user_id',
            'channel_id'
        )->withTimestamps();
    }

    public function subscribers() {
        return $this->belongsToMany(
            User::class,
            'user_user',
            'channel_id',
            'subber_user_id'
        )->withTimestamps();
    }

    public function isSubscribed( $channelId ) {
        return $this->subscripitions()->where( 'users.id', $channelId )->exists();
    }

    public function likedVideos() {
        return $this->belongsToMany( Video::class, 'user_video', 'user_id', 'video_id' );
    }

    public function hasLiked( $videoId ) {
        return $this->likedVideos()->where( 'videos.id', $videoId )->exists();
    }
}

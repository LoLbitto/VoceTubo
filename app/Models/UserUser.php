<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserUser extends Model {
    protected $table = 'user_user';

    protected $fillable = [
        'channel_id',
        'subber_user_id',
    ];
}

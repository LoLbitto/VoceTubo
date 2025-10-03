<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;
use App\Models\UserUser;

class FetchController extends Controller
{
    public function subscribe (Request $request) {
        /*$useruser = new UserUser();

        $useruser->channel_id = $request["id"];
        $useruser->subber_user_id = session()->get('user')['id'];

        $useruser->save();
        */
        return response('deu certo!', 201);
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use inertia\Inertia;

use App\Models\UserUser;
use App\Models\User;

class MainController extends Controller {
    public function index (Request $request) {

        return Inertia::render("Home");
    }

    public function channel (Request $request) {

        $subs = UserUser::where('channel_id', session()->get('user')['id'])->count();

        return Inertia::render("Channel", [
            'username' => session()->get('user')['username'],
            'subs' => $subs,
            'userid' => -1,
        ]);
    }

    public function visitChannel (Request $request, String $channel) {

        $user = User::where('username', $channel)->first();

        $subs = UserUser::where('channel_id', $user->id)->count();

        return Inertia::render("Channel", [
            'username' => $user->username,
            'subs' => $subs,
            'userid' => $user->id,
        ]);
    }

    public function video (Request $request, String $videoCode) {
        $canal = "teste";
        $video = "teste";

        return Inertia::render("Video", [
            'video' => $video,
            'canal' => $canal,
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use inertia\Inertia;

use App\Models\UserUser;
use App\Models\User;
use App\Models\Post;

use Illuminate\Support\Facades\Auth;

class MainController extends Controller {
    public function index (Request $request) {

        return Inertia::render("Home");
    }

    public function channel (Request $request) {

        $subs = UserUser::where('channel_id', session()->get('user')['id'])->count();

        $posts = Post::where('user_id', session()->get('user')['id'])->get();

        return Inertia::render("Channel", [
            'username' => session()->get('user')['username'],
            'subs' => $subs,
            'userid' => -1,
            'posts' => $posts,
        ]);
    }

    public function visitChannel (Request $request, String $channel) {

        $user = User::where('username', $channel)->first();

        $subs = UserUser::where('channel_id', $user->id)->count();

        return Inertia::render("Channel", [
            'username' => $user->username,
            'subs' => $subs,
            'userid' => $user->id,
            'posts' => $posts,
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
    
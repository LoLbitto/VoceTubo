<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use inertia\Inertia;

use App\Models\UserUser;
use App\Models\User;
use App\Models\Post;
use App\Models\Video;

use Illuminate\Support\Facades\Auth;

class MainController extends Controller {
    public function index (Request $request) {

        $videos = Video::limit(50)->get();

        $videosFinal = [];

        foreach ($videos as $video) {
            $user = User::where('id', $video->user_id)->first();

            $videoFinal = [
                "title" => $video->title,
                "user" => $user,
                "id" => $video->id
            ];

            array_push($videosFinal, $videoFinal);
        }

        if (session()->has("user"))
            return Inertia::render("Home", ["user" => (int)session()->get('user')['id'], 'videos' => $videosFinal]);

        return Inertia::render("Home", ["user" => null, "videos" => $videosFinal]);
    }

    public function channel (Request $request) {

        $subs = UserUser::where('channel_id', session()->get('user')['id'])->count();

        $videos = Video::where('user_id', session()->get('user')['id'])->limit(50)->get();

        $posts = Post::where('user_id', session()->get('user')['id'])->get();

        $videosFinal = [];

        foreach ($videos as $video) {
            $user = User::where('id', $video->user_id)->first();

            $videoFinal = [
                "title" => $video->title,
                "user" => $user,
                "id" => $video->id
            ];

            array_push($videosFinal, $videoFinal);
        }

        return Inertia::render("Channel", [
            'username' => session()->get('user')['username'],
            'subs' => $subs,
            'userid' => -1,
            'user' => session()->get('user')['id'],
            'posts' => $posts,
            'videos' => $videosFinal
        ]);
    }

    public function visitChannel (Request $request, String $channel) {

        $user = User::where('username', $channel)->first();

        $subs = UserUser::where('channel_id', $user->id)->count();

        $videos = Video::where('user_id', $user->id)->limit(50)->get();

        return Inertia::render("Channel", [
            'username' => $user->username,
            'subs' => $subs,
            'userid' => $user->id,
            'posts' => $posts,
            'videos' => $videos
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


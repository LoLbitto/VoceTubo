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

        $posts = Post::where('user_id', $user->id)->limit(50)->get();

        $sub = UserUser::where('channel_id', $user->id)->where('subber_user_id', session()->get('user')['id'])->get();

        $isSub = count($sub) > 0 ? true : false;

        if ($user->id == session()->get('user')['id']) {
            return redirect()->route('user.home');
        }

        return Inertia::render("Channel", [
            'username' => $user->username,
            'subs' => $subs,
            'userid' => $user->id,
            'posts' => $posts,
            'videos' => $videosFinal,
            'issub' => $isSub
        ]);
    }

    public function video (Request $request, int $id) {
        $video = Video::where('id', $id)->first();
        $user = User::where('id', $video->user_id)->first();
        $subs = UserUser::where('channel_id', $user->id)->count();

        $videos = Video::where('user_id', session()->get('user')['id'])->limit(50)->get();

        $sub = UserUser::where('channel_id', $user->id)->where('subber_user_id', session()->get('user')['id'])->get();

        $isSub = count($sub) > 0 ? true : false;

        $videosFinal = [];

        foreach ($videos as $videoAr) {
            $user = User::where('id', $videoAr->user_id)->first();

            $videoFinal = [
                "title" => $videoAr->title,
                "user" => $user,
                "id" => $videoAr->id
            ];

            if ($videoFinal['id'] != $video->id)
                array_push($videosFinal, $videoFinal);
        }

        return Inertia::render("Video", [
            "video" => $video,
            "channel" => $user,
            "user" => session()->get('user')['id'],
            "subs" => $subs,
            "videos" => $videosFinal,
            "issub" => $isSub,
        ]);
    }
}


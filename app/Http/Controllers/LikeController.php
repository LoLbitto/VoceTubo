<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LikeController extends Controller
 {
    public function like( Request $request )
 {
        $request->validate( ['video_id' => 'required|exists:videos,id']);
        $user = auth()->user();
        $user->likedVideos()->attach( $request->video_id );
        return [ 'liked' => true ];
    }

    public function unlike( Request $request )
 {
        $request->validate(['video_id' => 'required|exists:videos,id']);
        $user = auth()->user();
        $user->likedVideos()->detach( $request->video_id );
        return [ 'liked' => false ];
    }

    public function check( Request $request )
 {
        $request->validate(['video_id' => 'required|exists:videos,id']);
        $user = auth()->user();
        return ['liked' => $user->hasLiked( $request->video_id )];
    }
}
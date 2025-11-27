<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class LikeController extends Controller
 {
    public function like( Request $request )
 {
        $request->validate( [
            'video_id' => 'required|exists:videos,id'
        ] );
        $id = session()->get( 'user' )[ 'id' ];
        $user = User::where( 'id', $id )->first();
        $user->likedVideos()->syncWithoutDetaching( [ $request->video_id ] );
        return [ 'liked' => true ];
    }

    public function unlike( Request $request )
 {
        $request->validate( [
            'video_id' => 'required|exists:videos,id'
        ] );

        $id = session()->get( 'user' )[ 'id' ];
        $user = User::where( 'id', $id )->first();
        $user->likedVideos()->detach( $request->video_id );
        return [ 'liked' => false ];
    }

    public function check( Request $request )
 {
        $request->validate( [
            'video_id' => 'required|exists:videos,id'
        ] );

        $id = session()->get( 'user' )[ 'id' ];
        $user = User::where( 'id', $id )->first();
        return [ 'liked' => $user->hasLiked( $request->video_id ) ];
    }
}

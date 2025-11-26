<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SubscripitionController extends Controller
 {
    public function subscribe( Request $request )
 {
        $user = auth()->user();
        $user->subscripitions()->syncWithoutDetaching( [ $request->channel_id ] );
        return [ 'subscribed' => true ];
    }

    public function unsubscribe( Request $request )
 {
        $user = auth()->user();
        $user->subscripitions()->detach( $request->channel_id );
        return [ 'subscribed' => false ];
    }
}

<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserUser;
use App\Models\User;

class SubscriptionController extends Controller {
    public function sub ( Request $request, int $id ) {
        $hasSomething = UserUser::where( 'channel_id', $id )->where( 'subbed_user_id', session()->get( 'user' )[ 'id' ] )->get();

        if ( count( $hasSomething ) > 0 ) {
            unsubscribe( $request );
        } else {
            subscribe( $request );
        }
    }

    public function subscribe( Request $request ) {
        $id = session()->get( 'user' )[ 'id' ];
        $user = User::where( 'id', $id )->first();
        $user->subscripitions()->syncWithoutDetaching( [ $request->channel_id ] );
        return [ 'subscribed' => true ];
    }

    public function unsubscribe( Request $request ) {
        $id = session()->get( 'user' )[ 'id' ];
        $user = User::where( 'id', $id )->first();
        $user->subscripitions()->detach( $request->channel_id );
        return [ 'subscribed' => false ];
    }
}

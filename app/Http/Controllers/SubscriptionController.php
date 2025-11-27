<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserUser;
use App\Models\User;

class SubscriptionController extends Controller {
    public function sub ( Request $request, int $id ) {
<<<<<<< HEAD
        $hasSomething = UserUser::where('channel_id', $id)->where('subber_user_id', session()->get('user')['id'])->get();

        if (count($hasSomething) > 0) {
            return SubscriptionController::unsubscribe($request, $id);
        } else {
            return SubscriptionController::subscribe($request, $id);
        }
    }

    public function subscribe( Request $request, int $id )
    {
        $userId = session()->get("user")['id'];
        $user = User::where('id', $userId)->first();
        $sub = new UserUser;

        $sub->channel_id = $id;
        $sub->subber_user_id = $userId;

        $sub->save();

        return back();
    }

    public function unsubscribe( Request $request, int $id )
 {
        $id = session()->get("user")['id'];
        $user = User::where('id', $id)->first();
=======
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
>>>>>>> f87d4c85982b8a96c502414169692c2f49df4e5b
        $user->subscripitions()->detach( $request->channel_id );
        return back();
    }
}

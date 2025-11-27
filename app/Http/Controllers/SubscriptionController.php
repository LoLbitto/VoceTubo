<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserUser;
use App\Models\User;

class SubscriptionController extends Controller
 {
    public function sub ( Request $request, int $id ) {
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
        $user->subscripitions()->detach( $request->channel_id );
        return back();
    }
}

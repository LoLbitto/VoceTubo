<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use inertia\Inertia;
use App\Models\UserUser;

class MainController extends Controller {
    public function index (Request $request) {

        return Inertia::render("Home");
    }

    public function channel (Request $request) {

        $subs = UserUser::where('channel_id', session()->get('user')['id'])->count();

        return Inertia::render("Channel", [
            'username' => session()->get('user')['username'],
            'subs' => $subs,
        ]);
    }
}

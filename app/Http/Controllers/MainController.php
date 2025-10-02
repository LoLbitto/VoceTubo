<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use inertia\Inertia;

class MainController extends Controller {
    public function index (Request $request) {

        return Inertia::render("Home");
    }

    public function channel (Request $request) {

        return Inertia::render("Channel", [
            'username' => session()->get('user')['username'],
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use inertia\Inertia;

class MainController extends Controller {
    public function index (Request $request) {

        return Inertia::render("Home");
    }
}

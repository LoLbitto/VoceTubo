<?php
namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use inertia\Inertia;


class VideosController extends Controller {
    function videos(Request $request) {
        return Inertia::render("VideosForm");
    }
}

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

    function videosSubmit(Request $request) {

        $dados = $request->validate([
            'title' => 'required|max:30',
            'descricao' => 'max:200',
            'thumb' => 'required',
            'video' => 'required',
        ],
        [
            'title.required' => "O vídeo precisa ter um título!",

            'descricao.max' => "A descrição está grande demais!",
        ]);

        $video = $request->file('video');
        $thumb = $request->file('thumb');



        $thumb->store('uploads/thumbs', 'public');
        return $video->store('uploads/videos', 'public');
    }
}

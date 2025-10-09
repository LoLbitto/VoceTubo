<?php
namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use inertia\Inertia;


class PostsController extends Controller
{

    public function posts()
    {
        return view('posts_form', ['post' => null]);
    }

    public function postsSubmit(Request $request)
    {

        $dados = $request->validate([
            'title' => 'required|min:2|max:30',
            'text'  => 'required|min:20|max:200',
        ],
            [
            'title.required' => "O campo de titulo é obrigatório",
            'text.required' => "O campo de texto é obrigatório",
            ]);
            
        $post = new Post;

        
        $post->title = $dados['title']; 
        $post->text = $dados['text'];
        $post->has_image = false;
        $post->user_id = session()->get('user')['id'];

        $post->save();

        return Inertia::render("Channel");
    }

    public function destroy($id)
    {
        $post = Post::find($id);
        $post->delete();
        return Inertia::render("Channel")
            ->with('sucesso', 'Post Deletado com sucesso');
    }

    public function edit($id)
    {
        $post = Post::find($id);
        return view('posts_form', ['post' => $post]);
    }

    public function postsEdit(Request $request)
    {

        $dados = $request->validate([
            'title' => 'required|min:2|max:30',
            'text'  => 'required|min:20|max:200',
            'id'    => 'required'
        ],
        [
            'title.required' => "O campo de titulo é obrigatório",
            'text.required' => "O campo de texto é obrigatório",
        ]);
            
        $post = Post::find($dados['id']);

        
        $post->title = $dados['title']; 
        $post->text = $dados['text'];

        $post->save();

        return Inertia::render("Channel");
    }
}


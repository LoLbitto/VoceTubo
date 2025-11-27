<?php
namespace App\Http\Controllers;

use App\Models\Video;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use inertia\Inertia;

class VideosController extends Controller {
    function videos( Request $request ) {
        return Inertia::render( 'VideosForm' );
    }

    function videosSubmit( Request $request ) {
        $dados = $request->validate( [
            'title' => 'required|max:30',
            'descricao' => 'max:200',
            'thumb' => 'required',
            'video' => 'required',
        ],
        [
            'title.required' => 'O vídeo precisa ter um título!',

            'descricao.max' => 'A descrição está grande demais!',
        ] );

        $video = $request->file( 'video' );
        $thumb = $request->file( 'thumb' );

        $videoObj = Video::create( [

            'title' => $dados[ 'title' ],
            'description' => $dados[ 'descricao' ],
            'user_id' => session()->get( 'user' )[ 'id' ]

        ] );

        $thumb->storeAs( 'uploads/thumbs', ( string ) $videoObj->id . '.png', 'public' );
        $video->storeAs( 'uploads/videos', ( string ) $videoObj->id . '.' . $video->getClientOriginalExtension(), 'public' );
        return redirect()->route( 'user.home' );
    }

    public function destroy( $id ) {
        $video = Video::find( $id );
        if ( $video->user_id == session()->get( 'user' )[ 'id' ] )
        $video->delete();
        return back();
    }

    public function update( Request $request, int $id ) {
        $dados = $request->validate( [
            'title' => 'required|max:30',
            'descricao' => 'max:200',
            'thumb' => 'nullable',
            'video' => 'nullable',
        ] );

        $userId = session()->get( 'user' )[ 'id' ];
        $video = Video::find( $id );

        if ( !$video ) {
            return back()->withErrors( [ 'msg' => 'Vídeo não encontrado' ] );
        }

        $video->title = $dados[ 'title' ];
        $video->description = $dados[ 'descricao' ];
        $video->save();

        if ( $request->hasFile( 'thumb' ) ) {
            $thumb = $request->file( 'thumb' );
            $thumb->storeAs( 'uploads/thumbs', "$video->id.png", 'public' );
        }
        if ( $request->hasFile( 'video' ) ) {
            $file = $request->file( 'video' );
            $file->storeAs( 'uploads/videos', $video->id . '.' . $file->getClientOriginalExtension(), 'public' );
        }

        return redirect()->route( 'user.home' )->with( 'msg', 'Vídeo atualizado!' );
    }

    public function edit(Request $request, int $id) {
        $video = Video::where('id', $id)->first();

        if ($video->user_id == session()->get('user')['id']) {
            return Inertia::render('VideosForm', [
                'video' => $video,
            ]);
        } else {
            return back();
        }
    }

}

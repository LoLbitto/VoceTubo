<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\User;

class LoginController extends Controller {
    public function login (Request $request) {

        return view("login");
    }

    public function loginSubmit (Request $request) {
        $dados = $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:6|max:30'
        ],
        [
            'email.required' => "O campo de e-mail é obrigatório!",
            'email.email' => "O e-mail inserido não é válido!",

            'password.required' => "É necessário inserir uma senha!",
            'password.min' => "A senha tem no mínimo :min caracteres!",
            'password.max' => "A senha possui no máximo :max caracteres!",
        ]);

        $usuario = User::where('email', $dados['email'])->whereNull('deleted_at')->first();

        if ($usuario) {
            if (Auth::attempt($dados)) {
                $request->session()->regenerate();

                session([
                    'user' => [
                        'id' => $usuario->id,
                        'username' => $usuario->username,
                    ]
                ]);

                return redirect()->intended('/');
            } else {
                return back()->withInput()->withErrors([
                    'password' => 'Senha incorreta!',
                ]);
            }
        } else {
            return back()->withInput()->withErrors([
                'email' => 'E-mail não cadastrado!',
            ]);
        }
    }

    public function register (Request $request) {

        return view("register");
    }
}

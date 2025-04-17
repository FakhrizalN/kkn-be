<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Users;
use Illuminate\Support\Facades\Hash;


class AuthController extends Controller
{
    public function register(Request $request) {
        $fields = $request->validate([
            'username' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed|min:8',
        ]);

        $users = Users::create($fields);

        $data = [
            'message' => 'Users berhasil register.'
        ];
        return response()->json($data, 201);
    }

    public function login(Request $request) {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:8',
        ]);

        $Users = Users::where('email', $request->email)->first();

        if (!$Users || !Hash::check($request->password, $Users->password)) {
            return response()->json([
                "message" => "Username atau password salah!"
            ], 404);
        }

        $token = $Users->createToken($Users->email)->plainTextToken;

        $data = [
            "message" => "Login Berhasil"
        ];

        return response()->json($data, 200)->cookie(
            'TOKENID',
            $token,
            1440,
            null,
            false,
            false
        );
    }

    public function logout(Request $request) {
        $request->user()->tokens()->delete();

        $data = [
            "message" => "Logout berhasil"
        ];

        return response()->json($data, 200)->cookie(
            "TOKENID",
            null,
            -1
        );
    }
}

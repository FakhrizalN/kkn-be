<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(Request $request) {
        $fields = $request->validate([
            'fullname' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed|min:8',
        ]);

        $user = User::create($fields);

        // Generate UUID for verification
        $verificationToken = Str::uuid();
    
        // Store token in the database
        $otpCode = Otp::create([
            'user_id' => $user->id,
            'otp' => $verificationToken,
            'expires_at' => Carbon::now()->addHours(24), // Link valid for 24 hours
        ]);

        try {
            // Send verification email
            Mail::to($user->email)->send(new OtpMail($verificationToken));
        } catch (\Exception $e) {
            Log::error('Failed to send verification email: ' . $e->getMessage());
            return response()->json(['message' => 'Failed to send verification email: '.$e->getMessage()], 500);
        }

        $data = [
            'message' => 'User berhasil register. Silakan periksa email Anda untuk verifikasi.'
        ];
        return response()->json($data, 201);
    }
}

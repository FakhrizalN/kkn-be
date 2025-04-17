<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FaunaController extends Controller
{
    public function show_all_fauna()
    {
            $fauna = Fauna::all();

            return response()->json([
                'message' => 'fauna berhasil diambil dari database',
                'data' => $fauna
            ]);
    }
}

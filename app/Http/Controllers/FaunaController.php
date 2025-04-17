<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Fauna;

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

    public function get_one_fauna(Request $request, $id) {
        $fauna = Fauna::where('id', $id)->first();

        if (!$fauna) {
            return response()->json([
                'success' => false,
                'message' => 'Fauna tidak ditemukan.',
            ], 404);
        }
        return response()->json([
            'success' => true,
            'message' => 'Fauna berhasil diambil dari database',
            'data' => $fauna
        ], 200);
    }

    
}

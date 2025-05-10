<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Flora;
use Inertia\Inertia;



class FloraController extends Controller
{

    
    public function show_all_flora()
    {
            $flora = Flora::all();
            
            return response()->json([
                'message' => 'Flora berhasil diambil dari database',
                'data' => $flora
            ]);
    }

    public function get_one_flora(Request $request, $slug) {
        $flora = Flora::where('slug', $slug)->first();

        if (!$flora) {
            return response()->json([
                'success' => false,
                'message' => 'Flora tidak ditemukan.',
            ], 404);
        }
        return response()->json([
            'success' => true,
            'message' => 'Flora berhasil diambil dari database',
            'data' => $flora
        ], 200);
    }

    public function delete_flora($id)
    {
        $flora = Flora::find($id);

        if (!$flora) {
            return response()->json([
                'success' => false,
                'message' => 'Flora tidak ditemukan.',
            ], 404);
        }

        $flora->delete();

        return response()->json([
            'success' => true,
            'message' => 'Flora berhasil dihapus.',
        ]);
    }

    public function create_flora(Request $request)
    {
        $fields = $request->validate([
            'local_name' => 'required|string|max:255',
            'latin_name' => 'required|string|max:255',
            'family' => 'required|string|max:255',
            'description' => 'required|string',
            'ekologi' => 'required|string',
            'distribusi' => 'required|string',
            'foto' => 'required|string',
        ]);

        $flora = Flora::create($fields);

        return response()->json([
            'success' => true,
            'message' => 'Flora berhasil ditambahkan.',
            'data' => $flora
        ], 201);
    }

    public function update_flora(Request $request, $id)
{
    $flora = Flora::find($id);

    if (!$flora) {
        return response()->json([
            'success' => false,
            'message' => 'Flora tidak ditemukan.',
        ], 404);
    }

    $fields = $request->validate([
        'local_name' => 'sometimes|required|string|max:255',
        'latin_name' => 'sometimes|required|string|max:255',
        'family' => 'sometimes|required|string|max:255',
        'description' => 'sometimes|required|string',
        'ekologi' => 'sometimes|required|string',
        'distribusi' => 'sometimes|required|string',
        'foto' => 'sometimes|required|string',
    ]);

    $flora->update($fields);

    return response()->json([
        'success' => true,
        'message' => 'Flora berhasil diperbarui.',
        'data' => $flora
    ], 200);
}

}

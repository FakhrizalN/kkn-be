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

    public function delete_fauna($id)
    {
        $fauna = Fauna::find($id);

        if (!$fauna) {
            return response()->json([
                'success' => false,
                'message' => 'Fauna tidak ditemukan.',
            ], 404);
        }

        $fauna->delete();

        return response()->json([
            'success' => true,
            'message' => 'Fauna berhasil dihapus.',
        ]);
    }

    public function create_fauna(Request $request)
    {
        $fields = $request->validate([
            'nama' => 'required|string|max:255',
            'nama_latin' => 'required|string|max:255',
            'nama_family' => 'required|string|max:255',
            'deskripsi' => 'required|string',
            'berat' => 'nullable|numeric',
            'panjang' => 'nullable|numeric',
            'foto' => 'required|string',
        ]);

        $fauna = Fauna::create($fields);

        return response()->json([
            'success' => true,
            'message' => 'Fauna berhasil ditambahkan.',
            'data' => $fauna
        ], 201);
    }

    public function update_fauna(Request $request, $id)
{
    $fauna = Fauna::find($id);

    if (!$fauna) {
        return response()->json([
            'success' => false,
            'message' => 'Fauna tidak ditemukan.',
        ], 404);
    }

    $fields = $request->validate([
        'nama' => 'sometimes|required|string|max:255',
        'nama_latin' => 'sometimes|required|string|max:255',
        'nama_family' => 'sometimes|required|string|max:255',
        'deskripsi' => 'sometimes|required|string',
        'berat' => 'nullable|numeric',
        'panjang' => 'nullable|numeric',
        'foto' => 'sometimes|required|string',
    ]);

    $fauna->update($fields);

    return response()->json([
        'success' => true,
        'message' => 'Fauna berhasil diperbarui.',
        'data' => $fauna
    ], 200);
}

}

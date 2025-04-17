<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Artikels;


class ArtikelController extends Controller
{
    public function show_all_artikel()
    {
            $artikels = Artikels::all();
            
            return response()->json([
                'message' => 'Artikel berhasil diambil dari database',
                'data' => $artikels
            ]);
    }

    public function get_one_artikel(Request $request, $id) {
        $artikels = Artikels::where('id', $id)->first();

        if (!$artikels) {
            return response()->json([
                'success' => false,
                'message' => 'Artikel tidak ditemukan.',
            ], 404);
        }
        return response()->json([
            'success' => true,
            'message' => 'Artikel berhasil diambil dari database',
            'data' => $artikels
        ], 200);
    }

    public function delete_artikel($id)
    {
        $artikels = Artikels::find($id);

        if (!$artikels) {
            return response()->json([
                'success' => false,
                'message' => 'Artikel tidak ditemukan.',
            ], 404);
        }

        $artikels->delete();

        return response()->json([
            'success' => true,
            'message' => 'Artikel berhasil dihapus.',
        ]);
    }

    public function create_artikel(Request $request)
    {
        $fields = $request->validate([
            'judul' => 'required|string|max:255',
            'konten' => 'required|string|max:255',
            'tanggal_publikasi' => 'required|date',
            'gambar' => 'required|string',
        ]);

        $artikels = Artikels::create($fields);

        return response()->json([
            'success' => true,
            'message' => 'Artikel berhasil ditambahkan.',
            'data' => $artikels
        ], 201);
    }

    public function update_artikel(Request $request, $id)
{
    $artikels = Artikels::find($id);

    if (!$artikels) {
        return response()->json([
            'success' => false,
            'message' => 'Artikel tidak ditemukan.',
        ], 404);
    }

    $fields = $request->validate([
        'judul' => 'required|string|max:255',
        'konten' => 'required|string|max:255',
        'tanggal_publikasi' => 'required|date',
        'gambar' => 'required|string',
    ]);

    $artikels->update($fields);

    return response()->json([
        'success' => true,
        'message' => 'Artikel berhasil diperbarui.',
        'data' => $artikels
    ], 200);
    }
}

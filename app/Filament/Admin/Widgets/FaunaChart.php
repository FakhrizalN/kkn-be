<?php

namespace App\Filament\Admin\Widgets;

use Filament\Widgets\ChartWidget;
use App\Models\Fauna; // Import model Fauna
use Illuminate\Support\Facades\DB; // Tidak wajib untuk kasus ini, tapi baik untuk ada

class FaunaChart extends ChartWidget
{
    protected static ?string $heading = 'Distribusi Kategori Fauna'; // Judul chart

    protected function getData(): array
    {
        $categories = [
            'Mamalia',
            'Burung',
            'Reptil',
            'Amfibi',
            'Serangga',
            'Lainnya',
        ];

        $categoryCounts = [];
        foreach ($categories as $category) {
            // Hitung jumlah fauna berdasarkan kolom 'kategori'
            $categoryCounts[$category] = Fauna::where('kategori', $category)->count();
        }

        return [
            'datasets' => [
                [
                    'label' => 'Jumlah Fauna',
                    'data' => array_values($categoryCounts), // Ambil hanya nilai hitungan
                    'backgroundColor' => [
                        '#FF6384', // Merah muda
                        '#36A2EB', // Biru terang
                        '#FFCE56', // Kuning
                        '#4BC0C0', // Toska
                        '#9966FF', // Ungu
                        '#FF9F40', // Oranye
                    ],
                    'hoverOffset' => 4, // Efek hover pada pie chart
                ],
            ],
            'labels' => array_keys($categoryCounts), // Ambil nama kategori sebagai label
        ];
    }

    protected function getType(): string
    {
        return 'pie'; // Jenis chart adalah pie
    }

    protected static ?string $maxHeight = '300px'; // Opsional: atur tinggi maksimum chart

    protected function getOptions(): array
    {
        return [
            'plugins' => [
                'legend' => [
                    'display' => true,
                    'position' => 'right',
                ],
                'datalabels' => [
                    'display' => false,
                ],
            ],
            'scales' => [ // Bagian ini yang penting untuk diatur
                'x' => [
                    'display' => false, // Sembunyikan sumbu X
                ],
                'y' => [
                    'display' => false, // Sembunyikan sumbu Y
                ],
            ],
            // Anda bisa menambahkan opsi Chart.js lainnya di sini
        ];
    }
}
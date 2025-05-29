<?php

namespace App\Filament\Admin\Widgets;

use Filament\Widgets\ChartWidget;
use App\Models\Flora;
use Illuminate\Support\Facades\DB;

class FloraChart extends ChartWidget
{
    protected static ?string $heading = 'Distribusi Kategori Flora';

    protected function getData(): array
    {
        $categories = [
            'Pohon',
            'Semak',
            'Liana',
            'Herba',
            'Lainnya',
        ];

        $categoryCounts = [];
        foreach ($categories as $category) {
            $categoryCounts[$category] = Flora::where('kategori', $category)->count();
        }

        return [
            'datasets' => [
                [
                    'label' => 'Jumlah Flora',
                    'data' => array_values($categoryCounts),
                    'backgroundColor' => [
                        '#f44336', // Merah
                        '#2196f3', // Biru
                        '#4caf50', // Hijau
                        '#ff9800', // Oranye
                        '#9c27b0', // Ungu
                    ],
                ],
            ],
            'labels' => array_keys($categoryCounts),
        ];
    }

    protected function getType(): string
    {
        return 'pie';
    }

    protected static ?string $maxHeight = '300px';

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
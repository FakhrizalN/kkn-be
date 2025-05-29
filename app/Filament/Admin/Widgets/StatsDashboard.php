<?php

namespace App\Filament\Admin\Widgets;

use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use App\Models\Flora;
use App\Models\Fauna;
use App\Models\User; // Jangan lupa import model User

class StatsDashboard extends BaseWidget
{
    protected function getStats(): array
    {
        $countFlora = Flora::count();
        $countFauna = Fauna::count();
        $countUser = User::count(); // Hitung jumlah user

        return [
            Stat::make('Jumlah Flora', $countFlora . ' Spesies')
                ->description('Total jenis tumbuhan') // Tambahkan deskripsi lebih jelas
                ->color('success')
                ->icon('ionicon-leaf-outline'), // Ubah ke heroicon jika itu yang Anda gunakan

            Stat::make('Jumlah Fauna', $countFauna . ' Spesies')
                ->description('Total jenis hewan')
                ->color('info')
                ->icon('ionicon-paw-outline'), // Ubah ke heroicon jika itu yang Anda gunakan

            Stat::make('Jumlah Pengguna', $countUser . ' Akun') // Tambahkan stat user
                ->description('Total akun terdaftar')
                ->color('warning')
                ->icon('ionicon-person-outline'), // Ikon untuk pengguna
        ];
    }
}
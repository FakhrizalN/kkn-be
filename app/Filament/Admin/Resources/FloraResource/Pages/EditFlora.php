<?php

namespace App\Filament\Admin\Resources\FloraResource\Pages;

use App\Filament\Admin\Resources\FloraResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditFlora extends EditRecord
{
    protected static string $resource = FloraResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}

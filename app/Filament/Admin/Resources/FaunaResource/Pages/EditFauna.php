<?php

namespace App\Filament\Admin\Resources\FaunaResource\Pages;

use App\Filament\Admin\Resources\FaunaResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditFauna extends EditRecord
{
    protected static string $resource = FaunaResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}

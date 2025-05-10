<?php

namespace App\Filament\Admin\Resources\ArtikelsResource\Pages;

use App\Filament\Admin\Resources\ArtikelsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditArtikels extends EditRecord
{
    protected static string $resource = ArtikelsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}

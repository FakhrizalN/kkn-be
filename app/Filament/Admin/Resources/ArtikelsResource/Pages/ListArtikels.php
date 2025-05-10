<?php

namespace App\Filament\Admin\Resources\ArtikelsResource\Pages;

use App\Filament\Admin\Resources\ArtikelsResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListArtikels extends ListRecords
{
    protected static string $resource = ArtikelsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}

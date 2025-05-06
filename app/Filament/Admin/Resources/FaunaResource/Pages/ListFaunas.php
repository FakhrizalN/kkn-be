<?php

namespace App\Filament\Admin\Resources\FaunaResource\Pages;

use App\Filament\Admin\Resources\FaunaResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListFaunas extends ListRecords
{
    protected static string $resource = FaunaResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}

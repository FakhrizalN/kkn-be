<?php

namespace App\Filament\Admin\Resources;

use App\Filament\Admin\Resources\FloraResource\Pages;
use App\Filament\Admin\Resources\FloraResource\RelationManagers;
use App\Models\Flora;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class FloraResource extends Resource
{
    protected static ?string $model = Flora::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('local_name')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('latin_name')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('family')
                    ->required()
                    ->maxLength(255),
                Forms\Components\Textarea::make('description')
                    ->required()
                    ->maxLength(65535),
                Forms\Components\Textarea::make('ekologi')
                    ->required()
                    ->maxLength(65535),
                Forms\Components\Textarea::make('distribusi')
                    ->required()
                    ->maxLength(65535),

            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('local_name')
                    ->searchable()
                    ->limit(50),
                Tables\Columns\TextColumn::make('latin_name')
                    ->searchable()
                    ->limit(50),
                Tables\Columns\TextColumn::make('family')
                    ->searchable()
                    ->limit(50),
                Tables\Columns\TextColumn::make('description')
                    ->limit(100),
                Tables\Columns\TextColumn::make('ekologi')
                    ->limit(100),
                Tables\Columns\TextColumn::make('distribusi')
                    ->limit(100),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListFloras::route('/'),
            'create' => Pages\CreateFlora::route('/create'),
            'edit' => Pages\EditFlora::route('/{record}/edit'),
        ];
    }
}

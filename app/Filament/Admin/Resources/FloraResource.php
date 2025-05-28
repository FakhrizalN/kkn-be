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
use Filament\Forms\Components\FileUpload;
use Illuminate\Support\Str; // Tambahkan ini

class FloraResource extends Resource
{
    protected static ?string $model = Flora::class;

    protected static ?string $navigationIcon = 'icon-eco';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('local_name')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('latin_name')
                    ->required()
                    ->maxLength(255)
                    ->live(onBlur: true)
                    ->afterStateUpdated(function (string $operation, $state, Forms\Set $set) {
                        if ($operation === 'create') {
                            $baseSlug = Str::slug($state);
                            $slug = $baseSlug;
                            $count = 1;

                            // Cek apakah slug sudah ada di database
                            while (Flora::where('slug', $slug)->exists()) {
                                $slug = $baseSlug . '-' . $count++;
                            }
                            $set('slug', $slug);
                        }
                    }),
                Forms\Components\TextInput::make('slug')
                    ->required()
                    ->maxLength(255)
                    ->unique(ignoreRecord: true)
                    ->readOnly(), // Jadikan slug read-only karena diisi otomatis
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
                Forms\Components\FileUpload::make('foto')
                    ->required()
                    ->image()
                    ->disk('public')
                    ->directory('Flora')
                    ->columnSpanFull(),
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
                Tables\Columns\TextColumn::make('slug')
                    ->searchable()
                    ->limit(50)
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('family')
                    ->searchable()
                    ->limit(50),
                Tables\Columns\TextColumn::make('kategori')
                    ->searchable()
                    ->limit(50),
                Tables\Columns\ImageColumn::make('foto')
                    ->height(50),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('kategori')
                    ->options([
                        'pohon' => 'Pohon',
                        'semak' => 'Semak',
                        'liana' => 'Liana',
                        'herba' => 'Herba',
                        'lainnya' => 'Lainnya',
                        // ... dll
                        ]),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\ViewAction::make(),
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
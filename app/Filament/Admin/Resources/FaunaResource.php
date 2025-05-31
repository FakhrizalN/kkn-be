<?php

namespace App\Filament\Admin\Resources;

use App\Filament\Admin\Resources\FaunaResource\Pages;
use App\Filament\Admin\Resources\FaunaResource\RelationManagers;
use App\Models\Fauna;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\FileUpload;
use Illuminate\Support\Str;

class FaunaResource extends Resource
{
    protected static ?string $model = Fauna::class;

    protected static ?string $navigationIcon = 'ionicon-paw-outline';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('nama')
                    ->required()
                    ->maxLength(255)
                    ->live(onBlur: true)
                    ->afterStateUpdated(function (string $operation, $state, Forms\Set $set) {
                        if ($operation === 'create') {
                            $baseSlug = Str::slug($state);
                            $slug = $baseSlug;
                            $count = 1;

                            while (Fauna::where('slug', $slug)->exists()) {
                                $slug = $baseSlug . '-' . $count++;
                            }
                            $set('slug', $slug);
                        }
                    }),
                Forms\Components\TextInput::make('slug')
                    ->required()
                    ->maxLength(255)
                    ->unique(ignoreRecord: true)
                    ->readOnly(),
                Forms\Components\TextInput::make('nama_latin')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('nama_family')
                    ->required()
                    ->maxLength(255),
                Forms\Components\Textarea::make('familyDesc')
                    ->required()
                    ->maxLength(65535),
                Forms\Components\Textarea::make('deskripsi')
                    ->required()
                    ->maxLength(65535),
                Forms\Components\TextInput::make('habitat')
                    ->required()
                    ->maxLength(255),
                Forms\Components\Textarea::make('ciri_khas')
                    ->required()
                    ->maxLength(65535),
                Forms\Components\Select::make('kategori') // Ganti TextInput dengan Select
                    ->required()
                    ->options([ // Definisikan opsi dropdown
                        'Mamalia' => 'Mamalia',
                        'Burung' => 'Burung',
                        'Reptil' => 'Reptil',
                        'Amfibi' => 'Amfibi',
                        'Serangga' => 'Serangga',
                        'Lainnya' => 'Lainnya',
                    ])
                    ->native(false)
                    ->searchable(),
                Forms\Components\FileUpload::make('foto')
                    ->required()
                    ->image()
                    ->disk('public')
                    ->directory('Fauna')
                    ->columnSpanFull(),
                
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('nama')
                    ->searchable()
                    ->sortable()
                    ->limit(50),
                Tables\Columns\TextColumn::make('slug')
                    ->searchable()
                    ->limit(50)
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('nama_latin')
                    ->searchable()
                    ->sortable()
                    ->limit(50),
                Tables\Columns\TextColumn::make('nama_family')
                    ->searchable()
                    ->sortable()
                    ->limit(50),
                Tables\Columns\TextColumn::make('habitat')
                    ->searchable()
                    ->limit(50),
                Tables\Columns\TextColumn::make('kategori')
                    ->searchable()
                    ->sortable()
                    ->limit(50),
                Tables\Columns\ImageColumn::make('foto')
                    ->height(50)
                    ->width(50)
                    ->circular(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('kategori')
                    ->options([
                        'Mamalia' => 'Mamalia',
                        'Burung' => 'Burung',
                        'Reptil' => 'Reptil',
                        'Amfibi' => 'Amfibi',
                        'Serangga' => 'Serangga',
                        'Lainnya' => 'Lainnya',
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
            'index' => Pages\ListFaunas::route('/'),
            'create' => Pages\CreateFauna::route('/create'),
            'edit' => Pages\EditFauna::route('/{record}/edit'),
        ];
    }
}
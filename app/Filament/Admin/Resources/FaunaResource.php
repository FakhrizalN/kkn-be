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
use Filament\Forms\Components\FileUpload; // Tambahkan ini
use Illuminate\Support\Str; // Tambahkan ini

class FaunaResource extends Resource
{
    protected static ?string $model = Fauna::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('nama')
                    ->required()
                    ->maxLength(255)
                    ->live(onBlur: true) // Aktifkan live update saat input kehilangan fokus
                    ->afterStateUpdated(function (string $operation, $state, Forms\Set $set) {
                        if ($operation === 'create') { // Hanya untuk pembuatan baru
                            $baseSlug = Str::slug($state);
                            $slug = $baseSlug;
                            $count = 1;

                            // Cek apakah slug sudah ada di database
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
                    ->readOnly(), // Jadikan read-only karena diisi otomatis
                Forms\Components\TextInput::make('nama_latin')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('nama_family')
                    ->required()
                    ->maxLength(255),
                Forms\Components\Textarea::make('deskripsi')
                    ->required()
                    ->maxLength(65535)
                    ->columnSpanFull(), // Membuat textarea mengambil lebar penuh
                Forms\Components\FileUpload::make('foto')
                    ->required()
                    ->image()
                    ->disk('public')
                    ->directory('Fauna')
                    ->columnSpanFull(),
                Forms\Components\TextInput::make('habitat')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('kategori')
                    ->required()
                    ->maxLength(255),
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
                    ->toggleable(isToggledHiddenByDefault: true), // Sembunyikan secara default tapi bisa di-toggle
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
                    ->circular(), // Membuat gambar menjadi lingkaran
            ])
            ->filters([
                // Anda bisa menambahkan filter di sini, misalnya berdasarkan kategori
                Tables\Filters\SelectFilter::make('kategori')
                    ->options([
                        'mamalia' => 'Mamalia',
                        'burung' => 'Burung',
                        'reptil' => 'Reptil',
                        'amfibi' => 'Amfibi',
                        'serangga' => 'Serangga',
                        'lainnya' => 'Lainnya',
                        // ... dll
                    ]),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\ViewAction::make(), // Menambahkan tombol lihat
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
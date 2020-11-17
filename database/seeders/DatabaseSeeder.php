<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Album;
use App\Models\Sound;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $user = User::create([
            "name" => "Fermin Villanueva",
            "email" => "FerVillanuev4s@gmail.com",
            "avatar" => "default/unnamed.jpg",
            "password" => \bcrypt('secret'),
            "email_verified_at" => \now()
        ]);
        $album = Album::create([
            'name' => 'Unnamed',
            'release_date' => now(),
            'cover_art' => "default/unnamed.jpg",
            'user_id' => $user->id,

        ]);
        Sound::create([
            "name" => "Figures",
            "album_id" => $album->id,
            "src" => "/audios/audio1.mp3"
        ]);
        Sound::create([
            "name" => "Coffin",
            "album_id" => $album->id,
            "src" => "/audios/audio2.mp3"
        ]);
        Sound::create([
            "name" => "The Monster",
            "album_id" => $album->id,
            "src" => "/audios/audio3.mp3"
        ]);
    }
}

<?php

namespace Database\Seeders;

use App\Models\User;
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
        User::create([
            "name" => "Fermin Villanueva",
            "email" => "FerVillanuev4s@gmail.com",
            "avatar" => "/avatars/unnamed.jpg",
            "password" => \bcrypt('secret'),
            "email_verified_at" => \now()
        ]);
        Sound::create([
            "name" => "Figures",
            "src" => "/audios/audio1.mp3"
        ]);
        Sound::create([
            "name" => "Coffin",
            "src" => "/audios/audio2.mp3"
        ]);
        Sound::create([
            "name" => "The Monster",
            "src" => "/audios/audio3.mp3"
        ]);
    }
}

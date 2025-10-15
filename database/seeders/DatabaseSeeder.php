<?php

namespace Database\Seeders;

use App\Models\Location;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->createAdmin();
        $this->createLocations();
        $this->call(RidersAndDriversSeeder::class);
    }

    protected function createAdmin()
    {
        User::create([
            'first_name' => 'Andrew',
            'last_name' => 'Otis',
            'email' => 'andrew.otis@gmail.com',
            'password' => Hash::make('password'),
            'phone' => '+15207599225'
        ]);
    }

    protected function createLocations()
    {
        $locations = [
            'Airport',
            'Game Hall',
            'Library Rear Entrance',
            'Another Place',
            'Mcnutt Quad',
        ];

        foreach($locations as $location) {
            Location::create(['description' => $location]);
        }
    }
}

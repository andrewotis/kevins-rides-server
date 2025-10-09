<?php

namespace Database\Seeders;

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
}

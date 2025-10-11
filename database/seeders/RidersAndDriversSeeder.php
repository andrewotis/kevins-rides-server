<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Faker\Factory as Faker;

class RidersAndDriversSeeder extends Seeder
{
    public function run(): void
    {
        $faker = Faker::create('en_US');
        $now = now();

        // Seed 700 Riders
        for ($i = 0; $i < 700; $i++) {
            DB::table('riders')->insert([
                'first_name' => $faker->firstName,
                'last_name'  => $faker->lastName,
                'email'      => $faker->unique()->safeEmail,
                'password'   => Hash::make('password'),
                'phone'      => $faker->phoneNumber,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        // Seed 15 Drivers
        for ($i = 0; $i < 15; $i++) {
            DB::table('drivers')->insert([
                'first_name'       => $faker->firstName,
                'last_name'        => $faker->lastName,
                'vehicle_capacity' => $faker->numberBetween(2, 7),
                'email'            => $faker->unique()->safeEmail,
                'password'         => Hash::make('password'),
                'phone'            => $faker->phoneNumber,
                'created_at'       => $now,
                'updated_at'       => $now,
            ]);
        }
    }
}
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Hash;
use App\Mail\Test;
use App\Models\User;

class TestController extends Controller
{
    public function mail()
    {
        Mail::to("andrew.otis@gmail.com")->send(new Test());
        return "test email sent!";
    }

    public function createAdmin()
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

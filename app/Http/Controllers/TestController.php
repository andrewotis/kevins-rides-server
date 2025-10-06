<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\Test;

class TestController extends Controller
{
    public function mail()
    {
        Mail::to("andrew.otis@gmail.com")->send(new Test());
        return "test email sent!";
    }
}

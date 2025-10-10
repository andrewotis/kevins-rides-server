<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Ride;

class RideController extends Controller
{
    // cancel - dont forget to disable user and add $25 cancellation fee
    public function index()
    {
        return Inertia::render('rides', [
            'rides' => Ride::whereNull('deleted_at')->get(),
        ]);
    }
}

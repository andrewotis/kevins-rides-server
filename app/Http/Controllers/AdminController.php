<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rider;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function dashboard()
    {
        return Inertia::render('dashboard', [
            'activeRiders' => Rider::whereNull('deleted_at')->where('active', 1)->count(),
            'inactiveRiders' => Rider::whereNull('deleted_at')->where('active', 0)->count(),
        ]);
    }
}

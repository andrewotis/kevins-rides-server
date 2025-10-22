<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Airline;

class AirlineAPIController extends Controller
{
    public function getAirlines()
    {
        return Airline::all();
    }
}

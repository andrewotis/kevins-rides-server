<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Location;
use App\Models\Ride;
use Illuminate\Support\Facades\Log;

class RideAPIController extends Controller
{
    public function Locations()
    {
        return Location::select(['id', 'description'])->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'rider_id' => 'required',
            'pickup_location_id' => 'required',
            'dropoff_location_id' => 'required',
            'scheduled_at' => 'required',
        ]);

        return Ride::create($request->input());
    }
}

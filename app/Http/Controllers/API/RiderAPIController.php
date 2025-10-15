<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Ride;
use Laravel\Sanctum\PersonalAccessToken;

class RiderAPIController extends Controller
{
    public function getRides(Request $request, $rider_id)
    {
        // TODO - verify the $request->bearerToken() is for this $user_id
        return Ride::with(['pickuplocation', 'dropoffLocation'])->where('rider_id', $rider_id)->get();
    }
}

<?php

use App\Http\Controllers\API\AirlineAPIController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\RiderAPIController;
use App\Http\Controllers\API\DriverAPIController;
use App\Http\Controllers\API\RideAPIController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return "yo";
})->middleware('auth:sanctum');


// -----------------------------------------------------------------------------  AUTH  --------------------------------------------------------------- //
Route::post('/backoffice/login', function (Request $request) {
    if (Auth::guard('web')->attempt($request->only('email', 'password'))) {
        $request->session()->regenerate();
        return response()->json(['message' => 'Logged in']);
    }
    return response()->json(['error' => 'Unauthorized'], 401);
});

Route::post('/rider/login', function (Request $request) {
    if (Auth::guard('rider')->attempt($request->only('email', 'password'))) {
        $request->session()->regenerate();
        return response()->json(['message' => 'Logged in']);
    }
    return response()->json(['error' => 'Unauthorized'], 401);
});

Route::post('/driver/login', function (Request $request) {
    if (Auth::guard('driver')->attempt($request->only('email', 'password'))) {
        $request->session()->regenerate();
        return response()->json(['message' => 'Logged in']);
    }
    return response()->json(['error' => 'Unauthorized'], 401);
});



// ----------------------------------------------------------------------------- RIDES --------------------------------------------------------------- //
Route::get('/locations', [RideAPIController::class, 'locations']);
Route::get('/airlines', [AirlineAPIController::class, 'getAirlines']);
Route::post('/rides', [RideAPIController::class, 'store']);


// ----------------------------------------------------------------------------- RIDERS --------------------------------------------------------------- //
Route::get('/riders/{rider_id}/rides', [RiderAPIController::class, 'getRides']);



// TODO:
Route::get('/riders/account', [RiderAPIController::class, 'account']);



// ----------------------------------------------------------------------------- DRIVERS --------------------------------------------------------------- //






// TODO:
Route::get('/drivers/account', [DriverAPIController::class, 'account']);
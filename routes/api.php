<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\RiderAPIController;
use App\Http\Controllers\API\DriverAPIController;
use App\Http\Controllers\API\RideAPIController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return "yo";
})->middleware('auth:sanctum');


// -----------------------------------------------------------------------------  AUTH  --------------------------------------------------------------- //
Route::post('/login', [AuthController::class, 'userLogin']);
Route::post('/riders/login', [AuthController::class, 'riderLogin']);
Route::post('/drivers/login', [AuthController::class, 'driverLogin']);



// ----------------------------------------------------------------------------- RIDES --------------------------------------------------------------- //
Route::get('/locations', [RideAPIController::class, 'Locations']);
Route::post('/rides', [RideAPIController::class, 'store']);


// ----------------------------------------------------------------------------- RIDERS --------------------------------------------------------------- //
Route::get('/riders/{rider_id}/rides', [RiderAPIController::class, 'getRides']);



// TODO:
Route::get('/riders/account', [RiderAPIController::class, 'account']);



// ----------------------------------------------------------------------------- DRIVERS --------------------------------------------------------------- //






// TODO:
Route::get('/drivers/account', [DriverAPIController::class, 'account']);
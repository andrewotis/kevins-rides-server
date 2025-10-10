<?php

use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PickupLocationController;
use App\Http\Controllers\RideController;
use App\Http\Controllers\RiderController;

// Fortify is handling login routes
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/', [AdminController::class, 'dashboard']);

    // pickup locations
    Route::get('/pickup-locations', [PickupLocationController::class, 'index']);
    Route::put('/pickup-locations/{id}', [PickupLocationController::class, 'update']);
    Route::delete('/pickup-locations/{id}', [PickupLocationController::class, 'delete']);
    Route::post('/pickup-locations', [PickupLocationController::class, 'store']);

    // riders
    Route::get('/riders', [RiderController::class, 'index'])->name('riders.index');
    Route::post('/riders', [RiderController::class, 'register']);
    Route::put('/riders/{id}/password', [RiderController::class, 'updatePassword']);
    Route::put('/riders/{id}', [RiderController::class, 'update']);
    Route::delete('/riders/{id}', [RiderController::class, 'delete']);

    // rides
    Route::get('/rides', [RideController::class, 'index']);
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';

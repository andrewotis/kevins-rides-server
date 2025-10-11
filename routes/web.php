<?php

use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PickupLocationController;
use App\Http\Controllers\RideController;
use App\Http\Controllers\RiderController;
use App\Http\Controllers\DriverController;

// Fortify is handling login routes
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/', [AdminController::class, 'dashboard']);

    // pickup locations
    Route::get('/pickup-locations', [PickupLocationController::class, 'index'])->name('pickup-locations.index');
    Route::put('/pickup-locations/{id}', [PickupLocationController::class, 'update'])->name('pickup-locations.update');
    Route::delete('/pickup-locations/{id}', [PickupLocationController::class, 'delete'])->name('pickup-locations.delete');
    Route::post('/pickup-locations', [PickupLocationController::class, 'store'])->name('pickup-locations.store');

    // riders
    Route::get('/riders', [RiderController::class, 'index'])->name('riders.index');
    Route::post('/riders', [RiderController::class, 'register'])->name('riders.register');
    Route::put('/riders/{id}/password', [RiderController::class, 'updatePassword'])->name('riders.reset-password');
    Route::put('/riders/{id}', [RiderController::class, 'update'])->name('riders.update');
    Route::delete('/riders/{id}', [RiderController::class, 'delete'])->name('drivers.delete');

    // drivers
    Route::get('/drivers', [DriverController::class, 'index'])->name('drivers.index');
    Route::post('/drivers', [DriverController::class, 'register'])->name('drivers.register');
    Route::put('/drivers/{id}/password', [DriverController::class, 'updatePassword'])->name('drivers.update-password');
    Route::put('/drivers/{id}', [DriverController::class, 'update'])->name('driver.update');
    Route::delete('/drivers/{id}', [DriverController::class, 'delete'])->name('drivers.delete');

    // rides
    Route::get('/rides', [RideController::class, 'index']);
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';

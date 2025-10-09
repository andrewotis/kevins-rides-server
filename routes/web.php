<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PickupLocationController;

// Fortify is handling login routes
Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('/', 'dashboard')->name('dashboard');
    
    // pickup locations
    Route::get('/pickup-locations', [PickupLocationController::class, 'index']);
    Route::put('/pickup-locations/{id}', [PickupLocationController::class, 'update']);
    Route::delete('/pickup-locations/{id}', [PickupLocationController::class, 'delete']);
    Route::post('/pickup-locations', [PickupLocationController::class, 'store']);

    // rides
    
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

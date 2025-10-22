<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('rides', function (Blueprint $table) {
            $table->id();
            $table->uuid('ride_group_id')->nullable();      // used to group a depart/return flight together (to be able to display nicely for users)
            $table->boolean('is_return')->default(false);   // used to indictate IF a round trip which ride record is for which flight
            $table->bigInteger('rider_id');                 // the user
            $table->bigInteger('driver_id')->nullable();    // the driver
            $table->bigInteger('pickup_location_id');       // pick up location (campus or airport)
            $table->bigInteger('dropoff_location_id');      // drop off location (campus or airport)
            $table->date('date_of_travel');                 // date of travel           
            $table->bigInteger('airline_id');               // references airlines.id  
            $table->text('flight_number');                  // flight number
            $table->time('flight_time');                    // flight time

            // timestamps
            $table->timestamps();

            // relationships
            $table->foreign('airline_id')->references('id')->on('airlines');
            $table->foreign('dropoff_location_id')->references('id')->on('locations');
            $table->foreign('pickup_location_id')->references('id')->on('locations');
            $table->foreign('rider_id')->references('id')->on('riders');
            $table->foreign('driver_id')->references('id')->on('drivers');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rides');
    }
};

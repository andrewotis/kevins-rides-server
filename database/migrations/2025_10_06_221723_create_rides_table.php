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
            $table->uuid('ride_group_id')->nullable();
            $table->boolean('is_return')->default(false);
            $table->bigInteger('rider_id');
            $table->foreign('rider_id')->references('id')->on('riders');
            $table->bigInteger('driver_id')->nullable();
            $table->foreign('driver_id')->references('id')->on('drivers');
            $table->bigInteger('pickup_location_id');
            $table->foreign('pickup_location_id')->references('id')->on('locations');
            $table->bigInteger('dropoff_location_id');
            $table->foreign('dropoff_location_id')->references('id')->on('locations');
            $table->dateTime('scheduled_at');
            $table->dateTime('confirmed_at')->nullable();
            $table->dateTime('cancelled_at')->nullable();
            $table->dateTime('created_at');
            $table->dateTime('updated_at');
            $table->softDeletes();
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

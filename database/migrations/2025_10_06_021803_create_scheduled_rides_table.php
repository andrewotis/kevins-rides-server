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
        Schema::disableForeignKeyConstraints();

        Schema::create('scheduled_rides', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('rider_id');
            $table->foreign('rider_id')->references('id')->on('Users');
            $table->bigInteger('driver_id');
            $table->foreign('driver_id')->references('id')->on('Users');
            $table->bigInteger('pickup_location');
            $table->foreign('pickup_location')->references('id')->on('pickup_locations');
            $table->dateTime('scheduled_at');
            $table->dateTime('confirmed_at')->nullable();
            $table->dateTime('cancelled_at')->nullable();
            $table->dateTime('created_at');
            $table->dateTime('updated_at');
            $table->dateTime('deleted_at')->nullable();
        });

        Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('scheduled_rides');
    }
};

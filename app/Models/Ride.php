<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ride extends Model
{
    protected $guarded = ['id'];
    protected $hidden = ['deleted_at'];

    public function rider()
    {
        return $this->belongsTo(Rider::class);
    }

    public function driver()
    {
        return $this->belongsTo(Driver::class);
    }

    public function airline()
    {
        return $this->belongsTo(Airline::class);
    }

    public function pickupLocation()
    {
        return $this->belongsTo(Location::class);
    }
    
    public function dropoffLocation()
    {
        return $this->belongsTo(Location::class);
    }
}

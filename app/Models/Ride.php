<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Ride extends Model
{
    use SoftDeletes;

    protected $guarded = ['id'];
    protected $appends = ['scheduled_date', 'scheduled_time'];
    protected $hidden = ['deleted_at'];


    public function pickupLocation()
    {
        return $this->belongsTo(Location::class);
    }
    
    public function dropoffLocation()
    {
        return $this->belongsTo(Location::class);
    }

    public function getScheduledDateAttribute()
    {
        return \Carbon\Carbon::parse($this->scheduled_at)->toDateString(); // "2025-10-15"
    }

    public function getScheduledTimeAttribute()
    {
        return \Carbon\Carbon::parse($this->scheduled_at)->format('H:i'); // "13:30"
    }
}

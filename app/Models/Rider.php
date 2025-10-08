<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Rider extends Model
{
    use SoftDeletes;

    protected $guarded = ['id'];

    public function notifications()
    {
        return $this->morphMany(Notification::class, 'notifiable');
    }

}

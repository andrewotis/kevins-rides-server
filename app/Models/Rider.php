<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Sanctum\HasApiTokens;

class Rider extends Authenticatable
{
    use HasApiTokens, SoftDeletes;

    protected $guarded = ['id'];

    protected $hidden = [
        'password',
        'two_factor_recovery_codes',
        'two_factor_secret',
        'two_factor_confirmed_at',
        'email_verified_at',
        'phone_verified_at'
    ];

    public function notifications()
    {
        return $this->morphMany(Notification::class, 'notifiable');
    }
}
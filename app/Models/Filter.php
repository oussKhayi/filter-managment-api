<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Filter extends Model
{
    use HasFactory, Notifiable, HasApiTokens;


    protected $table = 'filters';

    protected $fillable = [
        'local_code',
        'global_code',
        'dimension_form',
        'dimensions',
        'images',
        'other_company_codes',
        'supported_cars',
        'type',
    ];

    protected $casts = [
        'dimensions' => 'json',
        'images' => 'json',
        'other_company_codes' => 'json',
        'supported_cars' => 'json',
    ];
}
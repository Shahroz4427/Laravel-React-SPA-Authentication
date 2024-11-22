<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @method static create(mixed $validated)
 * @method static paginate()
 */
class Photo extends Model
{
    use HasFactory;

    protected $fillable = [
        'userId',
        'id',
        'title',
        'body'
    ];
}

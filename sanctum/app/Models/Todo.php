<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @method static create(mixed $validated)
 * @method static paginate()
 */
class Todo extends Model
{

    use HasFactory;

    protected $fillable=[
        'user_id',
        'title',
        'completed'
    ];
}

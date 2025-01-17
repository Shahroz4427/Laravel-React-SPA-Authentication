<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


/**
 * @method static where(\Closure $param)
 * @method static create(array $array)
 * @method static findOrFail(mixed $messageId)
 */
class ChatMessage extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
        'from_id',
        'to_id',
        'body',
        'attachment',
        'seen'
    ];


}

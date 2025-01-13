<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


/**
 * @method static where(\Closure $param)
 * @method static create(array $array)
 */
class ChatMessage extends Model
{
    use HasFactory, HasUuids;


    protected $fillable = [
        'from_id',
        'to_id',
        'body',
        'attachment',
        'seen',
    ];

    public function fromUser(): BelongsTo
    {
        return $this->belongsTo(User::class, 'from_id');
    }

    public function toUser(): BelongsTo
    {
        return $this->belongsTo(User::class, 'to_id');
    }
}

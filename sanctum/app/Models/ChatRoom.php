<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\Auth;


/**
 * @method static where(string $string, int|string|null $id)
 */
class ChatRoom extends Model
{
    protected $fillable = [
        'from_id', 'to_id', 'messenger_color', 'active_status', 'avatar', 'dark_mode',
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

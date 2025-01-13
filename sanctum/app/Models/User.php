<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use JetBrains\PhpStorm\ArrayShape;


/**
 * @method static whereIn(string $string, \Closure $param)
 * @method static findOrFail(int|string|null $id)
 * @property mixed $id
 */
class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;


    protected $appends = ['messages'];


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    #[ArrayShape(['email_verified_at' => "string", 'password' => "string"])] protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function sentMessages(): HasMany
    {
        return $this->hasMany(ChatMessage::class, 'from_id');
    }

    public function receivedMessages(): HasMany
    {
        return $this->hasMany(ChatMessage::class, 'to_id');
    }

    public function getMessagesAttribute()
    {
        $authUserId = auth()->id();

        return ChatMessage::where(function ($query) use ($authUserId) {
            $query->where('from_id', $this->id)
                ->where('to_id', $authUserId);
        })->orWhere(function ($query) use ($authUserId) {
            $query->where('from_id', $authUserId)
                ->where('to_id', $this->id);
        })->orderBy('created_at', 'desc')
        ->get();
    }





}

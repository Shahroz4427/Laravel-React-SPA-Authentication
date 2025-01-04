<?php

use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\Facades\Log;


Broadcast::channel('my-channel.{userId}', function ($user, $userId) {
    return (int) $user->id === (int) $userId;
});

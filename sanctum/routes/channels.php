<?php

use Illuminate\Support\Facades\Broadcast;


Broadcast::channel('chat.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});

Broadcast::channel('mark.message.seen.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});

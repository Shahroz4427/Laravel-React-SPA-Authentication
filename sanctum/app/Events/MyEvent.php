<?php

namespace App\Events;

use App\Models\ChatMessage;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use JetBrains\PhpStorm\ArrayShape;

class MyEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public int $id;

    public $message;

    public function __construct(ChatMessage $message, int $id)
    {
        $this->id = $id;
        $this->message = $message;
    }

    public function broadcastOn(): PrivateChannel
    {
        return new PrivateChannel('chat.' . $this->id);
    }

    public function broadcastAs(): string
    {
        return 'message.send';
    }

    #[ArrayShape(['id' => "int", 'message' => "array"])]
    public function broadcastWith(): array
    {
        return [
            'id' => $this->id,
            'message' => $this->message->toArray(),
        ];
    }


}

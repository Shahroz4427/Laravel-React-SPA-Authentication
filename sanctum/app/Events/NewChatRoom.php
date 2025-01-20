<?php

namespace App\Events;

use App\Models\ChatRoom;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use JetBrains\PhpStorm\ArrayShape;

class NewChatRoom implements  ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public array $data;

    /**
     * Create a new event instance.
     */
    public function __construct(array $data)
    {
        $this->data = $data;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return PrivateChannel
     */
    public function broadcastOn(): PrivateChannel
    {
        return new PrivateChannel('create.new.room.' . $this->data['to_id']);
    }


    /**
     * The event's broadcast name.
     */
    public function broadcastAs(): string
    {
        return 'new.chatroom';
    }

    /**
     * Get the data to broadcast.
     *
     * @return array<string, mixed>
     */
    #[ArrayShape(['chatRoom' => "array"])] public function broadcastWith(): array
    {
        return ['chatRoom' => $this->data];
    }
}

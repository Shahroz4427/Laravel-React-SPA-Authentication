<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @property mixed $id
 * @property mixed $body
 * @property mixed $attachment
 * @property mixed $created_at
 * @property mixed $updated_at
 */
class ChatMessageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'receivedFrom' => new UserResource($this->whenLoaded('receivedFrom')),
            'sendTo' => new UserResource($this->whenLoaded('sendTo')),
            'body' => $this->body,
            'attachment' => $this->attachment,
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at,
        ];
    }
}

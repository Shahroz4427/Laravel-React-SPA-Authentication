<?php

namespace App\Http\Controllers\Api\V1;


use App\Events\MyEvent;
use App\Events\SendMessage;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Models\ChatMessage;
use App\Models\User;


class ChatController extends Controller
{

    public User $user;

    protected int $perPage = 30;

    public function __construct()
    {
        $this->user = User::findOrFail(Auth::id());
    }

    public function contacts(): JsonResponse
    {
        $authUserId = $this->user->id;

        $contacts = User::whereIn('id', function ($query) use ($authUserId) {
            $query->selectRaw('DISTINCT CASE WHEN from_id = ? THEN to_id ELSE from_id END AS contact_id', [$authUserId])
                ->from('chat_messages')
                ->where(function ($q) use ($authUserId) {
                    $q->where('from_id', $authUserId)
                        ->orWhere('to_id', $authUserId);
                });
        })->get();

        return response()->json($contacts);
    }

    public function sendMessage(Request $request): JsonResponse
    {
        $chatMessage = ChatMessage::create([
            'id' => $request->get('id'),
            'from_id' => $request->get('from_id'),
            'to_id' => $request->get('to_id'),
            'body' => $request->get('body'),
            'attachment' => $request->get('attachment'),
        ]);

        MyEvent::dispatch($chatMessage, $request->get('to_id'));


        return response()->json($chatMessage);
    }


}

<?php

namespace App\Http\Controllers\Api\V1;


use App\Events\MessageSeen;
use App\Events\SendMessage;
use App\Models\ChatRoom;
use App\Models\ChatMessage;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Models\User;
use Psy\Readline\Hoa\Event;


class ChatController extends Controller
{


    public function contacts(): JsonResponse
    {
        $users = User::where('id', '!=', auth()->id())->get();
        return response()->json($users);
    }

    public function chatrooms(): JsonResponse
    {
        $authUserId = Auth::id();

        $contacts = ChatRoom::where('from_id', $authUserId)
            ->orWhere('to_id', $authUserId)
            ->with(['fromUser', 'toUser'])
            ->get()
            ->map(function ($contact) use ($authUserId) {
                $latestMessage = ChatMessage::where(function ($query) use ($contact) {
                    $query->where('from_id', $contact->from_id)
                        ->where('to_id', $contact->to_id);
                })->orWhere(function ($query) use ($contact) {
                    $query->where('from_id', $contact->to_id)
                        ->where('to_id', $contact->from_id);
                })->latest()->first();

                return [
                    'from_id' => $contact->from_id,
                    'to_id' => $contact->to_id,
                    'user' => $contact->from_id === $authUserId ? $contact->toUser : $contact->fromUser,
                    'latest_message' => $latestMessage,
                ];
            })
            ->unique('user.id')
            ->values();

        return response()->json($contacts);
    }


    public function messages(): JsonResponse
    {
        $messages = ChatMessage::all();
        return response()->json($messages);
    }

    public function sendMessage(Request $request)
    {
        $chatMessage = ChatMessage::create([
            'from_id' => $request->get('from_id'),
            'to_id' => $request->get('to_id'),
            'body' => $request->get('body'),
            'attachment' => $request->get('attachment'),
        ]);

        SendMessage::dispatch($chatMessage, $request->get('to_id'));

        return response()->json($chatMessage);
    }

    public function markAsSeen(Request $request)
    {
        $messageId = $request->get('message_id');

        $message = ChatMessage::findOrFail($messageId);
        $message->seen = true;
        $message->save();

        MessageSeen::dispatch($message);

        return response()->json(['success' => true, 'message' => 'Message marked as seen.']);
    }

}

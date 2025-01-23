<?php

namespace App\Http\Controllers\Api\V1;


use App\Events\MessageSeen;
use App\Events\NewChatRoom;
use App\Events\SendMessage;
use App\Models\ChatRoom;
use App\Models\ChatMessage;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Models\User;


class ChatController extends Controller
{

    public function contacts(): JsonResponse
    {
        $chatroomUserIds = Chatroom::where('from_id', auth()->id())
            ->orWhere('to_id', auth()->id())
            ->get(['from_id', 'to_id'])
            ->flatMap(function ($chatroom) {
                return [$chatroom->from_id, $chatroom->to_id];
            })
            ->unique();

        $excludedUserIds = $chatroomUserIds->merge([auth()->id()]);

        $users = User::whereNotIn('id', $excludedUserIds)->get();

        return response()->json($users);
    }



    public function chatrooms(): JsonResponse
    {
        $authUserId = Auth::id();

        $chatrooms = ChatRoom::where('from_id', $authUserId)
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

        return response()->json($chatrooms);
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

    public function markAsSeen(Request $request): JsonResponse
    {
        $messageId = $request->get('message_id');

        $message = ChatMessage::findOrFail($messageId);
        $message->seen = true;
        $message->save();

        MessageSeen::dispatch($message);

        return response()->json(['success' => true, 'message' => 'Message marked as seen.']);
    }

    public function createChat(Request $request): JsonResponse
    {
        $chatroom = ChatRoom::create([
            'from_id' => $request->get('from_id'),
            'to_id' => $request->get('to_id'),
        ]);

        $newMessage = ChatMessage::create([
            'from_id' => $request->get('from_id'),
            'to_id' => $request->get('to_id'),
            'body' => $request->get('body'),
            'attachment' => $request->get('attachment'),
        ]);


        $fromUser = User::find($request->get('from_id'));

        $toUser = User::find($request->get('to_id'));

        $data = [
            'from_id' => $chatroom->from_id,
            'to_id' => $chatroom->to_id,
            'user' => $fromUser,
            'latest_message' => $newMessage,
        ];


        $response = [
            'from_id' => $chatroom->from_id,
            'to_id' => $chatroom->to_id,
            'user' => $toUser,
            'latest_message' => $newMessage,
        ];


        NewChatRoom::dispatch($data);

        return response()->json($response);
    }


}

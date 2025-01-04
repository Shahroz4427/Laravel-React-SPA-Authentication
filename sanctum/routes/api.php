<?php


use App\Http\Controllers\Api\V1\AlbumController;
use App\Http\Controllers\Api\V1\CommentController;
use App\Http\Controllers\Api\V1\CustomerController;
use App\Http\Controllers\Api\V1\PhotoController;
use App\Http\Controllers\Api\V1\PostController;
use App\Http\Controllers\Api\V1\TodoController;
use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;




Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('posts', PostController::class);
    Route::apiResource('comments', CommentController::class);
    Route::apiResource('albums', AlbumController::class);
    Route::apiResource('photos', PhotoController::class);
    Route::apiResource('todos', TodoController::class);
    Route::apiResource('customers', CustomerController::class);
});




<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\StorePhotoRequest;
use App\Http\Requests\Api\V1\UpdatePhotoRequest;
use App\Http\Resources\PhotoCollection;
use App\Http\Resources\PhotoResource;
use App\Models\Photo;
use Illuminate\Http\Request;

class PhotoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): PhotoCollection
    {
        return new PhotoCollection(Photo::paginate());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePhotoRequest $request): PhotoResource
    {
        return new PhotoResource(Photo::create($request->validated()));
    }

    /**
     * Display the specified resource.
     */
    public function show(Photo $photo): PhotoResource
    {
        return new PhotoResource($photo);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePhotoRequest $request, Photo $photo)
    {
        $photo->update($request->validated());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Photo $photo)
    {
        $photo->delete();
    }
}

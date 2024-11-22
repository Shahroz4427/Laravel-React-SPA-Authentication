<?php

namespace App\Http\Requests\Api\V1;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePhotoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $rules= [
            'album_Id'=>'required|exists:albums,id',
            'title'=>'required|string|max:255',
            'url'=>'required|string|max:255',
            'thumbnailUrl'=>'required|string|max:255'
        ];

        if($this->isMethod('PATCH'))
        {
            $rules['album_Id']='sometimes|exists:albums,id';
            $rules['title']='sometimes|string|max:255';
            $rules['url']='sometimes|string|max:255';
            $rules['thumbnailUrl']='sometimes|string|max:255';

        }
        return $rules;
    }
}

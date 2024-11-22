<?php

namespace App\Http\Requests\Api\V1;

use Illuminate\Foundation\Http\FormRequest;

class UpdateTodoRequest extends FormRequest
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
        $rules = [
            'user_id' => 'required|exists:users,id',
            'title' => 'required|string|max:255',
            'completed' => 'required|in:1,0',
        ];

        if ($this->isMethod('PATCH')) {
            $rules['user_id'] = 'sometimes|exists:users,id';
            $rules['title'] = 'sometimes|string|max:255';
            $rules['completed'] = 'sometimes|in:1,0';
        }

        return $rules;
    }
}

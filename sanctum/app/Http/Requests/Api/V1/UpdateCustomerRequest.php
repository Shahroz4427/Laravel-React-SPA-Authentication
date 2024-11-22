<?php

namespace App\Http\Requests\Api\V1;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCustomerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $rules = [
            'name' => 'required|string|max:255',
            'username' => 'required|string|max:255',
            'email' => 'required|string|email|unique:customers,email,' . $this->id,
            'address.street' => 'required|string|max:255',
            'address.suite' => 'required|string|max:255',
            'address.city' => 'required|string|max:255',
            'address.zipcode' => 'required|string|max:255',
            'address.geo.lat' => 'required|string|max:255',
            'address.geo.lng' => 'required|string|max:255',
            'phone' => 'required|string|max:255',
            'website' => 'required|string|max:255',
            'company.name' => 'required|string|max:255',
            'company.catch_phrase' => 'required|string|max:255',
            'company.bs' => 'required|string|max:255',
        ];

        if ($this->isMethod('PATCH')) {
            $rules['name'] = 'sometimes|string|max:255';
            $rules['username'] = 'sometimes|string|max:255';
            $rules['email'] = 'sometimes|string|email|unique:customers,email,' . $this->id;
            $rules['address.street'] = 'sometimes|string|max:255';
            $rules['address.suite'] = 'sometimes|string|max:255';
            $rules['address.city'] = 'sometimes|string|max:255';
            $rules['address.zipcode'] = 'sometimes|string|max:255';
            $rules['address.geo.lat'] = 'sometimes|string|max:255';
            $rules['address.geo.lng'] = 'sometimes|string|max:255';
            $rules['phone'] = 'sometimes|string|max:255';
            $rules['website'] = 'sometimes|string|max:255';
            $rules['company.name'] = 'sometimes|string|max:255';
            $rules['company.catch_phrase'] = 'sometimes|string|max:255';
            $rules['company.bs'] = 'sometimes|string|max:255';

        }

        return $rules;
    }
}

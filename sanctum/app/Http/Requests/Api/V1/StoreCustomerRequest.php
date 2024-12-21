<?php

namespace App\Http\Requests\Api\V1;

use Illuminate\Foundation\Http\FormRequest;

class StoreCustomerRequest extends FormRequest
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
        return [
            'name' => 'required|string|max:255',
            'username' => 'required|string|max:255',
            'email' => 'required|string|email|unique:customers,email',
            'address.street' => 'nullable|string',
            'address.suite' => 'nullable|string',
            'address.city' => 'nullable|string',
            'address.zipcode' => 'nullable|string',
            'address.geo.lat' => 'required_with:address|numeric|between:-90,90',
            'address.geo.lng' => 'required_with:address|numeric|between:-180,180',
            'phone' => 'required|string|max:20',
            'website' => 'required|string|max:255',
            'company.name' => 'nullable|string|max:255',
            'company.catchPhrase' => 'nullable|string|max:255',
            'company.bs' => 'nullable|string|max:255',
        ];
    }
}

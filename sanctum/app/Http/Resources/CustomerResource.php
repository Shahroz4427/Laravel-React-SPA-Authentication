<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @property mixed $id
 * @property mixed $name
 * @property mixed $username
 * @property mixed $email
 * @property mixed $phone
 * @property mixed $website
 */
class CustomerResource extends JsonResource
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
            'name' => $this->name,
            'username' => $this->username,
            'email' => $this->email,
            'address' => new CustomerAddressResource($this->whenLoaded('customerAddress')),
            'phone' => $this->phone,
            'website' => $this->website,
            'company' => new CustomerCompanyResource($this->whenLoaded('customerCompany'))
        ];
    }
}

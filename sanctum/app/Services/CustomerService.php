<?php

namespace App\Services;

use App\Models\Customer;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Http\Request;

class CustomerService
{

    public function searchQuery(Request $request): LengthAwarePaginator
    {
        $search = trim($request->get('search'));
        $searchPattern = '%' . $search . '%';
        return Customer::query()
            ->when($search, function ($query) use ($searchPattern) {
                $query->where('id', 'like', $searchPattern)
                    ->orWhere('name', 'like', $searchPattern)
                    ->orWhere('username', 'like', $searchPattern)
                    ->orWhere('email', 'like', $searchPattern)
                    ->orWhere('phone', 'like', $searchPattern)
                    ->orWhere('website', 'like', $searchPattern)
                    ->orWhereHas('address', function ($query) use ($searchPattern) {
                        $query->where(function ($query) use ($searchPattern) {
                            $query->where('street', 'like', $searchPattern)
                                ->orWhere('suite', 'like', $searchPattern)
                                ->orWhere('city', 'like', $searchPattern)
                                ->orWhere('zipcode', 'like', $searchPattern);
                        });
                    })
                    ->orWhereHas('address.geo', function ($query) use ($searchPattern) {
                        $query->where('lat', 'like', $searchPattern)
                            ->orWhere('lng', 'like', $searchPattern);
                    })
                    ->orWhereHas('company', function ($query) use ($searchPattern) {
                        $query->where(function ($query) use ($searchPattern) {
                            $query->where('name', 'like', $searchPattern)
                                ->orWhere('catch_phrase', 'like', $searchPattern)
                                ->orWhere('bs', 'like', $searchPattern);
                        });
                    });
            })
            ->with(['address', 'company', 'address.geo'])
            ->orderBy('id', 'desc')
            ->paginate($request->get('perPage'))
            ->withQueryString();
    }


    public function createCustomer(array $validatedData): Customer
    {
        $customer = Customer::create([
            'name' => $validatedData['name'],
            'username' => $validatedData['username'],
            'email' => $validatedData['email'],
            'phone' => $validatedData['phone'],
            'website' => $validatedData['website']
        ]);

        $address = $customer->address()->create([
            'street' => $validatedData['address']['street'],
            'suite' => $validatedData['address']['suite'],
            'city' => $validatedData['address']['city'],
            'zipcode' => $validatedData['address']['zipcode']
        ]);

        $address->geo()->create([
            'lat' => $validatedData['address']['geo']['lat'],
            'lng' => $validatedData['address']['geo']['lng']
        ]);

        $customer->company()->create([
            'name' => $validatedData['company']['name'],
            'catch_phrase' => $validatedData['company']['catchPhrase'],
            'bs' => $validatedData['company']['bs']
        ]);

        $customer->load(['address', 'company', 'address.geo']);

        return $customer;
    }


    public function updateCustomer(Customer $customer, array $validatedData): void
    {
        $customer->update([
            'name' => $validatedData['name'] ?? $customer->name,
            'username' => $validatedData['username'] ?? $customer->username,
            'email' => $validatedData['email'] ?? $customer->email,
            'phone' => $validatedData['phone'] ?? $customer->phone,
            'website' => $validatedData['website'] ?? $customer->website
        ]);

        if (isset($validatedData['address'])) {
            $customer->address()->updateOrCreate([], [
                'street' => $validatedData['address']['street'] ?? $customer->address->street,
                'suite' => $validatedData['address']['suite'] ?? $customer->address->suite,
                'city' => $validatedData['address']['city'] ?? $customer->address->city,
                'zipcode' => $validatedData['address']['zipcode'] ?? $customer->address->zipcode
            ]);

            if (isset($validatedData['address']['geo'])) {
                $customer->address->geo()->updateOrCreate([], [
                    'lat' => $validatedData['address']['geo']['lat'] ?? $customer->address->geo->lat,
                    'lng' => $validatedData['address']['geo']['lng'] ?? $customer->address->geo->lng
                ]);
            }
        }

        if (isset($validatedData['company'])) {
            $customer->company()->updateOrCreate([], [
                'name' => $validatedData['company']['name'] ?? $customer->company->name,
                'catch_phrase' => $validatedData['company']['catchPhrase'] ?? $customer->company->catch_phrase,
                'bs' => $validatedData['company']['bs'] ?? $customer->company->bs
            ]);
        }
    }
}

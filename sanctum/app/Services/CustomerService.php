<?php

namespace App\Services;

use App\Http\Filters\CustomerGlobalSearch;
use App\Models\Customer;
use App\Models\CustomerAddress;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class CustomerService
{

    private function partialFilters(): array
    {
        return [
            'id',
            'name',
            'username',
            'email',
            'phone',
            'website'
        ];
    }


    public function searchQuery(string $perPage): LengthAwarePaginator
    {
        return QueryBuilder::for(Customer::class)
            ->allowedFilters([
                AllowedFilter::custom('search', new CustomerGlobalSearch),
                ...$this->partialFilters()
            ])
            ->allowedIncludes(['customerAddress', 'customerCompany', 'customerAddress.customerGeo'])
            ->allowedSorts(['name', 'username', 'email', 'phone', 'website'])
            ->paginate($perPage)
            ->withQueryString();
    }

    public function createCustomer(array $validatedData): Customer
    {
        $customer = $this->createCustomerOnly($validatedData);

        $address = $this->createCustomerAddress($customer, $validatedData['address']);

        $this->createCustomerGeo($address, $validatedData['address']['geo']);

        $this->createCustomerCompany($customer, $validatedData['company']);

        $customer->load(['customerAddress', 'customerCompany', 'customerAddress.customerGeo']);

        return $customer;
    }


    private function createCustomerAddress(Customer $customer, array $data): mixed
    {
        return $customer->customerAddress()->create([
            'street' => $data['street'],
            'suite' => $data['suite'],
            'city' => $data['city'],
            'zipcode' => $data['zipcode']
        ]);
    }


    private function createCustomerGeo(CustomerAddress $address, array $data): void
    {
        $address->CustomerGeo()->create([
            'lat' => $data['lat'],
            'lng' => $data['lng']
        ]);
    }

    private function createCustomerOnly(array $data): Customer
    {
        return Customer::create([
            'name' => $data['name'],
            'username' => $data['username'],
            'email' => $data['email'],
            'phone' => $data['phone'],
            'website' => $data['website']
        ]);
    }

    private function createCustomerCompany(Customer $customer, array $data): void
    {
        $customer->customerCompany()->create([
            'name' => $data['name'],
            'catch_phrase' => $data['catchPhrase'],
            'bs' => $data['bs']
        ]);
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
            $customer->customerAddress()->updateOrCreate([], [
                'street' => $validatedData['address']['street'] ?? $customer->address->street,
                'suite' => $validatedData['address']['suite'] ?? $customer->address->suite,
                'city' => $validatedData['address']['city'] ?? $customer->address->city,
                'zipcode' => $validatedData['address']['zipcode'] ?? $customer->address->zipcode
            ]);

            if (isset($validatedData['address']['geo'])) {
                $customer->customerAddress->customerGeo()->updateOrCreate([], [
                    'lat' => $validatedData['address']['geo']['lat'] ?? $customer->address->geo->lat,
                    'lng' => $validatedData['address']['geo']['lng'] ?? $customer->address->geo->lng
                ]);
            }
        }

        if (isset($validatedData['company'])) {
            $customer->customerCompany()->updateOrCreate([], [
                'name' => $validatedData['company']['name'] ?? $customer->company->name,
                'catch_phrase' => $validatedData['company']['catchPhrase'] ?? $customer->company->catch_phrase,
                'bs' => $validatedData['company']['bs'] ?? $customer->company->bs
            ]);
        }
    }

//    public function oldQuery(Request $request): LengthAwarePaginator
//    {
//        $search = trim($request->get('search'));
//        $searchPattern = '%' . $search . '%';
//        return Customer::query()
//            ->when($search, function ($query) use ($searchPattern) {
//                $query->where('id', 'like', $searchPattern)
//                    ->orWhere('name', 'like', $searchPattern)
//                    ->orWhere('username', 'like', $searchPattern)
//                    ->orWhere('email', 'like', $searchPattern)
//                    ->orWhere('phone', 'like', $searchPattern)
//                    ->orWhere('website', 'like', $searchPattern)
//                    ->orWhereHas('customerAddress', function ($query) use ($searchPattern) {
//                        $query->where(function ($query) use ($searchPattern) {
//                            $query->where('street', 'like', $searchPattern)
//                                ->orWhere('suite', 'like', $searchPattern)
//                                ->orWhere('city', 'like', $searchPattern)
//                                ->orWhere('zipcode', 'like', $searchPattern);
//                        });
//                    })
//                    ->orWhereHas('customerCompany', function ($query) use ($searchPattern) {
//                        $query->where(function ($query) use ($searchPattern) {
//                            $query->where('name', 'like', $searchPattern)
//                                ->orWhere('catch_phrase', 'like', $searchPattern)
//                                ->orWhere('bs', 'like', $searchPattern);
//                        });
//                    })
//                    ->orWhereHas('customerAddress.customerGeo', function ($query) use ($searchPattern) {
//                        $query->where('lat', 'like', $searchPattern)
//                            ->orWhere('lng', 'like', $searchPattern);
//                    });
//            })
//            ->with(['customerAddress', 'customerCompany', 'customerAddress.customerGeo'])
//            ->orderBy('id', 'desc')
//            ->paginate($request->get('perPage'))
//            ->withQueryString();
//    }
}

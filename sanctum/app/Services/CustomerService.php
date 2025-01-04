<?php

namespace App\Services;

use App\Http\Filters\CustomerGlobalSearch;
use App\Models\Customer;
use App\Models\CustomerAddress;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
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
            ->defaultSort('-id')
            ->paginate($perPage)
            ->withQueryString();
    }


    public function createCustomer(array $validatedData): Customer
    {
        $customer = $this->createCustomerOnly($validatedData);

        if (!empty($validatedData['address'])) {
            $this->createCustomerAddressWithGeo($customer, $validatedData['address']);
        }

        if (!empty($validatedData['company'])) {
            $this->createCustomerCompany($customer, $validatedData['company']);
        }

        $customer->load(['customerAddress.customerGeo', 'customerCompany']);

        return $customer;
    }

    private function createCustomerOnly(array $data): Customer
    {
        return Customer::create([
            'name' => $data['name'],
            'username' => $data['username'],
            'email' => $data['email'],
            'phone' => $data['phone'],
            'website' => $data['website'],
        ]);
    }

    private function createCustomerAddressWithGeo(Customer $customer, array $addressData): void
    {
        $address = $customer->customerAddress()->create([
            'street' => $addressData['street'],
            'suite' => $addressData['suite'],
            'city' => $addressData['city'],
            'zipcode' => $addressData['zipcode'],
        ]);

        if (!empty($addressData['geo'])) {
            $this->createCustomerGeo($address, $addressData['geo']);
        }
    }

    private function createCustomerGeo(CustomerAddress $address, array $geoData): void
    {
        $address->customerGeo()->create([
            'lat' => $geoData['lat'],
            'lng' => $geoData['lng'],
        ]);
    }

    private function createCustomerCompany(Customer $customer, array $companyData): void
    {
        $customer->customerCompany()->create([
            'name' => $companyData['name'],
            'catch_phrase' => $companyData['catchPhrase'],
            'bs' => $companyData['bs'],
        ]);
    }

    public function updateCustomer(Customer $customer, array $validatedData): void
    {
        $this->updateCustomerDetails($customer, $validatedData);

        if (!empty($validatedData['address'])) {
            $this->updateCustomerAddressWithGeo($customer, $validatedData['address']);
        }

        if (!empty($validatedData['company'])) {
            $this->updateCustomerCompany($customer, $validatedData['company']);
        }
    }

    private function updateCustomerDetails(Customer $customer, array $data): void
    {
        $customer->update([
            'name' => $data['name'] ?? $customer->name,
            'username' => $data['username'] ?? $customer->username,
            'email' => $data['email'] ?? $customer->email,
            'phone' => $data['phone'] ?? $customer->phone,
            'website' => $data['website'] ?? $customer->website,
        ]);
    }

    private function updateCustomerAddressWithGeo(Customer $customer, array $addressData): void
    {
        $address = $customer->customerAddress()->updateOrCreate([], [
            'street' => $addressData['street'] ?? $customer->customerAddress->street ?? null,
            'suite' => $addressData['suite'] ?? $customer->customerAddress->suite ?? null,
            'city' => $addressData['city'] ?? $customer->customerAddress->city ?? null,
            'zipcode' => $addressData['zipcode'] ?? $customer->customerAddress->zipcode ?? null,
        ]);

        if (!empty($addressData['geo'])) {
            $this->updateCustomerGeo($address, $addressData['geo']);
        }
    }

    private function updateCustomerGeo(CustomerAddress $address, array $geoData): void
    {
        $address->customerGeo()->updateOrCreate([], [
            'lat' => $geoData['lat'] ?? $address->customerGeo->lat ?? null,
            'lng' => $geoData['lng'] ?? $address->customerGeo->lng ?? null,
        ]);
    }

    private function updateCustomerCompany(Customer $customer, array $companyData): void
    {
        $customer->customerCompany()->updateOrCreate([], [
            'name' => $companyData['name'] ?? $customer->customerCompany->name ?? null,
            'catch_phrase' => $companyData['catchPhrase'] ?? $customer->customerCompany->catch_phrase ?? null,
            'bs' => $companyData['bs'] ?? $customer->customerCompany->bs ?? null,
        ]);
    }


}

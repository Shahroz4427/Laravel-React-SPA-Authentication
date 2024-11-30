<?php

namespace App\Http\Filters;

use Illuminate\Database\Eloquent\Builder;
use Spatie\QueryBuilder\Filters\Filter;

class CustomerGlobalSearch implements Filter
{
    public function __invoke(Builder $query, mixed $value, string $property): Builder
    {
        if ($property === 'search') {
            return $query->where('id', 'like', '%' . $value . '%')
                ->orWhere('name', 'like', '%' . $value . '%')
                ->orWhere('username', 'like', '%' . $value . '%')
                ->orWhere('email', 'like', '%' . $value . '%')
                ->orWhere('phone', 'like', '%' . $value . '%')
                ->orWhere('website', 'like', '%' . $value . '%')
                ->orWhereHas('customerAddress', function ($query) use ($value) {
                    $query->where('street', 'like', '%' . $value . '%')
                        ->orWhere('suite', 'like', '%' . $value . '%')
                        ->orWhere('city', 'like', '%' . $value . '%')
                        ->orWhere('zipcode', 'like', '%' . $value . '%');
                })
                ->orWhereHas('customerCompany', function ($query) use ($value) {
                    $query->where('name', 'like', '%' . $value . '%')
                        ->orWhere('catch_phrase', 'like', '%' . $value . '%')
                        ->orWhere('bs', 'like', '%' . $value . '%');
                })
                ->orWhereHas('customerAddress.customerGeo', function ($query) use ($value) {
                    $query->where('lat', 'like', '%' . $value . '%')
                        ->orWhere('lng', 'like', '%' . $value . '%');
                });
        }
        return $query;
    }
}

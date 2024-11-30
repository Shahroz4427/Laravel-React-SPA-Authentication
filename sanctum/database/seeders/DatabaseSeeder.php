<?php

namespace Database\Seeders;

use App\Models\Customer;
use App\Models\CustomerAddress;
use App\Models\CustomerCompany;
use App\Models\CustomerGeo;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {


        Customer::factory(50)
            ->has(
                CustomerAddress::factory()
                    ->has(CustomerGeo::factory())
            )
            ->has(
                CustomerCompany::factory()
            )
            ->create();



    }
}

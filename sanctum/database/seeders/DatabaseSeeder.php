<?php

namespace Database\Seeders;

use App\Models\Customer;
use App\Models\CustomerAddress;
use App\Models\CustomerCompany;
use App\Models\CustomerGeo;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

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


        User::factory(3)->create();

        DB::table('users')->insert([
            'name' => 'Super Admin',
            'email' => 'admin@gmail.com',
            'email_verified_at' => now(),
            'password' => '$2y$10$WefUM5vUSa06yWRZnSARteKyw8T.OSE1SCJ/u9rDoLs1rkoV7zSD6', //password :admin@4427
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
    }

}

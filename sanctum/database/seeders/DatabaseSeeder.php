<?php

namespace Database\Seeders;

use App\Models\Customer;
use App\Models\CustomerAddress;
use App\Models\CustomerCompany;
use App\Models\CustomerGeo;
use App\Models\User;
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
//        Customer::factory(50)
//            ->has(
//                CustomerAddress::factory()
//                    ->has(CustomerGeo::factory())
//            )
//            ->has(
//                CustomerCompany::factory()
//            )
//            ->create();
//
//
//        User::factory(3)->create();

        $messages = [
            [
                'id' => Str::uuid(),
                'from_id' => 4,
                'to_id' => 1,
                'body' => 'Hello, user 4!',
                'attachment' => null,
                'seen' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => Str::uuid(),
                'from_id' => 4,
                'to_id' => 2,
                'body' => 'Hey, user 2!',
                'attachment' => 'file.png',
                'seen' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => Str::uuid(),
                'from_id' => 4,
                'to_id' => 3,
                'body' => 'Good morning, user 4!',
                'attachment' => null,
                'seen' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => Str::uuid(),
                'from_id' => 4,
                'to_id' => 1,
                'body' => 'Thanks for reaching out!',
                'attachment' => 'document.pdf',
                'seen' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        DB::table('chat_messages')->insert($messages);

    }

}

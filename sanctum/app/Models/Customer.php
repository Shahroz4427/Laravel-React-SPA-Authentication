<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;


/**
 * @method static create(array $array)
 * @property mixed $customerAddress
 * @property mixed $company
 * @property mixed $address
 * @property mixed $website
 * @property mixed $phone
 * @property mixed $email
 * @property mixed $username
 * @property mixed $name
 */
class Customer extends Model
{

    use HasFactory;

    protected $fillable = [
        'name',
        'username',
        'email',
        'phone',
        'website'
    ];


    public function customerAddress(): HasOne
    {
        return $this->hasOne(CustomerAddress::class);
    }


    public function customerCompany(): HasOne
    {
        return $this->hasOne(CustomerCompany::class);
    }
}

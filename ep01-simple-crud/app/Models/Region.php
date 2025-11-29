<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Region extends Model
{
    protected $table = "region";
    public $timestamps = false;

    public function townships()
    {
      return $this->hasMany(Township::class, "region_id","id");
    }
}

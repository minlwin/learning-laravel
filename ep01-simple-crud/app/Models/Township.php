<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class Township extends Model
{
    protected $table = "township";
    public $timestamps = false;

    public function region() 
    {
        return $this->belongsTo(Region::class);
    }

    public function scopeRegionId(Builder $query, int | null $regionId)
    {
        return $query->when($regionId, fn ($q) => $q->where("region_id", $regionId));
    }

    public function scopeKeyword(Builder $query, String | null $keyword)
    {
        $keyword = strtolower($keyword);
        return $query->when($keyword, fn ($q) => 
            $q->where(
                fn ($q) => 
                $q->whereRaw("LOWER(name) like ?", ["%{$keyword}"])
                ->orWhereHas("region", fn ($q) => $q->whereRaw("LOWER(name) LIKE ?", ["%{$keyword}"]))
            )
        );
    }    
}

<?php

namespace App\Http\Controllers;

use App\Models\Region;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RegionController extends Controller
{
    public function index()
    {
        $regions = Region::all();
        return Inertia::render("regions", [
            "list"=> $regions
        ]);
    }
}

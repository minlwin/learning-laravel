<?php

namespace App\Http\Controllers;

use App\Models\Region;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RegionController extends Controller
{
    public function index()
    {
        return Inertia::render("regions/list", [
            "list"=> Region::all()
        ]);
    }

    public function details($id)
    {
        $region = Region::findOrFail($id);
        return Inertia::render("regions/details", [
            "region" => $region,
            "townships" => $region->townships()
        ]);
    }

    public function upload($id, Request $request)
    {
        return redirect("/regions/{$id}");
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Region;
use App\Models\Township;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class TownshipController extends Controller
{
    public function index(Request $request)
    {
        $data = Township::regionId($request->input("regionId"))
            -> keyword($request->input("keyword"))
            ->get();

        return Inertia::render("townships/list", [
            "data"=> $data,
            "regions" => Region::all(),
            "inputs" => [
                "regionId" => $request->input("regionId"),
                "keyword" => $request->input("keyword"),
           ]
        ]);
    }

    public function edit(Request $request) 
    {
        return Inertia::render("townships/edit");
    }

    public function save(Request $request)
    {
        return redirect("/townships");
    }
}

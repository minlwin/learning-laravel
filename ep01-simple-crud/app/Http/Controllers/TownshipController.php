<?php

namespace App\Http\Controllers;

use App\Models\Region;
use App\Models\Township;
use Illuminate\Http\Request;
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
        $township = null;
        $id = $request->input("id");

        if($id) {
            $township = Township::findOrFail($id);
        }
        
        return Inertia::render("townships/edit", [
            "data"=> $township,
            "regions" => Region::all(),
        ]);
    }

    public function save(Request $request)
    {
        $id = $request->input("id");
        $form = $request->validate([
            "name" => "required",
            "region_id" => "required"
        ]);

        if($id) {
            Township::update($id, $form);
        } else {
            Township::create($form);
        }
        return redirect("/townships");
    }
}

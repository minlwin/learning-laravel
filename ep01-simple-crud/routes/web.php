<?php

use App\Http\Controllers\RegionController;
use Illuminate\Support\Facades\Route;

Route::redirect("/", "/regions");
Route::get("/regions", [RegionController::class,"index"])->name("regions");
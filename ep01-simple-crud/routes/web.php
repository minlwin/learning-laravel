<?php

use App\Http\Controllers\RegionController;
use App\Http\Controllers\TownshipController;
use Illuminate\Support\Facades\Route;

Route::redirect("/", "/regions");
Route::get("/regions", [RegionController::class, "index"])->name("regions");
Route::get("/regions/{id}", [RegionController::class, "details"])->name("regions.details");
Route::post("/regions/{id}/upload", [RegionController::class, "upload"])->name("regions.upload");

Route::get("/townships", [TownshipController::class, "index"])->name("townships");
Route::get("/townships/edit", [TownshipController::class, "edit"])->name("townships.edit");
Route::post("/townships", [TownshipController::class, "save"])->name("townships.save.action");

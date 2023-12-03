<?php

use App\Http\Controllers\FilterController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('filters',[FilterController::class, 'index']);
Route::get('filter/{id}',[FilterController::class, 'show']);
Route::post('insert', [FilterController::class, 'store']);
Route::put('filters/{id}/update', [FilterController::class, 'update']);
<?php

use App\Http\Controllers\FilterController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Laravel\Sanctum\Contracts\HasApiTokens;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::get('filters',[FilterController::class, 'index'])->middleware('auth:sanctum');
Route::get('filters',[FilterController::class, 'index']);
Route::get('filter/{id}',[FilterController::class, 'show']);
Route::post('insert', [FilterController::class, 'store'])->middleware('auth:sanctum')->middleware('auth:sanctum');
Route::put('filters/{id}/update', [FilterController::class, 'update'])->middleware('auth:sanctum');
Route::get('pagination', [FilterController::class, 'paginationFilters']);

// User login and registration:
Route::post('auth/login',[UserController::class,'loginUser']);
Route::post('auth/register',[UserController::class,'createUser']);
Route::get('user',[UserController::class,'getAuthenticatedUser'])->middleware('auth:sanctum');

// Route::post('auth/register',[UserController::class,'createUser'])->middleware('auth:sanctum');
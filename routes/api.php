<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Survey\SurveyController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::middleware('auth:sanctum')->group( function() {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('/logout', [AuthController::class, 'logout']);

    // NOTE: ADD
    Route::resource('/survey', SurveyController::class);
    Route::post('/uploadimage', [App\Http\Controllers\Survey\SurveyController::class, 'uploadImage']);
});

//NOTE - CUSTOM ROUTES
Route::post('/register', [AuthController::class, 'store']);
Route::post('/login', [AuthController::class, 'login']);




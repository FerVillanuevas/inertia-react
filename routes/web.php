<?php

use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('post', [App\Http\Controllers\DemoController::class, 'post']);


Route::group(['middleware' => ['auth']], function () {
    Route::get('/', [App\Http\Controllers\MusicController::class, 'index']);
    Route::get('/dashboard', [App\Http\Controllers\DemoController::class, 'dash'])->name('dashboard');
    Route::get('/theater', [App\Http\Controllers\MusicController::class, 'index'])->name('theater');
    Route::resource('music', App\Http\Controllers\MusicController::class);
    Route::resource('user', App\Http\Controllers\UserController::class);
});




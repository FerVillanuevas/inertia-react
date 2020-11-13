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

Route::get('/', App\Http\Controllers\DemoController::class);

Route::get('/dashboard', [App\Http\Controllers\DemoController::class, 'dash'])->name('dashboard');
Route::get('/theater', [App\Http\Controllers\MusicController::class, 'index'])->name('theater');

Route::resource('music', App\Http\Controllers\MusicController::class);


<?php

use App\Http\Controllers\BookingController;
use App\Http\Controllers\RoomController;
use Illuminate\Support\Facades\Route;

Route::apiResource('booking', BookingController::class);
Route::get('checkbook/{room_id}', [BookingController::class, 'room']);
Route::get('room', RoomController::class);
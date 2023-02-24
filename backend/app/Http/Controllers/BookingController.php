<?php

namespace App\Http\Controllers;

use App\Http\Requests\BookingRequest;
use App\Http\Resources\BookingResource;
use App\Http\Resources\BookingSingleResource;
use App\Models\Booking;
use App\Models\Room;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class BookingController extends Controller
{
    public function index()
    {
        return BookingResource::collection(Booking::where('status', 'Active')->get());
    }

    public function store(BookingRequest $request)
    {
        $attributes = $request->toArray();
        $attributes['slug'] = strtolower(Str::slug($request->title)) . '-' . time();
        $attributes['status'] = 'Pending';
        
        $booking = Booking::create($attributes);

        return response()->json([
            'message' => 'Your booking has been created.',
            'data' => new BookingSingleResource($booking),
        ]);
    }

    public function show(Booking $booking)
    {
        return new BookingSingleResource($booking);
    }

    public function update(Request $request, Booking $booking)
    {
        $attributes = $request->toArray();
        $attributes['slug'] = strtolower(Str::slug($request->title)) . '-' . time();
        
        $booking->update($attributes);

        return response()->json([
            'message' => 'Your booking has been updated.',
            'data' => new BookingSingleResource($booking),
        ]);
    }

    public function destroy(Booking $booking)
    {
        $booking->delete();
        
        return response()->json([
            'message' => 'Your booking has been deleted.',
            'data' => new BookingSingleResource($booking),
        ]);
    }

    public function room($room_id)
    {
        return BookingResource::collection(Booking::where('room_id', $room_id)->get());
    }
}

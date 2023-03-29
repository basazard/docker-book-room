<?php

namespace Database\Seeders;

use App\Models\Room;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class RoomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $rooms = collect([
            'Speed Room',
            'Precious Room'
        ]);

        $rooms->each(function ($room) {
            Room::create([
                'name' => $room,
                'slug' => Str::slug($room),
                'capacity' => 10,
            ]);
        });
    }
}

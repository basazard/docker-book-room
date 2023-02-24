<?php

namespace Database\Factories;

use App\Models\Room;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Booking>
 */
class BookingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'room_id' => Room::factory(),
            'title' => $title = $this->faker->sentence(3),
            'slug' => strtolower(Str::slug($title)),
            'type' => $this->faker->randomElement(['Internal', 'External']),
            'user' => $this->faker->name(),
            'date' => $this->faker->date(),
            'start' => $this->faker->time(),
            'end' => $this->faker->time(),
            'repetation' => $this->faker->randomElement(['Never', 'Daily', 'Weekly', 'Monthly']),
            'description' => $this->faker->sentence(4),
            'status' => $this->faker->randomElement(['Pending', 'Active'])
        ];
    }
}

<?php

namespace App\Rules;

use App\Models\Booking;
use Illuminate\Contracts\Validation\Rule;

class UniqueBook implements Rule
{
    private $date;
    private $start;
    private $end;

    public function __construct($date, $start, $end)
    {
        $this->date = $date;
        $this->start = $start;
        $this->end = $end;
    }

    public function passes($attribute, $value)
    {
        $count = Booking::where('date', $this->date)
                      ->where(function ($query) {
                          $query->whereBetween('start', [$this->start, $this->end])
                                ->orWhereBetween('end', [$this->start, $this->end]);
                      })
                      ->where('status', 'Active')
                      ->count();

        return $count === 0;
    }

    public function message()
    {
        return 'The booking with the given date, start time, and end time already exists.';
    }
}

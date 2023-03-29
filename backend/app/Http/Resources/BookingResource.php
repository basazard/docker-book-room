<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BookingResource extends JsonResource
{
  /**
   * Transform the resource into an array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
   */
  public function toArray($request)
  {
    return [
      'id' => $this->id,
      'room_id' => $this->room_id,
      'title' => $this->title,
      'date' => $this->date,
      'start' => $this->date . 'T' . $this->start,
      'end' => $this->date . 'T' . $this->end
    ];
  }
}

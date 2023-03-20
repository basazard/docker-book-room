<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BookingSingleResource extends JsonResource
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
            'slug' => $this->slug,
            'type' => $this->type,
            'user' => $this->user,
            'date' => $this->date,
            'start' => $this->start,
            'end' => $this->end,
            'repetation' => $this->repetation,
            'description' => $this->description,
            'status' => $this->status
        ];
    }
}

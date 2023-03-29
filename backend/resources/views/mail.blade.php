<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <p>Room : {{ $booking->room->name }}</p>
    <p>Date : {{ $booking->date }}</p>
    <p>Type : {{ $booking->type }}</p>
    <p>User : {{ $booking->user }}</p>
    <p>Title : {{ $booking->title }}</p>
    <p>Start Time : {{ $booking->start }}</p>
    <p>End Time : {{ $booking->end }}</p>
    <p>Description : {{ $booking->description }}</p>

    <form action="{{ route('booking.update', $booking->id) }}" method="POST">
        @csrf
        @method('PUT')
        <input type="hidden" name="_token" value="{{ csrf_token() }}" />
        <button type="submit">Active Schedule</button>
    </form>

</body>

</html>
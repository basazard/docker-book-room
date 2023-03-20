<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <p>User : {{ $booking->user }}</p>
    <p>Booking Title : {{ $booking->title }}</p>
    <p>Date : {{ $booking->date }}</p>
    <p>Start Time : {{ $booking->start }}</p>
    <p>End Time : {{ $booking->end }}</p>

    <form action="{{ route('booking.update', $booking->id) }}" method="post">
        @csrf
        @method('PUT')
        <button type="submit">Active Schedule</button>
    </form>

</body>

</html>
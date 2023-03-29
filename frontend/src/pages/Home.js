import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import MyCalendar from "../components/MyCalendar";
import PlaceContentCenter from "../components/PlaceContentCenter";
import Select from "../components/Select";

export default function Home() {
  const [rooms, setRooms] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [room_id, setRoom] = useState(1);

  
  
  const getRooms = async (e) => {
    try {
      let response = await axios.get("http://127.0.0.1:8000/api/room");
      setRooms(response.data.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    const getBooking = async (e) => {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/checkbook/${room_id}`);
          setBookings(response.data.data);
        } catch (e) {
          console.log(e.message);
        }
      };
      
    getBooking();
    getRooms();
  }, [room_id]);

  return (
    <PlaceContentCenter className="max-w-3xl w-full h-1/6">
      <Card>
        <Select
          name="room_id"
          id="room_id"
          value={room_id}
          onChange={(e) => setRoom(e.target.value)}
          className="mb-2"
        >
          {rooms
            ? rooms.map((room) => (
                <option value={room.id} key={room.id}>
                  {room.name}
                </option>
              ))
            : "there is no room"}
        </Select>
        <MyCalendar data={bookings} initialView="dayGridMonth" />
      </Card>
    </PlaceContentCenter>
  );
}
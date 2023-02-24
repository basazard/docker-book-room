import axios from "axios";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import Button from "../components/Button";
import Card from "../components/Card";
import Divider from "../components/Divider";
import Input from "../components/Input";
import Label from "../components/Label";
import MyCalendar from "../components/MyCalendar";
import PlaceContentCenter from "../components/PlaceContentCenter";
import Select from "../components/Select";
import Textarea from "../components/Textarea";
import "react-datepicker/dist/react-datepicker.css";

export default function Event() {
  const [rooms, setRooms] = useState([]);
  const [errors, setErrors] = useState([]);
  
  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  const [room_id, setRoom] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [user, setUser] = useState("");
  const [date, setDate] = useState(new Date());
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [repetation, setRepetation] = useState("");
  const [description, setDescription] = useState("");

  const [bookings, setBookings] = useState([]);
  
  const dateValue = new Date(date);
  const formattedDate = dateValue.toISOString().split("T")[0];

  const data = {
    room_id,
    title,
    type,
    user,
    date: formattedDate,
    start,
    end,
    repetation,
    description,
  };

  const getRooms = async (e) => {
    try {
      let response = await axios.get("http://127.0.0.1:8000/api/room");
      setRooms(response.data.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  const store = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/booking",
        data
      );
      setRoom("");
      setTitle("");
      setType("");
      setUser("");
      setDate("");
      setStart("");
      setEnd("");
      setRepetation("");
      setDescription("");

    } catch (e) {
      console.log(data);
      setErrors(e.response.data.errors);
    }
  };

  const getBooking = async (e) => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/booking");
      setBookings(response.data.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getRooms();
    getBooking();
  }, [date]);

  return (
    <PlaceContentCenter>
      <div className="grid grid-cols-6 gap-4">
        <Card className="col-span-4">
          <h1 className="text-xl font-semibold">Add New Event</h1>
          <hr className="mb-2" />

          <form onSubmit={store}>
            <Divider>
              <div className="mb-3">
                <Label>Room</Label>
                <Select
                  name="room_id"
                  id="room_id"
                  value={room_id}
                  onChange={(e) => setRoom(e.target.value)}
                >
                  <option disabled={true} value="">
                    --Choose and option--
                  </option>
                  {rooms
                    ? rooms.map((room) => (
                        <option value={room.id} key={room.id}>
                          {room.name}
                        </option>
                      ))
                    : "there is no room"}
                </Select>
              </div>
              <div className="mb-3">
                <Label>Date</Label>
                <DatePicker
                  name="date"
                  id="date"
                  type="date"
                  value={date}
                  dateFormat="yyyy-MM-dd"
                  onChange={(date) => setDate(date)}
                  filterDate={isWeekday}
                  customInput={<Input />}
                  selected={date}
                />
              </div>
            </Divider>

            <Divider>
              <div className="mb-3">
                <Label>Type</Label>
                <Select
                  name="type"
                  id="type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option disabled={true} value="">
                    --Choose and option--
                  </option>
                  <option value="Internal">Internal</option>
                  <option value="External">External</option>
                </Select>
              </div>
              <div className="mb-3">
                <Label>User</Label>
                <Input
                  name="user"
                  id="user"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                />
              </div>
            </Divider>

            <Divider>
              <div className="mb-3">
                <Label>Title</Label>
                <Input
                  name="title"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <Label>Repetation</Label>
                <Select
                  name="repetation"
                  id="repetation"
                  value={repetation}
                  onChange={(e) => setRepetation(e.target.value)}
                >
                  <option disabled={true} value="">
                    --Choose and option--
                  </option>
                  <option value="Never">Never</option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                </Select>
              </div>
            </Divider>

            <Divider>
              <div className="mb-3">
                <Label>Start Time</Label>
                <Input
                  name="start"
                  id="start"
                  type="time"
                  value={start}
                  onChange={(e) => setStart(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <Label>End Time</Label>
                <Input
                  name="end"
                  id="end"
                  type="time"
                  value={end}
                  onChange={(e) => setEnd(e.target.value)}
                />
              </div>
            </Divider>

            <div className="mb-3">
              <Label>Description</Label>
              <Textarea
                name="description"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <Button type="submit">Create</Button>
          </form>
        </Card>

        <Card className="col-span-2">
          <h1 className="text-xl font-semibold">Schedule</h1>
          <hr className="mb-2" />

          <MyCalendar
            key={date}
            data={bookings}
            initialView="timeGridDay"
            headerToolbar={false}
            navLinks={false}
            nowIndicator={true}
            contentHeight={450}
            slotMinTime="07:30:00"
            slotMaxTime="17:00:00"
            initialDate={date}
          />
        </Card>
      </div>
    </PlaceContentCenter>
  );
}

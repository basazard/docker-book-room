import FullCalendar from "@fullcalendar/react";
import React from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

export default function MyCalendar({ data, initialView, ...props }) {
  return (
    <FullCalendar
      weekends={false}
      events={data}
      plugins={[dayGridPlugin, timeGridPlugin]}
      initialView={`${initialView}`}
      editable={true}
      selectable={true}
      selectMirror={true}
      dayMaxEvents={true}
      {...props}
    />
  );
}

import FullCalendar from "@fullcalendar/react";
import React from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from '@fullcalendar/timegrid';

export default function MyCalendar({ data, initialView, ...props }) {
  if (data.length > 0) {
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
  } else {
    return <div>Loading ...</div>;
  }
}

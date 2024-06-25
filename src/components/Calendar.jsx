"use client";

import { useState } from "react";

import { Calendar } from "../../shadcn-components/ui/calendar";

export default function CalendarDemo() {
  const [date, setDate] = useState(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
}

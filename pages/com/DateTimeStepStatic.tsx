"use client";

import { useState } from "react";

/* ---------- SVG ICONS ---------- */
interface DateTimeStepStaticProps {
  title?: string;
}

const ArrowLeftIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronLeftIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CalendarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M3 10H21" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 2V6M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

/* ---------- STATIC DATA ---------- */

const STATIC_DATES = [
  { dateString: "2026-02-10", label: "Tomorrow", dayName: "Tuesday", dateDisplay: "Feb 10" },
  { dateString: "2026-02-11", label: "Wed", dayName: "Wednesday", dateDisplay: "Feb 11" },
  { dateString: "2026-02-12", label: "Thu", dayName: "Thursday", dateDisplay: "Feb 12" },
  { dateString: "2026-02-13", label: "Fri", dayName: "Friday", dateDisplay: "Feb 13" },
];

const STATIC_SLOTS = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
];

/* ---------- COMPONENT ---------- */

export default function DateTimeStepStatic({
  title = "Select Date & Time",
}: DateTimeStepStaticProps) {
  const [currentDateIndex, setCurrentDateIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState(STATIC_DATES[0]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");

  const visibleDates = STATIC_DATES.slice(currentDateIndex, currentDateIndex + 3);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-3">{title}</h2>
        <p className="text-lg font-medium">Choose your preferred appointment slot</p>
      </div>

      {/* Timezone */}
      <div className="text-center mb-4 text-sm font-medium text-gray-600 uppercase">
        TIME ZONE: MOUNTAIN TIME - EDMONTON (GMT-06:00)
      </div>

      {/* Date Slider */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center">
          <button
            disabled={currentDateIndex === 0}
            onClick={() => setCurrentDateIndex(i => Math.max(0, i - 1))}
            className="p-2 disabled:opacity-40"
          >
            <ChevronLeftIcon />
          </button>

          <div className="flex-1 grid grid-cols-3 gap-4 mx-4">
            {visibleDates.map(date => {
              const isSelected = selectedDate.dateString === date.dateString;

              return (
                <div
                  key={date.dateString}
                  onClick={() => {
                    setSelectedDate(date);
                    setSelectedTimeSlot("");
                  }}
                  className={`cursor-pointer rounded-lg text-center p-4 transition
                    ${isSelected
                      ? "border-2 border-orange-500 bg-orange-50"
                      : "border border-gray-200 hover:bg-gray-50"}
                  `}
                >
                  <div className="text-xs text-gray-500 uppercase mb-1">{date.label}</div>
                  <div className="font-bold text-lg">{date.dayName}</div>
                  <div className="text-sm text-gray-600">{date.dateDisplay}</div>
                </div>
              );
            })}
          </div>

          <button
            disabled={currentDateIndex >= STATIC_DATES.length - 3}
            onClick={() =>
              setCurrentDateIndex(i =>
                Math.min(STATIC_DATES.length - 3, i + 1)
              )
            }
            className="p-2 disabled:opacity-40"
          >
            <ChevronRightIcon />
          </button>

          <button className="ml-3 bg-[#391709] text-white rounded-full w-12 h-12 flex items-center justify-center">
            <CalendarIcon />
          </button>
        </div>
      </div>

      {/* Time Slots */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm mt-6">
        <div className="text-center mb-4 text-sm text-gray-600 font-medium">
          Available time slots for {selectedDate.dayName}
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
          {STATIC_SLOTS.map(time => (
            <button
              key={time}
              onClick={() => setSelectedTimeSlot(time)}
              className={`border rounded-md py-2 text-sm transition
                ${selectedTimeSlot === time
                  ? "bg-orange-500 text-white border-orange-500"
                  : "border-gray-300 hover:bg-gray-100"}
              `}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Time */}
      {selectedTimeSlot && (
        <div className="p-4 bg-orange-50 rounded-xl border border-orange-200 mt-6 text-center">
          <div className="font-bold text-lg">Selected Time</div>
          <div className="text-orange-600 font-semibold">{selectedTimeSlot} MST</div>
          <div className="text-sm text-gray-600 mt-1">
            {selectedDate.dayName} — {selectedDate.dateDisplay}
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex gap-4 pt-6">
        <button className="flex-1 border border-gray-300 rounded-md py-3 font-medium flex items-center justify-center gap-2">
          <ArrowLeftIcon />
          Previous
        </button>

        <button
          disabled={!selectedTimeSlot}
          className="flex-1 bg-orange-500 text-white rounded-md py-3 font-medium flex items-center justify-center gap-2 disabled:opacity-50"
        >
          Continue
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
}

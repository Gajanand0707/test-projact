"use client";

import { useState } from "react";
// import "./DateTimeStepStatic.css";

interface DateTimeStepStaticProps {
  title?: string;
}

/* ---------- SVG ICONS ---------- */
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

/* ---------- DATA ---------- */

const STATIC_DATES = [
  { dateString: "2026-02-10", label: "Tomorrow", dayName: "Tuesday", dateDisplay: "Feb 10" },
  { dateString: "2026-02-11", label: "Wed", dayName: "Wednesday", dateDisplay: "Feb 11" },
  { dateString: "2026-02-12", label: "Thu", dayName: "Thursday", dateDisplay: "Feb 12" },
  { dateString: "2026-02-13", label: "Fri", dayName: "Friday", dateDisplay: "Feb 13" },
];

const STATIC_SLOTS = [
  "09:00 AM","09:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM","12:00 PM"
];

export default function DateTimeStepStatic({
  title = "Select Date & Time",
}: DateTimeStepStaticProps) {
  const [currentDateIndex, setCurrentDateIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState(STATIC_DATES[0]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");

  const visibleDates = STATIC_DATES.slice(currentDateIndex, currentDateIndex + 3);

  return (
    <div className="dt-wrapper">
      <div className="dt-header">
        <h2>{title}</h2>
        <p>Choose your preferred appointment slot</p>
      </div>

      <div className="dt-timezone">
        TIME ZONE: MOUNTAIN TIME - EDMONTON (GMT-06:00)
      </div>

      <div className="dt-card">
        <div className="dt-date-row">
          <button disabled={currentDateIndex === 0} onClick={() => setCurrentDateIndex(i => i - 1)}>
            <ChevronLeftIcon />
          </button>

          <div className="dt-date-grid">
            {visibleDates.map(date => (
              <div
                key={date.dateString}
                className={`dt-date ${selectedDate.dateString === date.dateString ? "active" : ""}`}
                onClick={() => {
                  setSelectedDate(date);
                  setSelectedTimeSlot("");
                }}
              >
                <span>{date.label}</span>
                <strong>{date.dayName}</strong>
                <em>{date.dateDisplay}</em>
              </div>
            ))}
          </div>

          <button disabled={currentDateIndex >= STATIC_DATES.length - 3} onClick={() => setCurrentDateIndex(i => i + 1)}>
            <ChevronRightIcon />
          </button>

          <button className="dt-calendar">
            <CalendarIcon />
          </button>
        </div>
      </div>

      <div className="dt-card mt">
        <p className="dt-sub">Available time slots for {selectedDate.dayName}</p>

        <div className="dt-slots">
          {STATIC_SLOTS.map(time => (
            <button
              key={time}
              className={`dt-slot ${selectedTimeSlot === time ? "active" : ""}`}
              onClick={() => setSelectedTimeSlot(time)}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {selectedTimeSlot && (
        <div className="dt-selected">
          <strong>Selected Time</strong>
          <div>{selectedTimeSlot} MST</div>
          <small>{selectedDate.dayName} — {selectedDate.dateDisplay}</small>
        </div>
      )}

      <div className="dt-nav">
        <button className="secondary">
          <ArrowLeftIcon /> Previous
        </button>
        <button className="primary" disabled={!selectedTimeSlot}>
          Continue <ArrowRightIcon />
        </button>
      </div>
      <style jsx>{`
      .dt-wrapper {
  max-width: 900px;
  margin: auto;
  font-family: system-ui, sans-serif;
}

.dt-header {
  text-align: center;
  margin-bottom: 2rem;
}

.dt-header h2 {
  font-size: 2rem;
  font-weight: 700;
}

.dt-header p {
  font-size: 1.1rem;
  color: #555;
}

.dt-timezone {
  text-align: center;
  font-size: 0.8rem;
  color: #666;
  margin-bottom: 1rem;
}

.dt-card {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.5rem;
}

.dt-card.mt {
  margin-top: 1.5rem;
}

.dt-date-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.dt-date-row button {
  background: none;
  border: none;
  cursor: pointer;
}

.dt-date-grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.dt-date {
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  cursor: pointer;
  transition: 0.2s;
}

.dt-date.active {
  border-color: #f97316;
  background: #fff7ed;
}

.dt-date span {
  font-size: 0.7rem;
  text-transform: uppercase;
  color: #777;
}

.dt-date strong {
  display: block;
  font-size: 1.1rem;
}

.dt-date em {
  font-style: normal;
  font-size: 0.85rem;
  color: #555;
}

.dt-calendar {
  background: #391709;
  color: #fff;
  border-radius: 50%;
  width: 48px;
  height: 48px;
}

.dt-sub {
  text-align: center;
  margin-bottom: 1rem;
  color: #555;
}

.dt-slots {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 0.75rem;
}

.dt-slot {
  border: 1px solid #d1d5db;
  padding: 0.6rem;
  border-radius: 6px;
  background: #fff;
  cursor: pointer;
}

.dt-slot.active {
  background: #f97316;
  color: #fff;
  border-color: #f97316;
}

.dt-selected {
  margin-top: 1.5rem;
  background: #fff7ed;
  border: 1px solid #fed7aa;
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
}

.dt-nav {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.dt-nav button {
  flex: 1;
  padding: 0.8rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.dt-nav .secondary {
  border: 1px solid #d1d5db;
  background: #fff;
}

.dt-nav .primary {
  background: #f97316;
  color: #fff;
  border: none;
}

.dt-nav button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

      
      `}</style>
    </div>
  );
}

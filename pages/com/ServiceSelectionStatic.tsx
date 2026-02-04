"use client";

import React, { useState } from "react";

// import "./service-selection.css";

/* -------- STATIC DATA -------- */
interface DateTimeStepStaticProps {
  title?: string;
  tabAlign?: "left" | "center" | "right";
  servicesView?: "grid" | "list" | "flex";
}
const DEPARTMENTS = [
  { id: "all", name: "All" },
  { id: "haircut", name: "Haircut" },
  { id: "beard", name: "Beard" },
  { id: "kids", name: "Kids" },
];

const SERVICES = [
  {
    id: "s1",
    departmentId: "haircut",
    name: "Men Haircut",
    price: "$25",
    duration: 30,
  },
  {
    id: "s2",
    departmentId: "haircut",
    name: "Skin Fade",
    price: "$30",
    duration: 40,
  },
  {
    id: "s3",
    departmentId: "beard",
    name: "Beard Trim",
    price: "$15",
    duration: 20,
  },
  {
    id: "s4",
    departmentId: "kids",
    name: "Kids Haircut",
    price: "$20",
    duration: 30,
  },
];

/* -------- COMPONENT -------- */

export default function ServiceSelectionStatic({
  title = "Select Date & Time",
  tabAlign = "center",
  servicesView = "grid", // default
}: DateTimeStepStaticProps) {
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedService, setSelectedService] = useState("");
  const getTabAlignment = () => {
    switch (tabAlign) {
      case "center":
        return "center";
      case "right":
        return "flex-end";
      default:
        return "flex-start";
    }
  };
  const getServicesClass = () => {
    switch (servicesView) {
      case "list":
        return "services-list";
      case "flex":
        return "services-flex";
      default:
        return "services-grid"; // current grid
    }
  };

  const filteredServices =
    selectedDepartment === "all"
      ? SERVICES
      : SERVICES.filter(
        (s) => s.departmentId === selectedDepartment
      );


  return (
    <div className="service-container">
      <h2 className="title">{title}</h2>
      <p className="subtitle">Choose a category and service</p>

      {/* DEPARTMENTS */}
      <div className="departments" style={{ justifyContent: getTabAlignment() }}>
        {DEPARTMENTS.map((dept) => {
          //   const Icon = dept.icon;
          return (
            <div
              key={dept.id}
              className={`department ${selectedDepartment === dept.id ? "active" : ""
                }`}
              onClick={() => {
                setSelectedDepartment(dept.id);
                setSelectedService("");
              }}

            >
              {/* <Icon size={16} /> */}
              <span>{dept.name}</span>
            </div>
          );
        })}
      </div>

      {/* SERVICES */}
      {selectedDepartment && (
        <div className={getServicesClass()}>
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`service-card ${selectedService === service.id ? "active" : ""
                }`}
              onClick={() => setSelectedService(service.id)}
            >
              <div className="service-name">{service.name}</div>

              <div className="service-meta">
                <div className="price">
                  {/* <Tag size={12} /> */}
                  {service.price}
                </div>
                <div className="duration">
                  {/* <Clock size={12} /> */}
                  {service.duration}m
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* FOOTER */}
      <div className="navigation">
        <button className="btn secondary">
          {/* <ArrowLeft size={16} /> */}
          Previous
        </button>

        <button
          className="btn primary"
          disabled={!selectedService}
        >
          Continue
          {/* <ArrowRight size={16} /> */}
        </button>
      </div>
      <style>
        {`
        .services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 10px;
  margin-bottom: 24px;
}

.services-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 24px;
}

.services-flex {
  display: flex;
  flex-direction: row;
  gap: 10px;
  overflow-x: auto;
  padding-bottom: 8px;
  margin-bottom: 24px;
}

        .service-container {

      margin: auto;
    padding: 16px;
    font-family: sans-serif;
    width: 100%;
    padding: 30px;
    box-sizing: border-box;
}

.title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 4px;
}

.subtitle {
  text-align: center;
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}

/* DEPARTMENTS */

.departments {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.department {
  border: 1px solid #ddd;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  background: #fff;
}

.department.active {
  background: #391709;
  color: #fff;
  border-color: #391709;
}

/* SERVICES */

.services {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 10px;
  margin-bottom: 24px;
}

.service-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
  background: #fff;
}

.service-card.active {
  background: #391709;
  color: #fff;
  border-color: #391709;
}

.service-name {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 6px;
}

.service-meta {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}

.price,
.duration {
  display: flex;
  align-items: center;
  gap: 4px;
}

/* NAVIGATION */

.navigation {
  display: flex;
  gap: 12px;
}

.btn {
  flex: 1;
  padding: 12px;
  font-size: 14px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.btn.primary {
  background: #d97639;
  color: #fff;
}

.btn.primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn.secondary {
  background: #fff;
  border: 1px solid #ccc;
}

        `}
      </style>
    </div>
  );
}

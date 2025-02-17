import { useEffect, useState } from "react";
import { componentWidth, consoleFontSize } from "../../pages";

export const LocalAreaDataComponent = ({ spaces, selectedIndex }) => {
  const [Time, setTime] = useState("");
  const [nycDate, setNycDate] = useState(""); // Renamed to avoid conflict with the Date constructor

  useEffect(() => {
    const updateTimeAndDate = () => {
      const nycTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).format(new Date());

      const nycDate = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York",
        weekday: "short", // Abbreviated weekday
        month: "short",   // Abbreviated month
        day: "numeric",   // Day of the month
        year: "numeric",  // Full year
      }).format(new Date());

      setTime(nycTime);
      setNycDate(nycDate);
    };

    updateTimeAndDate(); // Initial call to set time and date
    const intervalId = setInterval(updateTimeAndDate, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div
      style={{
        padding: "10px",
        fontSize: consoleFontSize, // Adjust as needed
        paddingTop: "0",
      }}
    >
      <p>Date & Time</p>

      <p>
        {spaces.map((_, index) => (
          <span key={index}>-</span>
        ))}
      </p>

      {[{ label: "Time: ", text: Time }, { label: "Date: ", text: nycDate }] // Using nycDate instead of Date
        .map((service, index) => (
          <p key={index}>
            {service.label}
            <span
              style={{
                color: "rgb(255, 255, 255)",
              }}
            >
              {service.text}
            </span>
          </p>
        ))}
    </div>
  );
};

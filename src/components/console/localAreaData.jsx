import { useEffect, useState } from "react";
import { componentWidth, consoleFontSize } from "../../pages";

export const LocalAreaDataComponent = ({ spaces, selectedIndex }) => {
  const [Time, setTime] = useState("");

  useEffect(() => {
    setTime(new Date().toLocaleTimeString());

    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  const [weatherData, setWeatherData] = useState(null);
  const apiKey = "e06808c68e8782f07704bdc84b609742";
  const zipCode = "18372"; // Replace with the desired ZIP code

  // useEffect(() => {
  //   // Fetch latitude and longitude from zip code using a geocoding service
  //   function fetchData() {
  //     fetch(
  //       `https://api.openweathermap.org/geo/1.0/zip?zip=${zipCode}&appid=${apiKey}`
  //     )
  //       .then((response) => response.json())
  //       .then((geoData) => {
  //         const { lat, lon } = geoData;
  //         // Once we have latitude and longitude, fetch weather data
  //         fetch(
  //           `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
  //         )
  //           .then((response) => response.json())
  //           .then((data) => {
  //             setWeatherData(data);
  //           })
  //           .catch((error) => {
  //             console.error("Error fetching weather data:", error);
  //           });
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching coordinates:", error);
  //       });
  //   }

  //   fetchData();

  //   setInterval(fetchData, 300000);
  // }, [zipCode, apiKey]);

  // Convert temperature from Celsius to Fahrenheit
  const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };

  return (
    <div
      style={{
        padding: "10px",
        // maxWidth: componentWidth,
        fontSize: consoleFontSize,
        paddingTop: "0",
      }}
    >
      <p>Date & Time</p>

      <p>
        {spaces.map((_, index) => (
          <span key={index}>-</span>
        ))}
      </p>

      {[
        { label: "Time: ", text: Time },
        { label: "Date: ", text: new Date().toDateString() },
      ].map((service, index) => (
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

      {/* {weatherData &&
        [
          {
            label: "Temperature: ",
            text:
              Math.floor(
                celsiusToFahrenheit(weatherData.main.temp).toFixed(2)
              ) + "°F",
          },
        ].map((service, index) => (
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
        ))} */}

      {/* <a
				href='https://www.accuweather.com/en/us/tannersville/18372/weather-forecast/2125776'
				target='_blank'
			>
				<p>
					<span
						style={{
							color:
								selectedIndex == 1
									? 'rgb(100, 149, 237)'
									: 'rgb(255, 255, 255)',
							textDecoration: 'underline',
						}}
					>
						View Forcast
					</span>
				</p>
			</a> */}
    </div>
  );
};

import { useEffect, useState } from "react";
import { fetchHomeServices } from "../../utils";
import { componentWidth, consoleFontSize } from "../../pages";

export const HomeServicesComponent = ({
  spaces,
  setSpaces,
  isMobileDevice,
}) => {
  const [Services, setServices] = useState([]);

  useEffect(() => {
    let _spaces = [];

    for (let i = 0; i < Services.length; i++) {
      var service = Services[i];

      var spaces = "Tire Pressure: 38 38 38 38".length;

      _spaces.push(spaces);
    }

    let largestNumber = _spaces[0];

    for (let i = 1; i < _spaces.length; i++) {
      if (_spaces[i] > largestNumber) {
        largestNumber = _spaces[i];
      }
    }

    let realSpaces = [];

    for (let x = 0; x < largestNumber; x++) {
      realSpaces.push("-");
    }

    setSpaces(realSpaces);
  }, [Services]);

  useEffect(() => {
    function fetchServices() {
      try {
        fetchHomeServices().then(({ data }) => {
          if (data.error) return alert(data.error);

          setServices(data.services);
        });
      } catch (err) {
        console.log(err);
      }
    }

    setInterval(fetchServices, 30000);

    fetchServices();
  }, []);
  return (
    <div
      style={{
        padding: "10px",
        // maxWidth: componentWidth,
        // paddingLeft: !isMobileDevice ? '120px' : '10px',
        paddingLeft: "10px",
        fontSize: consoleFontSize,
        // paddingTop: isMobileDevice ? '35px' : null,
        paddingTop: "35px",
      }}
    >
      <p>Home Services</p>

      <p>
        {spaces.map((_, index) => (
          <span key={index}>-</span>
        ))}
      </p>

      {Services.map((service, index) => (
        <p key={index}>
          {service.label}
          {isMobileDevice ? <br /> : " - "}
          <span
            style={{
              color: service.status == 1 ? "rgb(0, 255, 0)" : "rgb(255, 0, 0)",
            }}
          >
            {service.status == 1 ? "Online" : "Offline"}
          </span>
        </p>
      ))}
    </div>
  );
};

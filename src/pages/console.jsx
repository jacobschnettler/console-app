import { useState, useEffect } from "react";

import {
  LocalAreaDataComponent,
  HomeServicesComponent,
  HeadTagsComponent,
  CameraFeedComponent,
} from "../components";

export const consoleFontSize = "18px";
export const componentWidth = "700px";

export const ConsolePage = () => {
  const [Spaces, setSpaces] = useState([]);

  const [ShowCamera, setShowCamera] = useState(true);

  const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);

  const [SelectedIndex, setSelectedIndex] = useState(0);

  function logoutUser() {}

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 9) {
        event.preventDefault();

        setSelectedIndex((index) => (index = index + 1));

        if (SelectedIndex == 2) return setSelectedIndex(0);
      }

      if (event.keyCode === 13) {
        event.preventDefault();

        switch (SelectedIndex) {
          case 1:
            window.open(
              "https://www.accuweather.com/en/us/tannersville/18372/weather-forecast/2125776",
              "_blank"
            );

            break;
          case 2:
            logoutUser();

            break;
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [SelectedIndex]);

  return (
    <div>
      <HeadTagsComponent isMobileDevice={isMobileDevice} />

      <div style={{ padding: "25px" }}>
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "35px",
          }}
        >
          <a
            href="#"
            onClick={logoutUser}
            target="_blank"
            style={{ fontSize: consoleFontSize }}
          >
            <p>
              <span
                style={{
                  color:
                    SelectedIndex == 2
                      ? "rgb(100, 149, 237)"
                      : "rgb(255, 255, 255)",
                  textDecoration: "underline",
                }}
              >
                Logout
              </span>
            </p>
          </a>
        </div>

        <div
          style={{
            height: isMobileDevice ? "82.5vh" : "90vh",
            width: "100%",
          }}
        >
          <div style={{ display: "flex" }}>
            <div
              style={{
                paddingTop: "15px",
                overflow: "auto",
                paddingTop: "0",
                width: "calc(.50 * (100vw - 50px))",
              }}
            >
              <LocalAreaDataComponent
                spaces={Spaces}
                isMobileDevice={isMobileDevice}
                selectedIndex={SelectedIndex}
              />

              <HomeServicesComponent
                spaces={Spaces}
                setSpaces={setSpaces}
                isMobileDevice={isMobileDevice}
              />
            </div>
          </div>

          <div
            style={{
              width: "calc((100vw - 50px))",
              height: "100%",
            }}
          >
            <CameraFeedComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

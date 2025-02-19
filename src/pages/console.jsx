import { useState, useEffect } from "react";

import {
  LocalAreaDataComponent,
  HomeServicesComponent,
  HeadTagsComponent,
  CameraFeedComponent,
} from "../components";

export const consoleFontSize = "38px";
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
    <div className="main-content">
      <HeadTagsComponent isMobileDevice={isMobileDevice} />

      <div>
        <div
          style={{
            height: isMobileDevice ? "82.5vh" : "90vh",
            width: "100%",
          }}
        >
          <div style={{ padding: '30px' }}>
            <div>
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

          {/* <div
            style={{
              width: "calc((100vw - 50px))",
              height: "100%",
              padding: '30px'
            }}
          >
            <CameraFeedComponent src='http://192.168.0.91:8083/stream/pattern/channel/0/hls/live/index.m3u8' />
          </div> */}
        </div>
      </div>
    </div>
  );
};

const VideoFeed = () => {
  const scale = 0.25;

  return (
    <iframe
      src="https://rtsp.jschnettler.com/stream.html?src=porch-cam"
      style={{
        pointerEvents: "none",
        width: `${2560 * scale}px`,
        height: `${1920 * scale}px`,
      }}
    />
  );
};

export const CameraFeedComponent = ({
  isMobileDevice,
  showCamera,
  setShowCamera,
}) => (
  <div
    style={{
      padding: "10px",
      paddingTop: "35px",
      width: "100%",
      height: "100%",
    }}
  >
    <div
      style={{
        height: `${1920 * 0.25}px`,
        width: `100%`,
        borderRadius: "6px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <VideoFeed />

      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "20px",
            top: "10px",
          }}
        ></div>
      </div>
    </div>
  </div>
);

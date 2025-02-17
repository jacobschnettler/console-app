import { useRef, useEffect, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

export const CameraFeedComponent = ({ src }) => {
  const videoRef = useRef(null);
  const [player, setPlayer] = useState();
  const [hasAutoplayFailed, setHasAutoplayFailed] = useState(false);

  // Initialize the video player once
  useEffect(() => {
    if (!player) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      const newPlayer = videojs(videoElement, {}, () => {
        console.log("player is ready");
        // Try autoplaying if allowed
        newPlayer.play().catch((error) => {
          console.log("Autoplay blocked, waiting for interaction.");
          setHasAutoplayFailed(true);
        });
      });

      setPlayer(newPlayer);
    }
  }, [player]);

  // Handle the interaction fallback
  const handleUserInteraction = () => {
    if (player && hasAutoplayFailed) {
      player.play().catch((error) => {
        console.error("Manual play failed:", error);
      });
    }
  };

  // Listen for user interaction to play video manually if autoplay fails
  useEffect(() => {
    if (hasAutoplayFailed) {
      document.addEventListener("click", handleUserInteraction);
      document.addEventListener("touchstart", handleUserInteraction);

      return () => {
        document.removeEventListener("click", handleUserInteraction);
        document.removeEventListener("touchstart", handleUserInteraction);
      };
    }
  }, [hasAutoplayFailed]);

  // Clean up player on unmount
  useEffect(() => {
    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, [player]);

  return (
    <div>
      <video
        ref={videoRef}
        className="video-js"
        controls
        autoPlay
        muted
        style={{ width: `${2560 * 0.3}px`, height: `${1920 * 0.3}px`, borderRadius: "15px" }}
      >
        <source src={src} type="application/x-mpegURL" />
      </video>
    </div>
  );
};

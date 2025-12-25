// hooks/useVideoFallback.ts
import { useState } from "react";

export function useVideoFallback() {
  const [videoError, setVideoError] = useState(false);

  const handleVideoError = () => {
    setVideoError(true);
    // Optional: Log to monitoring service
    console.error("Hero video failed to load");
  };

  return {
    videoError,
    handleVideoError,
  };
}

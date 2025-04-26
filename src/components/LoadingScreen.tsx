"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface LoadingScreenProps {
  children: React.ReactNode;
}

export default function LoadingScreen({ children }: LoadingScreenProps) {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [dotCount, setDotCount] = useState(0);
  const baseText = "kieron.ca is loading";

  // Detect full page load (HTML, CSS, JS, images)
  useEffect(() => {
    function onLoad() {
      setPageLoaded(true);
    }
    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }
    return () => {
      window.removeEventListener("load", onLoad);
    };
  }, []);

  // Listen for custom event when 3D model is loaded
  useEffect(() => {
    function onModelLoaded() {
      setModelLoaded(true);
    }
    window.addEventListener("model-loaded", onModelLoaded);
    return () => {
      window.removeEventListener("model-loaded", onModelLoaded);
    };
  }, []);

  // Animate trailing dots
  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prev) => (prev + 1) % 4);
    }, 500);
    return () => {
      clearInterval(interval);
    };
  }, []);

  // Determine if current route needs to wait for 3D model (only homepage)
  const pathname = usePathname();
  const needsModel = pathname === "/";
  // If on homepage, wait for both page and model; otherwise only page load
  const isLoading = needsModel ? !(pageLoaded && modelLoaded) : !pageLoaded;
  const displayText = `${baseText}${".".repeat(dotCount)}`;
  return (
    <>
      {children}
      {isLoading && (
        <div
          className="fixed inset-0 bg-background flex items-center justify-center z-50"
          style={{ fontFamily: "Courier, monospace" }}
        >
          <p className="text-2xl text-center">{displayText}</p>
        </div>
      )}
    </>
  );
}
"use client";

import React, { useState, useEffect, useRef} from "react";
import { Loader } from "@googlemaps/js-api-loader";

interface MapComponentProps {
  lat: number;
  lng: number;
  onClose: () => void;
}

const Map: React.FC<MapComponentProps> = ({ lat, lng, onClose }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID;

    if (!apiKey) {
      console.error("Google Maps API key is missing.");
      return;
    }
    if (!mapId) {
      console.error("Google Maps Map ID is missing.");
      return;
    }
    if (!mapRef.current) {
      console.error("mapRef.current is null.");
      return;
    }

  //   const initMap = async () => {
  //     const loader = new Loader({apiKey, version: "weekly",});
  //     const { Map } = await loader.importLibrary("maps");
  //     const { AdvancedMarkerElement } = await loader.importLibrary("marker");
  //     const { DirectionsService, DirectionsRenderer } = await loader.importLibrary("routes");
  //     const position = { lat, lng };
  //     const mapOptions = {
  //       center: position,
  //       zoom: 12,
  //       mapId,
  //     };
      
  //     if (mapRef.current) {
  //       const map = new Map(mapRef.current, mapOptions);
  //       new AdvancedMarkerElement({ map, position });

        

  //     } else {
  //       console.error("mapRef.current is null.");
  //     }
  //   };

  //   initMap();
  // }, [lat, lng]);
  const initMap = async () => {
    if (!mapRef.current) return;

    try {
      const loader = new Loader({ apiKey, version: "weekly" });
      const { Map } = await loader.importLibrary("maps");
      const { AdvancedMarkerElement } = await loader.importLibrary("marker");
      const { DirectionsService, DirectionsRenderer } = await loader.importLibrary("routes");

      const map = new Map(mapRef.current, {
        center: { lat, lng },
        zoom: 12,
        mapId,
      });

      new AdvancedMarkerElement({ map, position: { lat, lng } });

      // Get User Location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userPos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            setUserLocation(userPos);

            // Show Route
            const directionsService = new DirectionsService();
            const directionsRenderer = new DirectionsRenderer({ map });

            directionsService.route(
              {
                origin: userPos,
                destination: { lat, lng },
                travelMode: google.maps.TravelMode.DRIVING,
              },
              (result, status) => {
                if (status === "OK" && result) {
                  directionsRenderer.setDirections(result);
                } else {
                  console.error("Directions request failed:", status);
                }
              }
            );
          },
          (error) => console.error("Error getting user location:", error),
          { enableHighAccuracy: true }
        );
      } else {
        console.error("Geolocation not supported.");
      }
    } catch (error) {
      console.error("Error loading Google Maps:", error);
    }
  };

  initMap();
}, [lat, lng]);

  return (
    <div className="relative top-auto left-auto  bg-white flex flex-col items-center justify-center z-50">
      <button onClick={onClose} className="absolute top-4 right-4 bg-gray-200 p-2 rounded-full">✖</button>
      <div ref={mapRef} className="w-[90%] h-[80vh] rounded-lg shadow-lg"></div>
    </div>
  );
};

export default Map;
"use client";
import { useRef, useEffect } from "react";

type Props = {
  onChange: (val: string) => void;
  value: string;
};

const LocationAutoComplete = ({ onChange, value }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!window.google || !inputRef.current) return;

    const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
      componentRestrictions: { country: "in" },
    });
    
    autocomplete.setBounds(
      new window.google.maps.LatLngBounds(
        new window.google.maps.LatLng(20.5, 78.5),
        new window.google.maps.LatLng(21.5, 79.5)
      )
    );

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      onChange(place.formatted_address || "");
    });
  }, []);

  return (
    <input
      ref={inputRef}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Enter a location"
      className="input-field w-full"
    />
  );
};

export default LocationAutoComplete;

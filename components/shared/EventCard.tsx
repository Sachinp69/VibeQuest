"use client";

import React, { useState } from "react";
import { Event } from "@/types";
import { Button } from "../ui/button";
import Map from "@/components/Map";
import events from "@/lib/events"; // Importing the events data

type HardcodedEventsProps = {
  limit?: number; // Optional prop to limit the number of events displayed
}

  const HardcodedEvents: React.FC<HardcodedEventsProps> = ({ limit }) => {
    const [selectedLocation, setSelectedLocation] = useState<{ lat: number; lng: number } | null>(null);

    // Slice the events array based on the limit prop (if provided)
    const displayedEvents = limit ? events.slice(0, limit) : events;

  return (
    <div className="max-w-6xl mx-auto p-6">
      {selectedLocation && (
        <Map lat={selectedLocation.lat} lng={selectedLocation.lng} onClose={() => setSelectedLocation(null)} />
      )}
      {displayedEvents.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayedEvents.map((event) => (
            <div
              key={event._id}
              className="p-5 bg-white shadow-lg rounded-2xl border border-gray-200 hover:shadow-xl transition"
            >
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {event.location} • {event.category.name}
                </p>
                <p className="text-sm text-gray-500">
                  {event.startDateTime.toDateString()} |{" "}
                  {event.startDateTime.toLocaleTimeString()}
                </p>
                <p className="text-sm text-gray-700">
                  Organizer: {event.organizer.firstName}{" "}
                  {event.organizer.lastName}
                </p>
                <p
                  className={`mt-2 text-${event.isFree ? "green" : "red"}-500 font-semibold`}
                >
                  {event.isFree ? "Free Event" : `₹${event.price}`}
                </p>
                <Button onClick={() => setSelectedLocation({ lat: event.lat, lng: event.lng })} className="mt-3 bg-blue-500 text-white px-3 py-1 rounded">
                📍 View Location
                </Button>
                <a
                  href={event.url}
                  className="block mt-3 text-blue-600 hover:underline"
                >
                  View Details →
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg">
          No events found. Come back later.
        </p>
      )}
    </div>
  );
};

export default HardcodedEvents;

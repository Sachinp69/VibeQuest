"use client";

import Script from "next/script";
import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { Event } from "@/types";
import { Button } from "../ui/button";
import Map from "@/components/Map";
import events from "@/lib/events";

declare global {
  interface Window {
    Razorpay: any;
  }
}

type EventCardProps = {
  limit?: number;
};

const EventCard: React.FC<EventCardProps> = ({ limit }) => {
  const { user } = useUser();
  const [selectedLocation, setSelectedLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [loadingEventId, setLoadingEventId] = useState<string | null>(null);
  const displayedEvents = limit ? events.slice(0, limit) : events;

  useEffect(() => {
    if (typeof window !== "undefined" && !window.Razorpay) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handlePayment = async (event: Event) => {
    if (!user) {
      alert("Please log in to proceed with payment.");
      return;
    }

    setLoadingEventId(event._id);

    if (!window.Razorpay) {
      alert("Payment initialization failed. Please try again.");
      return;
    }
    console.log("Razorpay Key:", process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID);

    try {
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: Number(event.price) * 100,
        currency: "INR",
        name: "VibeQuest",
        description: `Payment for ${event.title}`,
        handler: (response: any) => {
          setLoadingEventId(null);
        },
        prefill: {
          name: user.fullName,
          email: user.primaryEmailAddress?.emailAddress,
        },
        theme: { color: "#3399cc" },
      };

      if (typeof window !== "undefined" && window.Razorpay) {
        const razor = new window.Razorpay(options);
        razor.open();
      } else {
        alert("Razorpay SDK not loaded. Please try again.");
      }
    } catch (error) {
      console.error("Error initializing Razorpay:", error);
      alert("Payment initialization failed. Please try again.");
      setLoadingEventId(null);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {selectedLocation && (
        <Map lat={selectedLocation.lat} lng={selectedLocation.lng} onClose={() => setSelectedLocation(null)} />
      )}
      <Script
      src="https://checkout.razorpay.com/v1/checkout.js"
      strategy="lazyOnload"
      onLoad={() => console.log("Razorpay SDK Loaded Successfully")}
    />


      {displayedEvents.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayedEvents.map((event) => (
            <div
              key={event._id}
              className="p-5 bg-white shadow-lg rounded-2xl border border-gray-200 hover:shadow-xl transition"
            >
              <img
                src={event.imageUrl || "/placeholder-image.jpg"}
                alt={event.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
                <p className="text-sm text-gray-500">
                  {event.location} • {event.category?.name || "Uncategorized"}
                </p>
                <p className="text-sm text-gray-500">
                  {new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(new Date(event.startDateTime))} | 
                  {new Intl.DateTimeFormat("en-US", { timeStyle: "short" }).format(new Date(event.startDateTime))}
                </p>
                <p className="text-sm text-gray-700">
                  Organizer: {event.organizer?.firstName || "Unknown"} {event.organizer?.lastName || ""}
                </p>
                <p className={`mt-2 text-${event.isFree ? "green" : "red"}-500 font-semibold`}>
                  {event.isFree ? "Free Event" : `₹${Number(event.price)}`}
                </p>
                <Button
                  onClick={() => setSelectedLocation({ lat: event.lat, lng: event.lng })}
                  className="mt-3 bg-blue-500 text-white px-3 py-1 rounded w-full"
                >
                  📍 View Location
                </Button>
                {!event.isFree && user && (
                  <Button
                    onClick={() => handlePayment(event)}
                    className="mt-3 bg-green-500 text-white px-3 py-1 rounded w-full"
                    disabled={loadingEventId === event._id}
                  >
                    {loadingEventId === event._id ? "Processing..." : "💳 Pay Now"}
                  </Button>
                )}
                {!user && !event.isFree && (
                  <p className="text-sm text-gray-500 text-center mt-2">
                    Login to purchase tickets
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg">No events found. Come back later.</p>
      )}
    </div>
  );
};

export default EventCard;

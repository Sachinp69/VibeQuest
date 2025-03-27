import React from "react";
import { Event } from "@/types";

const HardcodedEvents: React.FC = () => {
  const events: Event[] = [
    {
      _id: "1",
      title: "Tech Conference 2025",
      description: "A conference about the latest in technology.",
      price: "50",
      isFree: false,
      imageUrl: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "New York",
      startDateTime: new Date("2025-04-15T10:00:00"),
      endDateTime: new Date("2025-04-15T17:00:00"),
      url: "#",
      organizer: { _id: "101", firstName: "John", lastName: "Doe" },
      category: { _id: "201", name: "Technology" },
    },
    {
      _id: "2",
      title: "Music Festival",
      description: "Enjoy the biggest music festival of the year.",
      price: "Free",
      isFree: true,
      imageUrl: "https://media.istockphoto.com/id/1330424071/photo/large-group-of-people-at-a-concert-party.webp?a=1&b=1&s=612x612&w=0&k=20&c=jF4NInDkXlKvf3_jZmV5wBBn6aLqVvC37R6yhBaEv3I=",
      location: "Los Angeles",
      startDateTime: new Date("2025-06-20T18:00:00"),
      endDateTime: new Date("2025-06-21T02:00:00"),
      url: "#",
      organizer: { _id: "102", firstName: "Alice", lastName: "Smith" },
      category: { _id: "202", name: "Music" },
    },
    {
      _id: "3",
      title: "AI & ML Workshop",
      description: "A hands-on workshop on AI and Machine Learning.",
      price: "30",
      isFree: false,
      imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEFJJTIwd29ya3Nob3B8ZW58MHx8MHx8fDA%3D",
      location: "San Francisco",
      startDateTime: new Date("2025-07-10T09:00:00"),
      endDateTime: new Date("2025-07-10T16:00:00"),
      url: "#",
      organizer: { _id: "103", firstName: "David", lastName: "Johnson" },
      category: { _id: "203", name: "AI & ML" },
    },
    {
      _id: "4",
      title: "Startup Pitch Night",
      description: "Pitch your startup idea to investors.",
      price: "Free",
      isFree: true,
      imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3RhcnQlMjB1cHxlbnwwfHwwfHx8MA%3D%3D",
      location: "Chicago",
      startDateTime: new Date("2025-08-05T18:00:00"),
      endDateTime: new Date("2025-08-05T22:00:00"),
      url: "#",
      organizer: { _id: "104", firstName: "Emma", lastName: "Williams" },
      category: { _id: "204", name: "Entrepreneurship" },
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">🎉 Upcoming Events</h2>

      {events.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div key={event._id} className="p-5 bg-white shadow-lg rounded-2xl border border-gray-200 hover:shadow-xl transition">
              <img src={event.imageUrl} alt={event.title} className="w-full h-48 object-cover rounded-t-2xl" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
                <p className="text-sm text-gray-500">{event.location} • {event.category.name}</p>
                <p className="text-sm text-gray-500">{event.startDateTime.toDateString()} | {event.startDateTime.toLocaleTimeString()}</p>
                <p className="text-sm text-gray-700">Organizer: {event.organizer.firstName} {event.organizer.lastName}</p>
                <p className={`mt-2 text-${event.isFree ? "green" : "red"}-500 font-semibold`}>
                  {event.isFree ? "Free Event" : `₹${event.price}`}
                </p>
                <a href={event.url} className="block mt-3 text-blue-600 hover:underline">
                  View Details →
                </a>
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

export default HardcodedEvents;

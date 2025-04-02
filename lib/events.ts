import {Event} from "@/types";

    const events: Event[] = [
      {
        _id: "1",
        title: "Tech Conference 2025",
        description: "A conference about the latest in technology.",
        price: "500",
        isFree: false,
        imageUrl:
          "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        location: "Nagpur",
        lat: 21.03949862678176, 
        lng: 79.03055025236341,

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
        price: "1000",
        isFree: false,
        imageUrl:
          "https://media.istockphoto.com/id/1330424071/photo/large-group-of-people-at-a-concert-party.webp?a=1&b=1&s=612x612&w=0&k=20&c=jF4NInDkXlKvf3_jZmV5wBBn6aLqVvC37R6yhBaEv3I=",
        location: "Halff'time, Nagpur",
        lat: 21.16557427190347,
        lng: 78.9486547335674,
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
        price: "300",
        isFree: false,
        imageUrl:
          "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEFJJTIwd29ya3Nob3B8ZW58MHx8MHx8fDA%3D",
        location: "Nagpur",
        lat: 21.05143642867407,
        lng: 79.0600723531205,

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
        imageUrl:
          "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3RhcnQlMjB1cHxlbnwwfHwwfHx8MA%3D%3D",
        location: "Nagpur",
        lat: 21.039542477730873, 
        lng: 79.03032100181099,

        startDateTime: new Date("2025-08-05T18:00:00"),
        endDateTime: new Date("2025-08-05T22:00:00"),
        url: "#",
        organizer: { _id: "104", firstName: "Emma", lastName: "Williams" },
        category: { _id: "204", name: "Entrepreneurship" },
      },
    ];

    export default events;
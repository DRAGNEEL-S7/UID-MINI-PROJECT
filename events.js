// Pre-registered events array
const events = [
    {
      title: "Music Fiesta 2025",
      date: "2025-06-15",
      location: "New York City, USA"
    },
    {
      title: "Tech Innovation Conference",
      date: "2025-07-01",
      location: "San Francisco, USA"
    },
    {
      title: "Beachside Wedding",
      date: "2025-08-22",
      location: "Malibu, USA"
    },
    {
      title: "Art & Craft Expo",
      date: "2025-09-10",
      location: "Paris, France"
    },
    {
      title: "Food Carnival",
      date: "2025-10-05",
      location: "Rome, Italy"
    }
  ];
  
  // Display events
  const eventsList = document.getElementById('events-list');
  
  events.forEach(event => {
    const eventCard = document.createElement('div');
    eventCard.className = 'event-card';
    eventCard.innerHTML = `
      <div class="event-title">${event.title}</div>
      <div class="event-date">📅 ${event.date}</div>
      <div class="event-location">📍 ${event.location}</div>
    `;
    eventsList.appendChild(eventCard);
  });
  
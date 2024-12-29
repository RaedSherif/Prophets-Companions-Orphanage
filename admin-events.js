document.addEventListener("DOMContentLoaded", function () {
    // Load events from localStorage
    let storedEvents = JSON.parse(localStorage.getItem("events")) || [];

    // Call the function to add events from localStorage to the table
    loadStoredEvents(storedEvents);
  });

  function loadStoredEvents(events) {
    const tableBody = document.getElementById("eventTable").getElementsByTagName("tbody")[0];

    // Loop through the stored events and add them to the table
    events.forEach(event => {
      const row = tableBody.insertRow();
      row.innerHTML = `
        <td>${event.name}</td>
        <td>${event.date}</td>
        <td><button type="button" onclick="removeEvent(this, '${event.name}', '${event.date}')">Remove</button></td>
      `;
    });
  }

  function addRow() {
    const eventName = prompt("Enter the event name:");
    if (!eventName || eventName.trim() === "") {
      alert("Event name cannot be empty.");
      return;
    }

    const eventDate = prompt("Enter the event date (e.g., MM/DD/YYYY):");
    if (!eventDate || !/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(eventDate)) {
      alert("Please enter a valid date in MM/DD/YYYY format.");
      return;
    }

    const newEvent = { name: eventName, date: eventDate };

    let events = JSON.parse(localStorage.getItem("events")) || [];
    events.push(newEvent);

    localStorage.setItem("events", JSON.stringify(events));

    const tableBody = document.getElementById("eventTable").getElementsByTagName("tbody")[0];
    const row = tableBody.insertRow();
    row.innerHTML = `
      <td>${eventName}</td>
      <td>${eventDate}</td>
      <td><button type="button" onclick="removeEvent(this, '${eventName}', '${eventDate}')">Remove</button></td>
    `;
  }

  function removeEvent(button, eventName, eventDate) {
    let events = JSON.parse(localStorage.getItem("events")) || [];
    events = events.filter(event => event.name !== eventName || event.date !== eventDate);

    localStorage.setItem("events", JSON.stringify(events));

    const row = button.parentNode.parentNode;
    row.remove();
  }
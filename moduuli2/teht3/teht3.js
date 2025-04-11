'use strict';

const participants = [];

// Get number of participants
const getNumberOfParticipants = () =>
    Number(prompt('How many participants?'));

const participantCount = getNumberOfParticipants();

// Collect participant names
const collectParticipants = (count) => {
    for (let i = 0; i < count; i++) {
        const name = prompt(`Enter name for participant ${i + 1}:`);
        if (name && name.trim() !== '') {
            participants.push({
                name: name.trim()
            });
        }
    }
};

// Display participants in ordered list
const displayParticipants = () => {
    const target = document.getElementById('target');

    if (participants.length === 0) {
        target.innerHTML = '<p>No participants were entered.</p>';
        return;
    }

    // Sort alphabetically
    participants.sort((a, b) => a.name.localeCompare(b.name));

    // Create ordered list
    const list = document.createElement('ol');

    // Add each participant as list item
    participants.forEach(person => {
        const item = document.createElement('li');
        item.textContent = person.name;
        list.appendChild(item);
    });

    // Clear previous content and add the list
    target.innerHTML = '<h2>Participants:</h2>';
    target.appendChild(list);
};

// Run the program
collectParticipants(participantCount);
displayParticipants();
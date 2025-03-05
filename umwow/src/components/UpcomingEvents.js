import React, { useState } from "react";
import Image from "next/image";
import "../styles/UpcomingEvents.css";

const eventDetails = [
    { title: "Event 1", description: "Description for Event 1" },
    { title: "Event 2", description: "Description for Event 2" },
    { title: "Event 3", description: "Description for Event hthstgsrgrsgrggrgrgrg3 \ngergerag" },
    { title: "Event 4", description: "Description for Event 4" },
    { title: "Event 5", description: "Description for Event 5" },
    { title: "Event 6", description: "Description for Event 6" },
];

const UpcomingEvent = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleImageClick = (index) => {
        setSelectedEvent(eventDetails[index]);
    };

    const closeOverlay = () => {
        setSelectedEvent(null);
    };

    return (
        <div className="banner">
            <div className="slider" style={{ "--quantity": 6 }}>
                {eventDetails.map((_, index) => (
                    <div
                        className="item"
                        style={{ "--position": index + 1 }}
                        key={index}
                        onClick={() => handleImageClick(index)}
                    >
                        <Image
                            src={`/images/gallery${index + 1}.jpg`}
                            alt={`Event ${index + 1}`}
                            width={200}
                            height={250}
                            className="image"
                        />
                    </div>
                ))}
            </div>

            {selectedEvent && (
                <div className="overlay" onClick={closeOverlay}>
                    <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
                        <h2>{selectedEvent.title}</h2>
                        <p>{selectedEvent.description}</p>
                        <button onClick={closeOverlay}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UpcomingEvent;

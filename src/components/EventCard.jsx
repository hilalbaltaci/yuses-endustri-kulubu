import React from 'react';
import { ArrowUpRight, CalendarDays, MapPin } from 'lucide-react';

export default function EventCard({ event, onDetails }) {
  return <article className="event-card">
    <button className="event-image-button" onClick={() => onDetails(event)} aria-label={`${event.title} detayları`}>
      <img className="event-image" src={event.image} alt={event.title} loading="lazy"/>
      <span className="image-category">{event.category}</span>
    </button>
    <div className="event-card-content">
      <div className="event-title-row">
        <h3>{event.title}</h3>
        <button className="round-arrow" onClick={() => onDetails(event)} aria-label={`${event.title} detayları`}><ArrowUpRight size={16}/></button>
      </div>
      <p>{event.description}</p>
      <div className="event-meta">
        <span><CalendarDays size={14}/> {event.date}</span>
        <span><MapPin size={14}/> {event.location}</span>
      </div>
    </div>
  </article>;
}

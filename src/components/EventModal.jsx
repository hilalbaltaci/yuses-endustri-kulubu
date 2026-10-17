import React, { useEffect } from 'react';
import { X, CalendarDays, MapPin } from 'lucide-react';

export default function EventModal({ event, onClose }) {
  useEffect(() => {
    if (!event) return;
    const onKey = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [event, onClose]);
  if (!event) return null;
  return <div className="modal-backdrop" onClick={onClose}>
    <div className="event-modal" role="dialog" aria-modal="true" aria-label={event.title} onClick={e => e.stopPropagation()}>
      <button className="modal-close" onClick={onClose} aria-label="Kapat"><X size={18}/></button>
      <img src={event.image} alt={event.title}/>
      <div className="modal-body">
        <span className="eyebrow">{event.category}</span>
        <h2>{event.title}</h2>
        <p>{event.description}</p>
        <div className="event-meta">
          <span><CalendarDays size={14}/> {event.date}</span>
          <span><MapPin size={14}/> {event.location}</span>
          <span className="small-note">Güncel tarih ve katılım bilgileri için YUSES Instagram hesabını takip edebilirsin.</span>
        </div>
      </div>
    </div>
  </div>;
}

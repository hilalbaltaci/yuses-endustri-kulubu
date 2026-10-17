import React, { useState } from 'react';
import { Pencil, Trash2, Plus, X } from 'lucide-react';

const empty = { title: '', category: '', description: '', image: '', date: '', location: '' };

export default function Admin({ events, onAdd, onUpdate, onDelete }) {
  const [form, setForm] = useState(empty);
  const [editingId, setEditingId] = useState(null);
  const set = key => e => setForm(f => ({ ...f, [key]: e.target.value }));
  const reset = () => { setForm(empty); setEditingId(null); };
  const submit = e => {
    e.preventDefault();
    if (editingId) onUpdate({ ...form, id: editingId });
    else onAdd({ ...form, id: `event-${Date.now()}` });
    reset();
  };
  const edit = event => { setForm({ ...empty, ...event }); setEditingId(event.id); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const remove = event => { if (window.confirm(`"${event.title}" silinsin mi?`)) { onDelete(event.id); if (editingId === event.id) reset(); } };

  return <section className="section admin-section">
    <div className="admin-notice">Değişiklikler yalnızca bu tarayıcıda (localStorage) saklanır ve diğer ziyaretçiler tarafından görülmez.</div>
    <form className="admin-form" onSubmit={submit}>
      <div className="form-title">
        <h3>{editingId ? 'Etkinliği düzenle' : 'Yeni etkinlik ekle'}</h3>
        {editingId && <button type="button" className="icon-button" onClick={reset} aria-label="Düzenlemeyi iptal et"><X size={16}/></button>}
      </div>
      <div className="form-grid">
        <label>Başlık<input required value={form.title} onChange={set('title')}/></label>
        <label>Kategori<input required value={form.category} onChange={set('category')}/></label>
        <label>Tarih<input value={form.date} onChange={set('date')} placeholder="Tarih bilgisi eklenecek"/></label>
        <label>Konum<input value={form.location} onChange={set('location')} placeholder="Yeditepe Üniversitesi"/></label>
      </div>
      <label>Görsel bağlantısı<input type="url" value={form.image} onChange={set('image')} placeholder="https://..."/></label>
      <label>Açıklama<textarea required rows={4} value={form.description} onChange={set('description')}/></label>
      <div className="form-actions">
        <button type="submit" className="button button-primary">{editingId ? 'Kaydet' : <>Ekle <Plus size={16}/></>}</button>
        {editingId && <button type="button" className="button button-secondary" onClick={reset}>Vazgeç</button>}
      </div>
    </form>
    <div className="admin-list">
      {events.map(event => <div className="admin-row" key={event.id}>
        <div className="admin-thumb">{event.image && <img src={event.image} alt=""/>}</div>
        <div className="admin-row-info"><strong>{event.title}</strong><small>{event.category} · {event.date}</small></div>
        <button className="icon-button" onClick={() => edit(event)} aria-label={`${event.title} düzenle`}><Pencil size={15}/></button>
        <button className="icon-button danger" onClick={() => remove(event)} aria-label={`${event.title} sil`}><Trash2 size={15}/></button>
      </div>)}
    </div>
  </section>;
}

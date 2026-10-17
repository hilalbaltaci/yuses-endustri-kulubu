import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import logo from '../assets/yuses-logo.png';

const links = [
  { id: 'home', label: 'Ana Sayfa' },
  { id: 'events', label: 'Etkinlikler' },
  { id: 'about', label: 'Hakkımızda' },
  { id: 'team', label: 'Ekibimiz' },
  { id: 'announcements', label: 'Duyurular' }
];

export default function Header({ active, onNavigate }) {
  const [open, setOpen] = useState(false);
  const go = id => { setOpen(false); onNavigate(id); };
  return <header className="site-header">
    <button className="brand" onClick={() => go('home')} aria-label="YUSES ana sayfa">
      <img src={logo} alt="YUSES logosu"/>
      <span><strong>YUSES</strong><small>YEDİTEPE ÜNİVERSİTESİ</small></span>
    </button>
    <button className="mobile-toggle" onClick={() => setOpen(o => !o)} aria-label="Menüyü aç/kapat" aria-expanded={open}>{open ? <X size={26}/> : <Menu size={26}/>}</button>
    <nav className={`nav${open ? ' open' : ''}`}>
      {links.map(l => <button key={l.id} className={`nav-link${active === l.id ? ' active' : ''}`} onClick={() => go(l.id)}>{l.label}</button>)}
      <a className="nav-cta" href="https://www.instagram.com/yusesyeditepe/" target="_blank" rel="noreferrer">Bize katıl <ArrowUpRight size={16}/></a>
    </nav>
  </header>;
}

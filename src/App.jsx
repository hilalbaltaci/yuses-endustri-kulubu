import React from 'react';
import { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, Instagram, Mail, Users, Sparkles, HeartHandshake, CalendarDays, Globe2, ChevronDown, Cog, GraduationCap } from 'lucide-react';
import Header from './components/Header.jsx';
import EventCard from './components/EventCard.jsx';
import EventModal from './components/EventModal.jsx';
import Admin from './pages/Admin.jsx';
import { starterEvents, values, teamMembers } from './data.js';
import logo from './assets/yuses-logo.png';

const KEY = 'yuses-site-events-v2';
const announcements = [
  { title: 'BEYİN Zirvesi', text: 'Konuşmacı oturumları, workshoplar ve vaka analizleriyle iş dünyasını keşfet.', tag: 'ANA ETKİNLİK' },
  { title: 'Engineering for Kids', text: 'Bilim ve mühendisliği çocuklarla buluşturan sosyal sorumluluk projesi.', tag: 'SOSYAL SORUMLULUK' },
  { title: 'Teknik geziler', text: 'Üretim ve iş süreçlerini yerinde gözlemlemeye yönelik geziler.', tag: 'KULÜP YAŞAMI' }
];

export default function App() {
  const [page, setPage] = useState('home');
  const [selected, setSelected] = useState(null);
  const [events, setEvents] = useState(() => {
    try { const saved = localStorage.getItem(KEY); return saved ? JSON.parse(saved) : starterEvents; }
    catch { return starterEvents; }
  });
  useEffect(() => { try { localStorage.setItem(KEY, JSON.stringify(events)); } catch {} }, [events]);
  useEffect(() => { document.title = `${({home:'Ana Sayfa',events:'Etkinlikler',about:'Hakkımızda',announcements:'Duyurular',team:'Ekibimiz',admin:'Yönetim'})[page]} | YUSES`; }, [page]);
  const add = event => setEvents(old => [event, ...old]);
  const update = event => setEvents(old => old.map(x => x.id === event.id ? event : x));
  const remove = id => setEvents(old => old.filter(x => x.id !== id));
  const go = id => { setPage(id); window.scrollTo({top:0, behavior:'smooth'}); };
  return <div className="app-shell">
    <Header active={page} onNavigate={go}/>
    {page === 'home' && <>
      <main>
        <section className="hero">
          <div className="hero-glow"></div>
          <div className="hero-copy">
            <span className="eyebrow"><span className="eyebrow-dot"></span> YEDİTEPE ÜNİVERSİTESİ · ÖĞRENCİ TOPLULUĞU</span>
            <h1>Birlikte düşün.<br/><em>Birlikte üret.</em><br/>Geleceği birlikte şekillendir.</h1>
            <p>Endüstri ve sistem mühendisliği perspektifini; kariyer, teknoloji, sosyal sorumluluk ve güçlü bir topluluk ruhuyla bir araya getiriyoruz.</p>
            <div className="hero-actions"><button className="button button-primary" onClick={()=>go('events')}>Etkinlikleri keşfet <ArrowRight size={17}/></button><button className="button button-secondary" onClick={()=>go('about')}>YUSES'i tanı <ArrowUpRight size={16}/></button></div>
            <div className="hero-trust"><span><Users size={17}/> Öğrenci odaklı topluluk</span><span><Sparkles size={17}/> Fikirden deneyime</span></div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="hv-board">
              <div className="hv-grid"></div>
              <div className="hv-orbit"></div>
              <div className="hv-board-head"><span><Cog size={14}/> SİSTEM · SÜREÇ · İNSAN</span><span>YUSES/26</span></div>
              <div className="hv-middle">
                <div className="hv-logo"><img src={logo} alt=""/></div>
                <div className="hv-chart"><span>VERİMLİLİK</span><div>{[38,56,47,72,64,88].map((h,i)=><i key={i} style={{height:`${h}%`}}></i>)}</div></div>
              </div>
              <div className="hv-team"><div className="hv-dots"><span>E</span><span>S</span><span>M</span><span>+</span></div><div><strong>Ekip çalışması</strong><small>Farklı bölümler, tek hedef</small></div></div>
              <ol className="hv-flow">{['Fikir','Planla','Üret','Geliştir'].map((s,i)=><li key={s}><b>0{i+1}</b>{s}</li>)}</ol>
            </div>
            <div className="hv-card hv-schedule">
              <div className="hv-card-title"><CalendarDays size={15}/> Etkinlik akışı</div>
              <div className="hv-gantt"><span>Zirve</span><i style={{marginLeft:'0%',width:'62%'}}></i><span>Gezi</span><i style={{marginLeft:'30%',width:'45%'}}></i><span>Atölye</span><i style={{marginLeft:'52%',width:'48%'}}></i></div>
            </div>
            <div className="hv-campus"><GraduationCap size={18}/><span>Kampüs yaşamı</span></div>
            <div className="hero-number"><strong>2006–07</strong><span>Kuruluş dönemi</span></div>
          </div>
          <div className="hero-bottom"><span>FİKİRLERİNİ HAREKETE GEÇİR</span><ChevronDown size={17}/><span>01 / 04</span></div>
        </section>
        <section className="stats-strip">
          <div><strong>900<span>+</span></strong><small>Tanıtım dosyasındaki üye sayısı</small></div><div><strong>6</strong><small>Topluluk yapısı</small></div><div><strong>4</strong><small>Ana etkinlik</small></div><div className="stats-quote">“Birlikte öğrenir, birlikte gelişiriz.”</div>
        </section>
        <section className="section events-section">
          <div className="section-heading"><div><span className="eyebrow">TAKVİMİNE EKLE</span><h2>Öne çıkan etkinlikler<span className="red-dot">.</span></h2><p>YUSES'in farklı alanlarda deneyim ve bağlantı kurmayı destekleyen etkinlikleri.</p></div><button className="text-link" onClick={()=>go('events')}>Tüm etkinlikler <ArrowRight size={17}/></button></div>
          <div className="events-grid">{events.slice(0,3).map(e=><EventCard key={e.id} event={e} onDetails={setSelected}/>)}</div>
        </section>
        <section className="about-band">
          <div className="about-band-copy"><span className="eyebrow">BİZ KİMİZ?</span><h2>Merakla başlar.<br/><em>Birlikte büyür.</em></h2><p>YUSES, Yeditepe Üniversitesi bünyesinde farklı bölümlerden öğrencileri bir araya getiren; iş dünyasını keşfetmeyi, yeni beceriler kazanmayı ve anlamlı ilişkiler kurmayı destekleyen bir öğrenci kulübüdür.</p><button className="button button-light" onClick={()=>go('about')}>Hikâyemizi keşfet <ArrowRight size={17}/></button></div>
          <div className="value-stack">{values.map((v,i)=><div className="value-item" key={v.title}><span>0{i+1}</span><div><h3>{v.title}</h3><p>{v.text}</p></div><ArrowUpRight size={18}/></div>)}</div>
        </section>
        <section className="section pillars-section"><div className="section-heading"><div><span className="eyebrow">YUSES DENEYİMİ</span><h2>Bir kulüpten daha fazlası<span className="red-dot">.</span></h2></div></div><div className="pillars-grid">
          <div className="pillar"><div className="pillar-icon"><Users/></div><h3>Birlikte öğren</h3><p>Farklı bölümlerden insanlarla fikir alışverişi yap, bakış açını genişlet.</p></div>
          <div className="pillar"><div className="pillar-icon"><Globe2/></div><h3>Dünyayı keşfet</h3><p>Teknik geziler ve sektör buluşmalarıyla iş hayatını yakından tanı.</p></div>
          <div className="pillar"><div className="pillar-icon"><HeartHandshake/></div><h3>İz bırak</h3><p>Sosyal sorumluluk projeleriyle bilgini ve enerjini paylaş.</p></div>
        </div></section>
        <section className="join-banner"><div><span className="eyebrow">YUSES AİLESİ</span><h2>Bir sonraki hikâyede<br/>sen de yer al.</h2></div><button className="button button-primary" onClick={()=>go('about')}>Kulübü tanı <ArrowUpRight size={17}/></button><div className="join-decoration">Y</div></section>
      </main>
    </>}
    {page === 'events' && <main><section className="page-hero"><span className="eyebrow">YUSES TAKVİMİ</span><h1>Etkinliklerimiz<span className="red-dot">.</span></h1><p>Konferanslardan teknik gezilere, atölyelerden sosyal sorumluluk projelerine.</p></section><section className="section"><div className="events-grid all-events">{events.map(e=><EventCard key={e.id} event={e} onDetails={setSelected}/>)}</div></section></main>}
    {page === 'about' && <main><section className="page-hero"><span className="eyebrow">HİKÂYEMİZ</span><h1>İnsanları, fikirleri<br/><em>ve fırsatları buluşturuyoruz.</em></h1><p>YUSES (Yeditepe University Industrial and System Engineering Society), 2006–2007 eğitim öğretim yılında kurulmuş bir Yeditepe Üniversitesi öğrenci kulübüdür.</p></section><section className="section about-detail"><div><span className="eyebrow">AMACIMIZ</span><h2>Öğrencilikten iş yaşamına uzanan bir köprü.</h2></div><div><p>Tanıtım dosyamızda da vurgulandığı gibi, etkinliklerimizi farklı bakış açılarını buluşturacak ve iş dünyasının çeşitli sektörlerini kapsayacak şekilde geliştiriyoruz.</p><p>Üyelerimizin bilgi ve deneyimlerini artırmasını, takım çalışmasını deneyimlemesini ve iş yaşamına hazırlanmasını desteklemek istiyoruz.</p></div></section><section className="section values-section"><div className="section-heading"><div><span className="eyebrow">BİZİ BİZ YAPAN</span><h2>Değerlerimiz<span className="red-dot">.</span></h2></div></div><div className="values-grid">{values.map((v,i)=><article key={v.title}><span>0{i+1}</span><h3>{v.title}</h3><p>{v.text}</p></article>)}</div></section></main>}
    {page === 'team' && <main><section className="page-hero"><span className="eyebrow">YUSES AİLESİ</span><h1>Ekibimiz<span className="red-dot">.</span></h1><p>YUSES'in çalışmalarını birlikte yürüten yönetim ekibi ve departman liderleri.</p></section><section className="section team-section"><div className="section-heading"><div><span className="eyebrow">BİRLİKTE ÜRETİYORUZ</span><h2>Yönetim ve departmanlar<span className="red-dot">.</span></h2><p>İsimleri ve görevleri güncel tutmak için proje içindeki <strong>src/data.js</strong> dosyasındaki <strong>teamMembers</strong> listesini düzenleyebilirsin.</p></div></div><div className="team-grid">{teamMembers.map((person,i)=><article className="team-card" key={person.name}><div className="team-avatar">{person.name.split(' ').filter(Boolean).slice(0,2).map(n=>n[0]).join('').toLocaleUpperCase('tr-TR')}</div><div className="team-card-copy"><span className="team-number">EKİP ÜYESİ {String(i+1).padStart(2,'0')}</span><h3>{person.name}</h3><p>{person.role}</p></div></article>)}</div></section></main>}
    {page === 'announcements' && <main><section className="page-hero"><span className="eyebrow">GÜNCELDEN HABERDAR OL</span><h1>Duyurular<span className="red-dot">.</span></h1><p>Etkinlikler, projeler ve kulüp yaşamına dair notlar.</p></section><section className="section announcement-list">{announcements.map((a,i)=><article key={a.title} className="announcement-row"><span className="announcement-index">0{i+1}</span><div><span className="eyebrow">{a.tag}</span><h2>{a.title}</h2><p>{a.text}</p></div><ArrowUpRight size={22}/></article>)}</section></main>}
    {page === 'admin' && <main><section className="page-hero compact-hero"><span className="eyebrow">YUSES İÇERİK PANELİ</span><h1>Yönetim<span className="red-dot">.</span></h1><p>Etkinlik içeriklerini buradan düzenle. Bu sayfa demo amaçlıdır; gerçek kullanıcı girişi bulunmaz.</p></section><Admin events={events} onAdd={add} onUpdate={update} onDelete={remove}/></main>}
    <footer className="site-footer"><div className="footer-top"><div className="footer-brand"><img src={logo} alt="YUSES logosu"/><div><strong>YUSES</strong><small>Yeditepe Üniversitesi</small></div></div><p>Fikirleri, insanları ve fırsatları bir araya getiriyoruz.</p><div className="footer-social"><a href="https://www.instagram.com/yusesyeditepe/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram/></a><a href="mailto:yuses@yeditepe.edu.tr" aria-label="E-posta"><Mail/></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} YUSES · Yeditepe Üniversitesi</span><div><button onClick={()=>go('home')}>Ana Sayfa</button><button onClick={()=>go('events')}>Etkinlikler</button><button onClick={()=>go('admin')}>İçerik yönetimi</button></div><span>Merakla. Birlikte. YUSES.</span></div></footer>
    <EventModal event={selected} onClose={()=>setSelected(null)}/>
  </div>;
}
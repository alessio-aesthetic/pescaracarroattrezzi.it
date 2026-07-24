import Link from 'next/link'

import { Container } from '@/components/Container'
import { ConsentBanner } from '@/components/ConsentBanner'
import { faqs, services, site, zones } from '@/data/site'

type Theme = string

const accents: Record<string, { main: string; soft: string; ink: string }> = {
  salient: { main: '#b42318', soft: '#fff1ee', ink: '#5f1712' },
  studio: { main: '#0f766e', soft: '#e8fbf7', ink: '#0f4f4a' },
  keynote: { main: '#1d4ed8', soft: '#eef4ff', ink: '#173577' },
  spotlight: { main: '#7c3aed', soft: '#f5f0ff', ink: '#4c1d95' },
  transmit: { main: '#c2410c', soft: '#fff4ec', ink: '#7c2d12' },
  primer: { main: '#0369a1', soft: '#edf8ff', ink: '#164e63' },
  protocol: { main: '#be123c', soft: '#fff0f4', ink: '#881337' },
  pocket: { main: '#374151', soft: '#f3f4f6', ink: '#111827' },
  syntax: { main: '#047857', soft: '#ecfdf5', ink: '#064e3b' },
  catalyst: { main: '#a16207', soft: '#fffbea', ink: '#713f12' },
}

const theme: Theme = site.template || 'salient'
const accent = accents[theme] || accents.salient

function CallButton({ children = `Chiama ${site.phone}`, outline = false, className = '' }: { children?: React.ReactNode; outline?: boolean; className?: string }) {
  return (
    <Link
      href={`tel:${site.tel}`}
      className={`inline-flex min-h-12 items-center justify-center rounded-xl px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5 ${className}`}
      style={outline ? { color: accent.main, border: `1px solid ${accent.main}`, background: '#fff' } : { color: '#fff', background: accent.main, boxShadow: `0 12px 26px ${accent.main}33` }}
    >
      {children}
    </Link>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <Container className="flex min-h-[76px] items-center justify-between gap-5">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-lg font-black text-white" style={{ background: accent.main }}>+</span>
          <span className="truncate text-sm font-black uppercase tracking-[0.1em] text-slate-950 sm:text-base">{site.name}</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-600 lg:flex">
          <a href="#urgenze" className="transition hover:text-slate-950">Urgenze</a>
          <a href="#servizi" className="transition hover:text-slate-950">Servizi</a>
          <a href="#zone" className="transition hover:text-slate-950">Zone servite</a>
          <a href="#faq" className="transition hover:text-slate-950">FAQ</a>
        </nav>
        <CallButton className="shrink-0" />
      </Container>
    </header>
  )
}

function HeroImage({ className = '' }: { className?: string }) {
  return <img src="/images/home-hero.jpg" alt={`Carroattrezzi in intervento a ${site.city}`} className={`h-full w-full object-cover ${className}`} />
}

function Hero() {
  const city = site.city
  if (theme === 'salient') return <section className="bg-white py-14 sm:py-20"><Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"><div className="max-w-2xl"><p className="mb-6 text-xs font-black uppercase tracking-[0.24em]" style={{ color: accent.main }}>Soccorso stradale locale, 24 ore</p><h1 className="text-5xl font-black tracking-[-0.045em] text-slate-950 sm:text-7xl">Carroattrezzi a {city}</h1><p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">Quando l’auto si ferma, organizziamo il recupero con indicazioni chiare, attenzione al mezzo e una risposta concreta per la tua zona.</p><div className="mt-8 flex flex-wrap gap-3"><CallButton>Chiama ora</CallButton><Link href="#servizi" className="inline-flex min-h-12 items-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-bold text-slate-800">Scopri i servizi</Link></div><div className="mt-10 flex flex-wrap gap-6 text-sm font-semibold text-slate-600"><span><b className="text-slate-950">24H</b> disponibilità</span><span><b className="text-slate-950">12</b> servizi</span><span><b className="text-slate-950">{city}</b> e provincia</span></div></div><div className="relative h-[430px] overflow-hidden rounded-[2rem] bg-slate-100 shadow-2xl shadow-slate-900/10"><HeroImage /><div className="absolute inset-x-5 bottom-5 rounded-2xl bg-white/95 p-5 shadow-xl"><p className="text-xs font-black uppercase tracking-[0.2em]" style={{ color: accent.main }}>Assistenza quando serve</p><p className="mt-2 text-xl font-bold text-slate-950">Recupero, traino e trasporto senza passaggi inutili.</p></div></div></Container></section>
  if (theme === 'studio') return <section className="bg-[#f3fbfa] py-16 sm:py-24"><Container><div className="mx-auto max-w-4xl text-center"><p className="text-xs font-black uppercase tracking-[0.3em]" style={{ color: accent.main }}>Studio operativo {city}</p><h1 className="mt-5 text-5xl font-black tracking-[-0.055em] text-slate-950 sm:text-8xl">Carroattrezzi a {city}, con metodo.</h1><p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600">Un servizio pensato per chi ha bisogno di risolvere un fermo veicolo con tempi chiari, comunicazioni dirette e attenzione alle condizioni del mezzo.</p><div className="mt-8 flex justify-center gap-3"><CallButton>Parla con noi</CallButton><Link href="#urgenze" className="inline-flex items-center rounded-xl px-5 py-3 text-sm font-bold text-slate-800">Come interveniamo →</Link></div></div><div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-[2.5rem] border-8 border-white bg-white shadow-xl"><div className="h-[360px] sm:h-[500px]"><HeroImage /></div></div></Container></section>
  if (theme === 'keynote') return <section className="bg-slate-950 py-8 text-white sm:py-12"><Container><div className="relative overflow-hidden rounded-[2rem] bg-slate-900"><div className="absolute inset-0 opacity-45"><HeroImage /></div><div className="relative grid min-h-[650px] items-end p-7 sm:p-12 lg:grid-cols-[1fr_0.55fr] lg:items-center"><div className="max-w-3xl"><p className="mb-5 text-xs font-black uppercase tracking-[0.26em]" style={{ color: '#93c5fd' }}>Emergency mobility / {city}</p><h1 className="text-5xl font-black tracking-[-0.05em] sm:text-8xl">Carroattrezzi a {city}</h1><p className="mt-7 max-w-xl text-lg leading-8 text-slate-200">Se non puoi proseguire, ti aiutiamo a mettere ordine nella situazione e a portare il veicolo dove serve.</p><div className="mt-8"><CallButton>Chiama il soccorso</CallButton></div></div><div className="mt-8 border-l border-white/30 pl-6 lg:mt-0"><p className="text-4xl font-black">24/7</p><p className="mt-2 text-slate-300">Assistenza per auto, moto e veicoli commerciali.</p></div></div></div></Container></section>
  if (theme === 'spotlight') return <section className="bg-[#f8f7ff] py-14 sm:py-20"><Container><div className="grid gap-10 lg:grid-cols-12 lg:items-center"><div className="lg:col-span-7"><p className="mb-5 text-xs font-black uppercase tracking-[0.24em]" style={{ color: accent.main }}>Primo intervento a {city}</p><h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.06em] text-slate-950 sm:text-8xl">Carroattrezzi<br /><span style={{ color: accent.main }}>a {city}</span></h1><p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">Un punto di riferimento per recuperare un’auto ferma, incidentata o impossibilitata a ripartire. Ti ascoltiamo, valutiamo il caso e concordiamo la soluzione più adatta.</p><div className="mt-8"><CallButton>Richiedi assistenza</CallButton></div></div><div className="lg:col-span-5"><div className="relative rotate-2 rounded-[2rem] bg-white p-3 shadow-2xl shadow-purple-950/10"><div className="h-[430px] overflow-hidden rounded-[1.5rem]"><HeroImage /></div><div className="absolute -bottom-5 -left-5 rounded-2xl bg-white p-5 shadow-xl"><p className="text-3xl font-black text-slate-950">30′</p><p className="text-xs font-bold uppercase tracking-wider text-slate-500">risposta chiara</p></div></div></div></div></Container></section>
  if (theme === 'transmit') return <section className="overflow-hidden bg-[#fff7ed] py-16 sm:py-24"><Container><div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch"><div className="flex flex-col justify-center"><p className="text-xs font-black uppercase tracking-[0.24em]" style={{ color: accent.main }}>Trasporto e recupero</p><h1 className="mt-5 text-5xl font-black tracking-[-0.05em] text-slate-950 sm:text-7xl">Carroattrezzi a {city}</h1><p className="mt-7 text-lg leading-8 text-slate-700">La priorità è togliere il veicolo dalla difficoltà e accompagnarti nella scelta della destinazione, con un intervento organizzato e comprensibile.</p><div className="mt-8"><CallButton>Chiama {site.phone}</CallButton></div></div><div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-slate-900"><HeroImage /><div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-slate-950/80 to-transparent" /><div className="absolute bottom-6 left-6 max-w-xs rounded-xl bg-white p-5"><p className="text-sm font-black text-slate-950">Un solo contatto.</p><p className="mt-1 text-sm leading-6 text-slate-600">La situazione viene raccolta e trasformata in un intervento concreto.</p></div></div></div></Container></section>
  if (theme === 'primer') return <section className="bg-white py-14 sm:py-20"><Container><div className="border-y border-sky-100 py-12"><div className="max-w-3xl"><span className="inline-flex rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.18em]" style={{ background: accent.soft, color: accent.ink }}>Servizio locale per {city}</span><h1 className="mt-7 text-5xl font-black tracking-[-0.05em] text-slate-950 sm:text-7xl">Carroattrezzi a {city}: assistenza quando il veicolo non riparte.</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">Guasto, incidente o batteria scarica: partiamo dalle informazioni essenziali e organizziamo il recupero con attenzione a sicurezza, accesso e destinazione.</p><div className="mt-8"><CallButton>Chiama per assistenza</CallButton></div></div></div><div className="mt-10 grid gap-4 sm:grid-cols-3"><div className="h-44 overflow-hidden rounded-2xl"><HeroImage /></div><div className="flex flex-col justify-center rounded-2xl p-6" style={{ background: accent.soft }}><p className="text-3xl font-black text-slate-950">H24</p><p className="mt-2 text-sm leading-6 text-slate-600">Per città, tangenziali e collegamenti provinciali.</p></div><div className="flex flex-col justify-center rounded-2xl border border-slate-200 p-6"><p className="text-3xl font-black text-slate-950">Chiaro</p><p className="mt-2 text-sm leading-6 text-slate-600">Prima definiamo cosa serve, poi interveniamo.</p></div></div></Container></section>
  if (theme === 'protocol') return <section className="bg-[#fff1f2] py-14 sm:py-20"><Container><div className="grid gap-12 lg:grid-cols-[0.35fr_0.65fr] lg:items-center"><div className="flex gap-5 lg:block"><div className="h-28 w-2 rounded-full" style={{ background: accent.main }} /><div><p className="text-xs font-black uppercase tracking-[0.25em]" style={{ color: accent.main }}>Intervento ordinato</p><p className="mt-4 text-sm font-semibold leading-7 text-slate-600">Posizione, mezzo e destinazione vengono chiariti prima di muovere il veicolo.</p></div></div><div><h1 className="max-w-4xl text-5xl font-black tracking-[-0.055em] text-slate-950 sm:text-7xl">Carroattrezzi a {city}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-slate-700">Quando succede un imprevisto, puoi contare su una richiesta gestita con precisione: raccogliamo il problema, valutiamo il recupero e ti accompagniamo fino alla soluzione.</p><div className="mt-8 flex flex-wrap gap-3"><CallButton>Chiama subito</CallButton><Link href="#servizi" className="inline-flex items-center rounded-xl border border-rose-200 px-5 py-3 text-sm font-bold text-slate-800">Vedi gli interventi</Link></div></div></div></Container></section>
  if (theme === 'pocket') return <section className="bg-slate-900 py-10 text-white sm:py-16"><Container><div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center"><div><div className="mb-8 flex items-center gap-3 text-sm font-bold text-slate-300"><span className="h-2 w-2 rounded-full" style={{ background: accent.main }} />Disponibili a {city}</div><h1 className="text-5xl font-black tracking-[-0.05em] sm:text-7xl">Carroattrezzi a {city}</h1><p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">Un contatto rapido per recuperare il tuo mezzo e toglierti da una situazione che non può aspettare.</p><div className="mt-8"><CallButton>Chiama ora</CallButton></div></div><div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-800 p-3"><div className="h-[390px] overflow-hidden rounded-[1.5rem]"><HeroImage /></div><div className="absolute right-7 top-7 rounded-full bg-white px-4 py-2 text-xs font-black text-slate-950">ASSISTENZA 24H</div></div></div></Container></section>
  if (theme === 'syntax') return <section className="bg-[#ecfdf5] py-14 sm:py-20"><Container><div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end"><div><p className="font-mono text-sm font-bold" style={{ color: accent.main }}>{`// intervento_locale: ${city.toLowerCase()}`}</p><h1 className="mt-5 max-w-3xl text-5xl font-black tracking-[-0.06em] text-slate-950 sm:text-8xl">Carroattrezzi a {city}</h1><p className="mt-7 max-w-xl text-lg leading-8 text-slate-700">La richiesta parte da una valutazione semplice: dove sei, quale mezzo è fermo e quale aiuto serve per ripartire o raggiungere l’officina.</p><div className="mt-8"><CallButton>Apri il contatto</CallButton></div></div><div className="rounded-2xl border border-emerald-200 bg-white p-3 shadow-xl shadow-emerald-900/10"><div className="h-[330px] overflow-hidden rounded-xl"><HeroImage /></div><p className="p-4 font-mono text-xs text-slate-500">status: assistenza pronta</p></div></div></Container></section>
  return <section className="bg-[#fffbeb] py-14 sm:py-20"><Container><div className="mx-auto max-w-5xl"><div className="grid gap-8 rounded-[2.5rem] border border-yellow-200 bg-white p-7 shadow-[0_22px_70px_rgba(120,53,15,0.12)] sm:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"><div><p className="text-xs font-black uppercase tracking-[0.25em]" style={{ color: accent.main }}>Centrale di soccorso {city}</p><h1 className="mt-6 text-5xl font-black tracking-[-0.055em] text-slate-950 sm:text-7xl">Carroattrezzi a {city}</h1><p className="mt-7 text-lg leading-8 text-slate-700">Se il tuo veicolo è fermo, ti aiutiamo a capire il prossimo passo e a organizzare il recupero in modo sicuro e trasparente.</p><div className="mt-8"><CallButton>Richiedi un intervento</CallButton></div></div><div className="h-[320px] overflow-hidden rounded-[2rem]"><HeroImage /></div></div></div></Container></section>
}

function ServiceGrid() {
  return <section id="servizi" className="bg-white py-20 sm:py-28"><Container><div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div className="max-w-2xl"><p className="text-xs font-black uppercase tracking-[0.24em]" style={{ color: accent.main }}>Interventi disponibili</p><h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-slate-950 sm:text-6xl">Il mezzo cambia, la cura resta la stessa.</h2></div><p className="max-w-sm text-base leading-7 text-slate-600">Scegli il servizio più vicino alla tua situazione. Nella pagina dedicata trovi indicazioni chiare e il contatto diretto.</p></div><div className={`mt-12 grid gap-5 ${theme === 'studio' || theme === 'pocket' ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}>{services.map((service, index) => <Link key={service.slug} href={`/servizi/${service.slug}/`} className={`group overflow-hidden border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl ${theme === 'protocol' ? 'rounded-none border-l-4' : theme === 'syntax' ? 'rounded-xl' : theme === 'spotlight' ? 'rounded-[2rem]' : 'rounded-2xl'}`} style={theme === 'protocol' ? { borderLeftColor: accent.main } : undefined}><div className="h-44 overflow-hidden bg-slate-100"><img src={`/images/services/${service.slug}.jpg`} alt={`${service.title} a ${site.city}`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div><div className="p-6"><div className="flex items-center justify-between gap-3"><span className="text-xs font-black" style={{ color: accent.main }}>0{index + 1}</span><span className="text-xs font-bold text-slate-400">Apri →</span></div><h3 className="mt-4 text-xl font-black text-slate-950">{service.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{service.text}</p></div></Link>)}</div></Container></section>
}

function LocalProof() {
  return <section id="urgenze" className="py-20 sm:py-28" style={{ background: accent.soft }}><Container><div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center"><div><p className="text-xs font-black uppercase tracking-[0.24em]" style={{ color: accent.main }}>Quando serve davvero</p><h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-slate-950 sm:text-6xl">Meno confusione, più controllo.</h2><p className="mt-6 text-lg leading-8 text-slate-700">Un veicolo fermo può bloccare una giornata intera. Per questo raccogliamo subito le informazioni che fanno la differenza e ti spieghiamo cosa succede dopo.</p><div className="mt-8"><CallButton>Parla con un incaricato</CallButton></div></div><div className="grid gap-4 sm:grid-cols-2"><div className="min-h-44 bg-white p-6 shadow-sm" style={{ borderRadius: theme === 'syntax' ? '0.75rem' : '1.5rem' }}><p className="text-3xl font-black text-slate-950">01</p><h3 className="mt-5 text-xl font-black text-slate-950">Ci dici dove sei</h3><p className="mt-2 text-sm leading-6 text-slate-600">Posizione e accessibilità aiutano a scegliere il mezzo adatto.</p></div><div className="min-h-44 bg-white p-6 shadow-sm" style={{ borderRadius: theme === 'syntax' ? '0.75rem' : '1.5rem' }}><p className="text-3xl font-black text-slate-950">02</p><h3 className="mt-5 text-xl font-black text-slate-950">Capisci cosa fare</h3><p className="mt-2 text-sm leading-6 text-slate-600">Ricevi indicazioni concrete su recupero, traino e destinazione.</p></div></div></div></Container></section>
}

function Zones() {
  return <section id="zone" className="bg-slate-950 py-20 text-white sm:py-28"><Container><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"><div><p className="text-xs font-black uppercase tracking-[0.24em]" style={{ color: '#fbbf24' }}>Dove interveniamo</p><h2 className="mt-4 text-4xl font-black tracking-[-0.045em] sm:text-6xl">{site.city} e i comuni vicini.</h2><p className="mt-6 max-w-md text-lg leading-8 text-slate-300">Il servizio copre la città, le strade di collegamento e le principali località della provincia.</p></div><div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">{zones.map((zone, index) => <Link key={zone.slug} href={`/zone/${zone.slug}/`} className="group flex items-center justify-between border-b border-white/15 py-4 text-base font-bold text-white transition hover:border-white"><span>{zone.name}</span><span className="text-slate-500 transition group-hover:text-white">↗</span></Link>)}</div></div></Container></section>
}

function Faqs() {
  return <section id="faq" className="bg-white py-20 sm:py-28"><Container><div className="mx-auto max-w-3xl"><p className="text-center text-xs font-black uppercase tracking-[0.24em]" style={{ color: accent.main }}>Domande frequenti</p><h2 className="mt-4 text-center text-4xl font-black tracking-[-0.045em] text-slate-950 sm:text-6xl">Prima di chiamare, ecco cosa sapere.</h2><div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">{faqs.map((faq) => <details key={faq.question} className="group py-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-black text-slate-950"><span>{faq.question}</span><span className="text-2xl font-normal text-slate-400 transition group-open:rotate-45">+</span></summary><p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">{faq.answer}</p></details>)}</div></div></Container></section>
}

function StatsBand() {
  return <section className="border-y border-slate-200 bg-white py-10"><Container className="grid gap-6 sm:grid-cols-3"><div><p className="text-4xl font-black text-slate-950">24H</p><p className="mt-2 text-sm leading-6 text-slate-600">Una disponibilità organizzata per richieste urgenti, anche quando la giornata è già finita.</p></div><div><p className="text-4xl font-black text-slate-950">1 contatto</p><p className="mt-2 text-sm leading-6 text-slate-600">Raccogliamo i dettagli essenziali e ti aiutiamo a evitare telefonate ripetute.</p></div><div><p className="text-4xl font-black text-slate-950">Locale</p><p className="mt-2 text-sm leading-6 text-slate-600">Conosciamo strade, accessi e collegamenti della zona in cui ti trovi.</p></div></Container></section>
}

function ProcessStrip() {
  return <section className="bg-slate-950 py-20 text-white"><Container><div className="grid gap-8 lg:grid-cols-3">{[['01', 'Raccogliamo', 'Posizione, veicolo e problema vengono messi a fuoco senza farti perdere tempo.'], ['02', 'Valutiamo', 'Capienza, accessi, sicurezza e destinazione indicano il mezzo più adatto.'], ['03', 'Organizziamo', 'Il recupero viene concordato con passaggi chiari e una destinazione precisa.']].map(([number, title, text]) => <div key={number} className="border-t border-white/20 pt-6"><p className="text-sm font-black text-white/50">{number}</p><h2 className="mt-8 text-2xl font-black">{title}</h2><p className="mt-3 text-base leading-7 text-slate-300">{text}</p></div>)}</div></Container></section>
}

function ServicesFeatureList() {
  return <section id="servizi" className="bg-white py-20 sm:py-28"><Container><div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr]"><div className="lg:sticky lg:top-32 lg:self-start"><p className="text-xs font-black uppercase tracking-[0.24em]" style={{ color: accent.main }}>Servizi disponibili</p><h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-slate-950 sm:text-6xl">Ogni fermo ha la sua soluzione.</h2><p className="mt-6 text-lg leading-8 text-slate-600">Dalla batteria scarica al recupero dopo un incidente, trovi un intervento descritto con parole semplici e collegato direttamente alla richiesta.</p></div><div className="divide-y divide-slate-200 border-y border-slate-200">{services.map((service, index) => <Link key={service.slug} href={`/servizi/${service.slug}/`} className="group grid gap-4 py-7 transition hover:px-4 sm:grid-cols-[4rem_1fr_auto] sm:items-center"><span className="text-sm font-black" style={{ color: accent.main }}>0{index + 1}</span><span><strong className="block text-xl font-black text-slate-950">{service.title}</strong><span className="mt-2 block max-w-2xl text-sm leading-6 text-slate-600">{service.text}</span></span><span className="text-xl text-slate-400 transition group-hover:translate-x-1" style={{ color: accent.main }}>→</span></Link>)}</div></div></Container></section>
}

function ZonesPanel() {
  return <section id="zone" className="bg-slate-50 py-20 sm:py-28"><Container><div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start"><div className="rounded-[2rem] p-8" style={{ background: accent.soft }}><p className="text-xs font-black uppercase tracking-[0.24em]" style={{ color: accent.main }}>Presenza locale</p><h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-slate-950">{site.city} non è un punto generico sulla mappa.</h2><p className="mt-6 text-lg leading-8 text-slate-700">La posizione, la strada e il modo in cui il veicolo è fermo cambiano il recupero. Per questo ogni zona ha una pagina dedicata, con indicazioni utili e un contatto immediato.</p></div><div className="grid gap-3 sm:grid-cols-2">{zones.map((zone) => <Link key={zone.slug} href={`/zone/${zone.slug}/`} className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm font-black text-slate-900 transition hover:-translate-y-0.5 hover:shadow-lg"><span>{zone.name}</span><span style={{ color: accent.main }}>↗</span></Link>)}</div></div></Container></section>
}

function FinalCta() {
  return <section className="py-20 sm:py-28" style={{ background: accent.main }}><Container className="text-center"><h2 className="text-4xl font-black tracking-[-0.04em] text-white sm:text-6xl">Il tuo veicolo è fermo?</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">Raccontaci cosa è successo: troviamo insieme il modo più ordinato per rimetterti in movimento, con indicazioni chiare e una destinazione concordata.</p><div className="mt-8"><CallButton outline>Chiama {site.phone}</CallButton></div></Container></section>
}

function ContentFlow() {
  switch (theme) {
    case 'studio':
      return <><ProcessStrip /><ServiceGrid /><ZonesPanel /><Faqs /><FinalCta /></>
    case 'keynote':
      return <><ServiceGrid /><StatsBand /><LocalProof /><Zones /><Faqs /><FinalCta /></>
    case 'spotlight':
      return <><StatsBand /><ZonesPanel /><ServicesFeatureList /><Faqs /><FinalCta /></>
    case 'transmit':
      return <><ProcessStrip /><ServicesFeatureList /><Zones /><Faqs /><LocalProof /><FinalCta /></>
    case 'primer':
      return <><ServicesFeatureList /><LocalProof /><Faqs /><ZonesPanel /><FinalCta /></>
    case 'protocol':
      return <><ZonesPanel /><ProcessStrip /><ServiceGrid /><Faqs /><FinalCta /></>
    case 'pocket':
      return <><ServiceGrid /><Zones /><ProcessStrip /><Faqs /><FinalCta /></>
    case 'syntax':
      return <><StatsBand /><ProcessStrip /><ServicesFeatureList /><Faqs /><ZonesPanel /><FinalCta /></>
    case 'catalyst':
      return <><Zones /><ServiceGrid /><LocalProof /><StatsBand /><Faqs /><FinalCta /></>
    default:
      return <><LocalProof /><ServiceGrid /><Zones /><Faqs /><FinalCta /></>
  }
}

function Footer() {
  return <footer className="border-t border-slate-200 bg-white py-10"><Container className="flex flex-col justify-between gap-6 text-sm text-slate-500 sm:flex-row sm:items-end"><div><p className="font-black text-slate-950">{site.name}</p><p className="mt-2">{site.address}</p><p className="mt-1">{site.email}</p></div><div className="sm:text-right"><Link href={`tel:${site.tel}`} className="font-black" style={{ color: accent.main }}>{site.phone}</Link><p className="mt-2">Servizio attivo 24 ore su 24</p></div></Container></footer>
}

function JsonLd() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': ['LocalBusiness', 'AutomotiveBusiness'], name: site.name, url: `https://${site.domain}`, telephone: site.tel, email: site.email, address: { '@type': 'PostalAddress', streetAddress: site.address, addressLocality: site.city, addressCountry: 'IT' }, areaServed: [site.city, ...zones.map((zone) => zone.name)], openingHours: 'Mo-Su 00:00-23:59' }) }} />
}

export default function TailAwesomeHome() {
  return <div data-template={theme} className="site-shell"><JsonLd /><Header /><main><Hero /><ContentFlow /></main><Footer /><Link href={`tel:${site.tel}`} className="fixed bottom-4 right-4 z-40 rounded-full px-5 py-3 text-sm font-black text-white shadow-xl" style={{ background: accent.main }}>Chiama</Link><ConsentBanner /></div>
}

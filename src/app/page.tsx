import Link from 'next/link'

import { Container } from '@/components/Container'
import { ConsentBanner } from '@/components/ConsentBanner'
import { faqs, services, site, zones } from '@/data/site'

function Brand() {
  return (
    <Link href="/" className="flex min-w-0 items-center">
      <img
        src="/logo.svg"
        alt="Carroattrezzi Pescara"
        className="h-16 w-auto max-w-[290px] object-contain sm:h-20 sm:max-w-[420px] lg:h-24"
      />
    </Link>
  )
}

function PhoneLink({
  className = '',
  children = `Chiama ${site.phone}`,
}: {
  className?: string
  children?: React.ReactNode
}) {
  return (
    <Link
      href={`tel:${site.tel}`}
      className={`inline-flex items-center justify-center rounded-full bg-[#16A34A] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-900/20 transition hover:bg-[#166534] ${className}`}
    >
      {children}
    </Link>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <Container className="flex min-h-20 items-center justify-between gap-6">
        <Brand />
        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 lg:flex">
          <a href="#urgenze" className="hover:text-[#16A34A]">
            Urgenze
          </a>
          <a href="#servizi" className="hover:text-[#16A34A]">
            Servizi
          </a>
          <a href="#zone" className="hover:text-[#16A34A]">
            Zone
          </a>
          <a href="#faq" className="hover:text-[#16A34A]">
            Domande
          </a>
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <PhoneLink className="py-2.5" />
        </div>
        <PhoneLink className="px-5 lg:hidden">Chiama</PhoneLink>
      </Container>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F0FDF4]">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-white lg:block" />
      <Container className="relative grid gap-8 pb-16 pt-12 lg:grid-cols-[0.62fr_1.38fr] lg:items-stretch lg:pb-24 lg:pt-20">
        <div className="flex flex-col justify-between rounded-[2rem] bg-white p-8 shadow-xl shadow-orange-950/10 ring-1 ring-orange-100 lg:p-10">
          <div>
            <p className="inline-flex rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-[#166534] ring-1 ring-orange-200">
              Centrale operativa locale per veicoli fermi
            </p>
            <h1 className="mt-7 font-display text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl">
              Carroattrezzi a Pescara
            </h1>
            <div className="mt-7 space-y-5 text-lg leading-8 text-slate-700">
              <p>
                Quando un’auto si blocca, non hai bisogno di una risposta
                qualsiasi. Hai bisogno di qualcuno che capisca subito dove sei,
                che ti dica cosa comunicare e che organizzi il recupero senza
                farti perdere lucidità. Il servizio di <strong>carroattrezzi a Pescara</strong> è
                pensato per gestire guasti, incidenti, veicoli in panne e
                trasporti programmati con una procedura chiara.
              </p>
              <p>
                Lavoriamo su Pescara, sulle strade di collegamento, nelle zone
                industriali e nei comuni vicini. Prima di partire definiamo
                posizione, mezzo, problema e destinazione: così sai già cosa
                succede e puoi scegliere con più serenità anche quando la
                situazione è urgente.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PhoneLink />
          </div>
        </div>

        <div className="relative min-h-[660px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 p-6 shadow-2xl shadow-slate-950/20">
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-orange-500/25 to-transparent" />
          <img
            src="/images/home-hero.jpg"
            alt="Tecnico del carroattrezzi a Pescara con mezzo di soccorso"
            className="absolute bottom-0 right-[-1%] z-10 w-[98%] max-w-none object-contain lg:right-0"
          />
          <div className="relative z-20 max-w-xs rounded-3xl border border-white/15 bg-white/12 p-5 text-white backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-200">
              Pescara e provincia
            </p>
            <p className="mt-3 font-display text-3xl font-bold">
              Traino, recupero e assistenza 24H.
            </p>
          </div>
          <div className="absolute bottom-6 left-6 right-6 z-20 grid gap-3 sm:grid-cols-3">
            {[
              ['24H', 'urgenze'],
              ['12', 'servizi'],
              ['PE', 'zona locale'],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/20 bg-white/90 p-4"
              >
                <p className="font-display text-3xl font-bold text-[#16A34A]">
                  {value}
                </p>
                <p className="mt-1 text-sm font-medium text-slate-700">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

function SectionTitle({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#16A34A]">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
        {title}
      </h2>
      <div className="mt-5 space-y-4 text-lg leading-8 text-slate-700">
        {children}
      </div>
    </div>
  )
}

function Urgencies() {
  return (
    <section id="urgenze" className="bg-white py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {services.slice(0, 4).map((service, index) => (
              <Link
                key={service.slug}
                href={`/servizi/${service.slug}/`}
                className={`group overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-950/10 ${
                  index % 2 ? 'md:translate-y-8' : ''
                }`}
              >
                <img
                  src={`/images/services/${service.slug}.jpg`}
                  alt={`${service.title} a Pescara`}
                  className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="p-5">
                  <p className="font-semibold text-slate-950">
                    {service.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {service.text}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <SectionTitle
            eyebrow="quando chiamare"
            title="Un intervento serio si riconosce prima dell’arrivo."
          >
            <p>
              La differenza non è solo il carroattrezzi: è il modo in cui viene
              gestita la richiesta. Ti chiediamo le informazioni giuste, ti
              aiutiamo a capire se il mezzo può restare dov’è e concordiamo dove
              portarlo.
            </p>
            <p>
              Questo approccio evita confusione, riduce i tempi morti e rende
              più semplice prendere decisioni anche quando il guasto arriva nel
              momento peggiore.
            </p>
            <PhoneLink className="mt-4" />
          </SectionTitle>
        </div>
      </Container>
    </section>
  )
}

function Services() {
  return (
    <section id="servizi" className="bg-slate-50 py-24">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionTitle eyebrow="servizi" title="Soluzioni diverse per problemi diversi.">
            <p>
              Un’auto in panne, una moto da caricare, un furgone fermo o un
              veicolo incidentato richiedono attenzioni diverse. Per questo ogni
              richiesta viene valutata in base a mezzo, posizione, accessi e
              destinazione.
            </p>
            <p>
              L’obiettivo è offrirti un servizio pulito: poche parole inutili,
              informazioni chiare e un recupero eseguito con cura.
            </p>
          </SectionTitle>
          <PhoneLink />
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/servizi/${service.slug}/`}
              className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-950/10"
            >
              <img
                src={`/images/services/${service.slug}.jpg`}
                alt={`${service.title} a Pescara`}
                className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-slate-950">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  {service.text}
                </p>
                <span className="mt-5 inline-flex text-sm font-semibold text-[#16A34A]">
                  Apri servizio
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Zones() {
  return (
    <section id="zone" className="bg-white py-24">
      <Container>
        <SectionTitle eyebrow="zone servite" title="Pescara e comuni vicini, con assistenza organizzata.">
          <p>
            Interveniamo in città, nelle aree produttive, lungo le strade
            provinciali e nei comuni vicini. In ogni zona il metodo resta lo
            stesso: posizione precisa, destinazione concordata e gestione
            ordinata del mezzo.
          </p>
          <p>
            Se sei in un parcheggio privato, vicino a un’officina, su una
            strada periferica o fuori paese, ti aiutiamo a comunicare i dati
            utili per preparare l’intervento nel modo più corretto.
          </p>
        </SectionTitle>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {zones.map((zone) => (
            <Link
              key={zone.slug}
              href={`/zone/${zone.slug}/`}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-orange-950/10"
            >
              <img
                src={`/images/zones/${zone.slug}.jpg`}
                alt={`${zone.title} - soccorso stradale locale`}
                className="h-36 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="block px-5 py-4 font-semibold text-slate-900">
                {zone.title}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}

function WhyAndPricing() {
  return (
    <section id="prezzi" className="bg-[#1F2937] py-24 text-white">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr_0.9fr]">
          <div className="rounded-[2rem] bg-white p-8 text-slate-900">
            <h2 className="font-display text-3xl font-bold">
              Perché scegliere noi
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-6 text-slate-700">
              <p>
                <strong>Risposta concreta:</strong> non ti lasciamo con dubbi
                sul da farsi, soprattutto quando sei fermo in strada.
              </p>
              <p>
                <strong>Destinazione concordata:</strong> officina, carrozzeria,
                deposito o indirizzo scelto da te prima del recupero.
              </p>
              <p>
                <strong>Gestione ordinata:</strong> valutiamo accessi, mezzo e
                condizioni prima di muoverci, così l’intervento è più preciso.
              </p>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8">
            <h2 className="font-display text-3xl font-bold">
              Processo in 3 passaggi
            </h2>
            <ol className="mt-6 space-y-5">
              {[
                ['Capire', 'Raccogliamo posizione, problema e tipo di veicolo.'],
                ['Concordare', 'Definiamo destinazione, accessi e priorità.'],
                ['Recuperare', 'Gestiamo carico, traino o trasporto con cura.'],
              ].map(([title, text], index) => (
                <li key={title} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#16A34A] text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <span>
                    <strong className="block">{title}</strong>
                    <span className="text-sm text-slate-200">{text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-[2rem] bg-[#16A34A] p-8 text-white">
            <h2 className="font-display text-3xl font-bold">Prezzi chiari</h2>
            <p className="mt-5 text-sm leading-6 text-orange-50">
              Il costo dipende da distanza, tipo di mezzo, condizioni di
              recupero e destinazione. Prima di partire raccogliamo i dettagli
              utili per darti un’indicazione sensata e ridurre le sorprese.
            </p>
          <Link
            href={`tel:${site.tel}`}
            className="mt-7 inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/15 transition hover:bg-slate-800"
          >
            Chiama {site.phone}
          </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

function Faqs() {
  return (
    <section id="faq" className="bg-white py-24">
      <Container>
        <SectionTitle eyebrow="domande frequenti" title="Risposte semplici quando il veicolo è fermo.">
          <p>
            Prima di scegliere un carroattrezzi vuoi capire tempi, destinazione,
            prezzo e modalità di intervento. Qui trovi le risposte più utili per
            decidere rapidamente.
          </p>
        </SectionTitle>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
            >
              <h3 className="font-display text-xl font-bold text-slate-950">
                {faq.question}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function FinalCta() {
  return (
    <section className="bg-[#F0FDF4] py-20">
      <Container className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-950/20 lg:flex lg:items-center lg:justify-between lg:p-12">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-orange-300">
            intervento rapido
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold">
            Veicolo fermo a Pescara?
          </h2>
          <p className="mt-4 max-w-2xl text-slate-200">
            Chiama e comunica posizione, tipo di mezzo e destinazione. Ti
            aiutiamo a organizzare il recupero con una procedura chiara e un
            tono pratico, senza complicare una situazione già scomoda.
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
          <Link
            href={`tel:${site.tel}`}
            className="inline-flex items-center justify-center rounded-full bg-[#16A34A] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-900/30 transition hover:bg-[#166534]"
          >
            Chiama {site.phone}
          </Link>
        </div>
      </Container>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-white py-12">
      <Container>
        <div className="grid gap-10 border-t border-slate-200 pt-10 lg:grid-cols-4">
          <div>
            <Brand />
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Soccorso stradale, traino e recupero veicoli a Pescara e
              provincia.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-950">Contatti</h3>
            <div className="mt-3 space-y-2 text-sm text-slate-600">
              <p>{site.address}</p>
              <p>
                <Link href={`tel:${site.tel}`}>{site.phone}</Link>
              </p>
              <p>
                <Link href={`mailto:${site.email}`}>{site.email}</Link>
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-slate-950">Servizi</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {services.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link href={`/servizi/${service.slug}/`}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-950">Zone</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {zones.slice(0, 5).map((zone) => (
                <li key={zone.slug}>
                  <Link href={`/zone/${zone.slug}/`}>{zone.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-10 text-sm text-slate-500">
          Â© 2026 {site.domain}. Tutti i diritti riservati.
        </p>
      </Container>
    </footer>
  )
}

function StickyCall() {
  return (
    <Link
      href={`tel:${site.tel}`}
      className="fixed bottom-4 right-4 z-40 inline-flex items-center justify-center rounded-full bg-[#16A34A] px-4 py-3 text-xs font-bold text-white shadow-2xl shadow-orange-950/30 ring-1 ring-white/40 transition hover:bg-[#166534] sm:px-5 sm:text-sm"
    >
      Chiama
    </Link>
  )
}

function JsonLd() {
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'AutomotiveBusiness'],
      name: site.name,
      url: `https://${site.domain}`,
      telephone: site.tel,
      email: site.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Via Toscana, 15',
        postalCode: '29122',
        addressLocality: site.city,
        addressRegion: 'PE',
        addressCountry: 'IT',
      },
      areaServed: [site.city, ...zones.map((zone) => zone.name)],
      openingHours: 'Mo-Su 00:00-23:59',
    },
    ...services.map((service) => ({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `${service.title} a Pescara`,
      provider: { '@type': 'AutomotiveBusiness', name: site.name },
      areaServed: site.city,
      url: `https://${site.domain}/servizi/${service.slug}/`,
    })),
  ]

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function Home() {
  return (
    <div data-template={site.template} className="site-shell">
      <JsonLd />
      <Header />
      <main className="template-home">
        <Hero />
        <Services />
        <Zones />
        <Urgencies />
        <Faqs />
        <WhyAndPricing />
        <FinalCta />
      </main>
      <Footer />
      <StickyCall />
      <ConsentBanner />
    </div>
  )
}


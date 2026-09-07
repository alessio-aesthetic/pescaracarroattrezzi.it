import Link from 'next/link'

import { ConsentBanner } from '@/components/ConsentBanner'
import { PescaraReveal } from '@/components/PescaraReveal'
import { faqs, services, site, zones } from '@/data/site'
import styles from './PescaraSignatureHome.module.css'

const method = [
  {
    number: '01',
    title: 'Racconta dove ti trovi',
    text: 'Un riferimento visibile, il tipo di strada e il veicolo fermo sono sufficienti per iniziare bene.',
    image: '/images/method-position.jpg',
  },
  {
    number: '02',
    title: 'Prepariamo il recupero',
    text: 'Valutiamo accesso, condizioni del mezzo e ciò che serve per caricarlo con la cura necessaria.',
    image: '/images/method-recovery.jpg',
  },
  {
    number: '03',
    title: 'Decidi la destinazione',
    text: 'Officina, carrozzeria, abitazione o deposito: il veicolo parte già con una direzione chiara.',
    image: '/images/method-destination.jpg',
  },
]

const stories = [
  {
    index: 'A',
    title: 'La calma è parte dell’intervento',
    text: 'Quando un’auto si ferma, il problema non è mai soltanto meccanico. C’è un appuntamento da raggiungere, un rientro da organizzare, una strada che diventa improvvisamente troppo lunga. Per questo partiamo da una conversazione semplice, senza frasi fatte: ascoltiamo cosa sta succedendo e trasformiamo l’imprevisto in una sequenza di passaggi chiari.',
  },
  {
    index: 'B',
    title: 'Ogni mezzo richiede un’attenzione diversa',
    text: 'Una moto, un’utilitaria, un SUV o un furgone non si recuperano allo stesso modo. Dalla prima chiamata raccogliamo i dettagli che servono davvero: condizioni del mezzo, accessibilità del punto, eventuali danni e destinazione. È il modo più serio per evitare improvvisazioni e trattare il veicolo con rispetto.',
  },
  {
    index: 'C',
    title: 'Pescara ha strade, ritmi e imprevisti diversi',
    text: 'Dalla Riviera alla Tiburtina, dai quartieri residenziali ai collegamenti verso l’interno, cambia il traffico, cambiano gli spazi e cambia il contesto in cui il veicolo deve essere raggiunto. Una posizione precisa e un racconto onesto della situazione ci permettono di costruire un intervento più lineare fin dal primo momento.',
  },
]

function phoneHref() {
  return `tel:${site.tel}`
}

function CallButton({ compact = false }: { compact?: boolean }) {
  return (
    <Link href={phoneHref()} className={compact ? styles.headerCall : styles.callButton}>
      <span>Chiama ora</span>
      <span className={styles.callDivider} />
      <strong>{site.phone}</strong>
    </Link>
  )
}

export default function PescaraSignatureHome() {
  const faqItems = faqs as unknown as Array<{ question: string; answer: string }>
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'AutomotiveBusiness'],
      name: site.name,
      url: `https://${site.domain}`,
      telephone: site.tel,
      email: site.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: site.address,
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
      name: `${service.title} a ${site.city}`,
      provider: { '@type': 'AutomotiveBusiness', name: site.name },
      areaServed: site.city,
      url: `https://${site.domain}/servizi/${service.slug}/`,
    })),
  ]

  return (
    <main className={styles.siteShell}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.brand} aria-label={site.name}>
            <img src="/images/brand-pescara.png" alt="" />
            <span>Carroattrezzi <b>Pescara</b></span>
          </Link>
          <nav className={styles.navigation} aria-label="Navigazione principale">
            <a href="#metodo">Il metodo</a>
            <a href="#servizi">Interventi</a>
            <a href="#territorio">Territorio</a>
            <a href="#domande">Domande</a>
          </nav>
          <CallButton compact />
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroGrain} />
        <div className={styles.heroLines} aria-hidden="true"><span /><span /><span /></div>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <PescaraReveal>
              <p className={styles.eyebrow}><span /> Soccorso stradale operativo</p>
            </PescaraReveal>
            <PescaraReveal delay={80}>
              <h1>Carroattrezzi<br /><em>a Pescara.</em></h1>
            </PescaraReveal>
            <PescaraReveal delay={160}>
              <p className={styles.heroLead}>Un intervento ben organizzato comincia con una risposta chiara. Per <strong>auto, moto e furgoni fermi</strong>, ti aiutiamo a rimettere ordine nella situazione e a portare il mezzo dove serve.</p>
            </PescaraReveal>
            <PescaraReveal delay={240} className={styles.heroActions}>
              <CallButton />
              <a className={styles.textLink} href="#metodo">Come interveniamo <span>→</span></a>
            </PescaraReveal>
            <PescaraReveal delay={320} className={styles.heroFootnotes}>
              <span><b>24H</b> per le urgenze</span>
              <span><b>1</b> contatto diretto</span>
              <span><b>0</b> passaggi inutili</span>
            </PescaraReveal>
          </div>

          <PescaraReveal delay={180} className={styles.heroVisual}>
            <div className={styles.imageFrame}>
              <img src="/images/hero-pescara-original.jpg" alt="Carroattrezzi in intervento sulla costa di Pescara" />
              <span className={styles.imageWash} />
              <div className={styles.imageLabel}><span>Centro operativo</span><strong>Pescara</strong></div>
            </div>
            <div className={styles.signalOrb} aria-hidden="true"><i /><i /><i /></div>
            <div className={styles.heroStamp} aria-hidden="true"><span>RECUPERO</span><b>24</b><span>ORE</span></div>
          </PescaraReveal>
        </div>
        <div className={styles.heroMarquee} aria-hidden="true">
          <div>CARROATTREZZI · PESCARA · SOCCORSO STRADALE · PESCARA · CARROATTREZZI · PESCARA · SOCCORSO STRADALE · PESCARA · </div>
        </div>
      </section>

      <section className={styles.signalBand}>
        <PescaraReveal className={styles.signalBandInner}>
          <p>Un veicolo fermo non deve trasformarsi in una giornata ferma.</p>
          <div><span>Posizione</span><i /> <span>Mezzo</span><i /> <span>Destinazione</span></div>
        </PescaraReveal>
      </section>

      <section id="metodo" className={styles.methodSection}>
        <div className={styles.sectionIntro}>
          <PescaraReveal>
            <p className={styles.kicker}>Un metodo che lascia spazio alla lucidità</p>
            <h2>Quando serve aiuto,<br />la chiarezza <em>vale tempo.</em></h2>
          </PescaraReveal>
          <PescaraReveal delay={120}>
            <p className={styles.sectionLead}>Non chiediamo spiegazioni complicate. Ci interessano le informazioni che rendono possibile un recupero ben fatto: dove si trova il mezzo, in che condizioni è e dove deve arrivare.</p>
          </PescaraReveal>
        </div>

        <div className={styles.methodRail}>
          {method.map((item, index) => (
            <PescaraReveal className={styles.methodCard} delay={index * 80} key={item.number}>
              <div className={styles.methodImage}><img src={item.image} alt={item.title} /><span>{item.number}</span></div>
              <div className={styles.methodContent}>
                <p>Passaggio {item.number}</p>
                <h3>{item.title}</h3>
                <p className={styles.methodText}>{item.text}</p>
              </div>
            </PescaraReveal>
          ))}
        </div>
      </section>

      <section className={styles.editorialSection}>
        <div className={styles.editorialVisual}>
          <PescaraReveal className={styles.editorialImagePrimary}>
            <img src="/images/story-4.jpg" alt="Tecnico durante un recupero auto a Pescara" />
          </PescaraReveal>
          <PescaraReveal delay={160} className={styles.editorialImageSecondary}>
            <img src="/images/story-3.jpg" alt="Carroattrezzi pronto a ripartire" />
          </PescaraReveal>
          <div className={styles.editorialMarker} aria-hidden="true"><span>01</span><i /></div>
        </div>
        <div className={styles.editorialCopy}>
          <PescaraReveal>
            <p className={styles.kicker}>Una presenza concreta sul territorio</p>
            <h2>Prima del carico,<br />c’è <em>una scelta da fare bene.</em></h2>
          </PescaraReveal>
          <PescaraReveal delay={120}>
            <p>Un carroattrezzi non è soltanto il mezzo che arriva alla fine. È la parte più visibile di un’organizzazione che deve saper ascoltare, valutare e decidere in pochi istanti. <strong>La qualità dell’intervento si vede nei dettagli:</strong> dalla telefonata iniziale al modo in cui il veicolo viene consegnato.</p>
            <p>Per questo il contatto resta diretto. Racconti l’essenziale, individuiamo il passo utile e concordiamo insieme una destinazione. Niente giri di parole, niente promesse automatiche: soltanto un percorso ordinato per riportarti in movimento.</p>
          </PescaraReveal>
          <PescaraReveal delay={200}><CallButton /></PescaraReveal>
        </div>
      </section>

      <section id="servizi" className={styles.servicesSection}>
        <div className={styles.servicesHeading}>
          <PescaraReveal>
            <p className={styles.kicker}>Interventi studiati per la situazione reale</p>
            <h2>Non esiste un fermo<br />veicolo <em>uguale a un altro.</em></h2>
          </PescaraReveal>
          <PescaraReveal delay={100}><p>Ogni intervento parte da una domanda precisa: di cosa ha bisogno il mezzo, qui e ora? Le pagine dedicate approfondiscono le diverse situazioni, con indicazioni utili prima della chiamata.</p></PescaraReveal>
        </div>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <PescaraReveal className={styles.serviceCard} delay={(index % 3) * 70} key={service.slug}>
              <Link href={`/servizi/${service.slug}/`}>
                <div className={styles.serviceMedia}>
                  <img src={`/images/services/${service.slug}.jpg`} alt={`${service.title} a Pescara`} />
                  <span>0{index + 1}</span>
                </div>
                <div className={styles.serviceContent}>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <b>Scopri l’intervento <i>→</i></b>
                </div>
              </Link>
            </PescaraReveal>
          ))}
        </div>
      </section>

      <section className={styles.storiesSection}>
        <div className={styles.storiesTopline}><span>La differenza sta nel modo in cui si comincia</span><i /></div>
        <div className={styles.storiesGrid}>
          {stories.map((story, index) => (
            <PescaraReveal className={styles.story} delay={index * 100} key={story.index}>
              <span>{story.index}</span>
              <h3>{story.title}</h3>
              <p>{story.text}</p>
            </PescaraReveal>
          ))}
        </div>
      </section>

      <section id="territorio" className={styles.territorySection}>
        <div className={styles.territoryBackdrop} aria-hidden="true">PESCARA</div>
        <div className={styles.territoryIntro}>
          <PescaraReveal>
            <p className={styles.kicker}>Pescara e comuni vicini</p>
            <h2>Vicino al punto<br />in cui <em>serve arrivare.</em></h2>
          </PescaraReveal>
          <PescaraReveal delay={100}><p>La richiesta può arrivare dal centro, dalla costa, dalle zone industriali o dai collegamenti verso la provincia. Ogni località ha la sua pagina dedicata per aiutarti a preparare le informazioni utili prima del contatto.</p></PescaraReveal>
        </div>
        <div className={styles.zoneList}>
          {zones.map((zone, index) => (
            <PescaraReveal delay={(index % 4) * 50} key={zone.slug}>
              <Link href={`/zone/${zone.slug}/`}><span>0{index + 1}</span><strong>{zone.name}</strong><i>↗</i></Link>
            </PescaraReveal>
          ))}
        </div>
      </section>

      <section id="domande" className={styles.faqSection}>
        <div className={styles.faqHeading}>
          <PescaraReveal>
            <p className={styles.kicker}>Risposte utili</p>
            <h2>Le domande che<br /><em>semplificano la chiamata.</em></h2>
          </PescaraReveal>
        </div>
        <PescaraReveal delay={100} className={styles.faqList}>
          {faqItems.map((faq, index) => (
            <details key={faq.question}>
              <summary><span>0{index + 1}</span><strong>{faq.question}</strong><i>+</i></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </PescaraReveal>
      </section>

      <section className={styles.finalCta}>
        <div className={styles.finalGlow} aria-hidden="true" />
        <PescaraReveal className={styles.finalInner}>
          <p>Veicolo fermo?</p>
          <h2>Una telefonata può<br />rimettere <em>tutto in ordine.</em></h2>
          <div><CallButton /><span>Comunica posizione, mezzo e destinazione.<br />Da qui, organizziamo il prossimo passaggio.</span></div>
        </PescaraReveal>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div><div className={styles.footerBrand}><img src="/images/brand-pescara.png" alt="" /><span>Carroattrezzi <b>Pescara</b></span></div><p>Soccorso stradale, recupero e trasporto veicoli con una comunicazione chiara, quando serve davvero.</p></div>
          <div className={styles.footerDetails}><p>{site.address}</p><a href={`mailto:${site.email}`}>{site.email}</a><a href={phoneHref()}>{site.phone}</a></div>
          <p className={styles.footerTag}>Pescara<br />e provincia</p>
        </div>
      </footer>

      <a className={styles.mobileCall} href={phoneHref()}><span>Assistenza 24H</span><strong>Chiama {site.phone}</strong></a>
      <ConsentBanner />
    </main>
  )
}

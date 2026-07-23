import { type Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Container } from '@/components/Container'
import { services, site, zones } from '@/data/site'

export function generateStaticParams() {
  return zones.map((zone) => ({ slug: zone.slug }))
}

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const zone = zones.find((item) => item.slug === params.slug)
  if (!zone) return {}
  return {
    title: { absolute: zone.title },
    description: `${zone.title}: soccorso stradale, traino auto e recupero veicoli con assistenza chiara e destinazione concordata.`,
    alternates: { canonical: `/zone/${zone.slug}/` },
  }
}

export default function ZonePage({ params }: { params: { slug: string } }) {
  const zone = zones.find((item) => item.slug === params.slug)
  if (!zone) notFound()

  return (
    <main className="bg-white">
      <section className="bg-[#F0FDF4] py-16">
        <Container>
          <div className="grid overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-orange-950/10 ring-1 ring-orange-100 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="p-8 lg:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#16A34A]">
                zona servita
              </p>
              <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold tracking-tight text-slate-950">
                {zone.title}
              </h1>
              <div className="mt-6 space-y-5 text-lg leading-8 text-slate-700">
                <p>
                  Il servizio di <strong>carroattrezzi a {zone.name}</strong> è
                  pensato per chi ha un mezzo fermo e vuole una gestione
                  semplice: chiamata chiara, destinazione concordata e recupero
                  organizzato con attenzione.
                </p>
                <p>
                  Interveniamo per auto in panne, incidenti, moto da caricare,
                  furgoni leggeri e trasporti verso officine o carrozzerie della
                  zona di Pescara. Anche quando il veicolo si trova in un
                  parcheggio privato, in una strada secondaria o vicino a
                  un’area produttiva, valutiamo gli accessi prima di muoverci.
                </p>
                <p>
                  A {zone.name} la rapidità conta, ma conta anche il modo in cui
                  viene eseguito il servizio. Ti aiutiamo a comunicare le
                  informazioni giuste e a decidere dove portare il mezzo senza
                  pressioni inutili.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`tel:${site.tel}`}
                  className="rounded-full bg-[#16A34A] px-6 py-3 text-center text-sm font-semibold text-white"
                >
                  Chiama {site.phone}
                </Link>
              </div>
            </div>
            <img
              src={`/images/zones/${zone.slug}.jpg`}
              alt={`Carroattrezzi a ${zone.name} in zona locale`}
              className="h-full min-h-[420px] w-full object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#16A34A]">
                come lavoriamo
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold text-slate-950">
                Recupero chiaro, anche fuori dal centro città.
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-slate-700">
              <p>
                Se il mezzo è fermo in un punto poco visibile, vicino a una
                curva, in una zona industriale o in una strada di campagna, la
                posizione precisa è fondamentale. Ti guidiamo nella raccolta dei
                dati utili per evitare passaggi confusi.
              </p>
              <p>
                Poi concordiamo la destinazione: officina, carrozzeria,
                abitazione, deposito o altra sede. Questo rende l’intervento più
                ordinato e ti permette di sapere già dove finirà il veicolo.
              </p>
            </div>
          </div>

          <h2 className="mt-16 font-display text-3xl font-bold text-slate-950">
            Servizi disponibili a {zone.name}
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 9).map((service) => (
              <Link
                key={service.slug}
                href={`/servizi/${service.slug}/`}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 font-semibold text-slate-800 transition hover:border-[#16A34A]/40 hover:bg-white hover:text-[#16A34A]"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  )
}




import { type Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Container } from '@/components/Container'
import { services, site } from '@/data/site'

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const service = services.find((item) => item.slug === params.slug)
  if (!service) return {}
  const title = `${service.title} a Pescara`
  return {
    title: { absolute: title },
    description: `${title}: assistenza rapida, recupero ordinato del veicolo e destinazione concordata prima dellâ€™intervento.`,
    alternates: { canonical: `/servizi/${service.slug}/` },
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((item) => item.slug === params.slug)
  if (!service) notFound()

  return (
    <main className="bg-white">
      <section className="bg-[#F0FDF4] py-16">
        <Container>
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-orange-950/10 ring-1 ring-orange-100">
            <img
              src={`/images/services/${service.slug}.webp`}
              alt={`${service.title} a Pescara con carroattrezzi professionale`}
              className="h-[360px] w-full object-cover lg:h-[460px]"
            />
            <div className="grid gap-8 p-8 lg:grid-cols-[1fr_0.45fr] lg:p-12">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#16A34A]">
                  servizio carroattrezzi
                </p>
                <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold tracking-tight text-slate-950">
                  {service.title} a Pescara
                </h1>
                <div className="mt-6 max-w-3xl space-y-5 text-lg leading-8 text-slate-700">
                  <p>
                    <strong>{service.text}</strong>
                  </p>
                  <p>{service.detail}</p>
                  <p>
                    La cosa piÃ¹ importante Ã¨ non improvvisare. Se il veicolo Ã¨
                    fermo, danneggiato o in una posizione scomoda, una
                    telefonata precisa permette di capire come procedere, dove
                    portare il mezzo e quali attenzioni servono durante il
                    recupero.
                  </p>
                </div>
              </div>
              <div className="rounded-3xl bg-slate-950 p-6 text-white">
                <p className="font-display text-2xl font-bold">
                  Chiamata chiara, intervento ordinato.
                </p>
                <p className="mt-4 text-sm leading-6 text-slate-200">
                  Comunica posizione, tipo di mezzo e destinazione. Ti aiutiamo
                  a gestire il passaggio successivo con semplicitÃ .
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <Link
                    href={`tel:${site.tel}`}
                    className="rounded-full bg-[#16A34A] px-6 py-3 text-center text-sm font-semibold text-white"
                  >
                    Chiama {site.phone}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              [
                'Valutazione prima di muoversi',
                'Capire accessi, spazio di manovra e condizioni del mezzo permette di preparare un recupero piÃ¹ preciso e meno stressante.',
              ],
              [
                'Trasporto verso la destinazione scelta',
                'Il veicolo puÃ² essere portato in officina, carrozzeria, deposito o presso un indirizzo concordato prima dellâ€™intervento.',
              ],
              [
                'Comunicazione senza confusione',
                'Ti diciamo quali dati servono e cosa fare mentre aspetti, con un approccio pratico e comprensibile.',
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
              >
                <h2 className="font-display text-2xl font-bold text-slate-950">
                  {title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-700">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-[2rem] bg-[#1F2937] p-8 text-white">
            <h2 className="font-display text-3xl font-bold">
              Quando Ã¨ meglio chiamare subito
            </h2>
            <div className="mt-5 grid gap-5 text-sm leading-6 text-slate-200 md:grid-cols-2">
              <p>
                Se il mezzo non parte, perde liquidi, ha spie accese o si trova
                in un punto trafficato, Ã¨ piÃ¹ prudente chiedere assistenza
                prima di muoverlo.
              </p>
              <p>
                Anche un guasto apparentemente piccolo puÃ² peggiorare se
                continui a guidare. Una valutazione rapida aiuta a scegliere tra
                supporto sul posto, traino o trasporto.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}




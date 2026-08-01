import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LongDetail } from '@/components/LongDetail'
import { services, site } from '@/data/site'

const items = services as unknown as Array<{ slug: string; title: string; intro?: string; text?: string; detail?: string }>

export function generateStaticParams() { return items.map((item) => ({ slug: item.slug })) }

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = items.find((entry) => entry.slug === params.slug)
  if (!item) return {}
  const title = `${item.title} a ${site.city}`
  return { title: { absolute: title }, description: `${title}: recupero e assistenza organizzati con indicazioni chiare e destinazione concordata.`, alternates: { canonical: `/servizi/${item.slug}/` } }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const item = items.find((entry) => entry.slug === params.slug)
  if (!item) notFound()
  return <LongDetail kind="service" item={item} related={items} />
}

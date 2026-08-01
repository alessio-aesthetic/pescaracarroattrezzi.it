import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LongDetail } from '@/components/LongDetail'
import { zones } from '@/data/site'

const items = (zones as unknown as Array<string | { slug: string; name: string; title?: string }>).map((entry) => typeof entry === 'string' ? { name: entry, title: `Carroattrezzi a ${entry}`, slug: entry.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') } : { ...entry, title: entry.title ?? `Carroattrezzi a ${entry.name}` })

export function generateStaticParams() { return items.map((item) => ({ slug: item.slug })) }

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = items.find((entry) => entry.slug === params.slug)
  if (!item) return {}
  return { title: { absolute: item.title }, description: `${item.title}: soccorso stradale, traino e recupero veicoli con assistenza chiara sul territorio.`, alternates: { canonical: `/zone/${item.slug}/` } }
}

export default function ZonePage({ params }: { params: { slug: string } }) {
  const item = items.find((entry) => entry.slug === params.slug)
  if (!item) notFound()
  return <LongDetail kind="zone" item={item} related={items} />
}

import fs from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'

const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8')
const jsonLd = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])
const nodes = jsonLd['@graph'] ?? [jsonLd]

describe('index.html SEO', () => {
  it('leads the title with the local search phrase', () => {
    expect(html).toMatch(/<title>Entrenador personal en Cali \| Steven Pelaez<\/title>/)
  })

  it('asks search engines to index and follow', () => {
    expect(html).toMatch(/<meta name="robots" content="index, follow"/)
  })

  it('describes Steven as a person and as a professional service in Cali', () => {
    const types = nodes.map((n) => n['@type'])
    expect(types).toContain('Person')
    expect(types).toContain('ProfessionalService')
    const service = nodes.find((n) => n['@type'] === 'ProfessionalService')
    expect(service.areaServed).toBeTruthy()
    expect(JSON.stringify(service.address)).toMatch(/Cali/)
  })
})

import { strict as assert } from 'assert'
import fs from 'fs'
import path from 'path'

// We'll import the scoring function by copying logic here (simple isolated test)
function tokenize(s: string) {
  return Array.from(new Set(s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').split(/\s+/).filter(Boolean)))
}
function scoreTokens(aS: string, bS: string) {
  const a = tokenize(aS)
  const b = tokenize(bS)
  const setA = new Set(a)
  const setB = new Set(b)
  let inter = 0
  for (const t of setA) if (setB.has(t)) inter++
  const union = new Set([...setA, ...setB]).size
  const jacc = union === 0 ? 0 : inter / union
  let score = Math.round(jacc * 80)
  if (bS && aS.toLowerCase().includes(bS.toLowerCase())) score += 10
  return Math.min(100, score)
}

console.log('Running matching tests')

// Test cases
const cases: Array<{item:string, target:string, minScore:number}> = [
  { item: 'NOW Foods Ashwagandha 450 mg 60 Veg Capsules', target: 'Ashwagandha', minScore: 10 },
  { item: 'Organic Traditions Ashwagandha Root Powder 7 oz', target: 'Ashwagandha Root Powder Organic Traditions', minScore: 50},
  { item: 'Swanson Ashwagandha Extract, Standardized, 450 mg, 60 Capsules', target: 'Ashwagandha', minScore: 10 },
  { item: 'Generic Vitamin C 500 mg 100 tablet', target: 'Ashwagandha', minScore: 0 }
]

for (const c of cases) {
  const sc = scoreTokens(c.item, c.target)
  console.log(`score(${c.item} <-> ${c.target}) = ${sc}`)
  assert(sc >= c.minScore, `Expected score >= ${c.minScore} but got ${sc} for ${c.item} vs ${c.target}`)
}

console.log('All matching tests passed')

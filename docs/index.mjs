import { readFileSync } from 'node:fs'

async function main() {
  const data = readFileSync('./.nuxt/content/database.sql', 'utf-8')
  console.log(data.length)
  const lines = data.split(';\n')
  const tables = lines.map(line => line.length)
  console.log(JSON.stringify(tables, null, 2))
}

main()

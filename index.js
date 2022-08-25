const from = 0
const to = 500

for (let i = from, step = 0; i <= to; i += 4, step += 1) {
  console.log(`pijama-global-dimension-static-size-${step}: ${i}px;`)
}

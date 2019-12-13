import currency from 'currency.js'

const usd = value => currency(value, { symbol: "$", precision: 2 }).format(true);

export {usd}
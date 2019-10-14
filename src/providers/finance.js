import * as Finance from 'financejs';

const wacc = (data) => {
    return Finance.wacc(data.Equity,data.Liabilities,data.CostOfRevenue - data.CostOfExpenses, data.costofdept,21)
}

export { wacc };
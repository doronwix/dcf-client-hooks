import React, { useContext } from 'react';
import {Context}  from '../../providers/DataProvider';
import  LineChart  from './LineChart';
import styles  from './LineChart.css';

const EbidtaLineChart = () => {
    const { secData } = useContext(Context);
    const rows = secData ? secData : [];
    const width = 500,height = 350;
    
    
    const data1 = rows.filter(d => d.DocumentType === "10-K").map((d)=>{
        return {a: parseInt(d.BalanceSheetDate.substring(0,4)), b:(d.NetIncomeLoss + d.InterestExpense + d.TaxPaid + d.DepreciationAndAmortization)/1000000}
    });
    if (!data1.length) {
        return <div></div>;
      } else {
    return(
            <div>
            <div  className={styles.center}>Non Extrapulated EDBITA:(in millions)</div>
            <LineChart width={width} height={height} data={data1} key={"EbidtaLine"}/>
            </div>
        
    )}
}
export default EbidtaLineChart;
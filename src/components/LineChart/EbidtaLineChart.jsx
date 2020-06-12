import React, { useContext } from 'react';
import {financialContext} from '../../providers/DataProvider';
import  LineChart  from './LineChart';
import styles  from './LineChart.css';
import Spinner from './../Layout/Spinner'

const EbidtaLineChart = () => {
    const { secData } = useContext(financialContext);
    const rows = secData ? secData : [];
    const width = 250,height = 175;
    
    
    const data1 = rows.filter(d => d.DocumentType === "10-K").map((d)=>{
        return {a: parseInt(d.BalanceSheetDate.substring(0,4)), b:(d.NetIncomeLoss + d.InterestExpense + d.TaxPaid + d.DepreciationAndAmortization)/1000000}
    });
    if (!data1.length) {
        return <div><Spinner></Spinner></div>;
      } else {
    return(
            <div>
            <div  className={styles.center}>Non Extrapulated EDBITA:(in millions)</div>
            <LineChart width={width} height={height} data={data1} key={"EbidtaLine"}/>
            </div>
        
    )}
}
export default EbidtaLineChart;
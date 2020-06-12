import React, { useContext } from 'react';
import {financialContext} from '../../providers/DataProvider';
import  LineChart  from './LineChart';
import styles  from './LineChart.css';

const NetIncomeLineChart = () => {
    const { chartsData } = useContext(financialContext);
    const rows = chartsData &&  chartsData.netIncomeExtrapolated ? chartsData.netIncomeExtrapolated : [];
    const width = 500,height = 250;
    
    
    const data1 = rows.map((d)=>{
        return {a: d.fiscalYear.toString().substr(-2), b:Math.floor(d.value/1000000)}
    });
    if (!data1.length) {
        return <div></div>;
      } else {
    return(
            <div>
            <div className={styles.center}>Extrapolated netIncome:(in millions)</div>
            <LineChart width={width} height={height} data={data1} key={"NetIncomeLine"}/>
            </div>
        
    )}
}
export default NetIncomeLineChart;
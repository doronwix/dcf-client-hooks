import React, { useContext } from 'react';
import {financialContext} from '../../providers/DataProvider';
import  LineChart  from './LineChart';
import styles  from './LineChart.css';

const RevenueLineChart = () => {
    const { chartsData } = useContext(financialContext);
    const rows = chartsData &&  chartsData.revenuesExtrapolated ? chartsData.revenuesExtrapolated : [];
    const width = 500,height = 250;
    
    
    const data1 = rows.map((d)=>{
        return {a: d.fiscalYear.toString().substr(-2), b:Math.floor(d.value/1000000)}
    });
    if (!data1.length) {
        return <div></div>;
      } else {
    return(
            <div>
            <div className={styles.center}>Extrapulated Revenue:(in millions)</div>
            <LineChart width={width} height={height} data={data1} key={"RevenueLine"}/>
            </div>
        
    )}
}
export default RevenueLineChart;
import React, { useContext } from 'react';
import {Context}  from '../../providers/DataProvider';
import  LineChart  from './LineChart';
import styles  from './LineChart.css';

const RevenueLineChart = () => {
    const { chartsData } = useContext(Context);
    const rows = chartsData ? chartsData : [];
    const width = 1000,height = 500;
    
    
    const data1 = rows.map((d)=>{
        return {a: d.fiscalYear, b:Math.floor(d.value/1000000)}
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
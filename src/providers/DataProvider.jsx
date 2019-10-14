// @flow
import * as React from 'react';
import { createContext, useState, useEffect } from 'react';

import {wacc} from './finance';


type ChartsData = {
    fiscalYear: int,
    value:int

}

//let wacc_per_year: Array<mixed> = [];



const Context = createContext();
  async function fetchData(l_symbol) 
        {
        let response = await fetch(`/api/sec/${l_symbol}`,{
            headers: {
            accepts: "application/json"
            }});
        let res = await response.json()
        return res;
        }

const DataProvider = ({ children }) => {
    const [symbol, setSymbol] = useState();

    const [secData, setSecData] = useState(null);

    const [chartsData, setChartsData] = useState(null);



    const updateSymbol = ((e) => {
        setSymbol(e.target.value);
    })
    useEffect(() => {
        if (!symbol){
            return;
        }
        fetchData(symbol)
        .then((data) => {
            //wacc_per_year[0] = wacc(data.merged_result[0]);
            setSecData(data.merged_result);
            setChartsData(data.financialCalculationsResult);
            

        });
    }, [symbol]);
    return (

        <Context.Provider value={{ secData, chartsData, symbol, updateSymbol}}>
           {children}
        </Context.Provider>


    );
}

export { Context, DataProvider };
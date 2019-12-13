import React, { Suspense } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import {DataProvider}  from './providers/DataProvider';
import  StretchedData  from './components/StretchedData';
import  TextInput  from './components/TextInput';
import  AutocompleteStocks  from './components/AutocompleteStocks';
import  RevenueLineChart  from './components/LineChart/RevenueLineChart';
import  EbidtaLineChart  from './components/LineChart/EbidtaLineChart';


function App() {

  return (
    
    <div className="App">
      <header className="App-header">
      <DataProvider>
      <React.Fragment>
      <CssBaseline />
      <TextInput type="text" id="symbolText" name="symbolText" />
     {/*  <Suspense fallback={<div>Loading...</div>}><AutocompleteStocks/></Suspense>*/}
      <StretchedData/>
      <RevenueLineChart/>
      <EbidtaLineChart/>
     
{/*       <Router
            routes={routes}
            initialURL={initialURL}
            initialData={initialData}
      /> */}
      </React.Fragment> 
      </DataProvider>
      </header>
    </div>
   
  );
}

export default App;

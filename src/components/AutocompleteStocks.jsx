import React from 'react';
import { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


const AutocompleteStocks = (props) => {

    /* let symbols = "";
    useEffect(() => {
        (async () => {
            let response = await fetch('/api/nasdaq',{
                headers: {
                accepts: "application/json"
                }});   
             symbols = await response.json();
             
          })()
    
        },[])
 
    return(
            <Autocomplete
            id="combo-box-demo"
            options={symbols}
            getOptionLabel={option => option.Nasdaq}
            style={{ width: 300 }}
            renderInput={params => (
            <TextField {...params} label="Combo box" variant="outlined" fullWidth />
            )}
/>
    )} */
    return (
        <Autocomplete
          id="combo-box-demo"
          options={top100Films}
          
          style={{ width: 300 }}
          renderInput={params => (
            <TextField {...params} label="Combo box" variant="outlined" fullWidth />
          )}
        />
      );
    }
    
    // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
    const top100Films = [{"Nasdaq":"Y|A|Agilent","Traded|Symbol|Security":"Technologies","Name|Listing":"Inc.","Exchange|Market":"Common","Category|ETF|Round":"Stock|N|","Lot":"|N|100|N||A|A|N"}]

export default AutocompleteStocks;
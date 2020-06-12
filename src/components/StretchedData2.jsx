// @flow
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {financialContext} from './../providers/DataProvider'
import {usd}  from './../utilities/currencyFormat'


const TableView = () => {
    const { secData } = useContext(financialContext);
    const useStyles = makeStyles(theme => ({
        root: {
          width: '100%',
        },
        paper: {
          marginTop: theme.spacing(3),
          width: '100%',
          overflowX: 'auto',
          marginBottom: theme.spacing(2),
        },
        table: {
          minWidth: 650,
        },
      }));
      
    const cells = secData ? secData : [];
    const isVisible =cells.length>0;
    const classes = useStyles();
    if (!isVisible){return (<div></div>)}
    else
    return(
   
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small">
        <TableBody>
            <TableRow>
              <TableCell align="right">BalanceShDate</TableCell>
              
              {cells.map((cell,index) => (
                 
                       <TableCell align="right" key={"bs_" + index}>{cell.BalanceSheetDate}</TableCell>    
              ))}   
             
            
            </TableRow>
            <TableRow>
              <TableCell align="right">DocumentType</TableCell>
              {cells.map((cell,index) => (
                 
                 <TableCell align="right" key={"dt_" + index}>{cell.DocumentType}</TableCell>    
            ))} 
            </TableRow>
            <TableRow>
              <TableCell align="right">Equt</TableCell>
              {cells.map((cell,index) => (
                 
                 <TableCell align="right" key={"eq_" + index}>{usd(cell.Equity)}</TableCell>    
            ))} 
            </TableRow>
            <TableRow>
              <TableCell align="right">Revenue</TableCell>
              {cells.map((cell,index) => (
                 
                 <TableCell align="right" key={"rv_" + index}>{usd(cell.Revenues)}</TableCell>    
            ))} 
            </TableRow>
            <TableRow>
              <TableCell align="right">CostOfRevenue(COGS + SG&A)</TableCell>
              {cells.map((cell,index) => (
                 
                 <TableCell align="right" key={"cor_" + index}>{usd(cell.CostOfRevenue)}</TableCell>    
            ))} 
            </TableRow>
            <TableRow>
              <TableCell align="right">% of Revenue</TableCell>
              {cells.map((cell,index) => (
                 
                 <TableCell align="right" key={"rvup_" + index}>{(cell.CostOfRevenue / cell.Revenues * 100).toFixed(1)}</TableCell>    
            ))} 
            </TableRow>
            <TableRow>
              <TableCell align="right">Tax</TableCell>
              {cells.map((cell,index) => (
                 
                 <TableCell align="right" key={"tax_" + index}>{usd(cell.TaxPaid)}</TableCell>    
            ))} 
            </TableRow>
            <TableRow>
              <TableCell align="right">Gross Profit</TableCell>
              {cells.map((cell,index) => (
                 
                 <TableCell align="right" key={"tax_" + index}>{usd(cell.GrossProfit)}</TableCell>    
            ))} 
            </TableRow>
            <TableRow>
              <TableCell align="right">SGandAexpenses</TableCell>
              {cells.map((cell,index) => (
                 
                 <TableCell align="right" key={"sg_" + index}>{usd(cell.SGandAexpenses)}</TableCell>    
            ))} 
            </TableRow>
            <TableRow>
              <TableCell align="right">EBITDA</TableCell>
              {cells.map((cell,index) => (
                 
                 <TableCell align="right" key={"ebt_" + index}>{usd(cell.Ebitda)}</TableCell>    
            ))} 
            </TableRow>
            <TableRow>
              <TableCell align="right">Liabil</TableCell>
              {cells.map((cell,index) => (
                 
                 <TableCell align="right" key={"lil_" + index}>{usd(cell.Liabilities)}</TableCell>    
            ))} 
            </TableRow>
            <TableRow>
              <TableCell align="right">Capex</TableCell>
              {cells.map((cell,index) => (
                 
                 <TableCell align="right" key={"cpx_" + index}>{usd(cell.Capex)}</TableCell>    
            ))} 
            </TableRow>
            <TableRow>
              <TableCell align="right">Net Income</TableCell>
              {cells.map((cell,index) => (
                 
                 <TableCell align="right" key={"nin_" + index}>{usd(cell.NetIncomeLoss)}</TableCell>    
            ))} 
            </TableRow>
            <TableRow>
              <TableCell align="right">Acquisitions</TableCell>
              {cells.map((cell,index) => (
                 
                 <TableCell align="right" key={"acq_" + index}>{usd(cell.Acquisitions)}</TableCell>    
            ))} 
            </TableRow>     
            <TableRow>
              <TableCell align="right">FCF</TableCell>
              {cells.map((cell,index) => (
                 
                 <TableCell align="right" key={"fcf_" + index}>{usd(cell.FCF)}</TableCell>    
            ))} 
            </TableRow>                                                       
                
          </TableBody>
        </Table>
      </Paper>
    </div>
  )};
export default TableView;
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
      
    const rows = secData ? secData : [];
    const classes = useStyles();
    return(
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell align="right">BalanceShDate</TableCell>
              <TableCell align="right">DocumentType</TableCell>
              <TableCell align="right">Equt</TableCell>
              <TableCell align="right">Revenue</TableCell>
              <TableCell align="right">CostOfRevenue(COGS + SG&A)</TableCell>
              <TableCell align="right">% of Revenue</TableCell>
              <TableCell align="right">Tax</TableCell>  
              <TableCell align="right">Gross Profit</TableCell>
              <TableCell align="right">SGandAexpenses</TableCell>
              <TableCell align="right">EBITDA</TableCell> 
              <TableCell align="right">Liabil</TableCell>              
              <TableCell align="right">Capex</TableCell>
              <TableCell align="right">Net Income</TableCell>
              <TableCell align="right">Acquisitions</TableCell>
              <TableCell align="right">FCF</TableCell>
              {/*<TableCell align="right">CurrentLiabilities</TableCell>   */}       
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row,index) => (
              <TableRow key={index}>
                <TableCell align="right">{row.BalanceSheetDate}</TableCell>
                <TableCell align="right">{row.DocumentType}</TableCell>
                <TableCell align="right">{usd(row.Equity)}</TableCell>
                <TableCell align="right">{usd(row.Revenues)}</TableCell>
                <TableCell align="right">{usd(row.CostOfRevenue)}</TableCell>
                <TableCell align="right">{(row.CostOfRevenue / row.Revenues * 100).toFixed(1)}</TableCell>
                <TableCell align="right">{usd(row.TaxPaid)}</TableCell>
                <TableCell align="right">{usd(row.GrossProfit)}</TableCell>
                <TableCell align="right">{usd(row.SGandAexpenses)}</TableCell>
                <TableCell align="right">{usd(row.Ebitda)}</TableCell>
                {/*<TableCell align="right">{usd((row.NetIncomeLoss + row.InterestExpense + row.TaxPaid) * (1-0.26) - row.Capex)}</TableCell>*/}
                <TableCell align="right">{usd(row.Liabilities)}</TableCell>
                <TableCell align="right">{usd(row.Capex)}</TableCell>   
                <TableCell align="right">{usd(row.NetIncomeLoss)}</TableCell>
                <TableCell align="right">{usd(row.Acquisitions)}</TableCell>
                <TableCell align="right">{usd(row.FCF)}</TableCell>
                {/*<TableCell align="right">{usd(row.CurrentLiabilities)}</TableCell>*/}
                
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  )};
export default TableView;
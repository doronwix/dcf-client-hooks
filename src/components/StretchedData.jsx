// @flow
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Context}  from './../providers/DataProvider'

type SecData = {
  EntityRegistrantName: string,
  Equity :?string,
  Capex: string,
  BalanceSheetDate: ?string,
  DocumentType: ?string
}
const TableView = () => {
    const { secData, chartsData, symbol } = useContext(Context);
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
              <TableCell>EntityRegistrantName</TableCell>
              <TableCell align="right">Equt</TableCell>
              <TableCell align="right">Revenue</TableCell>
              <TableCell align="right">Liabil</TableCell>              
              <TableCell align="right">Capex</TableCell>
              <TableCell align="right">BalanceShDate</TableCell>
              <TableCell align="right">CurrentLiabilities</TableCell>
              <TableCell align="right">DocumentType</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row,index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
               { `${row.EntityRegistrantName.slice(0,5)}...` } 
                </TableCell>
                <TableCell align="right">{row.Equity}</TableCell>
                <TableCell align="right">{row.Revenues}</TableCell>
                <TableCell align="right">{row.Liabilities}</TableCell>
                <TableCell align="right">{row.Capex}</TableCell>
                <TableCell align="right">{row.BalanceSheetDate}</TableCell>
                
                <TableCell align="right">{row.CurrentLiabilities}</TableCell>
                <TableCell align="right">{row.DocumentType}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  )};
export default TableView;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

function createData (name, numberOfPayments, monthlyCommission, oneTimeCommission) {
  return { name, numberOfPayments, monthlyCommission, oneTimeCommission };
}

const rows = [
  createData('Оплата Частями', '2-10', 'нет', 'нет'),
  createData('Мгновенная рассрочка', '2-24', 2.9, 2.9),
  createData('Мгновенная рассрочка Акционная', '13-25', 0.99, 0.99)
];

export default function DenseTable () {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead style={{backgroundColor: '#F7F5F6'}}>
          <TableRow>
            <TableCell>Программа</TableCell>
            <TableCell align="right">Количество платежей, шт</TableCell>
            <TableCell align="right">Ежемесячная комиссия, % от суммы кредита</TableCell>
            <TableCell align="right">Разовая комиссия от % суммы кредита</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.numberOfPayments}</TableCell>
              <TableCell align="right">{row.monthlyCommission}</TableCell>
              <TableCell align="right">{row.oneTimeCommission}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
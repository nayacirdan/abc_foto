import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  '@media (max-width: 979px)': {
    table: {
      display: 'none'
    }
  }
});

function createData (name, gracePeriodWithoutCommissions, annualRate, monthlyCommissionAfter, oneTimeCommission, initialFee) {
  return { name, gracePeriodWithoutCommissions, annualRate, monthlyCommissionAfter, oneTimeCommission, initialFee };
}

const rows = [
  createData('0,01% на 3 месяца', 3, 0.01, 2.5, '-', 'от 0'),
  createData('0,01% на 5 месяцев', 5, 0.01, 2.5, '-', 'от 0'),
  createData('0,01% на 10 месяцев', 10, 0.01, 2.5, '-', 'от 0'),
  createData('0,01% на 12 месяцев', 12, 0.01, 2.5, '-', 'от 0'),
  createData('0,01% на 15 месяцев', 15, 0.01, 2.5, '-', 'от 0'),
  createData('0,01% на 20 месяцев', 20, 0.01, 2.5, '-', 'от 0'),
  createData('0,01% на 24 месяца', 24, 0.01, 2.5, '-', 'от 0'),
  createData('Доступный Стандарт', 'нет', 0.01, 2, '-', 'от 0'),
  createData('Кредит с компенсацией до 35% IQ', 'нет', 0.01, 1.99, 1.99, 'от 0'),
  createData('Стандарт на ювелирные изделия от Кредитмаркета', 'нет', 0.01, 2.5, '-', 'от 0')
];

function DenseTable () {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead style={{backgroundColor: '#F7F5F6'}}>
          <TableRow>
            <TableCell>Наименование кредитного пакета</TableCell>
            <TableCell align="right">Льготный период без комиссий, мес</TableCell>
            <TableCell align="right">Годовая ставка, %</TableCell>
            <TableCell align="right">Ежимесячная комиссия после льготного периода, % от суммы кредита</TableCell>
            <TableCell align="right">Разовая комиссия от % суммы кредита</TableCell>
            <TableCell align="right">Первоначальный взнос, от % суммы СФ</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.gracePeriodWithoutCommissions}</TableCell>
              <TableCell align="right">{row.annualRate}</TableCell>
              <TableCell align="right">{row.monthlyCommissionAfter}</TableCell>
              <TableCell align="right">{row.oneTimeCommission}</TableCell>
              <TableCell align="right">{row.initialFee}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default React.memo(DenseTable);
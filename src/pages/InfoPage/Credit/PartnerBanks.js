import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

function createData (name, typeOfSale, creditAmount, lendingPeriod, borrowerAge, additionalTerms, listOfRequiredDocuments) {
  return { name, typeOfSale, creditAmount, lendingPeriod, borrowerAge, additionalTerms, listOfRequiredDocuments };
}

const rows = [
  createData('https://res.cloudinary.com/miratsiupiak/image/upload/v1595230384/BanksPartners/391132_kqdjyc.png', 'Кредит на товары продавца Rozetka и других продавцов', '500 - 100 000', 'До 24', '18-70', 'Стаж на текущем месте работы - не меньше 3 месяцев. На усмотрение банка кредиты застрахованы по минимальному тарифу от 0.5% в месяц.', 'ОригиналыЖ паспорта гражданина Украины, ИНН; пенсионное свидетельство для пенсионеров'),
  createData('https://res.cloudinary.com/miratsiupiak/image/upload/v1595230384/BanksPartners/563055_i46hdn.png', 'Кредит на товары продавца Rozetka', '500 - 100 000', 'До 24', '18-65', 'Стаж на текущем месте работы - не меньше 3 месяцев. На усмотрение банка кредиты застрахованы по минимальному тарифу от 0.5% в месяц.', 'ОригиналыЖ паспорта гражданина Украины, ИНН; пенсионное свидетельство для пенсионеров'),
  createData('https://res.cloudinary.com/miratsiupiak/image/upload/v1595230378/BanksPartners/391174_ch4upn.png', 'Кредит на товары продавца Rozetka', '500 - 150 000', 'До 36', '21-67', 'Стаж на текущем месте работы - не меньше 3 месяцев. На усмотрение банка кредиты застрахованы по минимальному тарифу от 0.5% в месяц.', 'ОригиналыЖ паспорта гражданина Украины, ИНН; пенсионное свидетельство для пенсионеров'),
  createData('https://res.cloudinary.com/miratsiupiak/image/upload/v1595230378/BanksPartners/475735_czzkb4.jpg', 'Кредит на товары продавца Rozetka', '500 - 150 000', 'До 36', '21-70', 'Стаж на текущем месте работы - не меньше 3 месяцев. На усмотрение банка кредиты застрахованы по минимальному тарифу от 0.5% в месяц.', 'ОригиналыЖ паспорта гражданина Украины, ИНН; пенсионное свидетельство для пенсионеров'),
  createData('https://res.cloudinary.com/miratsiupiak/image/upload/v1595230378/BanksPartners/569236_lfspvh.jpg', 'Кредит на товары других продавцов', '300 - 200 000', 'До 24', '21-69', 'Стаж на текущем месте работы - не меньше 3 месяцев. На усмотрение банка кредиты застрахованы по минимальному тарифу от 0.5% в месяц.', 'ОригиналыЖ паспорта гражданина Украины, ИНН; пенсионное свидетельство для пенсионеров'),
  createData('https://res.cloudinary.com/miratsiupiak/image/upload/v1595230378/BanksPartners/569222_pfccj9.jpg', 'Кредит на товары других продавцов', '1000 - 50 000', 'До 24', '21-70', 'Стаж на текущем месте работы - не меньше 3 месяцев. На усмотрение банка кредиты застрахованы по минимальному тарифу от 0.5% в месяц.', 'ОригиналыЖ паспорта гражданина Украины, ИНН; пенсионное свидетельство для пенсионеров'),
  createData('https://res.cloudinary.com/miratsiupiak/image/upload/v1595230371/BanksPartners/391195_movisi.png', '"Оплата Частями" и "Мгновенная рассрочка" на товары продавца Rozetka и других продавцов', '300 - 100 000', 'До 24', '18-70', 'При списании платежа за счет кредитного лимита, начисляется дополнительная комиссия на 4%. Ежемесячная косиммия 0.01% от суммы покупки.', 'Карта ПриватБанка'),
  createData('https://res.cloudinary.com/miratsiupiak/image/upload/v1595230370/BanksPartners/570872_fre5xd.png', '"Покупка частями" Монобанк на товары продавца Rozetka', '500-100 000', 'До 24', 'от 16 лет и старше', 'Авансовый платеж в размере ежемесячного платежа. Ставка: 0,00001% годовых, дополнительных комиссий - нет. Комиссия за погашение в кредитные средства - нет.', 'Карта Монобанка')
];

export default function DenseTable () {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead style={{backgroundColor: '#F7F5F6'}}>
          <TableRow>
            <TableCell>Наименование Банка</TableCell>
            <TableCell align="right">Вид продажи</TableCell>
            <TableCell align="right">Сумма кредита, грн</TableCell>
            <TableCell align="right">Период кредитования, мес</TableCell>
            <TableCell align="right">Возраст заемщика, лет</TableCell>
            <TableCell align="right">Дополнительные условия</TableCell>
            <TableCell align="right">Перечень необходимых документов</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                <img alt={row.name} src={row.name} />
              </TableCell>
              <TableCell align="right">{row.typeOfSale}</TableCell>
              <TableCell align="right">{row.creditAmount}</TableCell>
              <TableCell align="right">{row.lendingPeriod}</TableCell>
              <TableCell align="right">{row.borrowerAge}</TableCell>
              <TableCell align="right">{row.additionalTerms}</TableCell>
              <TableCell align="right">{row.listOfRequiredDocuments}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
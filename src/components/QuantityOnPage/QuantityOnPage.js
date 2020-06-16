import React from 'react';
import TablePagination from '@material-ui/core/TablePagination';
import './QuantityOnPage.scss'

const PaginationSelect=()=> {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(9);


    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <TablePagination
            className='products-quantity'
            labelRowsPerPage='Показывать'
            component="div"
            count={100}
            page={page}
            //onChangePage={handleChangePage}
            rowsPerPage={rowsPerPage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            rowsPerPageOptions={[9, 18, 36, 72]}
        />
    );
}

export default PaginationSelect;
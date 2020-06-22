import React from 'react';
import TablePagination from '@material-ui/core/TablePagination';
import './QuantityOnPage.scss'
import {connect, useDispatch, useSelector} from "react-redux";
import {filterProducts, setPerPage} from "../../store/actions/actions";


const PaginationSelect=({currentCategory, perPage, currentPage})=> {
    const [page, setPage] = React.useState(0);
    const rowsPerPage=perPage;
    const productsQuantity=useSelector(state=>state.products.productsQuantity);

    const dispatch=useDispatch();


    const handleChangeRowsPerPage = (event) => {
        const perPageValue=parseInt(event.target.value, 10)
        dispatch(setPerPage(perPageValue));
        console.log('event.target.value', event.target.value);

        dispatch(filterProducts(`categories=${currentCategory}&perPage=${perPageValue}`))
        setPage(0);
    };
    const handleChangePage=(event, newPage)=>{
        setPage(newPage);
    }

    return (
        <TablePagination
            className='products-quantity'
            labelRowsPerPage='Показывать'
            component="div"
            count={productsQuantity}
            page={page}
            onChangePage={handleChangePage}
            rowsPerPage={rowsPerPage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            rowsPerPageOptions={[2, 4, 8, 12]}
        />
    );
}

const mapStoreToProps=(store)=>{
 return {
     currentCategory: store.categories.currentCategory.id,
     perPage: store.categoryPage.productsPerPage,
     currentPage: store.categoryPage.currentPage,

}
}
export default connect(mapStoreToProps)(PaginationSelect);
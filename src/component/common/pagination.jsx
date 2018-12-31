import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

class Pagination extends Component {
    render() { 
        const { pageSize, itemsCount, currentPage, onPageChange} = this.props;
        const pagesCount = Math.ceil(itemsCount / pageSize);
        const pages = _.range(1, pagesCount + 1);
        if(pagesCount < 2) return null; 
        return ( 
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                {pages.map(page => (
                    <li className={page === currentPage ? 'page-item active' :'page-item'} key={page} >
                    <a className="page-link" onClick={() => onPageChange(page)}>{page}</a>
                    </li>
                ))}
              </ul>
            </nav>
         );
    }
}

//prop type checking
Pagination.propTypes = {
    pageSize: PropTypes.number.isRequired,
    itemsCount: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
}
 
export default Pagination;
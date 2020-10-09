
import React, { Component } from 'react';
import { filterProducts, sortProducts } from '../actions/productActions';
import { connect } from 'react-redux';

class Filter extends Component {
  render() {
    return !this.props.filteredProducts ? (
      <div>Loading...</div>
    ) : (
      <div className='filter'>
        <div className='filter-result'>
          {this.props.filteredProducts.length}Products
        </div>
        <div className='filter-sort'>
          Order{' '}
          <select
            value={this.props.sort}
            onChange={(e) =>
              this.props.sortProducts(this.props.filteredProducts, e.target.value)
            }
          >
            <option value='latest'>Latest</option>
            <option value='lowest'>Lowest</option>
            <option value='highest'>highest</option>
          </select>
        </div>
        <div className='category'>
          Filter{' '}
          <select
            value={this.props.category}
            onChange={(e) =>
              this.props.filterProducts(this.props.products, e.target.value)
            }
          >
            <option value=''>All</option>
            <option value='antiques'>Antiques</option>
            <option value='vases'>Vases</option>
            <option value='plates'>Plates</option>
            <option value='lamps'>Lamps</option>
            <option value='bedsidetables'>Bedsidetables</option>
            <option value='tables'>Tables</option>
            <option value='chairs'>Chairs</option>
          </select>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    category: state.products.category,
    sort: state.products.sort,
    products: state.products.items,
    filteredProducts: state.products.filteredItems,
  };
};

export default connect(mapStateToProps, { filterProducts, sortProducts })(
  Filter
);

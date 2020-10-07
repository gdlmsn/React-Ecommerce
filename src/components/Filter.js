import React, { Component } from 'react';

export default class Filter extends Component {
  render() {
    return (
      <div className='filter'>
        <div className='filter-result'>{this.props.count}Products</div>
        <div className='filter-sort'>
          Order{' '}
          <select value={this.props.sort} onChange={this.props.sortProducts}>
            <option value=''>Latest</option>
            <option value='lowest'>Lowest</option>
            <option value='highest'>highest</option>
          </select>
        </div>
        <div className='category'>
          Filter{' '}
          <select
            value={this.props.category}
            onChange={this.props.filterProducts}
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

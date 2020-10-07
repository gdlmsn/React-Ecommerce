//feature-1
import React from 'react';
import Filter from './components/Filter';
import Products from './components/Products';
import data from './data.json';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      category: '',
      sort: '',
    };
  }

  sortProducts = (event) => {
    const sort = event.target.value;
    console.log(event.target.value);
    this.setState((state) => ({
      sort: sort,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          sort === 'lowest'
            ? a.price > b.price
              ? 1
              : -1
            : sort === 'highest'
            ? a.price < b.price
              ? 1
              : -1
            : a._id < b._id
            ? 1
            : -1
          ),
    }));
  };

  filterProducts = (event) => {
    if (event.target.value === '') {
      this.setState({ category: event.target.value, product: data.products });
    } else {
      this.setState({
        category: event.target.value,
        products: data.products.filter(
          (product) => product.category.indexOf(event.target.value) >= 0
        ),
      });
      console.log(event.target.value);
    }
  };

  render() {
    return (
      <div className='grid-container'>
        <header>
          <a href='/'>React Ecommerce</a>
        </header>
        <main>
          <div className='content'>
            <div className='main'>
              <Filter
                count={this.state.products.length}
                category={this.state.category}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              />
              <Products products={this.state.products} />
            </div>
            <div className='sidebar'>CartItems</div>
          </div>
        </main>
        <footer>All rights reserved</footer>
      </div>
    );
  }
}

export default App;

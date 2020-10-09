import React, { Component } from 'react';
import formatCurrency from '../util';
import Flip from 'react-reveal/Flip';
import Modal from 'react-modal';
import Zoom from 'react-reveal/Zoom';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productActions';
import { addToCart } from '../actions/cartActions';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }
  componentDidMount() {
    this.props.fetchProducts();
    Modal.setAppElement('body')
  }

  openModal = (product) => {
    this.setState({ product });
  };
  closeModal = () => {
    this.setState({ product: null });
  };
  render() {
    const { product } = this.state;
    return (
      <div>
        <Flip bottom cascade={true}>
          {!this.props.products ? (
            <div>Loading...</div>
          ) : (
            <ul className='products'>
              {this.props.products.map((product) => (
                <li key={product._id}>
                  <div className='product'>
                    <a
                      href={'#' + product._id}
                      onClick={() => this.openModal(product)}
                    >
                      <img src={product.image} alt={product.title} />
                      <p>{product.title}</p>
                    </a>
                    <div className='product-price'>
                      <div>{formatCurrency(product.price)}</div>
                      <button
                        onClick={() => this.props.addToCart(product)}
                        className='button primary'
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Flip>
        {product && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              <button className='close-modal' onClick={this.closeModal}>
                X
              </button>
              <div className='product-details'>
                <img src={product.image} alt={product.title} />
                <div className='product-details-description'>
                  <p>
                    <strong>{product.title}</strong>
                  </p>
                  <p>{product.description}</p>
                  <p>
                    {product.category.map((x) => (
                      <span>
                        {''}
                        <button>{x}</button>
                      </span>
                    ))}
                  </p>
                  <div className='product-price'>
                    <div>{formatCurrency(product.price)}</div>
                    <button
                      className='button primary'
                      onClick={() => {
                        this.props.addToCart(product);
                        this.closeModal();
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </Zoom>
          </Modal>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products.filteredItems,
  };
};
export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);

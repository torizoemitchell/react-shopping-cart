import React, { Component } from 'react';
import './App.css';
import CartHeader from './components/cart-header'
import CartFooter from './components/cart-footer'
import CartItems from './components/cart-items'
import AddToCartForm from './components/add-to-cart-form'

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
        products: [
          { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
          { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
          { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
          { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
          { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
          { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
          { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
          { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
          { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
        ],
        items: [
          { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
          { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
          { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
        ]
      }
  }

  addToCart = (item) => {
    console.log("added item to cart")
  }

  render() {

    return (
      <div className="App">
        <CartHeader/>
        <CartItems items={this.state.items} />
        <AddToCartForm addToCartCB={this.addToCart} products={this.state.products}/>
        <CartFooter copyright="2016"/>
      </div>
    );
  }
}

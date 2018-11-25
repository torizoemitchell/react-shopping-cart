import React from 'react'


export default class AddToCartForm extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      quantity: '',
      product: ''
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    //add to state by calling add to cart from parent class
    const { quantity, product } = this.state
    const { addToCartCB } = this.props
    addToCartCB({ quantity, product })
  }

  onProductSelect = (e) => {
    e.preventDefault()
    this.setState({
      ...this.state,
      product: e.target.value
    })
  }

  onQuantitySelect = (e) => {
    e.preventDefault()
    this.setState({
      ...this.state,
      quantity: e.target.value
    })
  }




  render(){
      console.log("this.props",this.props)

      return(
        <div className="container">
          <h4>Add an Item</h4>
          <form onSubmit={this.onSubmit}>
            <label>Product</label>
              <select className="form-control" id="exampleFormControlSelect1" defaultValue={this.state.product} onChange={this.onProductSelect}>
                {this.props.products.map((elem) => <option key={elem.id}>{elem.name}</option>)}
              </select>
            <label>Quantity</label>
            <input type="integer" className="form-control" defaultValue={this.state.quantity} onChange={this.onQuantitySelect} />
            <input type="submit" className="btn btn-primary"/>

          </form>
        </div>
      )
    }
  }

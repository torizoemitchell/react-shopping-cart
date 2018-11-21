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
    console.log("sumbit stuff")
  }


  render(){
      console.log("this.props",this.props)

      return(
        <div className="container">
          <h4>Add an Item</h4>
          <form onSubmit={this.onSubmit}>
            <label>Product</label>
              <select className="form-control" id="exampleFormControlSelect1" defaultValue={this.state.product}>
                {this.props.products.map((elem) => <option key={elem.id}>{elem.name}</option>)}
              </select>
            <label>Quantity</label>
              <select className="form-control" id="exampleFormControlSelect1" value={this.state.quantity}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            <input type="submit" className="btn btn-primary"/>
            <input className="form-control" defaultValue={this.state.quantity} onChange={this.onItemChange} />

          </form>
        </div>
      )
    }
  }

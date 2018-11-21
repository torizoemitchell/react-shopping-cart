import React from 'react'

export default class Item extends React.Component {


  render (){
    //destructures an item from this.props, which is stored in state in Apps.js
      const {item} = this.props
      //returns a row with 3 columns: name, price, and quantity.
      return (
      <div className="list-group-item">
        <div className="row">
          <div className="col-md-8">{item.product.name}</div>
          <div className="col-md-2">{item.product.priceInCents/100}</div>
          <div className="col-md-2">{item.quantity}</div>
        </div>
      </div>
    )
  }
}

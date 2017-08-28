import React, {Component} from 'react';

export default class Entrees extends Component {

  render(){
    // Set items' value....
    let items = this.props.entrees;
    // Since the items do not have a key, let's create one.
    let key = 0;
    let entrees = items.map((items)=>{
      // Increment the key for each item.
      key++;
      console.log(key)
      console.log(items);
      return (
        <tbody key={key}>
           <tr>
             <td>{items.dish}</td>
             <td>{items.description}</td>
             <td>{items.price}</td>
           </tr>
        </tbody>
      )
    })
    return (
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <h4 className="menu-section-headers col-sm-8"><strong>Entrees</strong></h4>
          <table className="table">
            <thead>
              <tr>
                <th className="col-md-3">Dish</th>
                <th className="col-md-8">Description</th>
                <th className="col-md-1">Price</th>
              </tr>
            </thead>
            {entrees}
          </table>
        </div>
      </div>
    );
  }
}

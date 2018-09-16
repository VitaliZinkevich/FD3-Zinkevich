import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Table extends Component {

  checkData = ()=>{
    console.log (this.props.items)
    console.log ('type ', typeof this.props.items)
    console.log (Array.isArray (this.props.items))
  }

  viewItems = this.props.items.map ((el, ind)=>{
    return (
            <tr key={el.ID}>
            <td>{el.name}</td>
            <td>{el.price}</td>
            <td>{el.left}</td>
            <td>{el.fotos.map ((el, ind)=>{
              return (
                <img key={ind}  src={el} alt="description"></img>
              )
            })}</td>
            </tr>
       )
    
  })
  

  render() {
    return (
    <div>
  <table>

    <thead>
        <tr>
          <th>Название</th>
          <th>Цена</th>
          <th>Остаток на складе</th>
          <th>Фото</th>
        </tr>
    </thead>
  
    <tbody>
          {this.viewItems}
    </tbody>
        
   
     
      
  </table>
       <button onClick={this.checkData}>Press ME</button>
      </div>
  
    );
  }
}

Table.propTypes = {
  
  items: PropTypes.arrayOf (PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    fotos: PropTypes.arrayOf(PropTypes.string).isRequired,
    left: PropTypes.number.isRequired,
    ID: PropTypes.number.isRequired,
  })),
}

export default Table;
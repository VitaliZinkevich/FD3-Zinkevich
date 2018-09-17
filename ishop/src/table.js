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
            <tr key={el.ID} align="center">
            <td>{el.ID}</td>
            <td>{el.name}</td>
            <td>{el.price + ' BYN'}</td>
            <td>{el.left}</td>
            <td>{el.fotos.map ((el, ind)=>{
              return (
                <img key={ind}  src={el} alt={'foto ' + ind + ' ' } height="150" width="100"></img>
              )
            })}</td>
            </tr>
       )

  })


  render() {
    return (
    <div>
  <table className='table table-striped'>

    <thead className='thead-dark'>
        <tr align="center">
          <th >Штрих код товара</th>
          <th >Название</th>
          <th >Цена</th>
          <th >Остаток на складе</th>
          <th >Фото</th>
        </tr>
    </thead>

    <tbody>
          {this.viewItems}
    </tbody>




  </table>

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

import React, { Component } from 'react';

class Tableline extends Component {

//1 нет смысла в отдельной проверке propTypes тк весь массив проверен на входе сразу на соотв форме.?

  render() {
    

    
    return (
        <tr align="center"
        onClick={/*this.props.handleClickonLine}*/()=>{this.props.handleClickonLine(this.props.el.ID)}}
        className={(this.props.selectedLineID === this.props.el.ID ) ? 'bg-warning' : null}
        >
                <td>{this.props.el.name}</td>
                <td>{this.props.el.price+ ' BYN'}</td>
                <td>{this.props.el.left}</td>
                <td>{this.props.el.fotos.map ((el, ind)=>{
                  return (
                    <img key={ind}  src={el} alt={'foto ' + ind + ' '} height="150" width="100" ></img>
        )
                })}</td>
                <td><button onClick={()=>{this.props.deleteItem(this.props.el.ID)}}>Удалить</button></td>
                </tr>
    );
  }
}

export default Tableline;
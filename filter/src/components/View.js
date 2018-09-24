import React, { Component } from 'react';


class View extends Component {


    render() {

    return (

      <p className='font-weight-bold'>
        {this.props.el}
      </p>

    );
  }
}

export default View;

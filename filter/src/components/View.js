import React, { Component } from 'react';


class View extends Component {
  
  
    render() {
   
    return (
      <p>
        {this.props.el}
      </p>
    );
  }
}

export default View;
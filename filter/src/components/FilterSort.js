import React, { Component } from 'react';
import View from './View'
import PropTypes from 'prop-types';

class FilterSort extends Component {
    
    state = {items:this.props.items, unSortedState:[] ,sort: false, forFilter: ''}

    static propTypes = {
        items: PropTypes.arrayOf(PropTypes.string)
    }

handleChange = (e)=>{

    let newItemsList = [...this.props.items]
    
        newItemsList = newItemsList.filter ((el)=> {
            if (el.indexOf (e.target.value) !== -1) {
                return true
            } else {
                return false
            }
    })

        if (this.state.sort === true) {
            newItemsList =  newItemsList.sort()
            this.setState ({items: newItemsList, forFilter : e.target.value})
        } else {
            this.setState ({items: newItemsList, forFilter : e.target.value})
        }

}

handleCheckbox = ()=> {
    
    if (this.state.sort === false) {
        let newItemsList = [...this.props.items]
    
    newItemsList = newItemsList.filter ((el)=> {
            
            if (el.indexOf (this.state.forFilter) !== -1) {
                return true
            } else {
                return false
            }
    }
    )
   
    newItemsList = newItemsList.sort()
    
    this.setState ({sort: !this.state.sort, items: newItemsList})

    } else {

        let newItemsList = [...this.props.items].filter (
            (el)=> {
                if (el.indexOf (this.state.forFilter) !== -1) {
                    return true
                } else {
                    return false
                }
        }
        )
    
    this.setState ({sort: !this.state.sort, items: newItemsList})

    }
   
   
}

    render() {
    
        let viewList = this.state.items.map ((el,ind)=> {
            return (<View 
            key={ind} // можно добавить ай ди к элементам массива
            el={el}>
            </View>) })

    return (
     <div >
     <input type='checkbox'
     onClick= {this.handleCheckbox}
     /> {(this.state.sort) ? "1": "0"}
     
     <input 
     type='text'
     onChange={this.handleChange}
     /> {this.state.forFilter}
        {viewList}
      </div>
    );
  }
}


export default FilterSort;
import React, { Component } from 'react';
import View from './View'
import PropTypes from 'prop-types';

class FilterSort extends Component {

//1 можно ли таким образом создавть сиейи, прописывая свойство или использовать конструктор класса

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

//2 функцию для filter хочется вынести в отдельную, тк она используется несколько раз. Но для сравнения используются разные переменные. Здесь стей в верхней объект события.

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
            key={ind} //3 можно добавить ай ди к элементам массива, задание не акцентирует на этом внимание. Использован индекс map
            el={el}>
            </View>) })

    return (
     <div>
     <span className='mx-2'>Check for sort</span>
     <input type='checkbox'
     onClick= {this.handleCheckbox}
     />

    <span className='mx-2'>Type for filter</span>
     <input
     type='text'
     onChange={this.handleChange}
     />
     <div className=' border-5 border border-info my-3'>

     {viewList}

     </div>
    </div>
    );
  }
}


export default FilterSort;

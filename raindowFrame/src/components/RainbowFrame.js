import React from 'react'
import PropTypes from 'prop-types';

const RainbowFrame = (props)=>{

    let childrenWithWrapperDiv = props.children

    props.colors.forEach((el)=>{
        
        childrenWithWrapperDiv = <div 
                                  className='m-1' 
                                  style={{border:"solid 5px "+el}}>
                                  {childrenWithWrapperDiv}
                                  </div> 
     })

    return (
        <div>
           {childrenWithWrapperDiv}
        </div>
    )

}

RainbowFrame.propTypes = {
       colors: PropTypes.arrayOf(PropTypes.string)
  };

  export default RainbowFrame;
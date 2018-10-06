import React from 'react'
import PropTypes from 'prop-types';

const br2jsx = (props)=>{

    

    let line = props.string.split (/&lt;br ?\/>|&lt;br ?\/&rt;|<br ?\/>|<br ?>/g)

    line = line.map ((elem, index)=>{
        return (
        <span key={index}>
            {elem}
            <br/>
        </span>
        )
    })
    
return (
    <div>
        {line}
    </div>
)

}

br2jsx.propTypes = {
       text: PropTypes.string.isRequired,
  };

export default  br2jsx


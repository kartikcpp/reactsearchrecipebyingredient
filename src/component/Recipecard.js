import React from 'react'
import './recipecard.css'

function Recipecard({recipename,recipeimage,recipeurl}) {
    return (
        <div className='Recipecard' onClick={(e)=>{window.open(recipeurl)}}  style={{margin:'10px'}}>
            <h3>{recipename}</h3>
            <img src={recipeimage} alt="recipeimg"/>
            
        </div>
    )
}

export default Recipecard

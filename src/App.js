import { useState } from 'react';
import './App.css';
import axios from "axios";
import Recipecard from './component/Recipecard';

function App() {
  const [recipes,setrecipes]=useState([])
  const [query,setquery]=useState("mango")
  const [mealtype,setmealtype]=useState("lunch")
  const app_id="4ff34445";
  const app_key="123b4af1a45838386fc25d14392035aa"
  const url=`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${app_id}&app_key=${app_key}&mealType=${mealtype}`
  async function getRecipe(e){
    e.preventDefault()
    document.getElementById('')
    const response =await axios.get(url)
    console.log(response.data.hits)
    setrecipes(response.data.hits)
  }

  return (
    <div className="App">
    
     <h1>food search by ingredient👌</h1>
     <form action="" className='app-searchForm'>
       <input type='text'  className='app__search' placeholder='type the ingredient' autoComplete='off'
       onChange={(e)=>{setquery(e.target.value)}}
       />
     
     <select onChange={(e)=>{console.log(e.target.value);setmealtype(e.target.value)}} className='app__healthLabels'>
       <option value='Lunch'>lunch</option>
       <option value='Breakfast'>Breakfast</option>
       <option value='Dinner'>Dinner</option>
     </select>
     <input type='submit' onClick={getRecipe} value='get recipe' className='app__submit'/>
     </form>
     <hr/>
     <div className='recipecontainer'>
       {recipes.map((elem,index)=>{
        return(<Recipecard recipename={elem.recipe.label} recipeimage={elem.recipe.image} recipeurl={elem.recipe.url} key={index}/> )

       })}
     </div>
    </div>
  );
}

export default App;

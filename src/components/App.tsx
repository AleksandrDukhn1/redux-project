
import { useGetRecipesQuery } from '../store/api/api';
import CreateRecipe from './create-recipe/CreateRecipe';
import Header from './header/Header';
import RecipeItem from './recipe-item/RecipeItem';
import User from './user/User';
import {useState} from 'react';


function App() {

  const [search, setSearch] = useState('')
  const [isSearch, setIsSearch] = useState('')
  const {isLoading, data} = useGetRecipesQuery(isSearch, {})

  const handleSearch = () => {
    setIsSearch(search)
  }

  return (
    <section>
      <Header />
     {/* <User /> */}
     <CreateRecipe />
     <div style={{padding: 10}}>
      <p>If you wanna find:</p>
      <input 
     type='search' 
     value={search} 
     onChange={e => setSearch(e.target.value)}
     placeholder='Enter search' />
     <button onClick={handleSearch}>Search</button>
     </div>
    <div>
      {isLoading ? (
      <div>Loading...</div>
      ) : data ? ( 
        data.map(recipe => <RecipeItem 
        key={recipe.id}
        recipe={recipe}
       />)
      ) : (<div>Not found</div>)}
    </div>
    </section>
  )
}

export default App;

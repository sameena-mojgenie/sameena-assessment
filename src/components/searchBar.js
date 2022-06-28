import React, { useState, useEffect  } from 'react'
import { listAllBooks } from '../redux/actions/listingActions'
import { useDispatch } from 'react-redux'

const SearchBar = () => {

    const dispatch = useDispatch();

    // const [name, setName] = useState();
    const [inputs, setInputs] = useState({
        name: "",
        sortBy: "asc",
        race: "",
    })

    useEffect(() => {
        dispatch(listAllBooks("", "", ""));
      }, [])

    const findCustomizedCharacters = () => {
        dispatch(listAllBooks(inputs?.name, inputs?.sortBy, inputs?.race))
    }

    return (
        <div className="search-bar">
            <div className="first-row">
                <div>
                    <label>Search: </label>
                    <input
                        type="text"
                        name="search"
                        value={inputs?.name}
                        onChange={(e) => setInputs({ ...inputs, name : e.target.value})}
                        placeholder="Search by name: "
                    >
                    </input>
                </div>

                <div>
                    <label>Sort By:  </label>
                    <select 
                    name="sortBy" 
                    id="sortBy" 
                    placeholder="By name (asc/desc)"
                    value={inputs?.sortBy}
                    onChange={(e) => setInputs({ ...inputs, sortBy: e.target.value})}
                    >
                     <option>By name (asc/desc)</option>
                        <option value="asc">asc</option>
                        <option value="desc">desc</option>  
                    </select>
                </div>
            </div>
            <div className='second-row'>
                <div>
                    <label htmlFor="race">Race: </label>

                    <select 
                    name="race" 
                    value={inputs?.race}
                    onChange={(e) => setInputs({ ...inputs, race: e.target.value})}
                    id="race" 
                    placeholder="list of race, multiselection"
                    multiple
                    >
                        <option value="Hobbit">Hobbit</option>
                        <option value="Human">Human</option>
                        <option value="Orc">Orc</option>
                        <option value="Goblin">Goblin</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="cars">Gender </label>

                    <select name="cars" id="cars" placeholder="male/female/any">
                        <option value="volvo">volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <button onClick={findCustomizedCharacters}>Submit</button>
            </div>
        </div>
    )
}

export default SearchBar
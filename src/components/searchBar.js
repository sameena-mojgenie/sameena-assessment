import React, { useState, useEffect } from 'react'
import { listAllBooks } from '../redux/actions/listingActions'
import { useDispatch } from 'react-redux'

const SearchBar = () => {

    const dispatch = useDispatch();

    const [inputs, setInputs] = useState({
        name: "",
        sortBy: "asc",
        race: "",
        gender: "",
    })

    useEffect(() => {
        dispatch(listAllBooks("", "", "", ""));
    }, [])

    const findCustomizedCharacters = () => {
        dispatch(listAllBooks(inputs?.name, inputs?.sortBy, inputs?.race, inputs?.gender))
    }

    const handleChange = (e) => {
        let value = Array.from(
            e.target.selectedOptions,
            (option) => option.value
          );
          setInputs({ ...inputs, race: value })      
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
                        className="search-bar-box"
                        onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
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
                        className="search-bar-box"
                        onChange={(e) => setInputs({ ...inputs, sortBy: e.target.value })}
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
                        onChange={handleChange}
                        id="race"
                        placeholder="list of race, multiselection"
                        multiple={true}
                    >
                        <option value="Hobbit">Hobbit</option>
                        <option value="Human">Human</option>
                        <option value="Orc">Orc</option>
                        <option value="Goblin">Goblin</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="cars">Gender: </label>
                    <select 
                    name="gender" 
                    id="cars" 
                    placeholder="male/female/any"
                    className='search-bar-box'
                    value={inputs?.gender}
                    onChange={(e) => setInputs({ ...inputs, gender: e.target.value })}
                    >
                        <option >male/female/any</option>
                        <option value="male">Male</option>
                        <option value="Female">Female</option>
                        <option value="">Any</option>
                    </select>
                </div>
                <button onClick={findCustomizedCharacters} className="submit-btn">Submit</button>
            </div>
        </div>
    )
}

export default SearchBar
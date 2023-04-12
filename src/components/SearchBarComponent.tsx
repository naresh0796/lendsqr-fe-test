import React, { useState } from 'react'
import '../styles/Search.scss'
import { AiOutlineSearch } from 'react-icons/ai'
const SearchBarComponent = () => {

  const [searchInput, setSearchInput] = useState('');

  return (
    <div className='searchSection'>
      <input 
      type="text"
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
      className="searchBar"
      placeholder='Search for anything'
      />
      <section className='searchIconSection'>
        <AiOutlineSearch />
      </section>
    </div>
  )
}

export default SearchBarComponent;

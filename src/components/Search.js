import React from 'react'
import searchIcon from '../images/search.png'



export default function Search() {
    return (
        <div className='main--container'>
            <div className='search--container'>
                <input 
                    className='search--input'
                    type='text'
                    placeholder='Search for a country...'
                    name='search'
                />
                <img
                    className='search--icon'
                    src={searchIcon}
                    alt='search icon'
                />
            </div>
            <select className='dropdown'>
                <option selected>Filter by Region</option>
                <option>Africa</option>
                <option>America</option>
                <option>Asia</option>
                <option>Europe</option>
                <option>Oceania</option>
            </select>
        </div>
    )
}
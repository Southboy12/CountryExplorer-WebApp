import React from 'react'
import searchIcon from '../images/search.png'



export default function Search(props) {
    return (
        <div className='main--container search--body'>
            <div className='search--container'>
                <input 
                    className='search--input'
                    type='text'
                    placeholder='Search for a country...'
                    name='search'
                    value={props.formData.search}
                    onChange={props.handleChange}
                />
                <img
                    className='search--icon'
                    src={searchIcon}
                    alt='search icon'
                />
            </div>
            <select 
                className='dropdown'
                id='filterRegion'
                name='filterRegion'
                value={props.formData.filterRegion}
                onChange={props.handleChange}
            >
                <option>Filter by Region</option>
                <option>Africa</option>
                <option>America</option>
                <option>Asia</option>
                <option>Europe</option>
                <option>Oceania</option>
            </select>
        </div>
    )
}
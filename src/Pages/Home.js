import React from 'react'
import Search from '../components/Search'
import Main from '../components/Main'



export default function Home(props) {
    return (
        <div>
            <Search selectData={props.selectData} handleFilter={props.handleFilter} handleChange={props.handleChange} formData={props.formData}/>
            <Main countryData={props.countryData} />
        </div>
    )
}
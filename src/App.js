import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Main from './components/Main'
// import data from './data.json'



export default function App() {

    const [countryData, setCountryData] = useState(null)
    const [formData, setFormData] = useState(
        {
            search: "",
            filterRegion: ""
        }
    )

    // console.log(`https://restcountries.com/v3.1/${formData.search ? "name/" : ""}${formData.search ? formData.search : "all" }`);
    async function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))

    }  
    
    useEffect(() => {
        async function getCountryData() {
            const res = await fetch(`https://restcountries.com/v3.1/${formData.search ? "name/" : ""}${formData.search ? formData.search : "all" }`)
            const data = await res.json()
            setCountryData(data)
        }
        getCountryData()
    }, [formData.search])
    
    return (
        <div>
            <Navbar />
            <Search handleChange={handleChange} formData={formData}/>
            <Main countryData={countryData} />          
        </div>
    )
}
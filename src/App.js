import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Main from './components/Main'
// import data from './data.json'



export default function App() {

    const [countryData, setCountryData] = useState(null)
    console.log(countryData);
    
    useEffect(() => {
        async function getCountryData() {
            const res = await fetch("https://restcountries.com/v3.1/all")
            const data = await res.json()
            setCountryData(data)
        }
        getCountryData()
    }, [])
    

  
    // const world = countryData ? countryData.map((item, index) => {
    //     return (
    //         <Main
    //             key={index} 
    //             countryData={item}
    //         />
    //     )
    // }) : null
    
    return (
        <div>
            <Navbar />
            <Search />
            <Main countryData={countryData} />          
        </div>
    )
}
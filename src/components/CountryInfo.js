import React from 'react'
import { useParams } from 'react-router-dom';



export default function CountryInfo({countryData}) {
   const { countryName } = useParams()
  
   if (!countryData) {
    return <div>Loading...</div>
   }
   const country = countryData.find(country => country.name.common === countryName)
   if (!country) {
    return <div>Country not found</div>
   }
    const countryCode = Object.keys(country.currencies)[0]
    
    
    let countryLang = ""
    for (let key in country.languages) {
        let value = country.languages[key]
        countryLang += value + ", "
    }
    countryLang = countryLang.slice(0, -2)
    const { nativeName } = country.name
    const nativeCode = Object.keys(nativeName)[0]
    console.log(nativeCode);
    // const border = country.borders ? country.borders.join(', ') : ""
    const borderList = country.borders && country.borders.length > 0 ?
        country.borders.map((item, index) => (
            <h4 className='borderName' key={index}>{item}</h4>
        ))
    : (
        <p className='no--border'>No border countries</p>
    )
    return (
        <div className='country--container'>
           <section className='country--btn'>
                <button>&larr; Back</button>
           </section>
           <section className='country--row'>
                <div className='country--flag__container'>
                    <img src={country.flags.png} alt={country.flags.alt} className='flag--img'/>
                </div>
                <div className='country--description'>
                    <h4 className='country--name'>{countryName}</h4>
                    <div className='description--number'>
                        <div className='description--one'>
                            <h4>Native Name: <span>{nativeName[nativeCode].common}</span></h4>
                            <h4>Population: <span>{country.population}</span></h4>
                            <h4>Region: <span>{country.region}</span></h4>
                            <h4>Sub Region: <span>{country.subregion}</span></h4>
                            <h4>Capital: <span>{country.capital}</span></h4>
                        </div>
                        <div className='description--two'>
                            <h4>Top Level Domain: <span>N/A</span></h4>
                            <h4>Currencies: <span>{country.currencies[countryCode].name}</span></h4>
                            <h4>Languages: <span>{countryLang}</span></h4>
                        </div>
                    </div>
                    <div className='border--info'>
                        <h4>Border Countries:</h4>
                        <h4 className='country--border'>{borderList}</h4>
                    </div>
                    
                </div>
           </section>
        </div>
    )
}

import React from "react";
import { Link } from "react-router-dom";

export default function Main(props) {
  const countries = props.countryData;

  const world =
    countries &&
    countries.map((country) => (
      <div className="col" key={country.name.common}>
        <Link
          to={{
            pathname: `/countryinfo/${country.name.common}`,
            state: { country }
          }}
        >
          <div className="flag--container">
            <img
              src={country.flags.png}
              alt={country.flags.alt}
              className="flag--img"
            />
          </div>
        </Link>
        <div className="description">
          <h3>{country.name.common}</h3>
          <h4>
            Population: <span>{country.population}</span>
          </h4>
          <h4>
            Region: <span>{country.region}</span>
          </h4>
          <h4>
            Capital: <span>{country.capital}</span>
          </h4>
        </div>
      </div>
    ));

  return (
    <div className="main--container">
      <div className="row">{world}</div>
    </div>
  );
}

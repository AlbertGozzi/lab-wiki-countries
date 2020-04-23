import React from 'react';
import { NavLink } from 'react-router-dom';
// import { useHistory } from "react-router-dom";

function CountryList(props) {

    const displayCountryList = () => {
        // let selected = useHistory().location.pathname;
        return props.countries.map((country) => {
            return <NavLink to={`/${country.cca3}`} key={country.cca3} className="list-group-item list-group-item-action">
             <img src={`https://www.countryflags.io/${country.cca2.toLowerCase()}/flat/64.png`} alt={country.cca3}></img>
             {' '} 
             {country.name.common} 
            </NavLink>
        });
    }

    // render() {
        return (
            <div className="col-5 countryList overflow-auto">
                {displayCountryList()}
            </div>
        );
    // }
}

export default CountryList;
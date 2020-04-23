import React, { Component } from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

class CountryDetail extends Component {    
    displayBorders = (country) => {
        return <ul>
            {country.borders.map(countryCca3 => {
                let country = countries.find(country => country.cca3 === countryCca3);
                return <li key={country.cca3}><Link to={`/${country.cca3}`} >{country.name.common}</Link></li>;
            })}
        </ul>;
    }

    displayCountryInfo = () => {
        let country = countries.find(country => country.cca3 === this.props.match.params.countryCca3);
        return (
            <div>
                <h3>{country.name.common}</h3>
                <hr></hr>
                <div className='row'>
                    <div className='col-4'>
                        <strong>Capital</strong>
                    </div>
                    <div className='col-8'>
                        {country.capital}
                    </div>
                </div>
                <hr></hr>
                <div className='row'>
                    <div className='col-4'>
                        <strong>Area</strong>
                    </div>
                    <div className='col-8'>
                        {`${country.area} km2`}
                    </div>
                </div>
                <hr></hr>
                <div className='row'>
                    <div className='col-4'>
                        <strong>Borders</strong>
                    </div>
                    <div className='col-8'>
                        {this.displayBorders(country)}
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="col-7">
                {this.displayCountryInfo()}
            </div>
        );
    }
}

export default CountryDetail;
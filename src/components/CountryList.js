import Country from "./Country";

const CountryList = ({bucketCountries,visitCountry}) => {
return(
    <>
    <ul>
        {bucketCountries.map(country => <Country name={country.name} id={country.id} visitCountry={visitCountry}/>)}
    </ul>
    </>
    )
}

export default CountryList;
import Country from "./Country";

const CountryList = ({bucketCountries}) => {
return(
    <>
    <ul>
        {bucketCountries.map(country => <Country name={country.name} id={country.id} visited={country.visited}/>)}
    </ul>

    </>
    )
}

export default CountryList;
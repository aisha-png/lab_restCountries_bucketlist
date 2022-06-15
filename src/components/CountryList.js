import Country from "./Country";

const CountryList = ({bucketCountries,setVisited}) => {
return(
    <>
    <ul>
        {bucketCountries.map(country => <Country name={country.name} id={country.id} visited={country.visited} setVisited={setVisited}/>)}
    </ul>

    </>
    )
}

export default CountryList;
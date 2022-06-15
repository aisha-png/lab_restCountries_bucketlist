import { useRef , useState } from "react"
import CountryList from "../components/CountryList";
const CountryContainer = () => {

let countries;
fetch("https://restcountries.com/v2/all")
.then((response) => {
    if (response.ok) {
        return response.json();
    }
    else {
        throw new Error("NETWORK RESPONSE ERROR");
    }
})
.then(data => initialise(data))
.then(data => {
    console.log(data);
})
.catch((error) => console.error("FETCH ERROR: ", error));

function initialise(countriesData) {
    countries = countriesData;
    let options = "";
    const countriesList = document.getElementById("countries")
    for (let i=0; i<countries.length; i++){
        options += `<option value="${countries[i].name}">${countries[i].name}</option>`;
    }
    countriesList.innerHTML = options;
}

const countryRef = useRef()

const [bucketCountries, setBucketCountries] = useState([])
const [bucketId, setBucketId] = useState(0)
const [visited, setVisited] = useState(false)

const handleAddCountry = () => {
  const name = countryRef.current.value
  setBucketCountries(prevBucketCountries => [...prevBucketCountries, {name:name, id: bucketId, visited:visited}])
  setBucketId(id => id += 1)
}

const visitCountry = () => {
  setVisited(prev => ({...prev, visited: !prev.visited}))
}

    return (
        <>
            <label htmlFor="countries">Choose a country:</label>
            <select id="countries" ref={countryRef}>
            </select>
            <button onClick={handleAddCountry}>Add to List</button>
            <CountryList bucketCountries={bucketCountries} setVisited={setVisited}/>
            
        </>

    )
}

export default CountryContainer;
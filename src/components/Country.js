const Country = ({name,id},visitCountry) => {
    return(
        <>
        <li key={id}>{name}</li><button onClick={() => visitCountry()}>Visited</button>
        </>
    )
}

export default Country;
const Country = ({name,id,setVisited}) => {
    return(
        <>
        <li key={id}>{name}</li><button onClick={() => setVisited(prev=> ({...prev, visited: !prev.visited}))}>Visited</button>
        </>
    )
}

export default Country;
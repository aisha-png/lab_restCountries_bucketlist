const Country = ({name,id}) => {

    return(
        <>
        <li key={id}>{name}</li><button>Visited</button>
        </>
    )
}

export default Country;
const App = () =>{

    const bootcamps = [
        { id: 1, 
          name: 'PHP Bootcamp',
          average_rating: 8
        },
        { id: 2, 
          name: 'Javascript Bootcamp',
          average_rating: 10
        }
    ]

    return (
        <div>
            <h1>Listado de Bootcamps</h1>
            <ul>
                {bootcamps.map((bootcamp, index)=>(
                    <li key={index}>{bootcamp.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default App
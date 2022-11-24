//Dependencias necesarias
import { useState } from "react";

//Data 
import Resenias from "./data/Resenia";

//Componentes
import Header from "./componentes/Header";
import Resenia from "./componentes/Resenia";
import ReseniaList from "./componentes/ReseniaList";

function App(){

    //Crear estado para arreglo de resenias
    const [lista_resenias, 
           setListasResenias] = useState(Resenias)

    return (
        <div className="container">
            <ReseniaList  listaresenias={lista_resenias}/>
        </div>
    )
}
export default App;
import Resenia from "./Resenia";

const ReseniaList = ({listaresenias}) =>{

  //Condicional en caso de que no llegue el arreglo
  if(!listaresenias || listaresenias.lenght === 0){
    return <p>No hay reseñas</p>
  }else{
    return(
      <div className="feedback-list">
        {/*Recorrer la lista de resenias*/}
        {listaresenias.map((resenia)=>
          (
            <Resenia 
              key={resenia.id}
              resenia={resenia} 
            />
          ) 
        )}
      </div>
    )
  }
}

export default ReseniaList;
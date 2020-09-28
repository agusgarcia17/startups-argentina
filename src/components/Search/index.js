import React, { useContext } from 'react'; 
import StartupContext from '../../context/StartupContext';

function Search() {

  const busqueda = useContext(StartupContext)

  return (
    <>
    <div>
    <label>Buscar</label>
      <input className="buscador" type='text' onChange={(e) => {busqueda.handleInput(e.target.value)}}/>
    </div>
      

    </>
  );
}

export default Search;

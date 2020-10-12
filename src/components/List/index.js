import React from 'react'; 
import data from './../../data-startup.json' 
import "./styles.scss"
import { useLocalStorage } from './../../hooks/useLocalStorage'; 


function List() {

  const [getter] = useLocalStorage()
  console.log(getter)

  return (
    <div className="listContainer">
      {getter.map(empresa=>{
        return (
          <div className="empresaContainer" key={empresa.name}>
          <img src={empresa.logo} alt={empresa.name}/>
          <h2>{empresa.name}</h2>
          <p>{empresa.description}</p>
          </div>
        )
      })}
    </div>
  );
}

export default List;

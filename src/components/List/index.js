import React from 'react'; 
import data from './../../data-startup.json' 
import "./styles.scss"

function List() {
  return (
    <div className="listContainer">
      {data.map(empresa=>{
        return (
          <div className="empresaContainer" key={empresa.id}>
          <img src={empresa.logo} alt={empresa.title}/>
          <h2>{empresa.title}</h2>
          <p>{empresa.description}</p>
          </div>
        )
      })}
    </div>
  );
}

export default List;

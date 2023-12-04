
import { useEffect, useState } from "react";
import axios from "axios";
import Url from "./models/Url";
import { Character } from "./models/Character";
import './style/CardsContainer.css'
//            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
//          <p>{character.description}</p>

const CardsContainer: React.FC = (name: string) => {
  
    
  return (
    <div className='cards-container'>
      {characters.map((character: Character) => (
        <div key={character.id} className='card'>
          <h3>{character.name}</h3>
          <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
            className='character-image'
          />
          <p>{character.description}</p>
        </div>
      ))}
    </div>
  );

}
export default CardsContainer;
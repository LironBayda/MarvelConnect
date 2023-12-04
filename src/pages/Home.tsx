import '../style/Home.css'
import { useEffect, useState } from "react";
import axios from "axios";
import Url from "../models/Url";
import { Character } from "../models/Character";
import CardsContainer from '../CardsContainer'
import { Link } from 'react-router-dom';
//           

const Home: React.FC = () => {

const  [searchInput, setSearchInput]= useState<string>("b")
const [characters, setCharacters]= useState<Character[]>([])


  const fetchMarvelCharacters = async () => {
    try {
        const apiUrl = Url(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${searchInput}&`);
        console.log(apiUrl);
        const response = await axios.get(apiUrl);
            setCharacters( response.data.data.results);
      } catch (error) {
        console.error('Error fetching initial characters from Marvel API:', error);
        throw error;
      }
  }


  useEffect(() => {
    // Fetch initial data when the component mounts
      fetchMarvelCharacters();
  }, []);

  return (
    <div className='main'>
      <div className ="banner">
        <h1>Marvel connect : Characters</h1>
      </div>
      <div className='search'>
      <input 
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
        <button onClick={()=>fetchMarvelCharacters()}>search</button>
      </div>
      <div className='cards-container' >

          {characters.map((character: Character) => (

          <div  className='card' key={character.name}>
            <h3 className='name'>{character.name}</h3>
            <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
              className='character-image'
            />
            <p className='description'>{character.description}</p>
             <Link to={`comics_id/${character.id}`}>comics</Link>
        </div>

        ))}
        </div>


    </div>
    );
}
export default Home;
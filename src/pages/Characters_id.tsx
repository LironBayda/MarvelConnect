import '../style/Home.css'
import { useEffect, useState } from "react";
import axios from "axios";
import Url from "../models/Url";
import { Characters } from "../models/Characters";
import CardsContainer from '../CardsContainer'
import { useParams } from 'react-router-dom';

const Characters_id: React.FC = () => {
const [characters, setCharacters]= useState<Characters[]>([])
const { comic_id } = useParams();

  const fetchMarvelCharacters = async () => {
    try {
        const apiUrl = Url(`https://gateway.marvel.com:443/v1/public/comics/${comic_id}/characters?&`);
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
        <h1>Characters</h1>

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


            </div>

              ))}
              </div>


          </div>
          );
      }
export default Characters_id;
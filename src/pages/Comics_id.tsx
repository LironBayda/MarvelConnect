import '../style/Home.css'
import { useEffect, useState } from "react";
import axios from "axios";
import Url from "../models/Url";
import { Comic } from "../models/Comic";
import CardsContainer from '../CardsContainer'
import { useParams } from 'react-router-dom';

const Comics_id: React.FC = () => {
const [comics, setComics]= useState<Comic[]>([])
  const { character_id } = useParams();


  const fetchMarvelComics = async () => {
    try {
        const apiUrl = Url(`https://gateway.marvel.com:443/v1/public/characters/${character_id}/comics?&`);
        console.log(apiUrl);
        const response = await axios.get(apiUrl);
              setComics( response.data.data.results);
      } catch (error) {
        console.error('Error fetching initial characters from Marvel API:', error);
        throw error;
      }
  }


  useEffect(() => {
    // Fetch initial data when the component mounts
        fetchMarvelComics();
  }, []);

  return (
    <div className='main'>
      <div className ="banner">
        <h1>comics</h1>

      </div>
      
      <div className='cards-container' >

        {comics.map((comic: Comic) => (

        <div  className='card' key={comic.title}>
          <h3 className='name'>{comic.title}</h3>
          <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            alt={comic.name}
            className='character-image'
          />
          <p className='description'>{comic.description}</p>


      </div>

        ))}
        </div>


    </div>
    );
}
export default Comics_id;
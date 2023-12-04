import { useEffect, useState } from "react";
import axios from "axios";
import Url from "../models/Url";
import { Comic } from "../models/Character";
import CardsContainer from '../CardsContainer'
import { Link } from 'react-router-dom';
//               <Link to={`comics_id/${comics.id}`}>comics</Link>
         

const Comics: React.FC = () => {

const  [searchInput, setSearchInput]= useState<string>("b")
const [comics, setComics]= useState<Comic[]>([])


  const fetchMarvelComics = async () => {
    try {
        const apiUrl = Url(`https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=${searchInput}&`);
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
        <h1>Marvel connect : Comics</h1>
      </div>
      <div className='search'>
      <input 
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
        <button onClick={()=>fetchMarvelComics()}>search</button>
      </div>
      <div className='cards-container' >

          {comics.map((comic: Comics) => (

          <div  className='card' key={comic.id}>
            <h3 className='name'>{comic.name}</h3>
            <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.name}
              className='character-image'
            />
            <p className='description'>{comic.description}</p>
          
             <Link to={`/characters_id/${comic.id}`}> character</Link>
        </div>

        ))}
        </div>


    </div>
    );
}
export default Comics;
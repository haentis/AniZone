import { useState, useEffect } from 'react';
import './animeSection.css';
import { Link } from 'react-router-dom';

const  BASE_URL = 'https://shikimori.one/api/animes?order=popularity&limit=50';

function AnimeSection(){

    const [animeResult, setAnimeResult] = useState([]);


    useEffect(() => {

        const getAnime = async() => {
            try{
                const respones = await fetch(BASE_URL);
                if(!respones.ok){
                    console.log('Error HTTP', respones.status);
                }
                const resultRespones = await respones.json();
                console.log(resultRespones);
                setAnimeResult(resultRespones);
            }catch(error){
                console.log('Ошибка при загрузке данных', error);
            }
        }

        getAnime();
    }, []);


    return(
        <>
            <div className="main">
                {animeResult.length > 0 ?(
                     animeResult.map((anime, index) => (
                        <Link to={`/Аниме/${anime.id}`} style={{textDecoration:"none"}} key={index}>
                            <div key={index} className="anime-card">
                            <img src={`https://shikimori.one${anime.image.original}`} className='anime-image' />
                            <h3 className='anime-title'>{anime.russian || anime.name}</h3>
                            <p className='anime-score'>Рейтинг: {anime.score}</p>
                            </div>
                        </Link>
                  ))) : (
                    // <p className='loading-p'>Загрузка....</p>
                    <div className="loader1"></div>
                  )}
            </div>
        </>
    )
}



export default AnimeSection;
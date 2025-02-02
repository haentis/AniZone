import Nav from "../components/nav/nav";
import "../components/FullAnime/FullAnime.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


const BASE_URL = 'https://shikimori.one/api/animes/';

function FullAnime(){

    const {id} = useParams();
    const [animeInfo, setAnimeInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    
    
        useEffect(() => {
    
            const getAnime = async() => {
                setLoading(true);

                try{
                    const response = await fetch(`${BASE_URL}${id}`);
                    if(!response.ok){
                        console.log('Error HTTP', response.status);
                    }
                    const resultResponse = await response.json();
                    console.log(resultResponse);
                    setAnimeInfo(resultResponse);
                }catch(error){
                    console.log('Ошибка при загрузке данных', error);
                }
                finally{
                    setLoading(false);
                }
            }

            
            getAnime();
        }, [id]);
        
        if(loading){
           return <div className="loader"></div>
        }

    return(
        <>
                <section>
                    <div className="left-info-anime">
                        {animeInfo && <img src={`https://shikimori.one${animeInfo.image.original}`} className='image-info' />}
                    </div>
                    <div className="info-anime">
                        {animeInfo && <h1  className="header-h1">{animeInfo.russian}</h1>}
                        {animeInfo && <p className="desc-anime">{animeInfo.description}</p>}
                    </div>
                </section>
            <Nav/>
        </>
    )
}


export default FullAnime;
import Nav from "../components/nav/nav";
import "../components/FullAnime/FullAnime.css";
import { Link, useParams } from "react-router-dom";
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

        const addToLibrary = () => {
            // Получить текущий массив ID из LocalStorage или создать пустой
            const animeIds = JSON.parse(localStorage.getItem('id_anime')) || [];
        
            // Проверить, если ID уже существует, чтобы не добавлять дубли
            if (!animeIds.includes(id)) {
                animeIds.push(id); // Добавить новый ID
            }
        
            // Сохранить обновлённый массив обратно в LocalStorage
            localStorage.setItem('id_anime', JSON.stringify(animeIds));
        };
        

    return(
        <>
                <section>
                    <div className="left-info-anime">
                        {animeInfo && <img src={`https://shikimori.one${animeInfo.image.original}`} className='image-info' />}
                        <Link to={'/watch'} className="watch-link">Смотреть</Link>
                        <button className="add-button" onClick={addToLibrary}>В Библеотеку</button>
                    </div>
                    <div className="info-anime">
                        {animeInfo && <h1  className="header-h1">{animeInfo.russian}</h1>}
                        {animeInfo && <p className="desc-anime">{animeInfo.description}</p>}
                        <div className="genres-block">
                            {animeInfo.genres ? (
                                (animeInfo.genres.map((genreses, index) => (
                                            <div key={index} className="genres"><p>{genreses.russian}</p></div>
                                )))
                            ):(
                                <p>Не найдено жанра</p>
                            )}
                        </div>
                    </div>
                </section>
            <Nav/>
        </>
    )
}


export default FullAnime;
import { useState, useEffect } from "react";
import './banner.css';
import playIcon from '../../assets/icons/playIcon.png';



const BASE_URL = 'https://api.jikan.moe/v4/top/anime';


const randomIndexTrailer = Math.floor(Math.random() * 25);

function Banner(){

    const [trailer, SetTrailer] = useState(null);


    useEffect(() => {
        const fetchTrailer = async() => {
            try{
                const response  = await fetch(`${BASE_URL}`);
                const postTrailer = await response.json();
                SetTrailer(postTrailer);
                // console.log(postTrailer)
            }catch(Error){
                console.log('Ошибка при загрузке данных',Error)
            }
           
        } 
        fetchTrailer()
    },[])


    return(
        <>
           {trailer && trailer.data && trailer.data[randomIndexTrailer]?.trailer?.images.maximum_image_url ? ( // Проверяем наличие данных
            <div className="banner">
                <img 
                src={trailer.data[randomIndexTrailer]?.trailer?.images.maximum_image_url}
                alt="bannerImage"
                width={'100%'}
                height={'800px'}
                style={{opacity:"50%"}}
                />
                <div className="block-title-button">
                    <h1>{trailer.data[randomIndexTrailer]?.title_english}</h1>
                    <button className="watch-button">
                        <img src={playIcon} alt="" width={"20px"} height={"20px"} />
                        Watch now
                    </button>
                </div>
            </div>
            ) : (
                <p>Loading...</p>
            )}
        </>
    )
}


export default Banner;
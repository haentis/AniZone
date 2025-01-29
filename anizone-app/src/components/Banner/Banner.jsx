import { useState, useEffect } from "react";
import 'ldrs/ring'

const BASE_URL = 'https://api.jikan.moe/v4/top/anime';

function Banner(){

    const [trailer, SetTrailer] = useState(null);


    useEffect(() => {
        const fetchTrailer = async() => {
            try{
                const response  = await fetch(`${BASE_URL}`);
                const postTrailer = await response.json();
                SetTrailer(postTrailer);
                console.log(postTrailer)
            }catch(Error){
                console.log('Ошибка при загрузке данных',Error)
            }
           
        } 
        fetchTrailer()
    },[])


    return(
        <>
           {trailer && trailer.data && trailer.data[3]?.trailer?.images.maximum_image_url ? ( // Проверяем наличие данных
               <img 
               src={trailer.data[3]?.trailer?.images.maximum_image_url} 
               alt="bannerImage"
               width={'100%'}
               height={'800px'}
               />
            ) : (
                <p>Loading...</p>
            )}
        </>
    )
}


export default Banner;
import { useState, useEffect } from "react";
import './banner.css';
import playIcon from '../../assets/icons/playIcon.png';
import { BANNER_TITLES } from "../../data/banner";


// const BASE_URL = 'https://shikimori.one/api/animes/';

console.log()

const randomIndexTrailer = Math.floor(Math.random() * 4);

function Banner(){

    // const [trailer, SetTrailer] = useState(null);


    // useEffect(() => {
    //     const fetchTrailer = async() => {
    //         try{
    //             const response  = await fetch(`${BASE_URL}${randomIndexTrailer}`);
    //             const postTrailer = await response.json();
    //             SetTrailer(postTrailer);
    //             console.log(postTrailer)
    //         }catch(Error){
    //             console.log('Ошибка при загрузке данных',Error)
    //         }
           
    //     } 
    //     fetchTrailer()
    // },[])


    return(
        <>
            <div className="banner">
                <img 
                    src={BANNER_TITLES[randomIndexTrailer].image}
                    alt="bannerImage"
                    width={'100%'}
                    height={'800px'}
                    style={{opacity:"50%"}}
                    className="bannerImage"
                />
            </div>
        </>
    )
}


export default Banner;
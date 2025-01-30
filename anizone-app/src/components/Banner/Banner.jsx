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
           {/* {trailer && trailer.image && trailer.image.original?( // Проверяем наличие данных */}
            <div className="banner">
                <img 
                // src={`https://shikimori.one${trailer.image.original}`}
                src={BANNER_TITLES[randomIndexTrailer].image}
                alt="bannerImage"
                width={'100%'}
                height={'800px'}
                style={{opacity:"50%"}}
                />
                <div className="block-title-button">
                    <h1>{BANNER_TITLES[randomIndexTrailer].title}</h1>
                    {/* <button className="watch-button">
                        <img src={playIcon} alt="" width={"20px"} height={"20px"} />
                        Watch now
                    </button> */}
                </div>
            </div>
            {/* ) : (
                <p>Loading...</p>
            )} */}
        </>
    )
}


export default Banner;
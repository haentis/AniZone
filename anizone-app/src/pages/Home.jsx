import Banner from "../components/Banner/Banner";
import Header from "../components/header/header";
import Nav from "../components/nav/nav";
import AnimeSection from "../components/AnimeSection/animeSection";

function Home(){
    return(
        <>
            <Header/>
            <Banner/>
            <AnimeSection/>
            <Nav/>
        </>
    )
}


export default Home;
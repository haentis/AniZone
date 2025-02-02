import './nav.css';
import homeIcon from '../../assets/icons/homeIcon.png';
import favoriteIcon from '../../assets/icons/favoriteIcon.png';
import { Link } from 'react-router-dom';
function Nav(){
    return(
        <>
            <nav>
                <Link to={'/'} className='link-nav'>
                <img src={homeIcon} alt="homeIcon" width={"20px"} height={"20px"} />
                 Главная
                </Link>
                <Link to={'/Библеотека'} className='link-nav'>
                <img src={favoriteIcon} alt="favoriteIcon" width={"20px"} height={"20px"} />
                    Библеотека
                </Link>
            </nav>
        </>
    )
}


export default Nav;
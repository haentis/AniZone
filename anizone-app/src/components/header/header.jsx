import './header.css'
import {Link} from 'react-router-dom';

function Header(){
    return(
        <>
            <header>
                <nav>
                    <Link to={'/'} className='nav-link'>Главная</Link>
                    <Link to={'/Аниме'} className='nav-link'>Аниме</Link>
                    <Link to={'/Поиск'} className='nav-link'>Поиск</Link>
                    <Link to={'/Библеотека'} className='nav-link'>Библеотека</Link>
                </nav>
            </header>
        </>
    )
}


export default Header;
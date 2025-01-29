import './header.css';
import searchIcon from '../../assets/icons/searchIcon.png';
// import {Link} from 'react-router-dom';

function Header(){
    return(
        <>
            <header>
                <img src={searchIcon} alt="searchIcon" width={"30px"} height={"30px"} className='search-icon'/>
                <input type="text" className='search-input' placeholder='Search....'/>
            </header>
        </>
    )
}


export default Header;
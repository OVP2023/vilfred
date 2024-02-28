import {NavLink, Outlet} from 'react-router-dom'

const setActive = ({isActive}) => isActive? 'link active_link':'link';

function Menu() {
  return ( 
            <>
                <nav className='links'>
                    <NavLink className={setActive} to="/">ГЛАВНАЯ СТРАНИЦА</NavLink>
                    <NavLink className={setActive} to="/family">РОДОСЛОВНАЯ</NavLink>                   
                    <NavLink className={setActive} to="/puppy">ДЕТСТВО</NavLink>    
                    <NavLink className={setActive} to="/service">СЛУЖБА</NavLink>   
                    <NavLink className={setActive} to="/travel">ПУТЕШЕСТВИЯ</NavLink>   
                    <NavLink className={setActive} to="/holidays">ПРАЗДНИКИ</NavLink> 
                    <NavLink className={setActive} to="/beauty">КРАСОТА</NavLink> 
                    <NavLink className={setActive} to="/sport">СПОРТ</NavLink> 
                    <NavLink className={setActive} to="/fazenda">НЕЙРОСЕТЬ</NavLink>  
                </nav>
                <Outlet/> 
            </>
  );
}

export default Menu

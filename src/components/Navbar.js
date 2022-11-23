import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
   //Initie la const pour le burger en false (c-à-d si on ne clique pas dessus)
    const [click, setClick] = useState(false);

    const [button, setButton] = useState(true);

    // Change la valeure de setClick en true
    const handleClick = () => setClick(!click);
    
    const closeMobileMenu = () => setClick(false);

    // On fait disparaitre le bouton "Sign Up" en dessous de 960px
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else{
            setButton(true)
        }

    };

    useEffect(() =>{
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                {/*LOGO*/}
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        TRVL <i className="fab fa-typo3" />
                    </Link>
                    
                    {/*Icone du Menu burger (format mobile et tablette)*/}
                    <div className="menu-icon" onClick={handleClick}>                  
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>

                    {/*Faire apparaitre le nav en format mobile lorsque l'on clique*/}
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        {/*Mes Nav/pages*/}
                        <li className="nav-item">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link> 
                        </li>
                        <li className="nav-item">
                            <Link to='/services' className="nav-links" onClick={closeMobileMenu}>
                                Services
                            </Link> 
                        </li>
                        <li className="nav-item">
                            <Link to='/products' className="nav-links" onClick={closeMobileMenu}>
                                Products
                            </Link> 
                        </li>
                        <li className="nav-item">
                            <Link to='/sign-up' className="nav-links-mobile" onClick={closeMobileMenu}>
                                Sign UP
                            </Link> 
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </> 
    )
}

export default Navbar

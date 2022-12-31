import React from 'react';
import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs';
import {useGlobalContext} from "../context";

const Nav = () => {
    const {isDarkMode, toggleTheme} = useGlobalContext();

    return (
        <nav className='navbar'>
            <h1 className='title'>devfinder</h1>
            <button type='button' className={isDarkMode ? 'light nav-btn show' : 'light nav-btn'} onClick={toggleTheme}>
                LIGHT <span className='icon'><BsFillSunFill/></span>
            </button>
            <button type='button' className={isDarkMode ? 'dark nav-btn' : 'dark nav-btn show'} onClick={toggleTheme}>
                DARK <span className='icon'><BsFillMoonFill/></span>
            </button>
        </nav>
    );
};

export default Nav;
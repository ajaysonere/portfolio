import {links} from '../data';
import { FaBars } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";
import { useState } from 'react'; 


const Navbar = () => {
    const [showNevigation, setShowNevigation] = useState(false);
    return (
        <nav>
            <div className="nav__container navbar__container">
                <div className="logo">
                    <h1>AJAY.DEV</h1>
                </div>
                <ul className={`navbar__links ${showNevigation ? 'show-nav' : 'hide-nav'}`}>
                    {
                        links.map(({name , path},index) => {
                            return (
                                <li key={index} className='navbar__li'>
                                    <a href={path} onClick={()=>setShowNevigation(prev => !prev)}  >{name} </a>
                                </li>
                            )
                        })
                    }
                </ul>
                <button className='toggle-btn'onClick={()=>setShowNevigation(prev => !prev)} >{
                    showNevigation ? <MdOutlineClose /> : <FaBars />
                } </button>
            </div>
        </nav>
    );
};

export default Navbar;
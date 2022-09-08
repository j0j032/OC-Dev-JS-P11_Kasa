import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={"header__container"}>
            <img className={"header__logo"} src={"./fullLogo.svg"} alt={"Kasa, location d'appartement entre particulier"}/>
            <nav className={"header__nav"}>
                <ul>
                    <NavLink to={"/"} className={(nav) =>(nav.isActive ? "header__nav-active" : "")}>
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to={"/about"} className={(nav) =>(nav.isActive ? "header__nav-active" : "")}>
                        <li>A propos</li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Header;

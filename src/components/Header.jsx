import { useState } from "react";
import { Link } from "react-router-dom";

import Nav from "./Nav";
import "./styles/Header.css";

function Header() {
    const [burgerOpen, setBurgerOpen] = useState(false);

    function closeBurger() {
        setBurgerOpen(false);
    }

    function toggleBurger() {
        burgerOpen === false ? setBurgerOpen(true) : setBurgerOpen(false);
    }

    return (
        <>
            <header className="header">
                <div className="headerInnerContainer">
                    <h1
                        className={`headerName ${
                            burgerOpen ? "burgerOpen" : ""
                        }`}
                    >
                        Patrick Brebner
                    </h1>
                    <div
                        className={`headerNav ${
                            burgerOpen ? "burgerOpen" : ""
                        }`}
                    >
                        <Nav closeBurger={closeBurger} />
                    </div>
                    <button
                        onClick={toggleBurger}
                        className={`burgerBtn ${
                            burgerOpen ? "burgerOpen" : ""
                        }`}
                    >
                        <div className="burgerLine"></div>
                        <div className="burgerLine"></div>
                        <div className="burgerLine"></div>
                    </button>
                </div>
            </header>
        </>
    );
}

export default Header;

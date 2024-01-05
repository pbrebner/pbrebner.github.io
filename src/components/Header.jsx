import { Link } from "react-router-dom";

import Nav from "./Nav";
import "./styles/Header.css";

function Header() {
    return (
        <header className="header">
            <h1 className="headerName">Patrick Brebner</h1>
            <Nav></Nav>
        </header>
    );
}

export default Header;

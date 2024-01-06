function Nav({ closeBurger }) {
    return (
        <>
            <a href="#about" className="navLink" onClick={closeBurger}>
                About
            </a>
            <a href="#projects" className="navLink" onClick={closeBurger}>
                Projects
            </a>
            <a href="#skills" className="navLink" onClick={closeBurger}>
                Skills
            </a>
            <a href="#contact" className="navLink" onClick={closeBurger}>
                Contact
            </a>
        </>
    );
}

export default Nav;

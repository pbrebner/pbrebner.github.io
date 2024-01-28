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
            <a
                href="https://drive.google.com/file/d/13Sn5gWwOMLMT0Lm3Zwh4LHTPhrdhgnsE/view?usp=sharing"
                className="navLink"
                target="_blank"
                onClick={closeBurger}
            >
                Resume
            </a>
        </>
    );
}

export default Nav;

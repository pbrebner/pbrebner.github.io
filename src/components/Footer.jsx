import "./styles/Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div>
                <span className="optText">Developed by </span>Patrick Brebner
            </div>
            <div>|</div>
            <div>
                <span className="optText">Copyright</span>{" "}
                <i className="fa-regular fa-copyright"></i> 2025
            </div>
        </footer>
    );
}

export default Footer;

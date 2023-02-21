function Navbar() {
    return (
        <>
        <div className="navs-container">
            <div className="navUp-container">
                <nav>
                <ul>
                    <li>
                    <a href="/">
                        <img src="/img/logo.png" alt="Logo" />
                    </a>
                    </li>
                    <li>
                    <a href="/">Accueil</a>
                    </li>
                    <li>
                    <a href="/">Profil</a>
                    </li>
                    <li>
                    <a href="/">Réglages</a>
                    </li>
                    <li>
                    <a href="/">Communauté</a>
                    </li>
                </ul>
                </nav>
            </div>

                <div className="navLeft-container">
                    <div className="navbar">
                    <a href="/">
                        <img src="/img/icon1.png" alt="icon1" />
                    </a>
                    <a href="/">
                        <img src="/img/icon2.png" alt="icon2" />
                    </a>
                    <a href="/">
                        <img src="/img/icon3.png" alt="icon3" />
                    </a>
                    <a href="/">
                        <img src="/img/icon4.png" alt="icon4" />
                    </a>
                    </div>

                    <span className="cr">
                    Copiryght, SportSee 2020
                    </span>

                </div>
        </div>
        </>
    )
}

export default Navbar; 

const Header = () => {
    return (
        <div>
            <header>
                <nav>
                    <div className="logo">YourLogo</div>
                    <ul className="nav-links">
                        <li><a href="#home" className="active">Home</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#work">Work</a></li>
                        <li><a href="#contact" className="cta">Contact</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;

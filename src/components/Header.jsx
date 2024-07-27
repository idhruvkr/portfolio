import { useState } from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    const [brandName, setBrandName] = useState('Dhruv Kumar');
    const [menuLinks, setMenuLinks] = useState([
        {
            id: 1,
            title: 'Home',
            route: '/portfolio/home'
        },
        {
            id: 2,
            title: 'About',
            route: '/portfolio/about'
        },
        {
            id: 3,
            title: 'Skills',
            route: '/portfolio/skills'
        },
        {
            id: 4,
            title: 'Services',
            route: '/portfolio/services'
        },
        {
            id: 5,
            title: 'Contact',
            route: '/portfolio/contact'
        },
    ]);

    // const [action, setAction] = useState({
    //     title: 'Hire Me',
    //     route: 'hireme'
    // });

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="header-container">
                <div className="brand">
                    <h1>{brandName}</h1>
                </div>
                <button className="menu-icon" onClick={toggleMenu}>
                    {/* Menu Icon */}
                    <span className="block w-6 h-0.5 bg-gray-600 mb-1"></span>
                    <span className="block w-6 h-0.5 bg-gray-600 mb-1"></span>
                    <span className="block w-6 h-0.5 bg-gray-600"></span>
                </button>
                <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
                    {
                        menuLinks.map((tab) => (
                            <Link key={tab.id} to={tab.route} onClick={() => setIsMenuOpen(false)}>
                                {tab.title}
                            </Link>
                        ))
                    }
                </nav>
                {/* <div className="action">
                    <Link to={action.route} className="hire-me-button">
                        {action.title}
                    </Link>
                </div> */}
            </div>
        </>
    );
};

export default Header;

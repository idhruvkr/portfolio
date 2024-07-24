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

    const [action, setAction] = useState({
        title: 'Hire Me',
        route: 'hireme'
    });

    return (
        <>
            <div className="h-16 border main items-center bg-blue-200">
                <div className="text-2xl font-bold">
                    <h1>{brandName}</h1>
                </div>
                <div className="space-x-6">
                    {
                        menuLinks.map((tab) => (
                            <Link key={tab.id} to={tab.route}>{tab.title}</Link>
                        ))
                    }
                </div>
                <div>
                    {/* <a href={action.route} className="px-3 py-2 bg-yellow-500 rounded-full shadow-lg">
                        {action.title}
                    </a> */}
                    {/* <Link to={action.route} className="px-3 py-2 bg-yellow-500 rounded-full shadow-lg">
                        {action.title}
                    </Link> */}
                </div>
            </div>
        </>
    );
};

export default Header;

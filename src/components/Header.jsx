import { useState } from "react";
const Header = () => {

    const [brandName, setBrandName] = useState('Dhruv Kumar');
    const [menuLinks, setMenuLinks] = useState([
        {
            id: 1,
            title: 'Home',
            route: '/home'
        },
        {
            id: 2,
            title: 'About',
            route: '/about'
        },
        {
            id: 3,
            title: 'Skills',
            route: '/skills'
        },
        {
            id: 4,
            title: 'Portfolio',
            route: '/portfolio'
        },
        {
            id: 5,
            title: 'Contact',
            route: '/contact'
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
                            <a key={tab.id} href={tab.route}>{tab.title}</a>
                        ))
                    }
                </div>
                <div>
                    <a href={action.route} className="px-3 py-2 bg-yellow-500 rounded-full shadow-lg">
                        {action.title}
                    </a>
                </div>
            </div>
        </>
    );
};

export default Header;

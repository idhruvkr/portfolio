import { useState } from "react";

const Service = () => {
    const [hoveredSection, setHoveredSection] = useState(null);

    // Handler functions for mouse events
    const handleMouseEnter = (section) => {
        setHoveredSection(section);
    };

    const handleMouseLeave = () => {
        setHoveredSection(null);
    };

    return (
        <div className="bg-gray-100 min-h-screen p-6">
            <h1 className="text-center text-4xl font-bold text-gray-800 mb-10 underline">
                Services
            </h1>
            <div className="w-4xl mx-auto">
                {/* Web Development Section */}
                <div
                    className={`bg-white rounded-lg shadow-lg p-6 md:p-8 mb-10 transition-transform transform ${
                        hoveredSection === "web"
                            ? "scale-105 bg-gray-50"
                            : "hover:scale-105"
                    }`}
                    onMouseEnter={() => handleMouseEnter("web")}
                    onMouseLeave={handleMouseLeave}
                >
                    <h2 className="text-2xl md:text-3xl font-semibold text-red-900 mb-4 flex items-center">
                        <i className="fa fa-laptop text-3xl md:text-4xl mr-2"></i>
                        Web Development
                    </h2>
                    <p className="text-gray-700">
                        Web development involves creating and maintaining
                        websites and web applications. It encompasses both
                        frontend and backend development, utilizing various
                        technologies to build responsive and efficient web
                        solutions.
                    </p>
                    {hoveredSection === "web" && (
                        <div className="mt-4 text-gray-800">
                            <p>
                                <strong>Web developers</strong> use a
                                combination of coding languages like HTML, CSS,
                                and JavaScript to build and maintain websites.
                                They ensure that the website functions correctly
                                across different devices and browsers. With the
                                rise of web frameworks and content management
                                systems, developers can now create more dynamic
                                and interactive web experiences.
                            </p>
                        </div>
                    )}
                </div>

                {/* Frontend Development Section */}
                <div
                    className={`bg-white rounded-lg shadow-lg p-6 md:p-8 mb-10 transition-transform transform ${
                        hoveredSection === "frontend"
                            ? "scale-105 bg-gray-50"
                            : "hover:scale-105"
                    }`}
                    onMouseEnter={() => handleMouseEnter("frontend")}
                    onMouseLeave={handleMouseLeave}
                >
                    <h2 className="text-2xl md:text-3xl font-semibold text-green-600 mb-4 flex items-center">
                        <i className="fa fa-code text-3xl md:text-4xl mr-2"></i>
                        Frontend Development
                    </h2>
                    <p className="text-gray-700">
                        Frontend development focuses on the user interface and
                        experience. It involves designing and implementing the
                        visual elements of a website using HTML, CSS,
                        JavaScript, and frameworks like React and Angular to
                        create interactive and engaging web pages.
                    </p>
                    {hoveredSection === "frontend" && (
                        <div className="mt-4 text-gray-800">
                            <p>
                                <strong>Frontend developers</strong> aim to
                                provide users with a seamless and enjoyable
                                experience. They are responsible for making web
                                pages visually appealing and ensuring they
                                respond efficiently to user actions. Skills in
                                CSS animations, responsive design, and
                                performance optimization are critical for
                                frontend development.
                            </p>
                        </div>
                    )}
                </div>

                {/* Backend Development Section */}
                <div
                    className={`bg-white rounded-lg shadow-lg p-6 md:p-8 transition-transform transform ${
                        hoveredSection === "backend"
                            ? "scale-105 bg-gray-50"
                            : "hover:scale-105"
                    }`}
                    onMouseEnter={() => handleMouseEnter("backend")}
                    onMouseLeave={handleMouseLeave}
                >
                    <h2 className="text-2xl md:text-3xl font-semibold text-orange-600 mb-4 flex items-center">
                        <i className="fa fa-database text-3xl md:text-4xl mr-2"></i>
                        Backend Development
                    </h2>
                    <p className="text-gray-700">
                        Backend development is about building the server-side
                        logic and databases that power web applications. It
                        includes working with server technologies, APIs, and
                        databases like Node.js, Express, and MongoDB to ensure
                        smooth data handling and application performance.
                    </p>
                    {hoveredSection === "backend" && (
                        <div className="mt-4 text-gray-800">
                            <p>
                                <strong>Backend developers</strong> are
                                responsible for the server-side management and
                                logic of web applications. They ensure that data
                                from the frontend is processed correctly, stored
                                efficiently, and delivered back to the client.
                                Security, scalability, and reliability are
                                crucial aspects of backend development.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Service;

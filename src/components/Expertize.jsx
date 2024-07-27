import banner from '../assets/user_pic.jpeg';
import bannerImgBackground from '../assets/banner.jpeg';

const Expertize = () => {
    return (
        <>
            <div className="py-10">
                <h1 className="text-center text-4xl font-bold underline mb-10">
                    My Expertise
                </h1>
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full text-center md:text-left px-5 md:px-20 text-gray-900">
                        <h3 className='text-3xl font-semibold mb-4'>I love these technologies.</h3>
                        <p className="mb-6">
                            I specialize in frontend development, creating responsive
                            and user-friendly web applications using HTML, CSS, and JavaScript
                            frameworks like Angular. My focus is on delivering high-quality, efficient,
                            and visually appealing interfaces that enhance user experience and engagement.
                            Additionally, I work with backend technologies such as Java and Spring to create
                            robust and scalable applications.
                        </p>
                        <div className="grid grid-cols-2 gap-4 md:gap-8 md:grid-cols-4">
                            <div className="flex flex-col items-center transition-transform transform hover:scale-110">
                                <i className="fab fa-html5 text-6xl text-orange-600 mb-3"></i>
                                <span>HTML5</span>
                            </div>
                            <div className="flex flex-col items-center transition-transform transform hover:scale-110">
                                <i className="fab fa-css3-alt text-6xl text-blue-600 mb-3"></i>
                                <span>CSS3</span>
                            </div>
                            <div className="flex flex-col items-center transition-transform transform hover:scale-110">
                                <i className="fab fa-js-square text-6xl text-yellow-500 mb-3"></i>
                                <span>JavaScript</span>
                            </div>
                            <div className="flex flex-col items-center transition-transform transform hover:scale-110">
                                <i className="fab fa-angular text-6xl text-red-600 mb-3"></i>
                                <span>Angular</span>
                            </div>
                            <div className="flex flex-col items-center transition-transform transform hover:scale-110">
                                <i className="fab fa-java text-6xl text-brown-500 mb-3"></i>
                                <span>Java</span>
                            </div>
                            <div className="flex flex-col items-center transition-transform transform hover:scale-110">
                                <i className="fab fa-node text-6xl text-green-600 mb-3"></i>
                                <span>Node.js</span>
                            </div>
                            <div className="flex flex-col items-center transition-transform transform hover:scale-110">
                                <i className="fab fa-docker text-6xl text-blue-500 mb-3"></i>
                                <span>Docker</span>
                            </div>
                            <div className="flex flex-col items-center transition-transform transform hover:scale-110">
                                <i className="fas fa-database text-6xl text-gray-500 mb-3"></i>
                                <span>MySQL</span>
                            </div>
                            <div className="flex flex-col items-center transition-transform transform hover:scale-110">
                                <i className="fab fa-bootstrap text-6xl text-purple-600 mb-3"></i>
                                <span>Bootstrap</span>
                            </div>
                            <div className="flex flex-col items-center transition-transform transform hover:scale-110">
                                <i className="fas fa-wind text-6xl text-teal-500 mb-3"></i>
                                <span>Tailwind</span>
                            </div>
                            <div className="flex flex-col items-center transition-transform transform hover:scale-110">
                                <i className="fas fa-chart-bar text-6xl text-indigo-600 mb-3"></i>
                                <span>Charts</span>
                            </div>
                            <div className="flex flex-col items-center transition-transform transform hover:scale-110">
                                <i className="fab fa-git-alt text-6xl text-orange-500 mb-3"></i>
                                <span>Git</span>
                            </div>
                            <div className="flex flex-col items-center transition-transform transform hover:scale-110">
                                <i className="fab fa-react text-6xl text-blue-300 mb-3"></i>
                                <span>React</span>
                            </div>
                            <div className="flex flex-col items-center transition-transform transform hover:scale-110">
                                <i className="fab fa-js text-6xl text-blue-500 mb-3"></i>
                                <span>TypeScript</span>
                            </div>
                            <div className="flex flex-col items-center transition-transform transform hover:scale-110">
                                <i className="fas fa-leaf text-6xl text-green-500 mb-3"></i>
                                <span>MongoDB</span>
                            </div>
                            <div className="flex flex-col items-center transition-transform transform hover:scale-110">
                                <i className="fab fa-angular text-6xl text-blue-400 mb-3"></i>
                                <span>Angular Material</span>
                            </div>
                            <div className="flex flex-col items-center transition-transform transform hover:scale-110">
                                <i className="fas fa-code text-6xl text-yellow-700 mb-3"></i>
                                <span>SonarQube</span>
                            </div>
                            {/* <div className="flex flex-col items-center transition-transform transform hover:scale-110 bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl">
                                <i className="fas fa-code text-6xl text-yellow-700 mb-3"></i>
                                <span className="text-white font-semibold">SonarQube</span>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Expertize;
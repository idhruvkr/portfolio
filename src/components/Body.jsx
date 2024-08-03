import { useState } from "react";
import { Link } from 'react-router-dom';

import banner from '../assets/mypic.png';
import bannerImgBackground from '../assets/banner.jpeg';
import userImage from "../assets/myprofilepicture.png";
import backgroundImage from "../assets/laptop_bg.jpeg";

const Body = () => {
    const [details, setDetails] = useState({
        image: banner,
        title: "Java Web Developer",
        // desc1:
        //     `Developed and maintained high-quality, efficient code for web applications using languages 
        //     such as HTML, CSS, JavaScript, Angular, TypeScript, and many.`,
        // desc2:
        //     `Developed various user-friendly web applications using the Angular framework to enhance user 
        //     experience and improve overall website performance.`,
        // desc3:
        //     `Created responsive design layouts and implemented cross-browser compatibility for seamless 
        //     integration across multiple platforms.`,
        // desc4:
        //     `Collaborated with cross-functional teams to design and implement new features, 
        //     enhancements, and bug fixes for software products.`,
        // desc5:
        //     `Conducted code reviews and provided technical guidance to junior developers to ensure 
        //     code quality and best practices were followed.`,
        // desc6:
        //     `Integrated third-party APIs and libraries to enhance application functionality and 
        //     user experience.`,
        // desc7:
        //     `Integrated RESTful API services to retrieve and display data efficiently in Angular 
        //     applications.`,
        // desc8:
        //     `Collaborated with design and back-end teams to ensure smooth communication and 
        //     successful project completion within specified deadlines.`,
        // desc9:
        //     `Conducted code reviews, implemented unit testing, and provided technical support 
        //     to maintain and improve existing Angular projects.`,
        // desc10:
        //     `Implemented / Created RESTful APIs architecture to improve data processing efficiency 
        //     and enhance overall application performance.`,
        // desc11:
        //     `Developed scalable and optimized backend systems using Java, Spring Boot, and MongoDB 
        //     to support high-traffic web applications.`,
        // desc12:
        //     `Collaborated with cross-functional teams to design and implement user-centered features 
        //     and enhancements.`,
        // desc13:
        //     `Integrated third-party APIs and libraries to enhance application functionality and user 
        //     experience.`
        desc1: `Developed and maintained high-quality, efficient code for web applications using languages such as HTML, CSS, JavaScript, Angular, TypeScript, and more. Continuously optimized application performance through code refactoring and by adhering to best practices for front-end development.`,
        desc2: `Developed various user-friendly web applications using the Angular framework to enhance user experience and improve overall website performance. Leveraged Angular's powerful tools to build dynamic single-page applications (SPAs) that are fast and responsive.`,
        desc3: `Created responsive design layouts and implemented cross-browser compatibility for seamless integration across multiple platforms. Utilized frameworks such as Bootstrap and Tailwind CSS to ensure designs were adaptable to different screen sizes and devices.`,
        desc4: `Collaborated with cross-functional teams, including UX/UI designers, back-end developers, and product managers, to design and implement new features, enhancements, and bug fixes for software products. Participated in agile methodologies, contributing to sprint planning, stand-ups, and retrospectives.`,
        desc5: `Conducted code reviews and provided technical guidance to junior developers to ensure code quality and adherence to best practices. Facilitated knowledge-sharing sessions and contributed to creating a culture of continuous improvement within the development team.`,
        desc6: `Integrated third-party APIs and libraries to enhance application functionality and user experience. Worked with APIs like Google Maps, Firebase, and Stripe to deliver comprehensive and feature-rich applications.`,
        desc7: `Integrated RESTful API services to retrieve and display data efficiently in Angular applications. Worked closely with back-end teams to define API contracts and optimize endpoints for performance and reliability.`,
        desc8: `Collaborated with design and back-end teams to ensure smooth communication and successful project completion within specified deadlines. Managed project tasks using tools like JIRA and Trello, ensuring alignment with business goals.`,
        desc9: `Conducted code reviews, implemented unit testing, and provided technical support to maintain and improve existing Angular projects. Employed testing frameworks like Jasmine and Karma to ensure code robustness and reduce bug occurrence.`,
        desc10: `Implemented RESTful API architecture to improve data processing efficiency and enhance overall application performance. Developed secure and scalable endpoints using Node.js and Spring Boot, ensuring compliance with REST principles.`,
        desc11: `Developed scalable and optimized backend systems using Java, Spring Boot, and MongoDB to support high-traffic web applications. Designed databases to handle complex queries and large datasets efficiently, ensuring low-latency access to data.`,
        desc12: `Collaborated with cross-functional teams to design and implement user-centered features and enhancements. Prioritized user feedback and performed usability testing to refine application interfaces and user flows.`,
        desc13: `Integrated third-party APIs and libraries to enhance application functionality and user experience. Developed plugins and extensions for open-source projects, contributing to the developer community.`,
        desc14: `Utilized version control systems like Git to manage codebases and track changes. Implemented branching strategies to streamline development workflows and facilitate collaboration across teams.`,
        desc15: `Ensured application security by implementing best practices for data protection, authentication, and authorization. Worked with tools like OAuth and JWT for secure API authentication and access control.`,
        desc16: `Participated in the full software development lifecycle (SDLC), from requirements gathering and analysis to deployment and maintenance. Documented processes and technical specifications to support knowledge transfer and onboarding.`,
    });

    return (
        <>
            {/* Home Section */}
            <div style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
            }}
                className="main-container text-white flex flex-col md:flex-row items-center py-10 px-5 md:px-20">
                <div className="w-full md:w-2/3 flex flex-col justify-center space-y-4 text-center md:text-left">
                    <h3 className='text-3xl font-semibold'>Hi, I am</h3>
                    <h1 className='text-5xl font-bold'>Dhruv Kumar</h1>
                    <h2 className='text-3xl font-bold'>I am a Web Developer.</h2>
                    <p>
                        I have proven experience as a Software Engineer focusing on frontend
                        development, particularly as an Angular Developer, Web Developer, and
                        Java Spring Developer. I am skilled in building responsive and
                        user-friendly web applications, optimizing performance, and integrating
                        complex features smoothly.
                    </p>
                    <div className='flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-5'>
                        <a className="hover:bg-blue-300 border px-3 py-2 cursor-pointer rounded-full flex justify-center p-6 shadow-xl transition-transform transform hover:scale-105"
                            href="/contact">
                            <span className="text-lg">Contact Me</span>
                        </a>
                        <a className="hover:bg-blue-300 border px-3 py-2 cursor-pointer w-12 h-12 rounded-full flex justify-center p-6 shadow-xl transition-transform transform hover:scale-105">
                            <i className="fa-brands text-2xl fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
                <div className="image w-full md:w-1/3 flex justify-center ml-5">
                    <img className='image1 rounded-full shadow-lg w-48 md:w-64' src={userImage} alt="img" />
                </div>
            </div>

            {/* About */}
            <div className="bg-gray-200 py-10">
                <h1 className="text-center pb-10 text-4xl underline font-bold">
                    About Me
                </h1>
                <div className="flex flex-col md:flex-row items-center">
                    <div className="img-container1 w-full md:w-2/5 flex justify-center mb-5 md:mb-0">
                        <img className="w-48 md:w-64" src={details.image} alt="img" />
                    </div>
                    <div className="w-full md:w-3/5 flex justify-center rounded-lg p-6 shadow-xl transition-transform transform hover:scale-105">
                        <div className="space-y-5 px-5 md:px-0">
                            <h1 className="text-4xl font-semibold">{details.title}</h1>
                            <p>{details.desc1}</p>
                            <p>{details.desc2}</p>
                            <p>{details.desc3}</p>
                            {/* <p>{details.desc4}</p> */}
                            <button className="bg-orange-500 px-2 py-2 rounded-full">
                                <Link key="/portfolio/about" to="/portfolio/about">Read More...</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service */}
            <div>
                <h1 className="text-center text-4xl font-bold underline px-10 py-10">Services</h1>
                <div className="flex flex-col md:flex-row justify-center space-y-5 md:space-y-0 md:space-x-5 px-5 md:px-0">
                    <div className="flex-1 bg-slate-100 text-center space-y-4 shadow-xl rounded-xl p-6 ml-5 transition-transform transform hover:scale-105">
                        <div>
                            <i className="fa fa-laptop text-4xl"></i>
                        </div>
                        <h1 className="text-xl font-semibold">Web Development</h1>
                        <div>
                            Web development is all about creating websites that are not only
                            visually appealing but also functional and interactive, providing
                            a great user experience for visitors.
                        </div>
                        <button className="bg-orange-500 px-4 py-2 rounded-full">
                            <Link key="/portfolio/about" to="/portfolio/services">Check</Link>
                        </button>
                    </div>
                    <div className="flex-1 bg-slate-100 text-center space-y-4 shadow-xl rounded-xl p-6 m-5 transition-transform transform hover:scale-105">
                        <div>
                            <i className="fa fa-code text-4xl"></i>
                        </div>
                        <h1 className="text-xl font-semibold">Frontend Development</h1>
                        <div>
                            Frontend development is all about what you see and interact with on
                            a website or web application. It focuses on ensuring that websites are
                            responsive, interactive, and visually appealing to users.
                        </div>
                        <button className="bg-orange-500 px-4 py-2 rounded-full">
                            <Link key="/portfolio/about" to="/portfolio/services">Check</Link>
                        </button>
                    </div>
                    <div className="flex-1 bg-slate-100 text-center space-y-4 shadow-xl rounded-xl p-6 m-5 transition-transform transform hover:scale-105">
                        <div>
                            <i className="fa fa-database text-4xl"></i>
                        </div>
                        <h1 className="text-xl font-semibold">Backend Development</h1>
                        <div>
                            Backend development focuses on the server-side of web applications
                            and websites. It involves creating and managing the software that runs
                            on a server and interacts with databases.
                        </div>
                        <button className="bg-orange-500 px-4 py-2 rounded-full">
                            <Link key="/portfolio/about" to="/portfolio/services">Check</Link>
                        </button>
                    </div>
                </div>
            </div>

            {/* Expertise */}
            {/* <div className="py-10">
                <h1 className="text-center text-4xl font-bold underline pt-10 pb-0 pl-10 pr-10">
                    My Expertise
                </h1>
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-3/4 text-center md:text-left px-5 md:px-20">
                        <h3 className='text-3xl font-semibold'>I love these technologies.</h3>
                        <p>
                            I specialize in frontend development, creating responsive
                            and user-friendly web applications using HTML, CSS, and JavaScript
                            frameworks like Angular. My focus is on delivering high-quality, efficient,
                            and visually appealing interfaces that enhance user experience and engagement. Additionally, I have experience in backend development, working with REST APIs and schedulers to ensure seamless integration and efficient data processing.
                        </p>
                        <br />
                        <a className="text-lg px-4 py-2 bg-blue-500 rounded-full shadow-lg" href="/contact">Contact Me</a>
                    </div>
                    <div className="w-full flex justify-center mt-5 md:mt-0">
                        <div className="flex flex-wrap justify-center text-center space-x-2">
                            <button className='bg-slate-400 m-2 px-4 py-2 rounded-full shadow-lg'>Angular</button>
                            <button className='bg-slate-400 m-2 px-4 py-2 rounded-full shadow-lg'>HTML</button>
                            <button className='bg-slate-400 m-2 px-4 py-2 rounded-full shadow-lg'>CSS</button>
                            <button className='bg-slate-400 m-2 px-4 py-2 rounded-full shadow-lg'>Bootstrap</button>
                            <button className='bg-slate-400 m-2 px-4 py-2 rounded-full shadow-lg'>JavaScript</button>
                            <button className='bg-slate-400 m-2 px-4 py-2 rounded-full shadow-lg'>TypeScript</button>
                            <button className='bg-slate-400 m-2 px-4 py-2 rounded-full shadow-lg'>Core Java</button>
                            <button className='bg-slate-400 m-2 px-4 py-2 rounded-full shadow-lg'>React</button>
                            <button className='bg-slate-400 m-2 px-4 py-2 rounded-full shadow-lg'>Tailwind CSS</button>
                            <button className='bg-slate-400 m-2 px-4 py-2 rounded-full shadow-lg'>Git</button>
                            <button className='bg-slate-400 m-2 px-4 py-2 rounded-full shadow-lg'>MongoDB</button>
                            <button className='bg-slate-400 m-2 px-4 py-2 rounded-full shadow-lg'>Charts</button>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="py-10 bg-gray-900">
                <h1 className="text-center text-4xl font-bold underline text-white pt-5 pb-5 px-10">
                    My Expertise
                </h1>
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full text-center md:text-left px-5 md:px-20 text-gray-300">
                        <h3 className='text-3xl font-semibold mb-4'>I love these technologies.</h3>
                        <p className="mb-6">
                            I specialize in frontend development, creating responsive
                            and user-friendly web applications using HTML, CSS, and JavaScript
                            frameworks like Angular. My focus is on delivering high-quality, efficient,
                            and visually appealing interfaces that enhance user experience and engagement.
                            Additionally, I have experience in backend development, working with REST APIs and schedulers to ensure seamless integration and efficient data processing.
                        </p>
                        <button className="text-lg px-4 py-2 bg-blue-600 text-white rounded-full transition-transform transform hover:scale-105 hover:bg-blue-700">
                            <Link key="/portfolio/contact" to="/portfolio/contact">Contact Me</Link>
                        </button>
                    </div>
                    <div className="w-full flex justify-center mt-8 md:mt-0">
                        <div className="flex flex-wrap justify-center text-center space-x-2">
                            {[
                                'Angular', 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'TypeScript',
                                'Core Java', 'React', 'Tailwind CSS', 'Git', 'MongoDB', 'Charts'
                            ].map((tech, index) => (
                                <button
                                    key={index}
                                    className={`bg-gray-700 text-white m-2 px-4 py-2 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-600`}
                                >
                                    {tech}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Body;

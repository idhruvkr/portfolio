import { useState } from "react";

const About = () => {
    const [details] = useState({
        title: "Java Web Developer",
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
            <div className="relative bg-gray-100 py-12 px-6 md:px-12">
                <h1 className="text-center mb-10 text-4xl font-bold text-gray-800 underline">
                    About Me
                </h1>
                <div className="flex flex-col md:flex-row items-start gap-8">
                    {/* Description Cards */}
                    <div className="w-full flex flex-col gap-8">
                        {/* Row of Description Cards */}
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex-1 bg-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">Overview</h2>
                                <p className="text-gray-800 leading-relaxed">{details.desc1}</p>
                            </div>
                            <div className="flex-1 bg-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">User-Friendly Applications</h2>
                                <p className="text-gray-800 leading-relaxed">{details.desc2}</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex-1 bg-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">Responsive Design</h2>
                                <p className="text-gray-800 leading-relaxed">{details.desc3}</p>
                            </div>
                            <div className="flex-1 bg-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">Team Collaboration</h2>
                                <p className="text-gray-800 leading-relaxed">{details.desc4}</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex-1 bg-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">Code Quality</h2>
                                <p className="text-gray-800 leading-relaxed">{details.desc5}</p>
                            </div>
                            <div className="flex-1 bg-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">API Integration</h2>
                                <p className="text-gray-800 leading-relaxed">{details.desc6}</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex-1 bg-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">RESTful Services</h2>
                                <p className="text-gray-800 leading-relaxed">{details.desc7}</p>
                            </div>
                            <div className="flex-1 bg-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">Project Management</h2>
                                <p className="text-gray-800 leading-relaxed">{details.desc8}</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex-1 bg-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">Testing</h2>
                                <p className="text-gray-800 leading-relaxed">{details.desc9}</p>
                            </div>
                            <div className="flex-1 bg-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">API Architecture</h2>
                                <p className="text-gray-800 leading-relaxed">{details.desc10}</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex-1 bg-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">Backend Development</h2>
                                <p className="text-gray-800 leading-relaxed">{details.desc11}</p>
                            </div>
                            <div className="flex-1 bg-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">User-Centered Features</h2>
                                <p className="text-gray-800 leading-relaxed">{details.desc12}</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex-1 bg-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">API Integration</h2>
                                <p className="text-gray-800 leading-relaxed">{details.desc13}</p>
                            </div>
                            <div className="flex-1 bg-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">Version Control</h2>
                                <p className="text-gray-800 leading-relaxed">{details.desc14}</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex-1 bg-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">Security</h2>
                                <p className="text-gray-800 leading-relaxed">{details.desc15}</p>
                            </div>
                            <div className="flex-1 bg-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">Full SDLC Participation</h2>
                                <p className="text-gray-800 leading-relaxed">{details.desc16}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;

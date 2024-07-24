import { useState } from "react";
import userImage from "../assets/user.png";

const About = () => {
    const [details, setDetails] = useState({
        image: userImage,
        title: "Java Web Developer",
        desc1: 
            `Developed and maintained high-quality, efficient code for web applications using languages 
            such as HTML, CSS, JavaScript, Angular, TypeScript and many.`,
        desc2: 
            `Developed various user-friendly web applications using Angular framework to enhance user 
            experience and improve overall website performance.`,
        desc3:
            `Created responsive design layouts and implemented cross-browser compatibility for seamless 
            integration across multiple platforms.`,
        desc4:
            `Collaborated with cross-functional teams to design and implement new features, 
            enhancements, and bug fixes for software products.`,
        desc5:
            `Conducted code reviews and provided technical guidance to junior developers to ensure 
            code quality and best practices were followed.`,
        desc6:
            `Integrated third-party APIs and libraries to enhance application functionality and 
            user experience.`,
        desc7:
            `Integrated RESTful API services to retrieve and display data efficiently in Angular 
            applications.`,
        desc8:
            `Collaborated with design and back-end teams to ensure smooth communication and 
            successful project completion within specified deadlines.`,
        desc9:
            `Conducted code reviews, implemented unit testing, and provided technical support 
            to maintain and improve existing Angular projects`,
        desc10:
            `Implemented / Created RESTful APIs architecture to improve data processing efficiency 
            and enhance overall application performance.`,
        desc11:
            `Developed scalable and optimized backend systems using Java, Spring Boot, and MongoDB 
            to support high traffic web applications.`,
        desc12:
            `Collaborated with cross-functional teams to design and implement user-centered features 
            and enhancements.`,
        desc13:
            `Integrated third-party APIs and libraries to enhance application functionality and user 
            experience.`
    });

    return (
        <>
            <div className="border bg-gray-200 py-10">
                <h1 className="text-center pb-10 text-4xl underline font-bold">
                    About Me
                </h1>
                <div className="flex items-center">
                    <div className="img-container w-full flex justify-center">
                        <img src={details.image} alt="img" />
                    </div>
                    <div className="w-full flex justify-center">
                        <div className="space-y-5 w-7/8">
                            <h1 className="text-4xl font-semibold">{details.title}</h1>
                            <p>
                                {details.desc1}
                            </p>
                            <p>
                                {details.desc2}
                            </p>
                            <p>
                                {details.desc3}
                            </p>
                            <p>
                                {details.desc4}
                            </p>
                            <p>
                                {details.desc5}
                            </p>
                            {/* <p>
                                {details.desc6}
                            </p>
                            <p>
                                {details.desc7}
                            </p> */}
                            {/* <p>
                                {details.desc8}
                            </p>
                            <p>
                                {details.desc9}
                            </p>
                            <p>
                                {details.desc10}
                            </p>
                            <p>
                                {details.desc11}
                            </p>
                            <p>
                                {details.desc12}
                            </p>
                            <p>
                                {details.desc13}
                            </p> */}
                            <button className="bg-orange-600 px-2 py-1 text-xl rounded-full shadow-lg" href="">Read More...</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
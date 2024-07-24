import banner from '../assets/user_pic.jpeg';
import bannerImgBackground from '../assets/banner.jpeg';
import { useState } from "react";
import userImage from "../assets/user.png";

const Body = () => {
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
            <div style={{
                backgroundImage: `url(${bannerImgBackground})`,
                backgroundSize: 'cover'
            }} className="main-container text-white items-center">
                <div className="w-full flex justify-center">
                    <div className='w-2/3 space-y-2 ms-10'>
                        <h3 className='text-3xl font-semibold'>Hi, I am </h3>
                        <h1 className='text-5xl font-bold'>Dhruv Kumar</h1>
                        <h2 className='text-3xl font-bold'>I am a Web Developer.</h2>
                        <p className=''>
                            I have proven experience as a Software Engineer focusing on frontend 
                            development, particularly as an Angular Developer, Web Developer, and 
                            Java Spring Developer. I am skilled in building responsive and 
                            user-friendly web applications, optimizing performance, and integrating 
                            complex features smoothly.
                        </p>
                        <div className='icon-container space-x-5 flex'>
                            <a className="hover:bg-blue-500 border px-3 py-2 cursor-pointer rounded-full flex justify-center"
                                href="/contact">
                                    <span className="text-lg">Contact Me</span></a>
                            <a className="hover:bg-blue-500 border px-3 py-2 cursor-pointer w-12 h-12 rounded-full flex justify-center">
                                <i className="fa-brands text-2xl fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="image w-full flex justify-center">
                    <img className='rounded-full shadow-lg w-fit' src={banner} alt="img" />
                </div>
            </div>
            {/* About */}
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
                            {/* <p>
                                {details.desc5}
                            </p> */}
                            <button className="bg-orange-600 px-2 py-1 text-xl rounded-full shadow-lg" href="">Read More...</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Service */}
            <div>
                <h1 className="text-center text-4xl font-bold underline px-10 py-10">Services</h1>
                <div className="flex justify-center space-x-5">
                    <div className="bg-slate-100 text-center p-5 space-y-4 shadow-lg rounded-xl">
                        <div><i className="fa fa-laptop"></i></div>
                        <h1>Web Development</h1>
                        <div>Web developers is all about creating websites that are not only 
                            visually appealing but also functional and interactive, providing 
                            a great user experience for visitors.
                        </div>
                        <button className="bg-orange-600 px-2 py-1 rounded-full shadow-lg">Check</button>
                    </div>
                    <div className="bg-slate-100 text-center p-5 space-y-4 shadow-lg rounded-xl">
                        <div><i className="fa fa-code"></i></div>
                        <h1>Frontend Development</h1>
                        <div>Frontend development is all about what you see and interact with on 
                            a website or web application. It focuses on ensuring that websites are 
                            responsive, interactive, and visually appealing to users.
                        </div>
                        <button className="bg-orange-600 px-2 py-1 rounded-full shadow-lg">Check</button>
                    </div>
                    <div className="bg-slate-100 text-center p-5 space-y-4 shadow-lg rounded-xl">
                    <div><i className="fa fa-database"></i></div>
                        <h1>Backend Development</h1>
                        <div>Backend development focuses on the server-side of web applications 
                            and websites. It involves creating and managing the software that runs 
                            on a server and interacts with databases.
                        </div>
                        <button className="bg-orange-600 px-2 py-1 rounded-full shadow-lg">Check</button>
                    </div>
                </div>
            </div>
            {/* Expertise */}
            <div>
                <h1 className="text-center text-4xl font-bold underline pt-10 pb-0 pl-10 pr-10">
                    My Expertize
                </h1>
                <div className="main-container items-center">
                    <div className="w-full flex text-center">
                        <div className='w-3/4 space-y-2 ms-10'>
                            <h3 className='text-3xl font-semibold'>I love these technology. </h3>
                            <p className=''>I specialize in frontend development, creating responsive 
                                and user-friendly web applications using HTML, CSS, and JavaScript 
                                frameworks like Angular. My focus is on delivering high-quality, efficient, 
                                and visually appealing interfaces that enhance user experience and engagement. Additionally, I have experience in backend development, working with REST APIs and schedulers to ensure seamless integration and efficient data processing.
                            </p>
                            <br />
                            <a className="text-lg px-3 py-2 bg-blue-500 rounded-full shadow-lg" href="/contact">Contact Me</a>
                        </div>
                    </div>
                    <div className="image w-full flex justify-center">
                        <div className="m-4 p-4 text-center">
                            <button className='bg-slate-400 m-3 px-3 py-2 rounded-full shadow-lg'>Angular</button>
                            <button className='bg-slate-400 m-3 px-3 py-2 rounded-full shadow-lg'>HTML</button>
                            <button className='bg-slate-400 m-3 px-3 py-2 rounded-full shadow-lg'>CSS</button>
                            <button className='bg-slate-400 m-3 px-3 py-2 rounded-full shadow-lg'>Bootstrap</button>
                            {/* <button className='bg-slate-400 m-3 px-3 py-2 rounded-full shadow-lg'>JQuery</button> */}
                            <button className='bg-slate-400 m-3 px-3 py-2 rounded-full shadow-lg'>JavaScript</button>
                            <button className='bg-slate-400 m-3 px-3 py-2 rounded-full shadow-lg'>TypeScript</button>
                            {/* <button className='bg-slate-400 m-3 px-3 py-2 rounded-full shadow-lg'>Programming in C</button> */}
                            <button className='bg-slate-400 m-3 px-3 py-2 rounded-full shadow-lg'>Core Java</button>
                            <button className='bg-slate-400 m-3 px-3 py-2 rounded-full shadow-lg'>React</button>
                            {/* <button className='bg-slate-400 m-3 px-3 py-2 rounded-full shadow-lg'>Bootstrap Modal</button> */}
                            {/* <button className='bg-slate-400 m-3 px-3 py-2 rounded-full shadow-lg'>Angular Material</button> */}
                            <button className='bg-slate-400 m-3 px-3 py-2 rounded-full shadow-lg'>Tailwind CSS</button>
                            <button className='bg-slate-400 m-3 px-3 py-2 rounded-full shadow-lg'>Git</button>
                            <button className='bg-slate-400 m-3 px-3 py-2 rounded-full shadow-lg'>MongoDB</button>
                            <button className='bg-slate-400 m-3 px-3 py-2 rounded-full shadow-lg'>Charts</button>
                            {/* <button className='bg-slate-400 m-3 px-3 py-2 rounded-full shadow-lg'>High Charts</button>
                            <button className='bg-slate-400 m-3 px-3 py-2 rounded-full shadow-lg'>Apex Charts</button>
                            <button className='bg-slate-400 m-3 px-3 py-2 rounded-full shadow-lg'>Spring Boot</button> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <Service />
            <Expertize /> */}
        </>
    );
};

export default Body;

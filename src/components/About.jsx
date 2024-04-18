import { useState } from "react";
import userImage from "../assets/user.png";

const About = () => {
    const [details, setDetails] = useState({
        image: userImage,
        title: "Java Web Developer",
        desc1: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Nostrum harum exercitationem molestias incidunt velit, voluptates 
            veniam distinctio quae dolorum tempore excepturi, adipisci ratione 
            accusamus saepe enim officiis fugit eos voluptate!`,
        desc2: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Nostrum harum exercitationem molestias incidunt velit, voluptates 
            veniam distinctio quae dolorum tempore excepturi, adipisci ratione 
            accusamus saepe enim officiis fugit eos voluptate!`
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
                            <button className="bg-orange-600 px-2 py-1 text-xl rounded-full shadow-lg" href="">Read More...</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
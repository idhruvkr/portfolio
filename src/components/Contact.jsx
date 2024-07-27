import { useState } from "react";

const Contact = () => {
    const [details] = useState({
        address: "Delhi, India",
        email: "idhruvaman@gmail.com",
        phone: "+91 9122548552",
        socialMedia: [
            { name: "LinkedIn", url: "https://www.linkedin.com/in/dhruvaman", icon: "fa-brands fa-linkedin" },
            // { name: "GitHub", url: "https://github.com/developer", icon: "fa-github" },
            { name: "Email", url: "mailto:idhruvaman@gmail.com?&body=Dear%20Dhruv,", icon: "fa-light fa-envelope" },
            { name: "Whatsapp", url: "https://wa.me/9122548552?text=Dear%Dhruv,", icon: "fa-brands fa-square-whatsapp" },
            { name: "Instagram", url: "https://instagram.com/user?username=iamdhruvkr", icon: "fa-brands fa-square-instagram" },
        ],
    });

    return (
        <>
            <div className="relative bg-gray-100 py-6 px-6 md:px-12">
                <h1 className="text-center mb-10 text-4xl font-bold text-gray-800 underline">
                    Contact Me
                </h1>
                <div className="flex flex-col md:flex-row items-start gap-8">
                    {/* Contact Details */}
                    <div className="w-full md:w-2/3 flex flex-col gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                                    <h3 className="text-lg font-medium text-gray-800">Address</h3>
                                    <p className="text-gray-700">{details.address}</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                                    <h3 className="text-lg font-medium text-gray-800">Email</h3>
                                    <p className="text-gray-700">{details.email}</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                                    <h3 className="text-lg font-medium text-gray-800">Phone</h3>
                                    <p className="text-gray-700">{details.phone}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Media Links */}
                    <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Connect with Me</h2>
                        <ul className="flex flex-col space-y-4">
                            {details.socialMedia.map((social, index) => (
                                <li key={index} className="text-gray-800">
                                    <a href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-blue-600 hover:underline">
                                        <i className={`fa ${social.icon} text-2xl`}></i>
                                        <span>{social.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;

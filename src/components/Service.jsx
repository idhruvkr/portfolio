import { useState } from "react";

const Service = () => {
    return (
        <>
            {/* Service */}
            <div>
                <h1 className="text-center text-4xl font-bold underline px-10 py-10">Services</h1>
                <div className="flex flex-col md:flex-row justify-center space-y-5 md:space-y-0 md:space-x-5 px-5 md:px-0">
                    <div className="bg-slate-100 text-center p-5 space-y-4 shadow-lg rounded-xl">
                        <div><i className="fa fa-laptop text-4xl"></i></div>
                        <h1 className="text-xl font-semibold">Web Development</h1>
                        <div>
                            Web development is all about creating websites that are not only
                            visually appealing but also functional and interactive, providing
                            a great user experience for visitors.
                        </div>
                        <button className="bg-orange-600 px-4 py-2 rounded-full shadow-lg">Check</button>
                    </div>
                    <div className="bg-slate-100 text-center p-5 space-y-4 shadow-lg rounded-xl">
                        <div><i className="fa fa-code text-4xl"></i></div>
                        <h1 className="text-xl font-semibold">Frontend Development</h1>
                        <div>
                            Frontend development is all about what you see and interact with on
                            a website or web application. It focuses on ensuring that websites are
                            responsive, interactive, and visually appealing to users.
                        </div>
                        <button className="bg-orange-600 px-4 py-2 rounded-full shadow-lg">Check</button>
                    </div>
                    <div className="bg-slate-100 text-center p-5 space-y-4 shadow-lg rounded-xl">
                        <div><i className="fa fa-database text-4xl"></i></div>
                        <h1 className="text-xl font-semibold">Backend Development</h1>
                        <div>
                            Backend development focuses on the server-side of web applications
                            and websites. It involves creating and managing the software that runs
                            on a server and interacts with databases.
                        </div>
                        <button className="bg-orange-600 px-4 py-2 rounded-full shadow-lg">Check</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Service;
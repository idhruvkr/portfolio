import { useState } from "react";

const Service = () => {
    return (
        <>
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
        </>
    );
}

export default Service;
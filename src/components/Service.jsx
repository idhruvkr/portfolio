import { useState } from "react";

const Service = () => {
    // useState([
    //     {
    //         id: '',
    //         title: '',
    //         description: '',
    //         action: {
    //             link: '',
    //             route: ''
    //         }
    //     }
    // ]);

    return(
        <>
            <div>
                <h1 className="text-center text-4xl font-bold underline px-10 py-10">Services</h1>
                <div className="flex justify-center space-x-5">
                    <div className="bg-slate-100 text-center p-5 space-y-4 shadow-lg rounded-xl">
                        <div><i class="fa-brands fa-aws"></i></div>
                        <h1>Web Development</h1>
                        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Facere iste debitis aspernatur, ratione ipsum quas adipisci repellendus laborum error, 
                            rem itaque aut excepturi non laboriosam eligendi quaerat nostrum repudiandae aliquam?
                        </div>
                        <button className="bg-orange-600 px-2 py-1 rounded-full shadow-lg">Check</button>
                    </div>
                    <div className="bg-slate-100 text-center p-5 space-y-4 shadow-lg rounded-xl">
                        <div><i class="fa-solid fa-tablet"></i></div>
                        <h1>Frontend Development</h1>
                        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Facere iste debitis aspernatur, ratione ipsum quas adipisci repellendus laborum error, 
                            rem itaque aut excepturi non laboriosam eligendi quaerat nostrum repudiandae aliquam?
                        </div>
                        <button className="bg-orange-600 px-2 py-1 rounded-full shadow-lg">Check</button>
                    </div>
                    <div className="bg-slate-100 text-center p-5 space-y-4 shadow-lg rounded-xl">
                    <div><i class="fa-solid fa-server"></i></div>
                        <h1>Backend Development</h1>
                        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Facere iste debitis aspernatur, ratione ipsum quas adipisci repellendus laborum error, 
                            rem itaque aut excepturi non laboriosam eligendi quaerat nostrum repudiandae aliquam?
                        </div>
                        <button className="bg-orange-600 px-2 py-1 rounded-full shadow-lg">Check</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Service;
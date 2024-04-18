import banner from '../assets/user_pic.jpeg';
import bannerImgBackground from '../assets/banner.jpeg';

const Expertize = () => {
    return (
        <>
            <div>
                <h1 className="text-center text-4xl font-bold underline px-10 py-10">My Expertize</h1>
                <div className="main-container items-center">
                    <div className="w-full flex text-center">
                        <div className='w-2/3 space-y-2 ms-10'>
                            <h3 className='text-3xl font-semibold'>I love these technology. </h3>
                            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Itaque dicta deleniti ratione voluptas quod,
                                esse vitae consectetur accusantium blanditiis magni nihil doloribus voluptates,
                                ipsa aliquid sapiente eveniet iste doloremque veritatis!
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
                            <button className='bg-slate-400 m-3 px-3 py-2 rounded-full shadow-lg'>JQuery</button>
                            <button className='bg-slate-400 m-3 px-3 py-2 rounded-full shadow-lg'>JavaScript</button>
                            <button className='bg-slate-400 m-3 px-3 py-2 rounded-full shadow-lg'>TypeScript</button>
                            <button className='bg-slate-400 m-3 px-3 py-2 rounded-full shadow-lg'>Programming in C</button>
                            <button className='bg-slate-400 m-3 px-3 py-2 rounded-full shadow-lg'>Core Java</button>
                            <button className='bg-slate-400 m-3 px-3 py-2 rounded-full shadow-lg'>React</button>
                            <button className='bg-slate-400 m-3 px-3 py-2 rounded-full shadow-lg'>Bootstrap Modal</button>
                            <button className='bg-slate-400 m-3 px-3 py-2 rounded-full shadow-lg'>Angular Material</button>
                            <button className='bg-slate-400 m-3 px-3 py-2 rounded-full shadow-lg'>Tailwind CSS</button>
                            <button className='bg-slate-400 m-3 px-3 py-2 rounded-full shadow-lg'>Git</button>
                            <button className='bg-slate-400 m-3 px-3 py-2 rounded-full shadow-lg'>MongoDB</button>
                            <button className='bg-slate-400 m-3 px-3 py-2 rounded-full shadow-lg'>High Charts</button>
                            <button className='bg-slate-400 m-3 px-3 py-2 rounded-full shadow-lg'>Apex Charts</button>
                            <button className='bg-slate-400 m-3 px-3 py-2 rounded-full shadow-lg'>Spring Boot</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Expertize;
import banner from '../assets/user_pic.jpeg';
import bannerImgBackground from '../assets/banner.jpeg';

const Expertize = () => {
    return (
        <>
            <div className="py-10">
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
            </div>
        </>
    );
}

export default Expertize;
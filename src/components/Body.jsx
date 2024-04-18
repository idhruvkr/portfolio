import banner from '../assets/user_pic.jpeg';
import bannerImgBackground from '../assets/banner.jpeg';

const Body = () => {
    return (
        <>
            <div style={{
                backgroundImage: `url(${bannerImgBackground})`,
                backgroundSize: 'cover'
            }} className="main-container text-white items-center">
                <div className="w-full flex justify-center">
                    <div className='w-2/3 space-y-2 ms-10'>
                        <h3 className='text-3xl font-semibold'>Hi, I am </h3>
                        <h1 className='text-5xl font-bold'>A</h1>
                        <h2 className='text-3xl font-bold'>I am a</h2>
                        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Itaque dicta deleniti ratione voluptas quod,
                            esse vitae consectetur accusantium blanditiis magni nihil doloribus voluptates,
                            ipsa aliquid sapiente eveniet iste doloremque veritatis!
                        </p>
                        <div className='icon-container space-x-5 flex'>
                            <a className="hover:bg-orange-500 border px-2 py-1.5 cursor-pointer w-12 h-12 rounded-full flex justify-center">
                                <i className="fa-brands text-3xl fa-linkedin-in"></i>
                            </a>
                            <a className="hover:bg-orange-500 border px-2 py-1.5 cursor-pointer w-12 h-12 rounded-full flex justify-center">
                                <i className="fa-brands text-3xl fa-facebook"></i>
                            </a>
                            <a className="hover:bg-orange-500 border px-2 py-1 cursor-pointer w-12 h-12 rounded-full flex justify-center">
                                <i className="fa-brands text-3xl fa-whatsapp"></i>
                            </a>
                            <a className="hover:bg-orange-500 border px-2 py-1 cursor-pointer w-12 h-12 rounded-full flex justify-center">
                                <i className="fa-brands text-3xl fa-instagram"></i>
                            </a>
                            <a className="hover:bg-orange-500 border px-2 py-1 cursor-pointer w-12 h-12 rounded-full flex justify-center">
                                <i className="fa-brands text-3xl fa-x-twitter"></i>
                            </a>
                        </div>
                        <br />
                        <a className="text-lg px-3 py-2 bg-blue-500 rounded-full shadow-lg" href="/contact">Contact Me</a>
                    </div>
                </div>
                <div className="image w-full flex justify-center">
                    <img className='rounded-full shadow-lg w-fit' src={banner} alt="img" />
                </div>
            </div>
        </>
    );
};

export default Body;

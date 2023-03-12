import React from 'react'
import MyImg from '../assets/mnku.jpg';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from "react-scroll";
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
// import Zoom from 'react-reveal/Zoom';

const Home = () => {
    return (
        <div name="home" className="h-screen w-full bg-gradient-to-r from-blue-700 via-blue-400 to-blue-600">

            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 text-black md:flex-row'>

                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold font-signature'>
                        Welcome!! I'm Mayank Mishra
                    </h2>
                    <p className='text-blac py-4 max-w-md'>
                        Hello Everyone I am Mayank Mishra.
                        I was born and raised in Bageshwar Uttarakhand then for my graduation i moved to Dehradun. Currently I'm pursuing B.tech Computer Science from Graphic Era Hill University Dehradun.
                        I did my schooling from KVIC Bageshwar. I'm a student of section G 6th Sem.
                    </p>
                    <Bounce distance="20%" duration="2000">
                        <div>
                            <Link
                                to="clg"
                                smooth
                                duration={500}
                                className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-red-800 to-red-500 cursor-pointer font-signature'
                            >
                                College Work
                                <span className='group-hover:rotate-90 duration-300'><MdKeyboardArrowRight size={25} className='ml-1' /></span>
                            </Link>
                        </div>

                    </Bounce>
                </div>
                <div>
                    <Fade bottom duration="2000">

                        <img src={MyImg} alt="My Img" className='m-8 rounded-full mx-auto w-2/3 md:w-full ' />
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Home
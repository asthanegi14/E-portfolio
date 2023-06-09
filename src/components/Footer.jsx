import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (

        <Fade duration="2000">
            <div className='bg-gradient-to-r justify-center items-center from-blue-700 via-blue-400 to-blue-600 text-black'>

                <h1 className='px-4 pt-12 w-full text-center text-2xl text-20px font-signature'>Thanks For visiting </h1>
                <div className='lg:hidden my-4 mx-4 flex justify-center items-center'>
                    <div className='px-4 justify-center items-center'>
                        <a href="https://www.linkedin.com/in/astha-negi-771b22216/" className='group'>
                            <> <FaLinkedin size={30} className="justify-center items-center mx-2 my-2" />
                                <h2 className="gap-6" >LinkedIn</h2></>
                        </a>
                    </div>
                    <div className='px-4 justify-center items-center'>
                        <a href="https://github.com/asthanegi14" className='group'>
                            <>  <FaGithub size={30} className="justify-center items-center mx-2 my-2" />
                                <h2 className="gap-6" >GitHub</h2> </>
                        </a>
                    </div>
                    <div className='px-4 justify-center items-center'>
                        <a href="mailto: asthanegi539@gmail.com" className='group'>
                            <> <HiOutlineMail size={30} className="justify-center items-center mx-2 my-2" />
                                <h2 className="gap-6" >GMail</h2></>
                        </a>
                    </div>
                    <div className='px-4 justify-center items-center'>
                        <a href="resume_AsthaNegi.pdf" download={true} target='_blank' className='group'>
                            <> <BsFillPersonLinesFill size={30} className="justify-center items-center mx-2 my-2" />
                                <h2 className="gap-6" >Resume</h2></>
                        </a>
                    </div>
                </div>
                <p className='px-4 pt-8 pb-12 w-full text-sm text-center sm:pt-4'>**NOTE : This Portfolio is for the professional work of my University so please do not misuse the content inside it.
                    <br />
                    <p className='text-sm text-center font-signature'>Terms of Use . Privacy Policy</p>
                </p>
            </div>

        </Fade>
    )
}

export default Footer
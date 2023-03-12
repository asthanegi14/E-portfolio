import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
// import { BsFillPersonLinesFill } from 'react-icons/bs';
const Social = () => {
    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-400 font-signature'>
                    <a href="https://www.linkedin.com/in/mayank-mishra-475405215/" className='flex justify-between items-center w-full text-black'>
                        <>
                            LinkedIn <FaLinkedin size={30} /></>
                    </a>
                </li>
                <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-400 font-signature'>
                    <a href="https://github.com/Mayank1242" className='flex justify-between items-center w-full text-black'>
                        <>
                            GitHub <FaGithub size={30} /></>
                    </a>
                </li>
                <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-400 font-signature'>
                    <a href="mailto: mayank1242@gmail.com" className='flex justify-between items-center w-full text-black'>
                        <>
                            GMail <HiOutlineMail size={30} /></>
                    </a>
                </li>
                {/* <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-400 font-signature'>
                    <a href="resume_AsthaNegi.pdf" download={true} target='_blank' className='flex justify-between items-center w-full text-black'>
                        <>
                            Resume <BsFillPersonLinesFill size={30} /></>
                    </a>
                </li> */}
            </ul>
        </div>
    )
}

export default Social
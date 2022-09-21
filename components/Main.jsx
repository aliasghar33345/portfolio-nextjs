import React from "react";
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from "react-icons/ai";
import {FaLinkedin, FaGithub, } from "react-icons/fa";
import {BsFillPersonLinesFill} from "react-icons/bs"
const Main = () =>{
    return(
        <div id="home" className="w-full h-screen text-center">
           <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
              <div>
                  <p className="uppercase text-sm tracking-widest text-gray-600">Let's Build Something</p>
                  <h1 className="py-4 text-gray-600">Hi I'm <span className="text-[#5651e5]">Ali</span></h1>
                  <h1 className="py-4 text-gray-700">A Full Stack Developer</h1>
                  <p className="py-4 text-gray-600 max-w-[70%] m-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                     dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
             
               <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
               <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedin/>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub/>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                      <AiOutlineMail/>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                      <BsFillPersonLinesFill/>
                  </div>
               </div>
              </div>
           </div>
        </div>
    )
}
export default Main;
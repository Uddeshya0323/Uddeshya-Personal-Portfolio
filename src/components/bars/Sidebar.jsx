import Profile from '../../assets/Profile.png'
import 'remixicon/fonts/remixicon.css'
import UddeshyaPatel from '../../assets/UddeshyaPatel.jpg'
import React, { useState } from 'react'
import About from '../About';
import Resume from '../Resume';
import Contact from '../Contact';
import Projects from '../Projects';

function Sidebar() {
  const [selected, setSelected] = useState("about");
  const [component, setComponent] = useState(<About/>)
  const [title, setTitle] = useState("About Me")
  return (
    <>
    <div id="container-sidebar" className='w-full py-5 lg:py-0'>
        <div id="profile-pic"className='flex justify-center items-center w-full'>
            <div id="img" className='rounded-xl lg:w-36 bg-zinc-800 overflow-hidden  lg:h-36 items-center flex justify-center '>
                <img src={UddeshyaPatel} alt="" />
            </div>
        </div>
        <div id="info" className='flex flex-col justify-center items-center w-full py-3 gap-3'>
            <h1 className='text-5xl lg:text-xl  font-semibold'>Uddeshya Patel</h1>
            <div id="degination" className='p-1 rounded  bg-zinc-800  w-36 flex justify-center items-center font-semibold'><h2>Web Developer</h2></div>
            <div id="data" className='flex justify-between items-center gap-5'>
                <div id="icon" className='flex flex-col gap-5 my-3'>
                <div id="mail-icon" className='px-3 py-1 mt-1 rounded bg-zinc-800'><i class="ri-mail-line text-yellow-400 text-xl"></i></div>
                <div id="phone-icon" className='px-3 py-1 rounded bg-zinc-800'><i class="ri-phone-line text-yellow-400 text-xl"></i></div>
                <div id="birthday-icon" className='px-3 py-1 rounded bg-zinc-800'><i class="ri-cake-line text-yellow-400 text-xl"></i></div>
                <div id="address-icon" className='px-3 py-1 rounded bg-zinc-800'><i class="ri-map-pin-2-line text-yellow-400 text-xl"></i></div>
                </div>
                <div id="cont" className='w-full'>
                    <div id="mail" className='pb-1'>
                    <label htmlFor="email" className='text-xs font-semibold uppercase'>Email</label>
                    <p className='text-sm font-semibold'>uddeshyap1@gmail.com</p>
                    </div>
                    <div id="phone" className='py-1'>
                    <label htmlFor="phone" className='text-xs font-semibold uppercase'>phone</label>
                    <p className='text-sm font-semibold'>(+91) 9628452687</p>
                    </div>
                    <div id="birthday" className='py-2'>
                    <label htmlFor="email" className='text-xs font-semibold uppercase'>Birthday</label>
                    <p className='text-sm font-semibold'>10 November 1999</p>
                    </div>
                    <div id="adress" className='pt-2'>
                    <label htmlFor="email" className='text-xs font-semibold uppercase'>Address</label>
                    <p className='text-sm font-semibold'>Varanasi, India</p>
                    </div>
                </div>
            </div>
            
            <div id="socials" className='grid grid-cols-3 gap-5'>
            <a href="https://github.com/Uddeshya0323"><i class="ri-github-fill text-2xl cursor-pointer  hover:text-yellow-400 text-white"></i></a>
                <a href='https://www.instagram.com/uddeshya0323?igsh=MTYzYzlzem8weHZqdA%3D%3D&utm_source=qr'><i class="ri-instagram-fill text-2xl cursor-pointer  hover:text-yellow-400 text-white"></i></a>
                <a href="https://www.linkedin.com/in/uddeshya-patel"><i class="ri-linkedin-box-fill text-2xl cursor-pointer  hover:text-yellow-400 text-white"></i></a>
                </div>
        </div>
        <div id="menu" className='py-10 hidden md:block lg:hidden'>
            <ul className='lg:flex py-5 text-center lg:py-0  items-center bg-zinc-800   max-w-lg rounded-xl overflow-hidden shadow-lg'>
                <li className={`cursor-pointer py-3 text-2xl hover:text-yellow-400 font-semibold uppercase ${selected == "about" ? "text-yellow-400" : "text-white"}`} onClick={()=>{setSelected("about"),setComponent(<About/>),setTitle("About Me")}}>About</li>
                <li className={`cursor-pointer py-3 text-2xl hover:text-yellow-400 font-semibold uppercase ${selected == "resume" ? "text-yellow-400" : "text-white"}`} onClick={()=>{setSelected("resume"),setComponent(<Resume/>), setTitle("My Resume")}}>resume</li>
                <li className={`cursor-pointer py-3 text-2xl hover:text-yellow-400 font-semibold uppercase ${selected == "project" ? "text-yellow-400" : "text-white"}`} onClick={()=>{setSelected("project"),setComponent(<Projects/>), setTitle("My Projects")}}>Projects</li>
                <li className={`cursor-pointer py-3 text-2xl hover:text-yellow-400 font-semibold uppercase ${selected == "contact" ? "text-yellow-400" : "text-white"}`} onClick={()=>{setSelected("contact"),setComponent(<Contact/>),setTitle("Contact Form")}}>Contact</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Sidebar
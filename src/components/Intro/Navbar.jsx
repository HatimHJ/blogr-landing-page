import React, { useState } from 'react'
import { logo, close, hamburger, } from "../../assets";
import { nav, dropdown, register } from "./Navbar.style";
import NavLink from './NavLink';


const linksData = [
  {
    id:1,
    title: 'Product',
    isDropDown : true,
    dropdownLinks:[
      'Overview', 'Pricing', 'Marketplace', 'Features', 'Integrations'
    ]
  },
  {
    id:2,
    title: 'Company',
    isDropDown : true,
    dropdownLinks:[
      'About', 'Team', 'Blog', 'Careers'
    ]
  },
  {
    id:3,
    title: 'Connect',
    isDropDown : true,
    dropdownLinks:[
      'Contact', 'Newsletter', 'LinkedIn'
    ]
  }
]

export default function Navbar() {  
  const [isOpen, setIsOpen] = useState(false);

  const linksHandler = (e) =>{
    const link = e.currentTarget;
    [...link.parentElement.children].forEach(el =>{
      if (el.id !== link.id) {
        el.classList.add('close')        
      }
    })
    if (link.classList.contains('close')) {
      link.classList.remove('close')
    }else{
      link.classList.add('close')
    }
  }

  return (
      <header className="logo-nav flex justify-between items-center lg:gap-16">
          {/* header => [logo + navbar + toggler] */}
          <img src={logo} alt="" />
          {/* nav links => [ul(links) + 2 buttons [registering]] */}
          <nav className ={`${isOpen ? 'md:flex' : 'hidden'}  ${nav.sm} ${nav.md} ${nav.lg} `}>
            {/* links */}
            <ul className={`${dropdown.sm} ${dropdown.md}`}  >
              {
                linksData.map((el, index) =>{
                  return  <NavLink key={index} {...el} linksHandler={linksHandler} />              
                })
              }
            </ul>
            {/* 2 buttons */}
            <div className={`${register.sm} ${register.md}`}>
              <button className="login">Login</button>
              <button className="sign text-base bg-gradient-to-r from-red-400 to-red-500 lg:from-white lg:to-white lg:text-red-500 text-white px-8  py-2 align-middle rounded-full">Sign Up</button>
            </div>
          </nav>
          {/* burger button */}
          <button className='lg:hidden' onClick={()=> setIsOpen(!isOpen)}>
            <img src={isOpen ? close : hamburger} alt="" />
          </button>
        </header>
  )
}


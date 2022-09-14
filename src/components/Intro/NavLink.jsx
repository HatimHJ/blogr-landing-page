import React from 'react'
import { arrow_Mb, arrow_Dt } from "../../assets";
import {  dropdownBox } from "./Navbar.style";



export default function NavLink({id, title, isDropDown, dropdownLinks, linksHandler}) {

    return (
      <li className='dropdown-link relative close' id={id} onClick={(e) => linksHandler(e)} >
        <div className="title flex gap-2 items-center justify-center cursor-pointer" >
          <span >{title}</span>
          {
            isDropDown && (
              <picture>
                <source media="(min-width: 1024px)" srcSet={arrow_Dt} />                    
                <img src={arrow_Mb} alt="" className='arrow' />
              </picture>
            )
          }
        </div>
        {
          isDropDown && (
            <ul className={` ${dropdownBox.sm} ${dropdownBox.md} `}>
              {dropdownLinks.map((dd, index) =>{
                return (
                    <li key={index}><a href="">{dd}</a></li>
                  )
              })}
            </ul>
          )
        }
      </li>
    )

}


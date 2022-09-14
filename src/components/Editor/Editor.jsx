import React from 'react'
import {  editorMb, editorDt} from "../../assets";
export default function Editor() {
  return (
    <div className='editor text-center my-16 overflow-x-hidden'>
      <div className="container mx-auto px-4">
        <h2 className="title text-theme-blue-2 text-3xl font-semibold">
          Designed for the future 
        </h2>
        <div className="wrapper md-992:flex md-992:gap-4 md-992:flex-row-reverse md-992:mt-12 md-992:items-center">
          <div className="image my-12 flex items-center justify-center mx-auto md:max-w-sm md-992:max-w-full md-992:my-0 md-992:translate-x-[35%] md-992:-translate-y-[10%]">
            <picture>
              <source media="(min-width: 767px)" srcSet={editorDt} />
              <img src={editorMb} alt="" />
            </picture>
          </div>
          <div className="content md:max-w-lg md-992:max-w-xl md:mx-auto md-992:text-left px-7 md-992:px-12">
            <div className="text ">
              <h3 className='text-theme-blue-2 font-semibold text-2xl'>
                Introducing an extensible editor 
              </h3>
              <p className='mt-4 mb-8 max-w-xs  mx-auto md:max-w-full text-theme-blue-3 text-sm md-992:max-w-4xl'> 
                Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.
              </p>
            </div>
            <div className="text ">
              <h3 className='text-theme-blue-2 font-semibold text-2xl'>
                Robust content management 
              </h3>
              <p className='mt-4 mb-8 max-w-xs  mx-auto md:max-w-full text-theme-blue-3 text-sm md-992:max-w-4xl'> 
                Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

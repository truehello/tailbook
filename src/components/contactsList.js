import React from 'react'

import plusIcon from "../images/plus.svg"
import githubIcon from "../images/github.svg"
import codeIcon from "../images/code.svg"

const contactsList = () =>  (
        <>
             <h4 className="text-gray-600 font-semibold text-2xl mb-4">Contacts</h4>
        
        <a href="https://marctrudel.dev/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:bg-gray-200 rounded-lg p-2 pl-0">
          <div className="flex-shrink-0 h-12 w-12">
            
             <img
              src={plusIcon}
              className="h-12 w-12 p-2 rounded-full bg-gray-200"
              alt="plus Icon"
            />
          </div>
          <div className="ml-4">
            <div className="text-lg leading-5 font-medium">
              marctrudel.dev
            </div>
          </div>
        </a>

      

        <a href="https://github.com/truehello"  target="_blank" rel="noopener noreferrer" className="flex items-center hover:bg-gray-200 rounded-lg p-2 pl-0">
          <div className="flex-shrink-0 h-12 w-12">
          <img
              src={githubIcon}
              className="h-12 w-12 p-2 rounded-full bg-gray-200"
              alt="plus Icon"
            />
          </div>
          <div className="ml-4">
            <div className="text-lg leading-5 font-medium">
              Github
            </div>
          </div>
        </a>


        <a href="https://codepen.io/truehello"  target="_blank" rel="noopener noreferrer" className="flex items-center hover:bg-gray-200 rounded-lg p-2 pl-0">
          <div className="flex-shrink-0 h-12 w-12">
          <img
              src={codeIcon}
              className="h-12 w-12 p-2 rounded-full bg-gray-200"
              alt="plus Icon"
            />
          </div>
          <div className="ml-4">
            <div className="text-lg leading-5 font-medium">
              Codepen
            </div>
          </div>
        </a>
 
        </>
    )

export default contactsList
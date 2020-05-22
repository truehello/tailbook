import React from "react"
import { Link } from "gatsby"

import homeIcon from "../images/home.svg"
import saveIcon from "../images/save.svg"
import usersIcon from "../images/users.svg"
import fingerprintIcon from "../images/fingerprint.svg"


const LeftNav = () => (
    <>
       <Link
        to="/"
        className="flex items-center hover:bg-gray-200 rounded-lg p-2 pl-0"
      >
        <div className="flex-shrink-0 h-12 w-12">
          <img src={homeIcon} className="h-12 w-12 p-2" alt="plus Icon" />
        </div>
        <div className="ml-4">
          <div className="text-lg leading-5 font-medium">Home</div>
        </div>
      </Link>

      <Link
        to="/about"
        className="flex items-center hover:bg-gray-200 rounded-lg p-2 pl-0"
      >
        <div className="flex-shrink-0 h-12 w-12">
          <img src={fingerprintIcon} className="h-12 w-12 p-2" alt="plus Icon" />
        </div>
        <div className="ml-4">
          <div className="text-lg leading-5 font-medium">About</div>
        </div>
      </Link>

      <Link
        to="/experience"
        className="flex items-center hover:bg-gray-200 rounded-lg p-2 pl-0"
      >
        <div className="flex-shrink-0 h-12 w-12">
          <img src={saveIcon} className="h-12 w-12 p-2" alt="save Icon" />
        </div>
        <div className="ml-4">
          <div className="text-lg leading-5 font-medium ">Experience</div>
        </div>
      </Link>

      <Link
        to="/resume"
        className="flex items-center hover:bg-gray-200 rounded-lg p-2 pl-0"
      >
        <div className="flex-shrink-0 h-12 w-12">
          <img src={usersIcon} className="h-12 w-12 p-2" alt="plus Icon" />
        </div>
        <div className="ml-4">
          <div className="text-lg leading-5 font-medium">CV</div>
        </div>
      </Link>
    </>
  )


export default LeftNav

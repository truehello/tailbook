import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import fbIcon from "../images/facebook-circle.svg"
import homeIcon from "../images/home.svg"
import saveIcon from "../images/save.svg"
import usersIcon from "../images/users.svg"
import userIcon from "../images/user.svg"

const Header = ({ siteTitle }) => (
  <header className="bg-white shadow mb-6">
    <div className="flex justify-between items-center px-4 lg:px-6">
      
        <Link to="/" className="flex items-center ">
          <img src={fbIcon} className="h-10 pr-2" alt="Tailbook Icon" />
          <h1 className="text-3xl text-black font-semibold tracking-tight">{siteTitle}</h1>
        </Link>
     

      <nav className="flex h-full">
        <Link
          to="/about"
          className="border-b-4 border-transparent hover:border-blue-500  rounded p-4 w-32 flex justify-center items-center"
          title="who"
        >
          <img src={homeIcon} className="h-8 hover:bg-gray-300" alt="Who Icon" />
        </Link>
        <Link
          to="/experience"
          className="border-b-4 border-transparent hover:border-blue-500 p-4 w-32 flex justify-center items-center"
        >
          <img src={saveIcon} className="h-8" alt="Save Icon" />
        </Link>
        <Link
          to="/resume"
          className="border-b-4 border-transparent hover:border-blue-500 p-4 w-32 flex justify-center items-center"
        >
          <img src={usersIcon} className="h-8" alt="Users Icon" />
        </Link>
      </nav>

      <div className="flex items-center h-full">
        <img src={userIcon} className=" h-8 w-8 border-2 rounded-full bg-gray-300" alt="User Icon" />
        <p className="font-bold ml-2">Adam</p>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

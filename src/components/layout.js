/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

import plusIcon from "../images/plus.svg"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      
     
        <main className="my-0 mx-auto px-4">{children}</main>
        
      
      <div className="fixed bottom-0 right-0">
        <button className="mb-8 mr-4 rounded-full bg-white shadow p-3">
        <img
              src={plusIcon}
              className="h-6 w-6 rounded-full bg-gray-500"
              alt="plus Icon"
            />
        </button>
      </div>
      <footer className="p-4 flex justify-end">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          {` `}
          <span className="text-xs"> and</span> 
          {` `}
          <a href="https://www.tailwindcss.com">Tailwind</a>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

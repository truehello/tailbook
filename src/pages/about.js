import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LeftNav from "../components/leftNav"

const AboutPage = () => (
  <Layout>

    <SEO title="Page two" />
    <div className="grid grid-cols-8 gap-8 lg:gap-24">
      
      <div className="col-span-2">
        <LeftNav />
      </div>
    
    <div className="col-span-6">
      
      <section className="bg-white shadow overflow-hidden sm:rounded-lg px-8 py-4 mb-8">
        <h1 h1 className="text-3xl text-black">About Marc</h1>
        <p>To Overshare</p>
        <ul>
          <li>Personal and Family life</li>
          <li>Goals</li>
          <li>hobbies. soccer, triathlon, gardening, woodworking</li>
          <li>favorite movies, tv</li>
          <li>favorite websites</li>
          <li>devs that I admire</li>
          <li>others that I admire</li>
          <li>regrets e.g what I didn't complete on this site</li>
        </ul>

      
      </section>

      

      <Link to="/">Go back to the homepage</Link>
      </div>

    </div>
    
  </Layout>
)

export default AboutPage

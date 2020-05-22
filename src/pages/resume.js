import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LeftNav from "../components/leftNav"

const ResumePage = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="grid grid-cols-8 gap-8 lg:gap-24">
      
      <div className="col-span-2">
        <LeftNav />
      </div>
    
    <div className="col-span-6">

    
    <section className="bg-white shadow overflow-hidden sm:rounded-lg px-8 py-4 mb-8">
    <h1 h1 className="text-3xl text-black">CV</h1>
    <p>Welcome to CV</p>
    <div className=" mb-6">
        <Image />
      </div>
    </section>

    <Link to="/">Go back to the homepage</Link>

    </div>
    </div>
    
  </Layout>
)

export default ResumePage

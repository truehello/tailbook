import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LeftNav from "../components/leftNav"
import ContactsList from "../components/contactsList"

const ExperiencePage = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="grid grid-cols-8 gap-8 lg:gap-24">
      <div className="col-span-2">
        <LeftNav />
      </div>

      <div className="col-span-4">
        <section className="bg-white shadow overflow-hidden sm:rounded-lg px-8 py-4 mb-8">
          <h1 h1 className="text-3xl text-black">
            Experience
          </h1>
          <p>Welcome to experience</p>
        </section>

        <Link to="/">Go back to the homepage</Link>
      </div>

      {/* start of right column */}
      <div className="col-span-2">
        <ContactsList />
      </div>
      {/* end of right column */}
    </div>
  </Layout>
)

export default ExperiencePage

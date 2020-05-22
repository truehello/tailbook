import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import sadIcon from "../images/emoji-sad.svg"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="bg-white shadow overflow-hidden sm:rounded-lg px-8 py-4 mb-8">
    <div className="flex">
        <img
          src={sadIcon}
          className="h-12 w-12 p-2 rounded-full bg-gray-300 mr-4"
          alt="plus Icon"
        />
        <div>
        <h3 className="text-2xl font-semibold leading-tight">NOT FOUND</h3>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
      </div>
    </section>

    <Link to="/">Go back to the homepage</Link>

  </Layout>
)

export default NotFoundPage

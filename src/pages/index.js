import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import LeftNav from "../components/leftNav"
import ContactsList from "../components/contactsList"

import plusIcon from "../images/plus.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="grid grid-cols-8 gap-8 lg:gap-24">
      {/* start left column */}
      <div className="col-span-2">
        <LeftNav />
      </div>

      {/* start center column */}
      <div className="col-span-4">
        <section className="bg-white shadow overflow-hidden sm:rounded-lg p-6 mb-8">
          <div className="flex">
            <img
              src={plusIcon}
              className="h-12 w-12 p-2 rounded-full bg-gray-300 mr-4"
              alt="plus Icon"
            />
            <div>
              <h3 className="text-2xl font-semibold leading-tight">
                Hi Adam and Steve
              </h3>
              <p>and employee #3. Here is a little about me</p>
            </div>
          </div>
        </section>

        <section className="bg-white shadow overflow-hidden sm:rounded-lg px-8 py-4 mb-8">
          <h1 className="text-3xl font-semibold leading-tight">
            I am a full-stack developer and designer in Victoria, British
            Columbia, Canada.
          </h1>
          <p>
            I spend my time trying to figure out what the heck I am doing, and
            tinkering around with code.
          </p>
          <p>Here is why I should be employee #4</p>
        </section>

        <section className="bg-white shadow overflow-hidden sm:rounded-lg px-8 py-4 mb-8">
          <h2 className="text-2xl font-semibold leading-tight">
            I dig combining the technical aspects of web building with the
            design details needed for good user experience.
          </h2>

          <p>Bringing design and code together is my happy place.</p>
          <div className="max-w-xs mb-6">
            <Image />
          </div>
        </section>

        <section className="bg-white shadow overflow-hidden sm:rounded-lg px-8 py-4 mb-8">
          <h2 className="text-2xl font-semibold leading-tight">
            I dig combining the technical aspects of web building with the
            design details needed for good user experience.
          </h2>

          <p>Bringing design and code together is my happy place.</p>
        </section>

        <section className="bg-white shadow overflow-hidden sm:rounded-lg px-8 py-4 mb-8">
          <h2 className="text-2xl font-semibold leading-tight">
            I've got 16 years of experienc in the industry as a designer and
            developer.
          </h2>

          <p>And I have been working remotely for the past 12 years.</p>
        </section>
      </div>

      {/* start of right column */}
      <div className="col-span-2">
        <ContactsList />
      </div>
      {/* end of right column */}
    </div>
  </Layout>
)

export default IndexPage

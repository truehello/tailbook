import React from "react"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import LeftNav from "../components/leftNav"
import ContactsList from "../components/contactsList"

import plusIcon from "../images/plus.svg"
import likeIcon from "../images/thumbs-up.svg"
import shareIcon from "../images/forward.svg"
import userIcon from "../images/user.svg"
import commentIcon from "../images/comment.svg"
import fbLOLIcon from "../images/fb-lol.svg"
import fbZanyIcon from "../images/emoji-zany.svg"
import fbRollingEyesIcon from "../images/emoji-rolling-eyes.svg"

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
        <section className="bg-white shadow overflow-hidden sm:rounded-lg px-6 py-4 mb-8">
          <div className="flex">
            <img
              src={plusIcon}
              className="h-12 w-12 p-2 rounded-full bg-gray-300 mr-4"
              alt="plus Icon"
            />
            <div>
              <h3 className="text-xl font-semibold leading-tight">
                Hi Adam and Steve
              </h3>
              <p>and employee #3. Here is a little about me</p>
            </div>
          </div>
        </section>

        <section className="flex flex-col bg-white shadow overflow-hidden sm:rounded-lg px-8 pt-4 pb-2 mb-8">

        <div className="flex items-center py-2">
        <img src={userIcon} className="h-8 w-8 border-2 rounded-full bg-gray-300 mr-2" alt="Users Icon" />
        <div className="flex flex-col justify-around">
          <p className="font-semibold tracking-tight leading-none text-gray-900">Marc Trudel</p>
          <date className="text-sm text-gray-400 leading-none">Today, 5:13am</date>
        </div>
        </div>



          <div className="pt-2">
            <h1 className="text-xl font-semibold leading-tight">
              I am a full-stack developer and designer in Victoria, British
              Columbia, Canada.
            </h1>
            <p>
              I spend my time trying to figure out what the heck I am doing, and
              tinkering around with code.
            </p>
            <p>Here is why I should be employee #4</p>
          </div>

          <div className="card-footer flex flex-col border-gray-500 mt-4 pt-2">
            
            <div className="flex justify-between items-center border-gray-300 border-t border-b py-1">
              <div className="flex items-center">
              <img src={fbZanyIcon} className="h-10 w-10" alt="Like Icon" />
              <img src={fbRollingEyesIcon} className="h-10 w-10 -ml-4" alt="Like Icon" />
              <img src={fbLOLIcon} className="h-10 w-10 -ml-4 mr-2" alt="Like Icon" />
               23
              </div>
              34 Comments 62 Likes
            </div>

            <div className="flex justify-between px-24 pt-1">
            <button className="flex items-center text-gray-700  hover:font-gray:300 font-semibold">
              <img src={likeIcon} className="h-8 w-8 p-2" alt="Like Icon" />
              Like
            </button>
            <button className="flex items-center text-gray-700 hover:font-gray:300 font-semibold">
              <img src={commentIcon} className="h-8 w-8 p-2" alt="Like Icon" />
              Comment
            </button>
            <button className="flex items-center text-gray-700  hover:font-gray:300 font-semibold">
              <img src={shareIcon} className="h-8 w-8 p-2" alt="Like Icon" />
              Share
            </button>
            </div>

            <div className="flex items-center pt-1">
            <img src={userIcon} className="h-8 w-8 border-2 rounded-full bg-gray-300 mr-2" alt="Users Icon" />
            <input type="text" placeholder="Write a comment..."  class="w-full p-4 py-2 text outline-none focus:outline-none bg-gray-200 rounded-full" />
            </div>




          </div>
        </section>

        <section className="bg-white shadow overflow-hidden sm:rounded-lg px-8 py-4 mb-8">
          <h2 className="text-xl font-semibold leading-tight">
            I'm a big fan of TailwindCSS and want to be part of the team
            extolling its virtues.
          </h2>

          <p>And I have the skillset to help do that.</p>
          {/* <div className="max-w-xs mb-6">
            <Image />
          </div> */}
        </section>

        <section className="bg-white shadow overflow-hidden sm:rounded-lg px-8 py-4 mb-8">
          <h2 className="text-xl font-semibold leading-tight">
            I'm trying to quickly replicate the Facebook UI using tailwind for
            this application.
          </h2>

          <p>
            Not because I have any affinity towards Facebook but as an hommage
            to Adam's videos.{" "}
          </p>
        </section>

        <section className="bg-white shadow overflow-hidden sm:rounded-lg px-8 py-4 mb-8">
          <h2 className="text-xl font-semibold leading-tight">
            I dig combining the technical aspects of web building with the
            design details needed for good user experience.
          </h2>

          <p>
            Bringing design and code together is my happy place. And that seems
            to be what Tailwind is all about.{" "}
          </p>
        </section>

        <section className="bg-white shadow overflow-hidden sm:rounded-lg px-8 py-4 mb-8">
          <h2 className="text-xl font-semibold leading-tight">
            I've got 16 years of experience in the industry as a designer and
            developer.
          </h2>

          <p>And I have been working remotely for the past 12 years.</p>
        </section>

        <section className="bg-white shadow overflow-hidden text-center sm:rounded-lg px-8 py-4 mb-8">
          <h2 className="text-xl font-semibold leading-tight mb-4">
            You're All Caught Up
          </h2>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
            Refresh News Feed
          </button>
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

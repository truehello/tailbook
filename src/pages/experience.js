import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LeftNav from "../components/leftNav"
import ContactsList from "../components/contactsList"

import likeIcon from "../images/thumbs-up.svg"
import shareIcon from "../images/forward.svg"
import userIcon from "../images/user.svg"
import commentIcon from "../images/comment.svg"
import fbLOLIcon from "../images/fb-lol.svg"
import fbZanyIcon from "../images/emoji-zany.svg"
import fbRollingEyesIcon from "../images/emoji-rolling-eyes.svg"

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
          <p>
            Here are a few projects that I can share where I have incorprated
            Tailwind.
          </p>
        </section>

        <section className="flex flex-col bg-white shadow overflow-hidden sm:rounded-lg pt-4 pb-2 mb-8">
          <div className="flex items-center px-8 py-2">
            <img
              src={userIcon}
              className="h-8 w-8 border-2 rounded-full bg-gray-300 mr-2"
              alt="Users Icon"
            />
            <div className="flex flex-col justify-around">
              <p className="font-semibold tracking-tight leading-none text-gray-900">
                Marc Trudel
              </p>
              <date className="text-sm text-gray-400 leading-none">
                Today, 5:13am
              </date>
            </div>
          </div>

          <div className="px-8 pt-2">
            <h1 className="text-xl font-semibold leading-tight">
              marctrudel.dev
            </h1>
            <p>Personal site</p>
          </div>

          <img
            src="https://source.unsplash.com/featured/?space,milkyway"
            alt="project"
            className="object-contain"
          />

          <div className="card-footer flex flex-col border-gray-500 mt-4 px-8 pt-2">
            <div className="flex justify-between items-center border-gray-300 border-t border-b py-1">
              <div className="flex items-center">
                <img src={fbZanyIcon} className="h-10 w-10" alt="Like Icon" />
                <img
                  src={fbRollingEyesIcon}
                  className="h-10 w-10 -ml-4"
                  alt="Like Icon"
                />
                <img
                  src={fbLOLIcon}
                  className="h-10 w-10 -ml-4 mr-2"
                  alt="Like Icon"
                />
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
                <img
                  src={commentIcon}
                  className="h-8 w-8 p-2"
                  alt="Like Icon"
                />
                Comment
              </button>
              <button className="flex items-center text-gray-700  hover:font-gray:300 font-semibold">
                <img src={shareIcon} className="h-8 w-8 p-2" alt="Like Icon" />
                Share
              </button>
            </div>

            <div className="flex items-center px-8 pt-1">
              <img
                src={userIcon}
                className="h-8 w-8 border-2 rounded-full bg-gray-300 mr-2"
                alt="Users Icon"
              />
              <input
                type="text"
                placeholder="Write a comment..."
                class="w-full p-4 py-2 text outline-none focus:outline-none bg-gray-200 rounded-full"
              />
            </div>
          </div>
        </section>

        <section className="flex flex-col bg-white shadow overflow-hidden sm:rounded-lg pt-4 pb-2 mb-8">
          <div className="flex items-center px-8 py-2">
            <img
              src={userIcon}
              className="h-8 w-8 border-2 rounded-full bg-gray-300 mr-2"
              alt="Users Icon"
            />
            <div className="flex flex-col justify-around">
              <p className="font-semibold tracking-tight leading-none text-gray-900">
                Marc Trudel
              </p>
              <date className="text-sm text-gray-400 leading-none">
                Today, 5:13am
              </date>
            </div>
          </div>

          <div className="px-8 pt-2">
            <h1 className="text-xl font-semibold leading-tight">
              Extra Extra
            </h1>
            <p>News Portal</p>
          </div>

          <img
            src="https://source.unsplash.com/featured/?space"
            alt="project"
            className="object-contain"
          />

          <div className="card-footer flex flex-col border-gray-500 mt-4 px-8 pt-2">
            <div className="flex justify-between items-center border-gray-300 border-t border-b py-1">
              <div className="flex items-center">
                <img src={fbZanyIcon} className="h-10 w-10" alt="Like Icon" />
                <img
                  src={fbRollingEyesIcon}
                  className="h-10 w-10 -ml-4"
                  alt="Like Icon"
                />
                <img
                  src={fbLOLIcon}
                  className="h-10 w-10 -ml-4 mr-2"
                  alt="Like Icon"
                />
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
                <img
                  src={commentIcon}
                  className="h-8 w-8 p-2"
                  alt="Like Icon"
                />
                Comment
              </button>
              <button className="flex items-center text-gray-700  hover:font-gray:300 font-semibold">
                <img src={shareIcon} className="h-8 w-8 p-2" alt="Like Icon" />
                Share
              </button>
            </div>

            <div className="flex items-center px-8 pt-1">
              <img
                src={userIcon}
                className="h-8 w-8 border-2 rounded-full bg-gray-300 mr-2"
                alt="Users Icon"
              />
              <input
                type="text"
                placeholder="Write a comment..."
                class="w-full p-4 py-2 text outline-none focus:outline-none bg-gray-200 rounded-full"
              />
            </div>
          </div>
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

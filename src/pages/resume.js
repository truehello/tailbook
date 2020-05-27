import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import LeftNav from "../components/leftNav"

const ResumePage = () => (
  <Layout>
    <SEO title="Resume" />
    <div className="grid grid-cols-8 gap-8 lg:gap-24">
      <div className="col-span-2">
        <LeftNav />
      </div>

      <div className="col-span-6">
        <section className="bg-white shadow overflow-hidden sm:rounded-lg px-12 py-12 mb-8 font-serif">
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-3">
              <h1 className="text-5xl font-black leading-tight">Marc Trudel</h1>
              <h2 className="text-2xl font-thin uppercase mb-16">
                full stack web developer
              </h2>
              <h3 className="text-lg uppercase font-semibold mb-8">Profile</h3>
              <p className="mb-8 text-gray-800 leading-snug">
                16+ years of professional experience in web development and
                software engineering with an emphasis on Front End design and
                usability combined with server-side optimization and
                scalability.
              </p>
              <h3 className="text-lg uppercase font-semibold mb-8">EXPERIENCE</h3>
              <h4 className="text-xl mb-2">
                <span className="font-semibold">Redframe.com</span>,
                Kailua-Kona, Hawaii — Senior Full Stack Developer
              </h4>
              <p className="mb-8 text-lg text-gray-700">2016- PRESENT</p>
              <p className="mb-2 text-gray-700 leading-snug">
                Led migration of platform from a data center to AWS cloud
                services, reducing infrastructure cost by 80%
              </p>{" "}
              <p className="mb-2 text-gray-700 leading-snug">
                -Moved many business features from Coldfusion to serverless,
                reducing technical debt and improving scalability
              </p>
              <p className="mb-12 text-gray-700 leading-snug">
                -Used technologies: React, Node, AWS S3, AWS LAMDA, AWS RDS, AWS
                EC2
              </p>
              <h4 className="text-xl mb-2">
                <span className="font-semibold">Redframe.com</span>,
                Kailua-Kona, Hawaii — Senior Front End Developer
              </h4>
              <p className="mb-8 text-lg text-gray-600">2012- 2015</p>
              <p className="mb-2 text-gray-700 leading-snug">
                Lead a team of designers and UX consultants to develop a
                semantic HTML based version of the SaaS platform as well as
                product administration area and marketing site.
              </p>
              <p className="mb-2 text-gray-700 leading-snug">
                -Coordinated with Back end developers to architect a Saas web
                application{" "}
              </p>
              <p className="mb-12 text-gray-700 leading-snug">
                -Used technologies: HTML, Javascript, JQuery, CSS, Coldfusion,
                Photoshop, Illustrator
              </p>
              <h4 className="text-xl mb-2 mt-6">
                <span className="font-semibold">Redframe.com</span>,
                Kailua-Kona, Hawaii — Flash Front End Developer
              </h4>
              <p className="mb-4 text-lg text-gray-700">2007- 2011</p>
              <p className="text-gray-700 leading-snug mb-2">
                Worked closely with the design team and backend developers to
                build Flash-based websites that integrated dynamic data
              </p>
              <p className="text-gray-700 leading-snug mb-12">
                -Used technologies: Flash, Actionscript, Coldfusion, HTML,
                Javascript, Photoshop, Illustrator
              </p>
              <h4 className="text-xl mb-2 mt-6">
                <span className="font-semibold">H-Street Media</span>, Vancouver
                BC — Front End Developer
              </h4>
              <p className="mb-4 text-lg text-gray-700">2005 -2007</p>
              <p className="text-gray-700 leading-snug mb-2">
                Worked with the marketing department to produce web-related
                marketing material. Responsible for technical consulting and
                acted as the intermediary between design and development groups.
              </p>
              <p className="text-gray-700 leading-snug mb-12">
                -Used technologies: HTML, CSS, Javascript, AJAX, Flash,
                Actionscript, XML, XSLT, asp.net
              </p>
              <h4 className="text-xl mb-2 mt-6">
                <span className="font-semibold">Freelance</span>, Flash
                Developer
              </h4>
              <p className="mb-4 text-lg text-gray-700">2003-2007</p>
              <p className="text-gray-700 leading-snug mb-2">
                Independently developed Flash web sites and worked as a
                contractor for advertising agencies such as Fjord Interactive,
                Burnkit, and ION design.
              </p>
              <p className="text-gray-700 leading-snug mb-2">
                -Developed dynamic and static front end projects for advertising
                agencies working from digital designs provided.
              </p>
              <p className="text-gray-700 leading-snug mb-12">
                -Used technologies: Flash, Actionscript, HTML, CSS, Javascript,
                XML, PHP, Photoshop
              </p>
              <h3 className="text-lg uppercase font-semibold mb-8">EDUCATION</h3>
              <h4 className="text-xl mt-6">
                <span className="font-semibold">Langara College</span>,
                Vancouver BC — <span className="italic">Diploma Electronic Media Design</span>
              </h4>
              <p className="mb-4 text-lg text-gray-700 mb-4">2001-2002</p>
              <h4 className="text-xl mt-6">
                <span className="font-semibold">McGill University</span>,
                Montreal PQ — <span className="italic">Bachelor of Arts</span>
              </h4>
              <p className="mb-4 text-lg text-gray-700 mb-4">1990-1994</p>
            </div>

            <div className="right-col">
              <address className="text-lg">
              1141 Hampshire<br/>
              Victoria, BC, V8S 4T1
              </address>
              <p className="font-semibold">(250) 580-8675</p>
              <a href="mailto:martrudel@pm.me" className="text-lg">marctrudel@pm.me</a>
              <h3 className="text-lg uppercase font-semibold mt-12 mb-8">SKILLS</h3>

              <p className="text-base mb-4 text-gray-700"><span className="font-semibold">Language:</span> JavaScript, CSS, HTML, SQL, XML, JSON, GraphQL </p>
              <p className="text-base mb-4 text-gray-700"><span className="font-semibold">Database:</span>
              PostgreSQL, MS SQL Server, MySQL, MongoDB </p>
              <p className="text-base mb-4 text-gray-700"><span className="font-semibold">JS:</span> ES7, React, Node, Express, Next, Apollo, Gatsby, Vue, jQuery </p>
              <p className="text-base mb-4 text-gray-700"><span className="font-semibold">CSS:</span>
              LESS, SASS, Tailwind, Bootstrap, Material </p>
              <p className="text-base mb-4 text-gray-700"><span className="font-semibold">Test framework:</span> Jest,
              Enzyme </p>
              <p className="text-base mb-4 text-gray-700"><span className="font-semibold">DevOps:</span> AWS (Lambda, RDS, S3, EC2, Step Functions, Route
              53)</p>
              <p className="text-base mb-4 text-gray-700"><span className="font-semibold">Operating System:</span> Windows, Mac, Linux </p>
              <p className="text-base mb-4 text-gray-700"><span className="font-semibold">Software:</span> Adobe
              Photoshop, Adobe Illustrator, Adobe XD, Figma </p>
              
              <h3 className="text-lg uppercase font-semibold mt-12 mb-8">LANGUAGES</h3>
              <p className="text-base mb-4 text-gray-700">
              English, French </p>
            </div>
          </div>
        </section>

     
      </div>
    </div>
  </Layout>
)

export default ResumePage

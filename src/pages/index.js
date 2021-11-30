import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroImage from "./../images/hero.svg"
import Mobile from "./../images/mobile.svg"
import Consult from "./../images/consult.svg"
import Server from "./../images/server.svg"
const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <div className="jumbotron ">
            <h1 className="display-6 text-primary pt-3 pb-3">
              Delivering Innovative <span className="text-dark"> and</span> Cost
              Effective Digital Solutions
            </h1>
            <p className="lead pt-3 pb-3">
              Lorem ipsum dolor sit amet, consectetur{" "}
              <span className="text-primary"> adipiscing elit</span> . Phasellus
              quam lectus malesuada venenatis ut{" "}
              <span className="text-primary"> nulla</span> commodo. Nunc nulla.
            </p>

            <p className="lead pt-3 pb-3">
              <a className="btn btn-primary btn-lg" href="#" role="button">
                Learn more
              </a>
            </p>
          </div>
        </div>
        <div className=" col-md-6 col-sm-12">
          <div className="jumbotron align-items-end ">
            <img
              width={670}
              height={580}
              className="heroimage "
              src={HeroImage}
              alt="Legit byte"
            />
          </div>
        </div>
      </div>
      <div className="row pt-2 mt-2 ">
        <p className="h2 text-center pt-3">
          Awesome Services For <span className="text-primary">Customer</span>
        </p>{" "}
      </div>
      <div className="row shadow   pt-4 pb-4 mt-2 mb-2">
        <div className="col-md-4">
          <img src={Mobile} alt="Mobile" height={260} />
        </div>
        <div className="col-md-8  d-flex ">
          <div className="body  ">
            <h5 className="title pt-4">Rapid MVP Development</h5>
            <p className="text pt-4">
              We can help you design and develop a high-quality Minimum Viable
              Product to validate your business assumptions faster and more
              efficiently. Our goal is creating successful products that your
              users will love.
            </p>
            <a href="#" className="pt-3  text-primary">
              Get Started
            </a>
          </div>
        </div>
      </div>{" "}
      <div className="row shadow  pt-4 pb-4 mt-2 mb-2">
        <div className="col-md-4">
          <img src={Server} alt="Mobile" height={260} />
        </div>
        <div className="col-md-8  d-flex ">
          <div className="body  ">
            <h5 className="title pt-4">Devops Implementation</h5>
            <p className="text pt-4">
              A transformational shift which incorporates secure culture,
              practices, and tools to drive visibility, collaboration, and
              agility of security into each phase of the DevOps pipeline
            </p>
            <a href="#" className="pt-3  text-primary">
              Get Started
            </a>
          </div>
        </div>
      </div>{" "}
      <div className="row shadow  pt-4 pb-4 mt-2 mb-2">
        <div className="col-md-4">
          <img src={Consult} alt="Mobile" height={260} />
        </div>
        <div className="col-md-8  d-flex ">
          <div className="body  ">
            <h5 className="title pt-4">Cloud Consulting</h5>
            <p className="text pt-4">
              With our team of certified cloud professional, unleash the full
              potential of cloud and build more flexible, scalable and available
              services.
            </p>
            <a href="#" className="pt-3  text-primary">
              Get Started
            </a>
          </div>
        </div>
      </div>
      <div className="container-sm">
        {" "}
        <div className="row  pt-4 mt-3">
          <div className="col-md-3 border bg-primary text-light pt-2 d-flex flex-column justify-content-center align-items-center">
            <h2>100%</h2>
            <p>Payments Success</p>
          </div>
          <div className="col-md-3 border bg-primary text-light pt-2 d-flex flex-column justify-content-center align-items-center">
            <h2>2000+</h2>
            <p>Completed Project</p>
          </div>{" "}
          <div className="col-md-3 border bg-primary text-light pt-2 d-flex flex-column justify-content-center align-items-center">
            <h2>10K</h2>
            <p>Global Customer</p>
          </div>{" "}
          <div className="col-md-3 border bg-primary text-light pt-2 d-flex flex-column justify-content-center align-items-center">
            <h2>24/7</h2>
            <p>Always-on For Support</p>
          </div>
        </div>
      </div>
      <div className="container-sm">
        {" "}
        <div className="row  pt-4 mt-3">
          <h2>Latest News From Blog</h2>
        </div>
        <div className="col-md-6">
          <p className="bg-light h4">Technology</p>
          <p className="title">Facebook is changing its name to Meta</p>
          <p>24 November 2021</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            mauris porta ultrices non massa vitae dignissim nunc. Amet netus
            imperdiet sed sit leo, consectetur vitae, cursus.
          </p>
        </div>
        <div className="col-md-6">
          <div className="row">
            <h3>Popular Post</h3>
          </div>
          <div className="row">
            <div className='col'>   <p className="bg-light h4">Technology</p>
          <p className="title">Facebook is changing its name to Meta</p>
          <p>24 November 2021</p></div><div className='col'>   <p className="bg-light h4">Technology</p>
          <p className="title">Facebook is changing its name to Meta</p>
          <p>24 November 2021</p></div><div className='col'>   <p className="bg-light h4">Technology</p>
          <p className="title">Facebook is changing its name to Meta</p>
          <p>24 November 2021</p></div><div className='col'>   <p className="bg-light h4">Technology</p>
          <p className="title">Facebook is changing its name to Meta</p>
          <p>24 November 2021</p></div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

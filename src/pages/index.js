import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroImage from "./../images/hero.svg"
import Mobile from "./../images/mobile.svg"
import Consult from "./../images/consult.svg"
import Server from "./../images/server.svg"
import { BsFillCircleFill } from "react-icons/bs"
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
      <div className="container pb-4">
        <div className="row  pt-4 mt-3">
          <h2 className="text-center pb-4">
            Latest News From <span className="text-primary">Blog</span>
          </h2>

          <div className="col-md-6 border pt-2">
            <div class="card bg-dark text-white ">
              <img
                style={{ opacity: 0.6 }}
                src="https://c.cricketpakistan.com.pk/images/posts/cover_16384446652.jpg"
                class="card-img"
                alt="..."
                width="auto"
                height="380px"
              />
              <div class="card-img-overlay d-flex flex-column justify-content-end">
                <h5 class="card-title">
                  Facebook is changing its name to Meta
                </h5>
                <p class="card-text">24 November 2021</p>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h3 className="text-center">Popular Post</h3>

            <div className="row pt-4">
              <div className="col-md-6 border pt-2 pb-1">
                <a href="#" className="btn btn-outline-dark">
                  <BsFillCircleFill color="blue" /> Technology
                </a>
                <h5 className="card-title pt-3">
                  Facebook is changing its name to Meta
                </h5>
                <p>24 November 2021</p>
              </div>
              <div className="col-md-6 border pt-2">
                <a href="#" className="btn btn-outline-dark">
                  <BsFillCircleFill color="blue" /> Technology
                </a>
                <h5 className="card-title pt-3">
                  Facebook is changing its name to Meta
                </h5>
                <p>24 November 2021</p>
              </div>
              <div className="col-md-6 border pt-2">
                <a href="#" className="btn btn-outline-dark">
                  <BsFillCircleFill color="blue" /> Technology
                </a>
                <h5 className="card-title pt-3">
                  Facebook is changing its name to Meta
                </h5>
                <p>24 November 2021</p>
              </div>
              <div className="col-md-6 border pt-2">
                <a href="#" className="btn btn-outline-dark">
                  <BsFillCircleFill color="blue" /> Technology
                </a>
                <h5 className="card-title pt-3">
                  Facebook is changing its name to Meta
                </h5>
                <p>24 November 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

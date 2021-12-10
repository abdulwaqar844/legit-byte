import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroImage from "./../images/hero.svg"
import Mobile from "./../images/mobile.svg"
import Consult from "./../images/consult.svg"
import Server from "./../images/server.svg"
import { BsFillCircleFill } from "react-icons/bs"
import { graphql } from "gatsby"
import testimonial from "./../images/image_81.jpg"
import CaseStudies from "../components/caseStudies/caseStudies"
const IndexPage = ({
  data: {
    allWpPost: { nodes },
  },
}) => (
  <Layout>
    <Seo title="Home" />
    <div className="container-fluid p-0">
      <div className="row p-0">
        <div className="col-md-6 col-sm-12">
          <div className="jumbotron ps-2 ps-md-4 ">
            <h1 className="display-6 text-primary pt-5 pb-2">
              Delivering Innovative <span className="text-dark"> and</span> Cost
              Effective Digital Solutions
            </h1>
            <p className="lead pt-3 pb-3">
              Lorem ipsum dolor sit amet, consectetur
              <span className="text-primary"> adipiscing elit</span> . Phasellus
              quam lectus malesuada venenatis ut
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
              className="heroimage img-fluid "
              src={HeroImage}
              alt="Legit byte"
            />
          </div>
        </div>
      </div>
      <div className="container-sm" id="services">
        <div className="row pt-2 mt-2 mb-4">
          <p className="h2 text-center pt-3">
            Awesome Services For <span className="text-primary">Customer</span>
          </p>
        </div>
        <div className="row shadow   p-4  mt-2 mb-4" id="getStarded">
          <div className="col-md-4">
            <img src={Mobile} alt="Mobile" height={260} width={230} />
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
        </div>
        <div className="row shadow  p-4  mt-2 mb-4">
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
        </div>
        <div className="row shadow  p-4  mt-2 mb-4">
          <div className="col-md-4">
            <img src={Consult} alt="Mobile" height={260} />
          </div>
          <div className="col-md-8  d-flex ">
            <div className="body  ">
              <h5 className="title pt-4">Cloud Consulting</h5>
              <p className="text pt-4">
                With our team of certified cloud professional, unleash the full
                potential of cloud and build more flexible, scalable and
                available services.
              </p>
              <a href="#" className="pt-3  text-primary">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-sm pt-4" id="caseStudies">
      <h1 className="pt-3 text-center"> Testimonials </h1>

        <CaseStudies />
        {/* <div className="row d-flex flex-column flex-md-row justify-content-center pt-3 ">
          <div class="card col-md-6 col-12 align-items-center border-0 p-4 ">
            <div class="card-body bg-testimonial ">
              <div className="d-flex ">
                <img
                  src={testimonial}
                  alt="testimonial"
                  height="70px"
                  width="70px"
                  className="rounded-circle"
                />
                <div className="ps-2">
                  <h2>Ara Felicia</h2>
                  <p className="card-subtitle mb-2 text-muted"> UI Designer</p>
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Leo tortor lacus massa maecenas.”
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card col-md-6 col-12 align-items-center border-0 p-4 ">
            <div class="card-body bg-testimonial ">
              <div className="d-flex ">
                <img
                  src={testimonial}
                  alt="testimonial"
                  height="70px"
                  width="70px"
                  className="rounded-circle"
                />
                <div className="ps-2">
                  <h2>Ara Felicia</h2>
                  <p className="card-subtitle mb-2 text-muted"> UI Designer</p>
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Leo tortor lacus massa maecenas.”
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card col-md-6 col-12 align-items-center border-0 p-4 ">
            <div class="card-body bg-testimonial ">
              <div className="d-flex ">
                <img
                  src={testimonial}
                  alt="testimonial"
                  height="70px"
                  width="70px"
                  className="rounded-circle"
                />
                <div className="ps-2">
                  <h2>Ara Felicia</h2>
                  <p className="card-subtitle mb-2 text-muted"> UI Designer</p>
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Leo tortor lacus massa maecenas.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className="container-sm">
        <div className="row  pt-4 mt-3">
          <div className="col-md-3 border bg-primary text-light pt-2 d-flex flex-column justify-content-center align-items-center">
            <h2>100%</h2>
            <p>Payments Success</p>
          </div>
          <div className="col-md-3 border bg-primary text-light pt-2 d-flex flex-column justify-content-center align-items-center">
            <h2>2000+</h2>
            <p>Completed Project</p>
          </div>
          <div className="col-md-3 border bg-primary text-light pt-2 d-flex flex-column justify-content-center align-items-center">
            <h2>10K</h2>
            <p>Global Customer</p>
          </div>
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

          <div className="col-md-6 ">
            <div className="card  text-white ">
              <img
                src={nodes[0].featuredImage.node.srcSet}
                className="card-img"
                alt="..."
                width="auto"
                height="440px"
              />
              <a
                href={nodes[0].slug}
                className=" card-img-overlay d-flex flex-column justify-content-end text-light text-decoration-none"
              >
                <div>
                  {" "}
                  <p className="btn btn-sm btn-light">
                    <BsFillCircleFill color="blue" className="pe-1" />
                    {nodes[0].categories.nodes[0].name.toUpperCase()}
                  </p>
                </div>

                <p className="h4">{nodes[0].title} </p>
                <p style={{ fontSize: "9px" }}>
                  {new Date(nodes[0].date).toDateString()}
                </p>
                <div
                  className="p"
                  dangerouslySetInnerHTML={{
                    __html:
                      nodes[1].excerpt.split(" ").splice(0, 25).join(" ") || "",
                  }}
                />
              </a>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block">
            <h3 className="text-center">Popular Post</h3>

            <div className="row pt-2">
              {nodes.slice(1).map(post => {
                return (
                  <div className="col-md-6 border p-1" key={post.slug}>
                    <a
                      href={post.slug}
                      className="text-dark text-decoration-none"
                    >
                      <p className="btn btn-sm btn-outline-dark">
                        <BsFillCircleFill color="blue" className="pe-1" />
                        {post.categories.nodes[0].name.toUpperCase()}
                      </p>
                      <h5 className="card-title pt-3">{post.title}</h5>
                      <p style={{ fontSize: "9px" }}>
                        {" "}
                        {new Date(post.date).toDateString()}
                      </p>
                    </a>{" "}
                  </div>
                )
              })}

              {/* <div className="col-md-6 border pt-2">
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)
export const query = graphql`
  {
    allWpPost {
      nodes {
        title
        slug
        date
        excerpt
        categories {
          nodes {
            slug
            name
          }
        }
        content
        featuredImage {
          node {
            srcSet
            sourceUrl
            mediaItemUrl
          }
        }
      }
    }
  }
`
export default IndexPage

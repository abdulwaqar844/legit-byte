import * as React from "react"
import { Link } from "gatsby"
import Laptop from "./../images/laptop.jpg"
import Layout from "./../components/layout"
import Seo from "./../components/seo"
import Carousel from "react-bootstrap/Carousel"
import { BsFillCircleFill } from "react-icons/bs"
import { graphql } from "gatsby"

const Blog = ({
  data: {
    allWpPost: { nodes },
  },
}) => (
  <Layout>
    <Seo title="Blog | Legit Byte" />
    <div className="container-fluid  me-0 ms-0">
      <div className="container-fluid  ms-0 me-0">
        <div className="row w-100 ms-0 me-0">
          <div
            id="carouselExampleCaptions"
            className="carousel slide "
            data-bs-ride="carousel"
            data-bs-interval="false"
          >
            <ol className="carousel-indicators d-none d-md-flex">
              {nodes.slice(0, 3).map((post, index) => {
                return (
                 
                    <li
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to={index}
                      className={index == 0 ? "active" : ""}
                      aria-current={index == 0 ? true : ""}
                    >
                      <div className="d-flex flex-column">
                        <p className="h4 ps-3 pt-2">{index+1}</p>
                        <p className="pt-2 ps-3">{post.title} </p>
                      </div>
                    </li>
                 
                )
              })}

              {/* <li
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
              >
                <div className="d-flex flex-column">
                  <p className="h4 ps-3 pt-2">1</p>
                  <p className="pt-2 ps-3">
                    Truth the Process And You Get will Win Today
                  </p>
                </div>
              </li>
              <li
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
              >
                <div className="d-flex flex-column">
                  <p className="h4 ps-3 pt-2">2</p>
                  <p className="pt-2 ps-3">
                    Truth the Process And You Get will Win Today
                  </p>
                </div>
              </li>
              <li
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
              >
                <div className="d-flex flex-column">
                  <p className="h4 ps-3 pt-2">3</p>
                  <p className="pt-2 ps-3">
                    Truth the Process And You Get will Win Today
                  </p>
                </div>
              </li> */}
            </ol>
            <div className="carousel-inner">
              {nodes.slice(0, 3).map((post, index) => {
                return (
                  <div
                    className={`carousel-item ${index == 0 ? "active" : ""}`}
                  >
                    <img
                      src={post.featuredImage.node.srcSet}
                      className="d-block w-100  ovarlay carousel-inner-varlay"
                      alt="..."
                      height="520px"
                    />
                    <div className="carousel-caption">
                      <div className="d-flex flex-column">
                        <div>
                          <p className="btn btn-primary">
                            {post.categories.nodes[0].name}
                          </p>
                        </div>
                        <div className="d-flex flex-column">
                          <h2>{post.title}</h2>
                          <p> {new Date(post.date).toDateString()}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
              {/* <div className="carousel-item active">
                <img
                  src={Laptop}
                  className="d-block w-100 ovarlay carousel-inner-varlay "
                  alt="..."
                />
                <div className="carousel-caption">
                  <div className="d-flex flex-column">
                    <div>
                      <p className="btn btn-primary">Technoloy</p>
                    </div>
                    <div className="d-flex flex-column">
                      <h2>Truth the Process And You Get will Win Today</h2>
                      <p>24 dec 2021</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={Laptop}
                  className="d-block w-100 ovarlay carousel-inner-varlay"
                  alt="..."
                />
                <div className="carousel-caption">
                  <div className="d-flex flex-column">
                    <div>
                      <p className="btn btn-primary">Technoloy</p>
                    </div>
                    <div className="d-flex flex-column">
                      <h2>Truth the Process And You Get will Win Today</h2>
                      <p>24 dec 2021</p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="row pt-4">
        {nodes.slice(0, 4).map(post => {
          return (
            <div className="col-md-3  " key={post.slug}>
              <a
                href={post.slug}
                className="card text-dark text-decoration-none"
              >
                <div className="card-body">
                  <p className="btn btn-outline-dark">
                    <BsFillCircleFill /> {post.categories.nodes[0].name}
                  </p>
                  <h5 className="card-title pt-3">{post.title}</h5>
                  <p className="card-text pt-2">
                    {new Date(post.date).toDateString()}
                  </p>
                </div>
              </a>
            </div>
          )
        })}
      </div>
      <div className="container pb-4">
        <div className="row  pt-4 mt-3">
          <h2 className="text-center pb-4">
            Latest News From <span className="text-primary">Blog</span>
          </h2>

          <div className="col-md-6">
            <div class="card  text-white ">
              <img
                src={`${nodes[0].featuredImage.node.srcSet} || ''`}
                class="card-img"
                alt="..."
                width="auto"
                height="480px"
              />
              <a
                href={`/${nodes[0].slug}`}
                class=" card-img-overlay d-flex flex-column justify-content-end text-light text-decoration-none"
              >
                <h3 class="card-title">{nodes[0].title} </h3>
                <p class="card-text">
                  {new Date(nodes[0].date).toDateString()}
                </p>
                <div
                  className="p"
                  dangerouslySetInnerHTML={{ __html: nodes[1].excerpt } || ""}
                />
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <h3 className="text-center">Popular Post</h3>

            <div className="row pt-2">
              {nodes.slice(1).map(post => {
                return (
                  <div className="col-md-6 border pt-2 pb-1" key={post.slug}>
                    <a
                      href={post.slug}
                      className="text-dark text-decoration-none"
                    >
                      <p className="btn btn-outline-dark">
                        <BsFillCircleFill color="blue" />
                        {post.categories.nodes[0].name.toUpperCase()}
                      </p>
                      <h5 className="card-title pt-3">{post.title}</h5>
                      <p> {new Date(post.date).toDateString()}</p>
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid p-0 d-none d-md-block">
      <Carousel className="bg-dark text-light " indicators={false}>
        <Carousel.Item>
          <div className="d-flex flex-row  m-2">
            <div className="card-body pt-4">
              <a href="#" className="btn btn-outline-light">
                <BsFillCircleFill /> Technology
              </a>
              <h5 className="card-title pt-3 h1">
                Facebook is changing its name to Meta
              </h5>
              <p className="card-text pt-2">24 November 2021</p>
            </div>
            <div className="card-body ps-4">
              <img
                src="https://c.cricketpakistan.com.pk/images/posts/cover_1638449165New-Project-(69).jpg"
                alt="First slide"
                width={300}
                height={300}
              />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex flex-row  m-2">
            <div className="card-body pt-4">
              <a href="#" className="btn btn-outline-light">
                <BsFillCircleFill /> Technology
              </a>
              <h5 className="card-title pt-3 h1">
                Facebook is changing its name to Meta
              </h5>
              <p className="card-text pt-2">24 November 2021</p>
            </div>
            <div className="card-body ps-4">
              <img
                src="https://c.cricketpakistan.com.pk/images/posts/cover_1638449165New-Project-(69).jpg"
                alt="First slide"
                width={300}
                height={300}
              />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex flex-row  m-2">
            <div className="card-body pt-4">
              <a href="#" className="btn btn-outline-light">
                <BsFillCircleFill /> Technology
              </a>
              <h5 className="card-title pt-3 h1">
                Facebook is changing its name to Meta
              </h5>
              <p className="card-text pt-2">24 November 2021</p>
            </div>
            <div className="card-body ps-4">
              <img
                src="https://c.cricketpakistan.com.pk/images/posts/cover_1638449165New-Project-(69).jpg"
                alt="First slide"
                width={300}
                height={300}
              />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
    <div className="container-fluid pt-4">
      <h1>Selected Posts</h1>
      <p>EDITOR'S PICKS</p>
      <div className="row">
        <div className=" col-md-7">
          <div class="card bg-info text-white ">
            <img
              style={{ opacity: 0.9 }}
              src={nodes[0].featuredImage.node.srcSet}
              class="card-img"
              alt="..."
              width="auto"
              height="380px"
            />
            <div class="card-img-overlay d-flex flex-column justify-content-end ">
              <h2 class="card-title">{nodes[0].title}</h2>
            </div>
          </div>
        </div>
        <div className=" col-md-5 card pt-1">
          <a href={nodes[1].slug} class=" d-flex flex-column justify-content-end mb-3 text-decoration-none text-body">
            <div  class=" d-flex justify-content-around pt-1 ">
              <p className="card-text pt-1">
                {new Date(nodes[1].date).toDateString()}
              </p>
              <p  className="btn btn-outline-dark">
                <BsFillCircleFill /> {nodes[1].categories.nodes[0].name}
              </p>
            </div>

            <h3 class="card-title pt-1">{nodes[1].title}</h3>
          </a>
          <img
            src={nodes[1].featuredImage.node.srcSet}
            className="card-img"
            alt="..."
            width="auto"
            height="200px"
          />
        </div>
        <a to={nodes[3].slug} className=" col-md-6  d-flex flex-row text-decoration-none text-body">
          <div className=" col d-flex flex-column justify-content-evenly ps-3">
            <div>
              <p href="#" className="btn btn-outline-dark">
                <BsFillCircleFill /> {nodes[3].categories.nodes[0].name}
              </p>
            </div>
            <p className="card-text ">
              {new Date(nodes[3].date).toDateString()}
            </p>
           
              <h2 class="card-title">{nodes[3].title}</h2>
           
          </div>
          <div className=" col">
            <img
              src={nodes[4].featuredImage.node.srcSet}
              class="card-img"
              alt="..."
              width="auto"
              height="420px"
            />
          </div>
        </a>
        <a href={nodes[4].slug} className=" col-md-6  d-flex flex-row text-decoration-none text-body ">
          <div className=" col d-flex flex-column justify-content-evenly ps-3">
            <div>
              <p href="#" className="btn btn-outline-dark">
                <BsFillCircleFill /> {nodes[4].categories.nodes[0].name}
              </p>
            </div>
            <p className="card-text ">
              {new Date(nodes[2].date).toDateString()}
            </p>
            <h2 class="card-title">{nodes[4].title}</h2>
          </div>
          <div className=" col">
            <img
              src={nodes[4].featuredImage.node.srcSet}
              class="card-img"
              alt="..."
              width="auto"
              height="420px"
            />
          </div>
        </a>
      </div>
      <div className=" d-flex justify-content-center pt-4 pb-4">
        <button className="btn btn-primary ">Load More</button>
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
            name
            slug
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
export default Blog

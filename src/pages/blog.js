import * as React from "react"
import { Link } from "gatsby"
import Laptop from "./../images/laptop.jpg"
import Layout from "./../components/layout"
import Seo from "./../components/seo"
import Carousel from "react-bootstrap/Carousel"
import { BsFillCircleFill } from "react-icons/bs"
import { graphql } from "gatsby"
import Logo from "../images/Logo (1).svg"
const Blog = ({
  data: {
    allWpPost: { nodes },
  },
}) => (
  <Layout>
    <Seo title="Blog | Legit Byte" />
    <div className="container-fluid   p-0 ">
      <div className="row container-fluid ps-0 pe-0">
        <div
          id="carouselExampleCaptions"
          className="carousel slide "
          data-bs-ride="carousel"
          data-bs-interval="false"
        >
          <ol className="carousel-indicators d-none d-md-flex pe-2">
            {nodes.slice(0, 3).map((post, index) => {
              return (
                <li
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to={index}
                  className={index == 0 ? "active" : ""}
                  aria-current={index == 0 ? true : ""}
                >
                  <div className="d-flex flex-column">
                    <p className="h4 ps-3 pt-2">{index + 1}</p>
                    <p className="pt-2 ps-3" style={{ fontSize: "12px" }}>
                      {post.title}{" "}
                    </p>
                  </div>
                </li>
              )
            })}
          </ol>
          <div className="carousel-inner">
            {nodes.slice(0, 3).map((post, index) => {
              return (
                <div className={`carousel-item ${index == 0 ? "active" : ""}`}>
                  <img
                    src={post.featuredImage.node.srcSet}
                    className="d-block   ovarlay carousel-inner-varlay"
                    alt="..."
                    height="520px"
                    width="100%"
                  />
                  <div className="carousel-caption">
                    <div className="d-flex flex-column">
                      <div>
                        <p className="btn btn-sm btn-primary">
                          {post.categories.nodes[0].name}
                        </p>
                      </div>
                      <div className="d-flex flex-column col-6">
                        <h4 >{post.title}</h4>
                        <p> {new Date(post.date).toDateString()}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="row container-fluid pt-4">
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
                  <h5 className="card-title pt-1">{post.title}</h5>
                  <p className="card-text pt-1" style={{fontSize:"9px"}}>
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
                height="380px"
              />
              <a
                href={`/${nodes[0].slug}`}
                class=" card-img-overlay d-flex flex-column justify-content-end text-light text-decoration-none"
              >
                <h3 class="card-title">{nodes[0].title} </h3>
                <p style={{ fontSize: "9px" }}>
                  {new Date(nodes[0].date).toDateString()}
                </p>
                <div
                  className="p"
                  dangerouslySetInnerHTML={{ __html: nodes[1].excerpt } || ""}
                />
              </a>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block">
            <h3 className="text-center">Popular Post</h3>

            <div className="row pt-2">
              {nodes.slice(1).map(post => {
                return (
                  <div className="col-md-6 border p-2" key={post.slug}>
                    <a
                      href={post.slug}
                      className="text-dark text-decoration-none"
                    >
                      <div >
                     <button className="btn btn-sm btn-outline-dark "> <BsFillCircleFill color="blue" className="me-2" />
                        {post.categories.nodes[0].name.toUpperCase()}</button>  
                      </div>
                      <h5 className="card-title pt-3">{post.title}</h5>
                      <p style={{ fontSize: "9px" }}>
                        {" "}
                        {new Date(post.date).toDateString()}
                      </p>
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
    <div className="container pt-4">
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
          <a
            href={nodes[1].slug}
            class=" d-flex flex-column justify-content-end mb-3 text-decoration-none text-body"
          >
            <div class=" d-flex justify-content-around pt-1 ">
              <p className="card-text pt-1" style={{fontSize:"9px"}}>
                {new Date(nodes[1].date).toDateString()}
              </p>
              <p className="btn btn-outline-dark">
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
        <a
          to={nodes[3].slug}
          className=" col-md-6  d-flex flex-column flex-md-row pt-4 text-decoration-none text-body"
        >
          <div className=" col d-flex flex-column justify-content-evenly ps-3">
            <div>
              <p href="#" className="btn btn-outline-dark">
                <BsFillCircleFill /> {nodes[3].categories.nodes[0].name}
              </p>
            </div>
            <p className="card-text " style={{fontSize:"9px"}}>
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
              height="380px"
            />
          </div>
        </a>
        <a
          href={nodes[4].slug}
          className=" col-md-6  d-flex flex-column flex-md-row pt-4 text-decoration-none text-body "
        >
          <div className=" col d-flex flex-column justify-content-evenly ps-3">
            <div>
              <p href="#" className="btn btn-outline-dark">
                <BsFillCircleFill /> {nodes[4].categories.nodes[0].name}
              </p>
            </div>
            <p className="card-text " style={{fontSize:'9px'}}>
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
              height="380px"
            />
          </div>
        </a>
      </div>
      <div className=" d-flex justify-content-center pt-4 pb-4">
        <button className="btn btn-primary ">Load More</button>
      </div>
    </div>
    <div className="container bg-dark pt-3 mb-3">
      <div className=" d-flex flex-column flex-md-row pe-md-5 me-md-5 align-items-center  justify-content-between">
        <div className="pe-3 ">
          <img src={Logo} alt="news" width="100px" />
        </div>
        <div className="text-secondary d-flex flex-column justify-content-center ps-3">
          <h1 className="
          text-center">Subscribe for Newstes Articel</h1>
          <div className="d-flex flex-column flex-md-row justify-content-center pt-4">
            <input
              type="email"
              placeholder="Please enter Your email"
              className="ps-1 pt-2 pb-2 pe-1 m-1"
            />
            <button className="btn btn-primary pt-2 pb-2 m-1">Subscribe</button>
          </div>
          <p className="text-center pt-4">
            Get free articles, ebooks and videos latest
          </p>
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

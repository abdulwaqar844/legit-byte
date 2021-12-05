import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { BsFillCircleFill } from "react-icons/bs"
import Logo from "../images/Logo (1).svg"

const post = ({ data }) => {
  const { allWpPost, wpPost } = data
  return (
    <Layout>
      <Seo title={wpPost.title} />

      <div className="container-fluid ps-0 pe-0  ">
        <div style={{ position: "relative" }}>
          <img
            src={wpPost.featuredImage.node.srcSet}
            alt="Image"
            width="100%"
            height="400px"
            className=""
            style={{ opacity: 0.7 }}
          />
          <div className="caption caption mb-0 mt-2 feature-caption  d-flex flex-column justify-content-center text-light lb-overlay">
            <div className="border-2 border-dark d-flex flex-row w-10 ">
              <p className="btn btn-light">
                {" "}
                <BsFillCircleFill color="yellow" />{" "}
                {wpPost.categories.nodes[0].name}
              </p>
            </div>
            <p className="h2">{wpPost.title} </p>
            <div className="d-flex flex-row align-items-center">
              {" "}
              <p className="pe-3">{new Date(wpPost.date).toDateString()}</p>
              <p className="ps-2">Author: {wpPost.author.node.name}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row w-100 pt-2">
        <div className="col-md-7 col-12">
          <div className="row container">
            <div>
              <p>{new Date(wpPost.date).toDateString()}</p>
              <p className="h3">{wpPost.title}</p>
              <div className="d-flex flex-row align-items-center">
                <p className="btn btn-outline-dark">
                  <BsFillCircleFill color="yellow" className='pe-2' />
                  {wpPost.categories.nodes[0].name}
                </p>
                <p className="ps-2">Author:{wpPost.author.node.name}</p>
              </div>

              {/* <div dangerouslySetInnerHTML={{ __html: wpPost.content }} /> */}
              <div
                key={`body`}
                id="___gatsby"
                dangerouslySetInnerHTML={{ __html: wpPost.content }}
              />
            </div>
            <div>
              <h1 className="text-center"> Recent Posts</h1>
              <div style={{ position: "relative" ,padding:"0px 2px 0px 2px"}}>
                <img
                  src={
                    allWpPost.nodes[0].featuredImage.node.srcSet ||
                    "https://cdn.pixabay.com/photo/2021/11/04/06/15/woman-6767494_1280.jpg"
                  }
                  alt="Image"
                  width="100%"
                  height="260px"
                  className=""
                />
                <a href={`/${allWpPost.nodes[0].slug}`} className=" text-decoration-none caption caption mb-0  feature-caption  d-flex flex-column text-light justify-content-center card-img-overlay">
                  <h3 className="h3 card-caption pt-4">
                    {allWpPost.nodes[0].title}{" "}
                  </h3>
                  <p className=" ">
                    {new Date(allWpPost.nodes[0].date).toDateString()}
                  </p>
                  {/* <p style={{ fontSize: "12px" }}>
                  {allWpPost.nodes[0].excerpt|| ''}
                  </p> */}
                  {/* <div
                    className="d-none d-md-none d-lg-block"
                    dangerouslySetInnerHTML={{
                      __html:
                        allWpPost.nodes[0].excerpt
                          .split(" ")
                          .splice(0, 20)
                          .join(" ") || "",
                    }}
                  /> */}
                </a>
              </div>
            </div>
          </div>

          <div className="row pt-2 container pb-3">
            <div className="col-12 col-md-6">
              <div style={{ position: "relative",padding:"0px 2px 0px 2px" }}>
                <img
                  src={
                    allWpPost.nodes[1].featuredImage.node.srcSet ||
                    "https://cdn.pixabay.com/photo/2021/11/04/06/15/woman-6767494_1280.jpg"
                  }
                  alt="Image"
                  width="100%"
                  height="260px"
                  className=""
                />
                <a   href={`/${allWpPost.nodes[1].slug}`} className=" text-decoration-none caption caption mb-0  feature-caption  d-flex flex-column text-light justify-content-center card-img-overlay">
                  <h4> {allWpPost.nodes[1].title} </h4>
                  <p>{new Date(allWpPost.nodes[1].date).toDateString()}</p>
                  {/* <div
                    className="d-none d-md-none d-lg-block"
                    dangerouslySetInnerHTML={{
                      __html:
                        allWpPost.nodes[1].excerpt
                          .split(" ")
                          .splice(0, 20)
                          .join(" ") || "",
                    }}
                  /> */}
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div style={{ position: "relative",padding:"0px 2px 0px 2px" }} >
                <img
                  src={
                    allWpPost.nodes[2].featuredImage.node.srcSet ||
                    "https://cdn.pixabay.com/photo/2021/11/04/06/15/woman-6767494_1280.jpg"
                  }
                  alt="Image"
                  width="100%"
                  height="260px"
                  className=""
                />
                <a  href={`/${allWpPost.nodes[2].slug}`} className=" text-decoration-none caption caption mb-0  feature-caption  d-flex flex-column text-light justify-content-center card-img-overlay">
                  <h4 className='pt-4'> {allWpPost.nodes[2].title} </h4>
                  <p>{new Date(allWpPost.nodes[2].date).toDateString()}</p>
                  {/* <div
                    className="d-none d-md-none d-lg-block"
                    dangerouslySetInnerHTML={{
                      __html:
                        allWpPost.nodes[2].excerpt
                          .split(" ")
                          .splice(0, 20)
                          .join(" ") || "",
                    }}
                  />
                */}</a> 
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-5 col-12">
          <h2 className="text-center">Popular Posts</h2>
          {allWpPost.nodes.slice(0, 5).map(post => {
            return (
              <div className="row">
                <div className="col ">
                  <div className="row p-4 ">
                    <a
                      href={`/${post.slug}`}
                      className=" text-dark text-decoration-none"
                    >
                      <p className="btn btn-outline-dark">
                        <BsFillCircleFill /> {post.categories.nodes[0].name}
                      </p>
                      <h5 className="card-title pt-3">{post.title} </h5>
                      <p className="card-text pt-2 border-2 border-bottom border-dark">
                        {new Date(post.date).toDateString()}
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="container bg-dark pt-3 mb-3">
    
   
    <div className=" d-flex flex-row pe-5 me-5 align-items-center  justify-content-between">
    <div className="pe-3 ">
      <img src={Logo} alt="logo"  />
    </div>
      <div className="text-secondary d-flex flex-column justify-content-center">
        <h1>Subscribe for Newstes Articel</h1>
        <div className="d-flex flex-row justify-content-center pt-4">
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
}

export const query = graphql`
  query allPost($slug: String) {
    wpPost(slug: { eq: $slug }) {
      title
      content
      date
      categories {
        nodes {
          name
        }
      }
      author {
        node {
          name
        }
      }
      featuredImage {
        node {
          srcSet
        }
      }
    }
    allWpPost(sort: { fields: date, order: ASC }) {
      nodes {
        title
        slug
        date
        categories {
          nodes {
            name
          }
        }
        content
        excerpt
        featuredImage {
          node {
            srcSet
          }
        }
        author {
          node {
            name
          }
        }
      }
    }
  }
`

export default post

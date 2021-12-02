import * as React from "react"
import { Link } from "gatsby"
import CareerImage from "./../images/career.png"
import Layout from "./../components/layout"
import Seo from "./../components/seo"
import Carousel from "react-bootstrap/Carousel"
import { BsFillCircleFill } from "react-icons/bs"
const Blog = () => (
  <Layout>
    <Seo title="Blog | Legit Byte" />
    <div className="container">
      <div className="row">
        <div className="col-md-3  ">
          <div className="card">
            <div className="card-body">
              <a href="#" className="btn btn-outline-dark">
                <BsFillCircleFill /> Technology
              </a>
              <h5 className="card-title pt-3">
                Facebook is changing its name to Meta
              </h5>
              <p className="card-text pt-2">24 November 2021</p>
            </div>
          </div>
        </div>
        <div className="col-md-3  ">
          <div className="card">
            <div className="card-body">
              <a href="#" className="btn btn-outline-dark">
                <BsFillCircleFill color="blue" /> Technology
              </a>
              <h5 className="card-title pt-3">
                Facebook is changing its name to Meta
              </h5>
              <p className="card-text pt-2">24 November 2021</p>
            </div>
          </div>
        </div>
        <div className="col-md-3  ">
          <div className="card">
            <div className="card-body">
              <a href="#" className="btn btn-outline-dark">
                <BsFillCircleFill color="grey" /> Technology
              </a>
              <h5 className="card-title pt-3">
                Facebook is changing its name to Meta
              </h5>
              <p className="card-text pt-2">24 November 2021</p>
            </div>
          </div>
        </div>
        <div className="col-md-3  ">
          <div className="card">
            <div className="card-body">
              <a href="#" className="btn btn-outline-dark">
                <BsFillCircleFill color="red" /> Technology
              </a>
              <h5 className="card-title pt-3">
                Facebook is changing its name to Meta
              </h5>
              <p className="card-text pt-2">24 November 2021</p>
            </div>
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
    <div className="container-fluid p-0">
      <Carousel className="bg-dark text-light " indicators="false">
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
        </Carousel.Item>{" "}
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
        </Carousel.Item>{" "}
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
              style={{ opacity: 0.6 }}
              src="https://c.cricketpakistan.com.pk/images/posts/cover_16384446652.jpg"
              class="card-img"
              alt="..."
              width="auto"
              height="380px"
            />
            <div class="card-img-overlay d-flex flex-column justify-content-end mb-3">
              <h2 class="card-title">Facebook is changing its name to Meta</h2>
            </div>
          </div>
        </div>
        <div className=" col-md-5 card pt-1">
          <div class=" d-flex flex-column justify-content-end mb-3 ">
            <div class=" d-flex justify-content-around pt-1">
              <p className="card-text pt-1">24 November 2021</p>
              <a href="#" className="btn btn-outline-dark">
                <BsFillCircleFill /> Technology
              </a>
            </div>

            <h2 class="card-title pt-2">
              Facebook is changing its name to Meta
            </h2>
          </div>
          <img
            src="https://c.cricketpakistan.com.pk/images/posts/cover_16384446652.jpg"
            class="card-img"
            alt="..."
            width="auto"
            height="220px"
          />

          <div></div>
        </div>{" "}
        <div className=" col-md-6 card pt-4">
          <div class=" d-flex flex-column justify-content-end mb-3 ">
            <div class=" d-flex justify-content-around pt-3">
              <p className="card-text pt-2">24 November 2021</p>
              <a href="#" className="btn btn-outline-dark">
                <BsFillCircleFill /> Technology
              </a>
            </div>

            <h2 class="card-title pt-2">
              Facebook is changing its name to Meta
            </h2>
          </div>
          <img
            src="https://c.cricketpakistan.com.pk/images/posts/cover_16384446652.jpg"
            class="card-img"
            alt="..."
            width="auto"
            height="220px"
          />

          <div></div>
        </div>{" "}
        <div className=" col-md-6 card pt-4">
          <div class=" d-flex flex-column justify-content-end mb-3 ">
            <div class=" d-flex justify-content-around pt-3">
              <p className="card-text pt-2">24 November 2021</p>
              <a href="#" className="btn btn-outline-dark">
                <BsFillCircleFill /> Technology
              </a>
            </div>

            <h2 class="card-title pt-2">
              Facebook is changing its name to Meta
            </h2>
          </div>
          <img
            src="https://c.cricketpakistan.com.pk/images/posts/cover_16384446652.jpg"
            class="card-img"
            alt="..."
            width="auto"
            height="220px"
          />

          <div></div>
        </div>
      </div>
      <div className=" d-flex justify-content-center pt-4 pb-4">
      <button className="btn btn-primary ">Load More</button></div>
    </div>
  </Layout>
)

export default Blog

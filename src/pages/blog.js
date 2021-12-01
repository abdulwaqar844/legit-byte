import * as React from "react"
import { Link } from "gatsby"
import CareerImage from "./../images/career.png"
import Layout from "./../components/layout"
import Seo from "./../components/seo"
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
        </div>{" "}
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
        </div>{" "}
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
        </div>{" "}
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

          <div
            className="col-md-6 border pt-2"
            style={{ backgroundImage: "images/1.png" }}
          >
            <a href="#" className="btn btn-outline-dark">
              <BsFillCircleFill color="blue" /> Technology
            </a>{" "}
            <h5 className="card-title pt-3">
              Facebook is changing its name to Meta
            </h5>{" "}
            <p>24 November 2021</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
              mauris porta ultrices non massa vitae dignissim nunc. Amet netus
              imperdiet sed sit leo, consectetur vitae, cursus.
            </p>
          </div>
          <div className="col-md-6">
            <h3 className="text-center">Popular Post</h3>

            <div className="row">
              <div className="col-md-6 border pt-2 pb-1">
                <a href="#" className="btn btn-outline-dark">
                  <BsFillCircleFill color="blue" /> Technology
                </a>{" "}
                <h5 className="card-title pt-3">
                  Facebook is changing its name to Meta
                </h5>{" "}
                <p>24 November 2021</p>
              </div>
              <div className="col-md-6 border pt-2">
                {" "}
                <a href="#" className="btn btn-outline-dark">
                  <BsFillCircleFill color="blue" /> Technology
                </a>{" "}
                <h5 className="card-title pt-3">
                  Facebook is changing its name to Meta
                </h5>{" "}
                <p>24 November 2021</p>
              </div>
              <div className="col-md-6 border pt-2">
                {" "}
                <a href="#" className="btn btn-outline-dark">
                  <BsFillCircleFill color="blue" /> Technology
                </a>{" "}
                <h5 className="card-title pt-3">
                  Facebook is changing its name to Meta
                </h5>{" "}
                <p>24 November 2021</p>
              </div>
              <div className="col-md-6 border pt-2">
                {" "}
                <a href="#" className="btn btn-outline-dark">
                  <BsFillCircleFill color="blue" /> Technology
                </a>{" "}
                <h5 className="card-title pt-3">
                  Facebook is changing its name to Meta
                </h5>{" "}
                <p>24 November 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
    <div className=" text-light d-flex flex-row justify-content-around container-fluid bg-dark pt-3 pb-3 align-items-center">
        <div>
          <a href="#" className="btn btn-outline-light">
            <BsFillCircleFill /> Technology
          </a>
          <h5 className="card-title pt-3">
            Facebook is changing its name to Meta
          </h5>
          <p>24 November 2021</p>
        </div>
        <img
          class="d-block "
          src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/03/traveling-based-on-fare-deals.jpg"
          alt="First slide"
          width={320}
          height={300}
        />
      </div>
      {/* <div className=" text-light d-flex flex-row justify-content-around container-fluid bg-dark pt-3 pb-3 align-items-center">
        <div>
          <a href="#" className="btn btn-outline-light">
            <BsFillCircleFill /> Technology
          </a>
          <h5 className="card-title pt-3">
            Facebook is changing its name to Meta
          </h5>
          <p>24 November 2021</p>
        </div>
        <img
          class="d-block "
          src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/03/traveling-based-on-fare-deals.jpg"
          alt="First slide"
          width={320}
          height={300}
        />
      </div>
      <div className=" text-light d-flex flex-row justify-content-around container-fluid bg-dark pt-3 pb-3 align-items-center">
        <div>
          <a href="#" className="btn btn-outline-light">
            <BsFillCircleFill /> Technology
          </a>
          <h5 className="card-title pt-3">
            Facebook is changing its name to Meta
          </h5>
          <p>24 November 2021</p>
        </div>
        <img
          class="d-block "
          src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/03/traveling-based-on-fare-deals.jpg"
          alt="First slide"
          width={320}
          height={300}
        />
      </div> */}
      <div className='container pb-4'>
        <h1>Selected Posts</h1>
        <p>EDITOR'S PICKS</p>
        <div className='row'>
        <div className='col-md-8'> <img
          class="d-block "
          src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/03/traveling-based-on-fare-deals.jpg"
          alt="First slide"
       
        /></div>
        <div className='col-md-4'> <img
          class="d-block "
          src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/03/traveling-based-on-fare-deals.jpg"
          alt="First slide"
        
        /></div>
        <div className='col-md-6'> <img
          class="d-block "
          src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/03/traveling-based-on-fare-deals.jpg"
          alt="First slide"
         
        /></div>
        <div className='col-md-6'> <img
          class="d-block "
          src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/03/traveling-based-on-fare-deals.jpg"
          alt="First slide"
         
        /></div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Blog

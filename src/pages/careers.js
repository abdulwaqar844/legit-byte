import * as React from "react"
import { Link } from "gatsby"
import CareerImage from "./../images/career.png"
import Layout from "./../components/layout"
import Seo from "./../components/seo"

const Careers = () => (
  <Layout>
    <Seo title="Career| Legit Byte" />
    <div className="container-fluid ">
      <div className=" text-center bg-image rounded-3 career">
        <div className="mask ">
          <div className="d-flex justify-content-center align-items-center h-100 container-sm ps-4 pe-4 ">
            <div className="text-white">
              <h1 className="mb-3">Join With Legit Bytes</h1>
              <p className="m-4 p-4 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                morbi viverra elementum sit nunc turpis sit dictum in. Convallis
                risus sit id tempor viverra arcu facilisis.
              </p>
              <a className="btn btn-primary btn-lg" href="#!" role="button">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-sm">
        <div className="row  pt-4">
          <div className="col-md-6 pt-3 text-center ">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Internships</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tempus, eu justo, ullamcorper viverra fames. Eu, proin proin
                  tincidunt euismod ut quis amet varius.
                </p>
                <a href="#" className="card-link btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 pt-3  text-center">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Fresh Graduates</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tempus, eu justo, ullamcorper viverra fames. Eu, proin proin
                  tincidunt euismod ut quis amet varius.
                </p>
                <a href="#" className="card-link btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-sm pt-4 pb-4">
        <div className="row pt-3">
          <div className="col-12 d-flex flex-small-column align-items-center">
            <input
              type="text"
              placeholder="Search Job"
              className="ms-1 me-1 mt-sm-2 mb-sm-2 border w-75"
              style={{ paddingTop: "6px", paddingBottom: "6px" }}
            />
            <select
              className="form-select ms-1 me-1 mt-sm-2 mb-sm-2 w-75"
              aria-label="Division"
            >
              <option selected>Division</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>{" "}
            <select
              className="form-select ms-1 me-1 mt-sm-2 mb-sm-2 w-75"
              aria-label="All Hours"
            >
              <option selected>All Hours</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <button className="btn btn-primary ms-1 me-2 mt-sm-2 mb-sm-2">
              Search
            </button>
          </div>
        </div>
      </div>
      <div classsName="container-sm">
        <h2 className=" text-primary">Job Opening</h2>
        <table className="table">
          <thead>
          <tr>
              <th scope="col">Position</th>
              <th scope="col">Division</th>
              <th scope="col">Working Hours</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td>Business Development Intern</td>
              <td>Design</td>
                       <td>Fulltime</td>
     <td><a className='text-primary'>Detail</a></td>
            </tr>
            <tr>
              <td>Business Development Intern</td>
              <td>Design</td>
                       <td>Fulltime</td>
     <td><a className='text-primary'>Detail</a></td>
            </tr>
            <tr>
              <td>Business Development Intern</td>
              <td>Design</td>
                       <td>Fulltime</td>
     <td><a className='text-primary'>Detail</a></td>
            </tr>
            <tr>
              <td>Business Development Intern</td>
              <td>Design</td>
                       <td>Fulltime</td>
     <td><a className='text-primary'>Detail</a></td>
            </tr>
            <tr>
              <td>Business Development Intern</td>
              <td>Design</td>
                       <td>Fulltime</td>
     <td><a className='text-primary'>Detail</a></td>
            </tr>
         
      
          </tbody>
        </table>{" "}
      </div>
    </div>
  </Layout>
)

export default Careers

import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { BsFillCircleFill } from "react-icons/bs"

const post = () => (
  <Seo>
  <Layout>
    <div className="container-fluid ps-0 pe-0  ">
      <div style={{ position: "relative" }}>
        <img
          src="https://cdn.pixabay.com/photo/2021/11/04/06/15/woman-6767494_1280.jpg"
          alt="Image"
          width="100%"
          height="400px"
          className=""
        />
        <div className="caption caption mb-0 mt-2 feature-caption  d-flex flex-column justify-content-center text-light lb-overlay">
          <h3 className="h1">"nodes[0].title" </h3>
          <p style={{ fontSize: "12px" }}>
            new Date(nodes[0].date).toDateString()
          </p>
          <p style={{ fontSize: "12px" }}>Author: user</p>
        </div>
      </div>
    </div>
    <div className="row w-100 pt-2">
      <div className="col-md-7 col-12">
        <div className="row container">
          <div>
            <p>24 Nov 2021</p>
            <p className="h1">FaceBook changing is Name to Meta</p>
            <div className='d-flex flex-row justify-content-around'>
              <p className='btn btn-outline-dark'>
                
                <BsFillCircleFill color="yellow" />
                Technology
              </p>
              <p>Author: Legit-Bytes</p>
            </div>
            <p>
              The National Stadium will be available to fans at 100 per cent
              seating capacity to watch this year’s most successful T20I side in
              action when Babar Azam’s Pakistan take on the West Indies in three
              T20Is and as many ODIs from 13-22 December. Pakistan have won 17
              T20Is this year and will enter the shorter format series against
              the West Indies with nine wins in the last 10 completed matches.
              In a bid to help cricket fans from various walks of life watch
              their superstars in action, the Pakistan Cricket Board has set the
              ticket prices for the T20I matches from as low as PKR250 till
              PKR2,000. Seats in General Enclosures (Intikhab Alam, Iqbal Qasim,
              Mohammad Brothers, Nasimul Ghani and Wasim Bari) are priced at
              PKR250; in First-class Enclosures (Asif Iqbal, Majid Khan, Quaid,
              Waqar Hasan and Zaheer Abbas) are for PKR500; in Premium
              Enclosures (Imran Khan and Wasim Akram) are for PKR1,000; and in
              VIP Enclosures (Fazal Mahmood, Hanif Mohammad and Javed Miandad)
              are for PKR2,000. These tickets can be purchased online
              (www.bookme.pk), over telephone (0092 313 778 6888) or through box
              office and M&P outlets, details of which are available in the
              document attached. Fans of all ages will be able to see No.1
              ranked Babar team up with 2021’s most successful T20I batter
              Mohammad Rizwan as his opening partner. According to the
              guidelines issued by the National Command and Operations Centre,
              individuals above 12 are required to be fully vaccinated, while no
              vaccination is required for the children below the age of 12. The
              access to the stadium will be granted upon the display of original
              ticket, CNIC and Nadra-issued immunisation certificate for
              Covid-19. The two sides will play three ODIs – part of ICC Men’s
              Cricket World Cup Super League – on 18, 20 and 22 December, for
              which the tickets will start from as less as PKR100 and go up to
              only PKR1,000. The seats in General Enclosures are available for
              PKR100, in First-class for PKR250, in Premium for PKR500 and VIP
              for 1,000. To ensure all the spectators get to enjoy the action in
              a safe manner, they are advised to follow the Covid-19 protocols
              and wear the facemasks when in the stands.
            </p>
          </div>
          <div>
            <div style={{ position: "relative" }}>
              <img
                src="https://cdn.pixabay.com/photo/2021/11/04/06/15/woman-6767494_1280.jpg"
                alt="Image"
                width="100%"
                height="260px"
                className=""
              />
              <div class="caption caption mb-0  feature-caption  d-flex flex-column text-light justify-content-center card-img-overlay">
                <h3 class="card-caption pt-4">"nodes[0].title" </h3>
                <p className=" ">" new Date(nodes[0].date).toDateString()"</p>
                <p style={{ fontSize: "12px" }}>
                  'caption caption mb-0 mt-2 feature-caption d-flex flex-column
                  justify-content-center text-light lb-overlay"
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row pt-2 container pb-3">
          <div className="col-12 col-md-6">
            <div style={{ position: "relative" }}>
              <img
                src="https://cdn.pixabay.com/photo/2021/11/04/06/15/woman-6767494_1280.jpg"
                alt="Image"
                width="100%"
                height="260px"
                className=""
              />
              <div class="caption caption mb-0  feature-caption  d-flex flex-column text-light justify-content-center card-img-overlay">
                <h3 class="card-caption">"nodes[0].title" </h3>
                <p className=" ">" new Date(nodes[0].date).toDateString()"</p>
                <p style={{ fontSize: "12px" }}>
                  'caption caption mb-0 mt-2 feature-caption d-flex flex-column
                  justify-content-center text-light lb-overlay"
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div style={{ position: "relative" }}>
              <img
                src="https://cdn.pixabay.com/photo/2021/11/04/06/15/woman-6767494_1280.jpg"
                alt="Image"
                width="100%"
                height="260px"
                className=""
              />
              <div class="caption caption mb-0  feature-caption  d-flex flex-column text-light justify-content-center card-img-overlay">
                <h3 class="card-caption">"nodes[0].title" </h3>
                <p className=" ">" new Date(nodes[0].date).toDateString()"</p>
                <p style={{ fontSize: "12px" }}>
                  'caption caption mb-0 mt-2 feature-caption d-flex flex-column
                  justify-content-center text-light lb-overlay"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-5 col-12">
        <h2 className="text-center">Popular Posts</h2>
        <div className="row">
          <div className="col">
            <div className="row pt-4 pb-4 border-2 border-bottom border-dark">
              <a href="#" className=" text-dark text-decoration-none">
                <p className="btn btn-outline-dark">
                  <BsFillCircleFill /> Technology
                </p>
                <h5 className="card-title pt-3">
                  Facebook changing its name to Meta
                </h5>
                <p className="card-text pt-2">
                  24 Nov 2021
                  {/* {new Date(post.date).toDateString()} */}
                </p>
              </a>
            </div>
          </div>
        </div>{" "}
        <div className="row">
          <div className="col">
            <div className="row pt-4 pb-4 border-2 border-bottom border-dark">
              <a href="#" className=" text-dark text-decoration-none">
                <p className="btn btn-outline-dark">
                  <BsFillCircleFill /> Technology
                </p>
                <h5 className="card-title pt-3">
                  Facebook changing its name to Meta
                </h5>
                <p className="card-text pt-2">
                  24 Nov 2021
                  {/* {new Date(post.date).toDateString()} */}
                </p>
              </a>
            </div>
          </div>
        </div>{" "}
        <div className="row">
          <div className="col">
            <div className="row pt-4 pb-4 border-2 border-bottom border-dark">
              <a href="#" className=" text-dark text-decoration-none">
                <p className="btn btn-outline-dark">
                  <BsFillCircleFill /> Technology
                </p>
                <h5 className="card-title pt-3">
                  Facebook changing its name to Meta
                </h5>
                <p className="card-text pt-2">
                  24 Nov 2021
                  {/* {new Date(post.date).toDateString()} */}
                </p>
              </a>
            </div>
          </div>
        </div>{" "}
        <div className="row">
          <div className="col">
            <div className="row pt-4 pb-4 border-2 border-bottom border-dark">
              <a href="#" className=" text-dark text-decoration-none">
                <p className="btn btn-outline-dark">
                  <BsFillCircleFill /> Technology
                </p>
                <h5 className="card-title pt-3">
                  Facebook changing its name to Meta
                </h5>
                <p className="card-text pt-2">
                  24 Nov 2021
                  {/* {new Date(post.date).toDateString()} */}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout></Seo>
)

export default post

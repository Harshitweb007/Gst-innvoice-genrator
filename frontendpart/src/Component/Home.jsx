import React, { useState } from "react";
import Footer from "./Footer";

import { 
  ArrowDownRight, 
  ArrowUpRight, 
  Users, 
  Truck, 
  FileText, 
  ShoppingCart,
  FileCheck 
} from 'lucide-react';
function Home() {

    const data=[{Heading:"Customize Invoice Genrator",para:"Create and customize professional invoices with ease using our user-friendly invoice generator. Tailor your invoices to reflect your brand and impress your clients."},

        {Heading:"Track Your Finances",para:"Create and customize professional invoices with ease using our user-friendly invoice generator. Tailor your invoices to reflect your brand and impress your clients."},

        {Heading:"Secure Login",para:"Create and customize professional invoices with ease using our user-friendly invoice generator. Tailor your invoices to reflect your brand and impress your clients."},

        {Heading:"Login/Singnup",para:"Create and customize professional invoices with ease using our user-friendly invoice generator. Tailor your invoices to reflect your brand and impress your clients."}
    ];
     const [isYearly, setIsYearly] = useState(false); // false = monthly

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };
  console.log(isYearly);
  return (
    <>
      <section className="wrapper bg-gradient-primary">
        <div className="container pt-10 pt-md-14 pb-8 text-center">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-7">
              <figure>
                <img
                  className="w-auto"
                  src="/assets/img/illustrations/i2.png"
                  srcSet="/assets/img/illustrations/i2@2x.png 2x"
                  alt=""
                />
              </figure>
            </div>

            <div className="col-md-10 offset-md-1 offset-lg-0 col-lg-5 text-center text-lg-start">
              <h1 className="display-1 mb-5 mx-md-n5 mx-lg-0">
                Grow Your Business with Our Solutions.
              </h1>
              <p className="lead fs-lg mb-7">
                We help our clients increase their website traffic,
                rankings and visibility.
              </p>
              <button className="btn btn-primary rounded-pill me-2">
                Try It For Free
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper bg-light">
        <div className="container pt-14 pt-md-16">
          <div className="row text-center">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <h2 className="fs-16 text-uppercase text-muted mb-3">
                What We Do?
              </h2>
              <h3 className="display-4 mb-10 px-xl-10">
                The service we offer is specifically designed to meet your needs.
              </h3>
            </div>
          </div>

          <div className="position-relative">
            <div
              className="shape rounded-circle bg-soft-blue rellax w-16 h-16"
              data-rellax-speed="1"
              style={{ bottom: "-0.5rem", right: "-2.2rem", zIndex: 0 }}
            ></div>

            <div
              className="shape bg-dot primary rellax w-16 h-17"
              data-rellax-speed="1"
              style={{ top: "-0.5rem", left: "-2.5rem", zIndex: 0 }}
            ></div>

            <div className="row gx-md-5 gy-5 text-center">
              
              {/* CARD 1 */}
            {data.map((item, index) => (
              
  <div className="col-md-6 col-xl-3" key={index}>
    
    <div className="card shadow-lg">
      <div className="card-body">
        <img
          src="/assets/img/icons/lineal/search-2.svg"
          className="svg-inject icon-svg icon-svg-md text-yellow mb-3"
          alt=""
        />
        <h4>{item.Heading}</h4>
        <p className="mb-2">{item.para}</p>
      </div>
    </div>
  </div>
))}


            

            </div>
          </div>
        </div>

      </section>

         
    <section className="wrapper bg-light angled upper-start lower-start">
     
    </section>
     <section className="wrapper bg-gradient-reverse-primary" >
      <div className="container py-5 py-md-10">
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">

          {/* Left cards */}
          <div className="col-lg-7">
            <div className="row gx-md-5 gy-5">

              {/* Card 1 */}
              <div className="col-md-6 col-xl-5 align-self-end">
                <div className="card shadow-lg">
                  <div className="card-body">
                    <blockquote className="icon mb-0">
                      <p>
                        “Cum sociis natoque penatibus et magnis dis parturient montes.”
                      </p>
                      <div className="blockquote-details">
                        <div className="info p-0">
                          <h5 className="mb-1">Coriss Ambady</h5>
                          <p className="mb-0">Financial Analyst</p>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-md-6 align-self-end">
                <div className="card shadow-lg">
                  <div className="card-body">
                    <blockquote className="icon mb-0">
                      <p>
                        “Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                        Vestibulum id ligula porta felis euismod.”
                      </p>
                      <div className="blockquote-details">
                        <div className="info p-0">
                          <h5 className="mb-1">Cory Zamora</h5>
                          <p className="mb-0">Marketing Specialist</p>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-md-6 col-xl-5 offset-xl-1">
                <div className="card shadow-lg">
                  <div className="card-body">
                    <blockquote className="icon mb-0">
                      <p>
                        “Donec id elit non porta gravida at eget metus. Duis mollis est luctus commodo nisi erat.”
                      </p>
                      <div className="blockquote-details">
                        <div className="info p-0">
                          <h5 className="mb-1">Barclay Widerski</h5>
                          <p className="mb-0">Sales Specialist</p>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="col-md-6 align-self-start">
                <div className="card shadow-lg">
                  <div className="card-body">
                    <blockquote className="icon mb-0">
                      <p>
                        “Nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo pellentesque.”
                      </p>
                      <div className="blockquote-details">
                        <div className="info p-0">
                          <h5 className="mb-1">Jackie Sanders</h5>
                          <p className="mb-0">Investment Planner</p>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right content */}
          <div className="col-lg-5">
            <h2 className="fs-16 text-uppercase text-muted mb-3 mt-lg-n6">Our Community</h2>
            <h3 className="display-4 mb-5">
              Don't take our word for it. See what customers are saying about us.
            </h3>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur et. Nulla vitae elit libero, a pharetra augue.
              Maecenas faucibus mollis interdum. Vestibulum id ligula porta felis euismod.
            </p>
            <a href="#" className="btn btn-primary rounded-pill mt-3">
              All Testimonials
            </a>
          </div>

        </div>
      </div>
    </section>
<section className="wrapper bg-light angled upper-end lower-end">
      <div className="container py-14 pt-md-14 pb-md-18">
        <div className="row gy-6 mb-14 mb-md-18">
          <div className="col-lg-4">
            <h2 className="fs-16 text-uppercase text-muted mt-lg-18 mb-3">
              Our Pricing
            </h2>
            <h3 className="display-4 mb-3">
              We offer great and premium prices.
            </h3>
            <p>
              Enjoy a <a href="#" className="hover">free 30-day trial</a> and experience the
              full service. No credit card required!
            </p>
            <a href="#" className="btn btn-primary rounded-pill mt-2">
              See All Prices
            </a>
          </div>

          <div className="col-lg-7 offset-lg-1 pricing-wrapper">
            <div className="pricing-switcher-wrapper switcher justify-content-start justify-content-lg-end">
              <p className="mb-0 pe-3">Monthly</p>
              <div className="pricing-switchers pointer position-relative" onClick={handleToggle}>
                <div className={`pricing-switcher ${!isYearly?"pricing-switcher-active":" "}` }></div>
                <div className={`pricing-switcher ${!isYearly?"pricing-switcher-active":" "}` }></div>
                <div className="switcher-button bg-primary" style={{transform:isYearly?"translateX(1px)":"translateX(1px)",transition:"0.4s"}}></div>
              </div>
              <p className="mb-0 ps-3">
                Yearly <span className="text-red">(Save 30%)</span>
              </p>
            </div>

            <div className="row gy-6 position-relative mt-5">
              <div
                className="shape bg-dot red rellax w-16 h-18"
                data-rellax-speed="1"
                style={{ bottom: "-0.5rem", right: "-1.6rem" }}
              ></div>

              {/* Pricing Card 1 */}
              <div className="col-md-6">
                <div className="pricing card shadow-lg">
                  <div className="card-body pb-12">
                    <div className="prices text-dark">
                      <div className="price price-show justify-content-start">
                        <span className="price-currency">$</span>
                        <span className="price-value" style={{transition:"0.7s"}}>{isYearly?"30":"66"}</span>
                        <span className="price-duration">{isYearly?"mo":"yr"}</span>
                      </div>
                      <div className="price price-hide price-hidden justify-content-start">
                        <span className="price-currency">$</span>
                        <span className="price-value">199</span>
                        <span className="price-duration">yr</span>
                      </div>
                    </div>
                    <h4 className="card-title mt-2">Premium Plan</h4>
                    <ul className="icon-list bullet-primary mt-7 mb-8">
                      <li><i className="uil uil-check fs-21"></i> <strong>5</strong> Projects</li>
                      <li><i className="uil uil-check fs-21"></i> <strong>100K</strong> API Access</li>
                      <li><i className="uil uil-check fs-21"></i> <strong>200MB</strong> Storage</li>
                      <li><i className="uil uil-check fs-21"></i> Weekly <strong>Reports</strong></li>
                      <li><i className="uil uil-check fs-21"></i> 7/24 <strong>Support</strong></li>
                    </ul>
                    <a href="#" className="btn btn-primary rounded-pill">Choose Plan</a>
                  </div>
                </div>
              </div>

              {/* Pricing Card 2 */}
              <div className="col-md-6 popular">
                <div className="pricing card shadow-lg">
                  <div className="card-body pb-12">
                    <div className="prices text-dark">
                      <div className="price price-show justify-content-start">
                        <span className="price-currency">$</span>
                        <span className="price-value">49</span>
                        <span className="price-duration">mo</span>
                      </div>

                      <div className="price price-hide price-hidden justify-content-start">
                        <span className="price-currency">$</span>
                        <span className="price-value">499</span>
                        <span className="price-duration">yr</span>
                      </div>
                    </div>

                    <h4 className="card-title mt-2">Corporate Plan</h4>
                    <ul className="icon-list bullet-primary mt-7 mb-8">
                      <li><i className="uil uil-check fs-21"></i> <strong>20</strong> Projects</li>
                      <li><i className="uil uil-check fs-21"></i> <strong>300K</strong> API Access</li>
                      <li><i className="uil uil-check fs-21"></i> <strong>500MB</strong> Storage</li>
                      <li><i className="uil uil-check fs-21"></i> Weekly <strong>Reports</strong></li>
                      <li><i className="uil uil-check fs-21"></i> 7/24 <strong>Support</strong></li>
                    </ul>
                    <a href="#" className="btn btn-primary rounded-pill">Choose Plan</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Brands Section */}
      

        {/* Brand Logos */}
        

      </div>
    </section>

      

  
    <Footer></Footer>
    </>
  );
}

export default Home;

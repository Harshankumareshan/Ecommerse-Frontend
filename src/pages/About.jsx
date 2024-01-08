import React from 'react'
import Layout from '../components/Layout/Layout'

function About() {
  return (
    <Layout>
        <div className="row contactus ">
        <div className="col-md-4 ">
          <img
            src="/images/aboutus.png"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to Shop Cart, your ultimate destination for all your online shopping needs!<br/><br/> At Shop Cart, we are passionate about providing you with a seamless and enjoyable e-commerce experience.

We pride ourselves on offering a wide range of high-quality products, from fashion and electronics to home essentials and much more. 
Thank you for choosing Shop Cart for all your online shopping needs. Happy shopping!
          </p>
        </div>
      </div>
        </Layout>
  )
}

export default About
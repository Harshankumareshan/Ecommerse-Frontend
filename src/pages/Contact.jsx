import React from 'react'
import Layout from '../components/Layout/Layout'
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact= () => {
  return (
    <Layout>
         <div className="row contactus ">
        <div className="col-md-3 ">
          <img
            src="/images/contactus.png"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Any query and info about prodduct feel free to call anytime we 24X7
            Avaialible
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@shopcartapp.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 00120-23245006
          </p>
          <p className="mt-3">
            <BiSupport /> : 1822-004-0022 (toll free)
          </p>
        </div>
      </div>
        
        </Layout>
  )
}

export default Contact
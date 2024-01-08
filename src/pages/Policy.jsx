import React from 'react'
import Layout from '../components/Layout/Layout'

const Policy = () => {
  return (
    <Layout>
        <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/Privacypolicy.png"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1>Privacy Policy</h1>
          <p>Information Collection: We collect your name, email, address, and payment details for orders and transactions.<br/>

Use of Information: Your data helps us process orders, provide customer support, and improve our website.<br/>

Information Sharing: We do not sell your information.<br/>

Security: We use measures to protect your data from unauthorized access.<br/>

Cookies: We use cookies to enhance your browsing experience.<br/>



Consent: By using our site, you agree to this Privacy Policy.<br/>

Changes: We may update this policy; please check periodically for changes.</p>
        </div>
      </div>
       
    </Layout>
  )
}

export default Policy
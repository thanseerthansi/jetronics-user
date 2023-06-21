import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Simplecontext } from './Simplecontext'

export default function Footer() {
  const {contactdata} =useContext(Simplecontext)
  // console.log("data",contactdata)
  return (
    <div>
        <footer className="footer">
    <div className="footer-middle">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <div className="widget widget-about">
              <img src="/assets/images/demos/demo-4/logo.png" className="footer-logo" alt="Footer Logo" width={150} height={30} />
              <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. </p>
              <div className="widget-call">
                <i className="icon-phone" />
                Got Question? Call us 24/7
                <a href="tel:#">{contactdata?.contact??""}</a>         
              </div>{/* End .widget-call */}
            </div>{/* End .widget about-widget */}
          </div>{/* End .col-sm-6 col-lg-3 */}
          <div className="col-sm-6 col-lg-3">
            <div className="widget">
              <h4 className="widget-title">Useful Links</h4>{/* End .widget-title */}
              <ul className="widget-list">
                <li><Link to="/aboutus">About Jetronics</Link></li>
                <li><a href="/">Our Services</a></li>
                <li><a href="/">How to shop on Jetronics</a></li>
                <li><a href="/">FAQ</a></li>
                <li><a href="/">Contact us</a></li>
              </ul>{/* End .widget-list */}
            </div>{/* End .widget */}
          </div>{/* End .col-sm-6 col-lg-3 */}
          <div className="col-sm-6 col-lg-3">
            <div className="widget">
              <h4 className="widget-title">Customer Service</h4>{/* End .widget-title */}
              <ul className="widget-list">
                <li><a href="/">Payment Methods</a></li>
                <li><a href="/">Money-back guarantee!</a></li>
                <li><a href="/">Returns</a></li>
                <li><a href="/">Shipping</a></li>
                <li><Link to="/terms">Terms and conditions</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
              </ul>{/* End .widget-list */}
            </div>{/* End .widget */}
          </div>{/* End .col-sm-6 col-lg-3 */}
          <div className="col-sm-6 col-lg-3">
            <div className="widget">
              <h4 className="widget-title">Contact Us</h4>{/* End .widget-title */}
              <ul className="widget-list">
                <li><Link to="/">{contactdata?.address??""}</Link></li>
                <li>
                <div className="header-right">
                  <a href={contactdata?.facebook??"/"}><i className="la la-facebook" /></a>
                  <a href={contactdata?.instagram??"/"}><i className="la la-instagram" /></a>
                  <a href="/"><i className="la la-twitter" /></a>
                </div>
                </li>
                <li><Link to="/">{contactdata?.email??''}</Link></li>
                <li><Link to="/">{contactdata?.contact??""}</Link></li>
              </ul>{/* End .widget-list */}
            </div>{/* End .widget */}
          </div>{/* End .col-sm-6 col-lg-3 */}
        </div>{/* End .row */}
      </div>{/* End .container */}
    </div>{/* End .footer-middle */}
    <div className="footer-bottom">
      <div className="container">
        <p className="footer-copyright">Copyright © 2023 Jetronics Store. All Rights Reserved.</p>{/* End .footer-copyright */}
        <figure className="footer-payments">
          <img src="/assets/images/payments.png" alt="Payment methods" width={272} height={20} />
        </figure>{/* End .footer-payments */}
      </div>{/* End .container */}
    </div>{/* End .footer-bottom */}
  </footer>{/* End .footer */}
  <button id="scroll-top" title="Back to Top"><i className="icon-arrow-up" /></button>
 <a target="_blank" href={`https://api.whatsapp.com/send?phone=${contactdata?.whatsapp??""}&text=`} style={{bottom: 20, right: 15, position: 'fixed', zIndex: 99999999}}>
   <img style={{height: 65}} src="\assets\images\demos\demo-4\WhatsApp-Logo.wine.png" alt="WhatsApp chat" />
 </a>

    </div>
  )
}

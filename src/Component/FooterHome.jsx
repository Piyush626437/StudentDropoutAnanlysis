import React from 'react'
import { ReactDOM } from 'react'


function FooterHome()
{
    return (<>
  <footer className="mt-6">
        <div className="edu-logo">
          <div className="logo">
            <h4>Dropout Analysis</h4>
            <div className="square" />
          </div>
          <div className="v-line" />
          <span>Here you get the full analyisis of Student data</span>
        </div>
        <div className="subscribe-letter mt-4">
          <h5>Get the analysis here </h5>
          <div className="form">
            <input type="text" placeholder="Your Email" />
            <button>Get started</button>
          </div>
        </div>
        <div className="links mt-4">
          <a href>Careers</a>
          <a href>Privacy</a>
          <a href>Terms &amp; Condition</a>
        </div>
        <div className="copyright">
          <p>© 2021 Class Technologies Inc.</p>
        </div>
      </footer>

      
    </>);
}
export default FooterHome;
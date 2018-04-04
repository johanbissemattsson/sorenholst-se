import React, { Component } from 'react';
import Link from 'gatsby-link'

export default class Footer extends Component {
  render() {
    return (
      <div className='site-footer-container'>
        <footer className='site-footer'>
            <h2 className='site-title'>Sören Holst</h2>
            <div className='contact-information'>
              <section>
                <p>
                  Fysikum<br />
                  Stockholms Universitet<br />
                  106 91 Stockholm<br />
                </p>
              </section>
              <section>
                <p>
                  08-553 787 40<br />
                  <a href='mailto:holst@fysik.su.se'>holst@fysik.su.se</a><br />
                </p>
              </section>
          </div>
        </footer>
      </div>
    );
  }
}

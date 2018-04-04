import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Link from 'gatsby-link';
import * as ReactScroll from 'react-scroll';

const ScrollLink = ReactScroll.Link;

export const Nav = ({ isIndex, data }) => {
  return (
    <div className='site-nav-container' id='top'>
        <nav className='site-nav'>
          {isIndex ?
            <ul className='nav-items'>
              <li className='nav-item nav-home-item'><Link className='nav-link' to='/' activeClassName='active'>Sören Holst</Link></li>
              <li className='nav-item'><ScrollLink className='nav-link' activeClass='active' to='tankeexperiment' spy={true} smooth={true} duration={500}>Tankeexperiment</ScrollLink></li>
              <li className='nav-item'><ScrollLink className='nav-link' activeClass='active' to='relativitetsteori' spy={true} smooth={true} duration={500}>Relativitetsteori</ScrollLink></li>
              <li className='nav-item'><ScrollLink className='nav-link' activeClass='active' to='undervisning' spy={true} smooth={true} duration={500}>Undervisning</ScrollLink></li>
              <li className='nav-item'><ScrollLink className='nav-link' activeClass='active' to='debatt-och-samhalle' spy={true} smooth={true} duration={500}>Debatt och samhälle</ScrollLink></li>
              <li className='nav-item'><ScrollLink className='nav-link' activeClass='active' to='kontakt' spy={true} smooth={true} duration={500}>Kontakt</ScrollLink></li>
              <li className='nav-item'><Link className='nav-link' to='/in-english' activeClassName='active'>In English</Link></li>
            </ul>
            :
            <ul className='nav-items'>
              <li className='nav-item nav-home-item'><Link className='nav-link' to='/' activeClassName='active'>Sören Holst</Link></li>
              <li className='nav-item'><Link className='nav-link' to='/#tankeexperiment'>Tankeexperiment</Link></li>
              <li className='nav-item'><Link className='nav-link' to='/#relativitetsteori'>Relativitetsteori</Link></li>
              <li className='nav-item'><Link className='nav-link' to='/#undervisning'>Undervisning</Link></li>
              <li className='nav-item'><Link className='nav-link' to='/#debatt-och-samhalle'>Debatt och samhälle</Link></li>
              <li className='nav-item'><Link className='nav-link' to='/#kontakt'>Kontakt</Link></li>
              <li className='nav-item'><Link className='nav-link' to='/in-english' activeClassName='active'>In English</Link></li>
            </ul>
          }
        </nav>
      </div>
  );
}

export default Nav;


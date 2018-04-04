import React, { Component } from 'react';
import Link from 'gatsby-link';
//import * as ReactScroll from 'react-scroll';

//const ScrollLink = ReactScroll.Link;

export default class Nav extends Component {
  render() {
    return (
    <div className='site-nav-container'>
      <nav className='site-nav'>
        <ul className='nav-items'>
          <li className='nav-item'><Link className='nav-link' to='hej'>Sören Holst</Link></li>
          <li className='nav-item'><Link className='nav-link' to='hej'>Tankeexperiment</Link></li>
          <li className='nav-item'><Link className='nav-link' to='hej'>Relativitetsteori</Link></li>
          <li className='nav-item'><Link className='nav-link' to='hej'>Undervisning</Link></li>
          <li className='nav-item'><Link className='nav-link' to='hej'>Debatt och samhälle</Link></li>
          <li className='nav-item'><Link className='nav-link' to='hej'>Kontakt</Link></li>
        </ul>
      </nav>
    </div>
    );
  }
}

/*
    <div className='site-nav-container'>
      <nav className='site-nav'>
        <div className='site-nav-content'>
          <ul>
            <li><ScrollLink className='active' activeClass='active' to='0' spy={true} smooth={true} duration={500} offset={-32}>Sören Holst</ScrollLink></li>
            <li><ScrollLink activeClass='active' to='tankeexperiment' spy={true} smooth={true} duration={500} offset={-32}>Tankeexperiment</ScrollLink></li>
            <li><ScrollLink activeClass='active' to='relativitetsteori' spy={true} smooth={true} duration={500} offset={-32}>Relativitetsteori</ScrollLink></li>
            <li><ScrollLink activeClass='active' to='undervisning' spy={true} smooth={true} duration={500} offset={-32}>Undervisning</ScrollLink></li>
            <li><ScrollLink activeClass='active' to='debatt-och-samhalle' spy={true} smooth={true} duration={500} offset={-32}>Debatt och samhälle</ScrollLink></li>
            <li><ScrollLink activeClass='active' to='kontakt' spy={true} smooth={true} duration={500} offset={-32}>Kontakt</ScrollLink></li>
            <li className='language'><a href='#'>In English</a></li>
          </ul>
        </div>
      </nav>
    </div>
*/
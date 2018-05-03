import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Link from 'gatsby-link';
import * as ReactScroll from 'react-scroll';

const ScrollLink = ReactScroll.Link;

export const Nav = ({ isIndex, data, navItems, language }) => {
  return (
    <div className='site-nav-container' id='top'>
        <nav className='site-nav'>
          {isIndex ?
            <ul className='nav-items'>
              {language === 'English' ? 
                <li className='nav-item nav-home-item'><Link className='nav-link' to='/in-english' activeClassName='active'>Sören Holst</Link></li>
              :
                <li className='nav-item nav-home-item'><Link className='nav-link' to='/' activeClassName='active'>Sören Holst</Link></li>
              }
              {navItems && 
                navItems.map((item, index) => {
                  return (
                    <li key={index} className='nav-item'><ScrollLink className='nav-link' activeClass='active' to={item.link} spy={true} smooth={true} duration={500}>{item.title}</ScrollLink></li>
                  );
                })
              }
              {language === 'English' ? 
                <li className='nav-item'><Link className='nav-link' to='/'>In Swedish</Link></li>
              :
                <li className='nav-item'><Link className='nav-link' to='/in-english'>In English</Link></li>
              }
            </ul>
            :
            <ul className='nav-items'>
                {language === 'English' ? 
                  <li className='nav-item nav-home-item'><Link className='nav-link' to='/in-english' activeClassName='active'>Sören Holst</Link></li>
                :
                  <li className='nav-item nav-home-item'><Link className='nav-link' to='/' activeClassName='active'>Sören Holst</Link></li>
                }              {navItems && 
                navItems.map((item, index) => {
                  return (
                    <li key={index} className='nav-item'><Link className='nav-link' to={'/#' + item.link}>{item.title}</Link></li>
                  );
                })
              }
              {language === 'English' ? 
                <li className='nav-item'><Link className='nav-link' to='/'>In Swedish</Link></li>
              :
                <li className='nav-item'><Link className='nav-link' to='/in-english'>In English</Link></li>
              }
            </ul>
          }
        </nav>
      </div>
  );
}

export default Nav;


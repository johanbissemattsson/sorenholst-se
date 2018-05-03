import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { canUseDOM } from 'exenv';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

import 'normalize.css';
import './index.css';

export default class TemplateWrapper extends Component {
  componentWillMount() {
    if (canUseDOM) {
      const WebFont = require('webfontloader');
      WebFont.load({
        google: {
          families: ['Open Sans:400,600,700', 'Roboto Slab:400,700']
        }
      });
    }
  }

  render() {
    const { children, location } = this.props;
    const isIndex = (location.pathname === '/' || location.pathname === '/in-english' || location.pathname === '/in-english/' ) ? true : false;
    console.log('isIndex', isIndex);
    return (
      <div className='site-container'>
        <Helmet title='Sören Holst' />
        <Nav isIndex={isIndex}/>
        <div className='page-container'>{children()}</div>
        <Footer />
        <div className={isIndex ? 'site-background-container index-background' : 'site-background-container'}>
          <div className='site-background' />
        </div>
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}
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
          families: ['Open Sans', 'Roboto Slab']
        }
      });
    }
  }

  render() {
    const { children, location } = this.props;
    const isIndex = location.pathname === '/' && true;
    return (
      <div className='site-container'>
        <Helmet title='Sören Holst' />
        <Nav isIndex={isIndex}/>
        <div className='page-container'>{children()}</div>
        <Footer />
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}
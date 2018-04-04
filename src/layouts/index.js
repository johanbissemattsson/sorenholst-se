import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { canUseDOM } from 'exenv';

import Nav from '../components/Nav';
import Header from '../components/Header';
import Footer from '../components/Footer';

import 'normalize.css';
import './index.css';

export default class TemplateWrapper extends Component {
  componentWillMount() {
    if (canUseDOM) {
      const WebFont = require('webfontloader');
      WebFont.load({
        google: {
          families: ['Open Sans']
        }
      });
    }
  }

  render() {
    const { children } = this.props;
    return (
      <div className='site-container'>
        <Helmet title='Sören Holst' />
        <Nav />
        <Header />
        <div className='page-container'>{children()}</div>
        <Footer />
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}
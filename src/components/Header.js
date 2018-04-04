import React, { Component } from 'react';
import Link from 'gatsby-link';
import Nav from './Nav';

export default class Header extends Component {
  render() {
    return (
      <div className='site-header-container'>
        <header className='site-header'>
          <div className='site-intro'>
            <h1 className='site-title'>Sören Holst</h1>
            <p className='site-subtitle'>Teoretisk fysiker, föreläsare och lorem ipsum</p>
            <p className='site-description'>Jag är teoretisk fysiker verksam vid fysikinstitutionen vid Stockholms Universitet, Fysikum. Till mina huvudintressen inom fysiken hör relativitetsteori och kvantfysik.</p>
          </div>
          <div className='portrait-image-container' />
        </header>
      </div>
    );
  }
}
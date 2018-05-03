import React from 'react';
import PropTypes from 'prop-types';
import * as ReactScroll from 'react-scroll';
import Content, { HTMLContent } from '../components/Content';
import Link from '../components/Link';
import Remark from 'remark';
import html from 'remark-html';
import Nav from '../components/Nav';

const ScrollLink = ReactScroll.Link;

export const IndexPageTemplate = ({ title, subtitle, description, sections, content, contentComponent, language, navSwedish, navEnglish }) => {
  const PageContent = contentComponent || Content;
  const convertMarkdownToHtml = ((markdownString) => Remark().use(html).processSync(markdownString.replace(/\\/g, '  '), ((err, file) => err ? {contents: '' } : file)).contents);
  return (
    <div className='index page'>
    <Nav isIndex={true} language={language} navItems={language === 'English' ? navEnglish : navSwedish}/>
    <div className='index-header-container'>
        <header className='index-header'>
        <div className='index-intro-container'>
          <div className='index-intro'>
            <h1 className='index-title'>Sören Holst</h1>
            <p className='index-subtitle'>{subtitle}</p>
            <PageContent className='index-description' content={convertMarkdownToHtml(description)} />
          </div>
          </div>
        </header>
      </div>
      {sections && sections.length &&
        sections.map((section, sectionIndex) => {
          return (
            <div className='page-section-container' key={sectionIndex}>
              <section className='page-section' id={section.uid}>
                <header className='section-header'>
                  <h2><ScrollLink className='section-link' activeClass='active' to={section.uid} spy={true} smooth={true} duration={500}>{section.title}</ScrollLink></h2>
                  <PageContent className='section-header-content' content={convertMarkdownToHtml(section.description)} />
                </header>
                {section.sectionItems && section.sectionItems.length &&
                  <div className={'section-items items-' + section.sectionItems.length}>
                   {section.sectionItems.map((sectionItem, sectionItemIndex) => {
                    return (
                      <div className='section-item' key={sectionItemIndex}>
                        {sectionItem.link ?
                          <a href={sectionItem.link} className='section-item-link'>
                            {sectionItem.featuredImage &&
                              <div className='featured-image-container'>
                                <img className='featured-image' src={sectionItem.featuredImage.src} width='448' height='280' alt={sectionItem.featuredImage.alt} />
                              </div>
                            }
                            {sectionItem.title && <h3>{sectionItem.title}</h3>}
                          </a>
                          : 
                          <div>
                            {sectionItem.featuredImage &&
                              <div className='featured-image-container'>
                                <img className='featured-image' src={sectionItem.featuredImage.src} width='448' height='280' alt={sectionItem.featuredImage.alt} />
                              </div>
                            }
                            {sectionItem.title && <h3>{sectionItem.title}</h3>}
                          </div>
                        }
                        {sectionItem.description && <PageContent className='section-item-content'  content={convertMarkdownToHtml(sectionItem.description)}/> }
                      </div>
                    );
                  })}
                  </div>
                }
                {section.more && 
                  <PageContent className='section-more-content'  content={convertMarkdownToHtml(section.more)}/>
                }                
              </section>
            </div>
          );
        })}
    </div>
  )
}

IndexPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      uid: PropTypes.string,
      description: PropTypes.string,
      link: PropTypes.string,
      featuredImage: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string
      })
    })
  ),
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const IndexPage = ({ data }) => {
  const { markdownRemark: post, nav: nav } = data;
  return (
    <IndexPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      language={post.frontmatter.language}
      subtitle={post.frontmatter.subtitle}
      description={post.frontmatter.description}
      sections={post.frontmatter.sections}
      content={post.html}
      navSwedish={nav.frontmatter.navMenuSwedish}
      navEnglish={nav.frontmatter.navMenuEnglish}
    />
  )
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage

export const indexPageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        language
        subtitle
        description
        sections {
          title
          uid
          description
          more
          sectionItems {
            title
            description
            link
            featuredImage {
              src
              alt
            }
          }
        }
      }
    }
    nav: markdownRemark(frontmatter: {templateKey: {eq: "settings-navigation"}}) {
      frontmatter {
        navMenuSwedish {
          link
          title
        }
        navMenuEnglish {
          link
          title
        }
      }
    }
  }
`
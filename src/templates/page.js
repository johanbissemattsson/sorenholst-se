import React from 'react';
import PropTypes from 'prop-types';
import Content, { HTMLContent } from '../components/Content';
import Helmet from 'react-helmet';
import Remark from 'remark';
import html from 'remark-html';
import Link from '../components/Link';


export const PageTemplate = ({ title, content, contentComponent, bodyBox, bodyExtra, list }) => {
  const PageContent = contentComponent || Content
  const convertMarkdownToHtml = ((markdownString) => Remark().use(html).processSync(markdownString.replace(/\\/g, '  '), ((err, file) => err ? {contents: '' } : file)).contents);
  return (
    <div className='page'>
      <Helmet title={title + ' | Sören Holst'} />
      {!list ?
        <article className='page-article'>
          <h1 className='page-title'>{title}</h1>
          <PageContent className='page-content' content={content} />
          {bodyBox && 
            <div className='page-content with-box'>
              <div className='box-container'>
                <PageContent className='box' content={convertMarkdownToHtml(bodyBox)} />
              </div>
            </div>
          }
          {bodyExtra && 
            <PageContent className='page-content extra' content={convertMarkdownToHtml(bodyExtra)} />
          }
        </article>
        :
        <article className='page-article list-page'>
          <h1 className='page-title'>{title}</h1>
          <PageContent className='page-content' content={content} />
            {bodyBox && 
              <div className='page-content with-box'>
                <div className='box-container'>
                  <PageContent className='box' content={convertMarkdownToHtml(bodyBox)} />
                </div>
              </div>
            }
            <div className='page-content'>
              <ul className='content-list'>
                {list.map((listItem, index) => {
                  return (
                  <li key={index}>
                    {listItem.listItemImage &&
                      <div className='list-item-image-container'>
                        {listItem.listItemLink ? 
                          <a href={listItem.listItemLink}><img src={listItem.listItemImage} alt={listItem.listItemTitle} /></a>
                          : 
                          <img src={listItem.listItemImage} alt={listItem.listItemTitle} />
                        }
                      </div>
                    }
                    <div className='list-item-content-container'>
                      {listItem.listItemLink ? listItem.listItemTitle &&
                        <a href={listItem.listItemLink}><h2 className='list-item-title'>{listItem.listItemTitle}</h2></a>
                      :
                        listItem.listItemTitle && <h2 className='list-item-title'>{listItem.listItemTitle}</h2>
                      }
                      {listItem.listItemContent && <PageContent className='list-item-content' content={convertMarkdownToHtml(listItem.listItemContent)} />}
                    </div>

                  </li>
                  )})}
              </ul>
            </div>
        </article>
        }
    </div>
  )
}

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const Page = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <PageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
      bodyBox={post.frontmatter.bodyBox}
      bodyExtra={post.frontmatter.bodyExtra}
      list={post.frontmatter.list}

    />

  )
}

Page.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Page

export const pageQuery = graphql`
  query Page($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        bodyBox
        bodyExtra
        list {
          listItemTitle
          listItemContent
          listItemImage
          listItemLink
        }
      }
    }
  }
`

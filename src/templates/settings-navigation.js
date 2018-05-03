import React from 'react';
import NotFoundPage from '../pages/404';

export const NavigationSettingsTemplate = ({id}) => {
  return (
    <NotFoundPage />
  );
}

export default ({ data }) => {
  const { markdownRemark: navSettings} = data;
  
  return (
    <NavigationSettingsTemplate id={navSettings.id} />
  );
}

export const NavigationSettingsQuery = graphql`
  query NavigationSettings($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
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
      fields {
        slug
      }
    }
  }
`




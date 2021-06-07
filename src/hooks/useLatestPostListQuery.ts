import { useStaticQuery, graphql } from 'gatsby';

const LatestPostListQuery = graphql`
  query LatestPostListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          excerpt(truncate: true, pruneLength: 200)
          frontmatter {
            title
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 800) {
                  src
                }
              }
            }
            draft
            category
            tags
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
          id
        }
      }
      groupByTags: group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

const useLatestPostListQuery = () => {
  const {
    allMarkdownRemark: { edges, groupByTags },
  } = useStaticQuery(LatestPostListQuery);
  return { edges, groupByTags };
};

export default useLatestPostListQuery;

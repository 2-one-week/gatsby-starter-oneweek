import { useStaticQuery, graphql } from 'gatsby';

const CategoryQuery = graphql`
  query CategoryQuery {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          excerpt(truncate: true, pruneLength: 200)
          frontmatter {
            title
            draft
            category
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
          id
        }
      }
      groupByCategory: group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`;

const useCategoryQuery = () => {
  const {
    allMarkdownRemark: { edges, groupByCategory },
  } = useStaticQuery(CategoryQuery);
  return { edges, groupByCategory };
};

export default useCategoryQuery;

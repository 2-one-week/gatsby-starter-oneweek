const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require('path');

const pathJoin = (targetPath) => path.join(__dirname, targetPath);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            id
            html
            excerpt(pruneLength: 280)
            fields {
              slug
            }
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
          }
        }
      }
    }
  `);

  const postTemplatePath = pathJoin('./src/containers/post/index.tsx');

  if (result.errors) {
    throw result.errors;
  }

  if (result.data) {
    const posts = result.data.allMarkdownRemark.edges.filter(
      ({ node }) => !node.frontmatter.draft && !!node.frontmatter.category,
    );

    posts.forEach(({ node }, index) => {
      const previous = index === 0 ? null : posts[index - 1].node;
      const next = index === posts.length - 1 ? null : posts[index + 1].node;
      createPage({
        path: node.fields.slug,
        component: postTemplatePath,
        context: {
          next,
          previous,
          node,
        },
      });
    });
  }
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

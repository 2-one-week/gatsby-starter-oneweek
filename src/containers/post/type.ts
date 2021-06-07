export interface IPageTemplate {
  pageContext: {
    previous: {
      fields: {
        slug: string;
      };
      frontmatter: {
        title: string;
      };
    };
    next: {
      fields: {
        slug: string;
      };
      frontmatter: {
        title: string;
      };
    };
    node: {
      excerpt: string;
      html: string;
      fields: {
        slug: string;
      };
      frontmatter: {
        title: string;
        draft: string;
        category: string;
        tags: string[];
        date: string;
        thumbnail?: {
          childImageSharp: {
            fluid: {
              src: string;
            };
          };
        };
      };
    };
  };
}

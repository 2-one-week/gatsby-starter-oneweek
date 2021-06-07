export interface ICategoryCard {
  node: {
    id: string;
    excerpt: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
      category: string;
      date: string;
    };
  };
}

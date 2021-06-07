import React, { FC, useState, useEffect } from 'react';

import SEO from '@components/seo';
import {
  CategoryCard,
  CategoryListWrapper,
  CategoryListItem,
} from '@components/category';
import UserInfo from '@components/user-info';
import Layout from '@containers/layout';
import { siteUrl } from '@constants/user-info';

import useCategoryQuery from '@hooks/useCategoryQuery';

const ALL = 'all';

const CategoryPage: FC = () => {
  const { edges, groupByCategory } = useCategoryQuery();

  const [posts, setPosts] = useState<IPost[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [currentCategory, setCurrentCategory] = useState<string>(ALL);

  const handleResetCategory = () => {
    setCurrentCategory(ALL);
  };

  const handleClickCategory = (categoryName: string) => {
    setCurrentCategory(categoryName);
  };

  useEffect(() => {
    if (edges && groupByCategory) {
      const filteredEdges = edges.filter(
        ({ node }: any) =>
          !node.frontmatter.draft && !!node.frontmatter.category,
      );
      setPosts(filteredEdges);
      setCategories(groupByCategory);
    }
  }, [edges, groupByCategory]);

  return (
    <Layout path="category">
      <SEO title="Category" url={siteUrl} />
      <UserInfo />
      <CategoryListWrapper>
        <CategoryListItem
          isCurrent={ALL === currentCategory}
          onClick={handleResetCategory}
          categoryName={ALL}
          categoryItemCount={categories.reduce((acc, category) => {
            return acc + category.totalCount;
          }, 0)}
        />
        {categories.map((category) => (
          <CategoryListItem
            key={category.fieldValue}
            isCurrent={category.fieldValue === currentCategory}
            onClick={() => {
              handleClickCategory(category.fieldValue);
            }}
            categoryName={category.fieldValue}
            categoryItemCount={category.totalCount}
          />
        ))}
      </CategoryListWrapper>
      <ul>
        {posts
          .filter((post) => {
            if (currentCategory !== ALL) {
              return post.node.frontmatter.category === currentCategory;
            } else {
              return true;
            }
          })
          .map(({ node }: IPost) => (
            <CategoryCard key={node.id} node={node} />
          ))}
      </ul>
    </Layout>
  );
};
interface IPost {
  node: {
    id: string;
    excerpt: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
      category: string;
      draft: boolean;
      date: string;
    };
  };
}

interface ICategory {
  fieldValue: string;
  totalCount: number;
}

CategoryPage.displayName = 'CategoryPage';

export default CategoryPage;

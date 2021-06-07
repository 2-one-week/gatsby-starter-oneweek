import React, { FC, useState, useEffect } from 'react';

import SEO from '@components/seo';
import Navigation from '@components/navigation';
import { ITags } from '@components/tag-list';
import { PostCard, PostCardWrapper, IPostCard } from '@components/post';
import Layout from '@containers/layout';
import { siteUrl } from '@constants/user-info';

import useLatestPostListQuery from '@hooks/useLatestPostListQuery';

const RECENT = 'Recent';
const ALL = 'ALL';

const IndexPage: FC = () => {
  const { edges, groupByTags } = useLatestPostListQuery();

  const [posts, setPosts] = useState<IPostCard[]>([]);
  const [tags, setTags] = useState<ITags[]>([]);
  const [currentTag, setCurrentTag] = useState<string>(RECENT);

  useEffect(() => {
    if (edges) {
      const filteredEdges = edges.filter(
        ({ node }: IPostCard) =>
          !node.frontmatter.draft && !!node.frontmatter.category,
      );
      setPosts(filteredEdges);
    }

    if (groupByTags) {
      setTags(groupByTags);
    }
  }, [edges, groupByTags]);

  const handleClickTags = (tagName: string) => {
    setCurrentTag(tagName);
  };

  return (
    <Layout
      path="home"
      tagName={currentTag}
      tags={tags}
      onClickTag={handleClickTags}
    >
      <SEO title="Home" url={siteUrl} />
      <Navigation
        tagName={currentTag}
        tags={tags}
        onClickTag={handleClickTags}
      />
      <PostCardWrapper>
        {posts
          .filter((post) => {
            if (currentTag !== RECENT && currentTag !== ALL) {
              return post.node.frontmatter.tags.includes(currentTag);
            }
            return true;
          })
          .map(({ node }: IPostCard) => (
            <PostCard key={node.id} node={node} />
          ))}
      </PostCardWrapper>
    </Layout>
  );
};

IndexPage.displayName = 'IndexPage';

export default IndexPage;

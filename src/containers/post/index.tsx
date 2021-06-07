import React, { FC } from 'react';

import Layout from '@containers/layout';
import SEO from '@components/seo';
import UserInfo from '@components/user-info';
import { siteUrl, utterances, buyMeACoffeeId } from '@constants/user-info';

import {
  PostNavigator,
  PostContent,
  PostDate,
  PostTitle,
  PostComments,
  SponsorButton,
  PostDivider,
  PostThumbnail,
  PostTags,
} from './components';
import { IPageTemplate } from './type';

const PostTemplate: FC<IPageTemplate> = React.memo(({ pageContext }) => {
  const { previous, next, node } = pageContext;

  const {
    html,
    excerpt,
    fields: { slug },
    frontmatter: { title, date, thumbnail, tags },
  } = node;

  return (
    <Layout path={'post'}>
      <SEO
        title={title}
        url={`${siteUrl}${slug}`}
        description={excerpt}
        imageUrl={thumbnail?.childImageSharp.fluid.src}
      />
      <PostTitle title={title} />
      <PostDate date={date} />
      <PostDivider />
      {tags && <PostTags tags={tags} />}
      {thumbnail && (
        <PostThumbnail
          title={title}
          imageSrc={thumbnail.childImageSharp.fluid.src}
        />
      )}
      <PostContent html={html} />
      <PostNavigator previous={previous} next={next} />
      <UserInfo />
      {buyMeACoffeeId && <SponsorButton />}
      {utterances && <PostComments repo={utterances} url={slug} />}
    </Layout>
  );
});

PostTemplate.displayName = 'PostTemplate';

export default PostTemplate;

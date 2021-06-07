import { graphql, useStaticQuery } from 'gatsby';
import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

import { blogSEODefaultImage } from '@constants/user-info';
import { Language, English, Korean } from '@constants/lang';

import { ISEO } from './type';

const SEO: FC<ISEO> = ({
  title,
  url,
  description,
  ogType = 'article',
  imageUrl,
  imageWidth = 1200,
  imageHeight = 630,
}) => {
  const { site, blogDefaultImage } = useStaticQuery(graphql`
    query SEO {
      blogDefaultImage: file(absolutePath: { regex: "/default.png/" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            src
          }
        }
      }
      site {
        siteMetadata {
          title
          author
          description
          siteUrl
        }
      }
    }
  `);

  const getUrl = (url: string) => {
    let value = new URL(url, site?.siteMetadata?.siteUrl!).href;
    return (value = !value.endsWith('/') ? `${value}/` : value);
  };

  const pageDescription = description
    ? description
    : site?.siteMetadata?.description!;

  const pageImageUrl = imageUrl
    ? getUrl(imageUrl)
    : blogDefaultImage
    ? getUrl(blogDefaultImage.childImageSharp.fluid.src)
    : site.siteUrl;

  return (
    <Helmet titleTemplate={`%s | ${site?.siteMetadata?.title}`}>
      <html lang={Language} />
      <title lang={Language}>{title}</title>
      <link rel="canonical" href={getUrl(url)} />
      <meta name="description" content={pageDescription} />
      <meta name="image" content={pageImageUrl} />
      <meta property="og:image" content={pageImageUrl} />
      <meta property="og:image:width" content={imageWidth.toString()} />
      <meta property="og:image:height" content={imageHeight.toString()} />
      <meta property="og:url" content={getUrl(url)} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={pageDescription} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site?.siteMetadata?.author!} />
    </Helmet>
  );
};

SEO.displayName = 'SEO';

export default SEO;

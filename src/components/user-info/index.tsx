import React, { FC } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Image from 'gatsby-image';

import S from './style';

export const UserInfo: FC = () => {
  const data = useStaticQuery(useInfoQuery);
  const { author, social, introduction } = data.site.siteMetadata;

  return (
    <S.Container>
      <div className="author-description">
        <Image
          className="author-image"
          fixed={data.avatar.childImageSharp.fixed}
          style={{
            borderRadius: `100%`,
          }}
        />
        <div className="author-name">
          <span className="author-name-prefix">Written by</span>
          <Link to={'/about'} className="author-name-content">
            <span>@{author}</span>
          </Link>
          <div className="author-introduction">{introduction}</div>
          <p className="author-socials">
            {social.instagramId && (
              <a href={`https://www.instagram.com/${social.instagramId}`}>
                Instagram
              </a>
            )}
            {social.githubId && (
              <a href={`https://github.com/${social.githubId}`}>GitHub</a>
            )}
            {social.mediumId && (
              <a href={`https://medium.com/${social.mediumId}`}>Medium</a>
            )}
            {social.twitterId && (
              <a href={`https://twitter.com/${social.twitterId}`}>Twitter</a>
            )}
            {social.facebookId && (
              <a href={`https://www.facebook.com/${social.facebookId}`}>
                Facebook
              </a>
            )}
            {social.linkedinId && (
              <a href={`https://www.linkedin.com/in/${social.linkedinId}/`}>
                LinkedIn
              </a>
            )}
          </p>
        </div>
      </div>
    </S.Container>
  );
};

export const useInfoQuery = graphql`
  query UserInfoQuery {
    avatar: file(absolutePath: { regex: "/profile.png/" }) {
      childImageSharp {
        fixed(width: 72, height: 72) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        introduction
        social {
          twitterId
          githubId
          mediumId
          facebookId
          linkedinId
          instagramId
        }
      }
    }
  }
`;

export default UserInfo;

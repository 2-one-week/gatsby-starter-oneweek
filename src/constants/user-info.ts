const userInfoConfig = require('../../gatsby-user-config');

const {
  title,
  description,
  author,
  siteUrl,
  introduction,
  lang,
  blogSEODefaultImage,
  social: {
    twitterId,
    githubId,
    mediumId,
    facebookId,
    linkedinId,
    instagramId,
  },
  comment: { utterances },
  sponsor: { buyMeACoffeeId },
  mainColor,
} = userInfoConfig;

export {
  title,
  description,
  author,
  siteUrl,
  introduction,
  blogSEODefaultImage,
  buyMeACoffeeId,
  lang,
  mainColor,
  twitterId,
  githubId,
  mediumId,
  facebookId,
  linkedinId,
  instagramId,
  utterances,
};

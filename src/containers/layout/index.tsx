import { graphql, useStaticQuery } from 'gatsby';
import React, { FC } from 'react';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@styles/global-style';
import theme from '@styles/theme';

import Header from './components/header';
import Footer from './components/footer';

import { ILayout } from './type';
import S from './style';

const Layout: FC<ILayout> = ({ path, children, tagName, tags, onClickTag }) => {
  deckDeckGoHighlightElement();
  const { site } = useStaticQuery(graphql`
    query Layout {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header
        title={site?.siteMetadata?.title}
        path={path}
        tagName={tagName}
        tags={tags}
        onClickTag={onClickTag}
      />
      <S.Main path={path}>{children}</S.Main>
      <Footer />
    </ThemeProvider>
  );
};

Layout.displayName = 'Layout';

export default Layout;

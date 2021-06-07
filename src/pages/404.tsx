import React, { FC } from 'react';
import Layout from '@containers/layout';

const NotFoundPage: FC = () => (
  <Layout path={'404'}>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

NotFoundPage.displayName = 'NotFoundPage';

export default NotFoundPage;

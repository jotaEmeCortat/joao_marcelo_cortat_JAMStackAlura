import React from 'react';
import WebsiteGlobalProvaider from '../provaider';
import WebsitePageWrapper from '../WebsitePages';

export default function websitePageHOC(PageComponent, { pageWrapperProps } = { pageWrapperProps: {} }) {
  return (props) => (
    <WebsiteGlobalProvaider>
      <WebsitePageWrapper {...pageWrapperProps} {...props.pageWrapperProps}>
        <PageComponent {...props} />
      </WebsitePageWrapper>
    </WebsiteGlobalProvaider>
  );
}

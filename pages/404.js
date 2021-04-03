import websitePageHOC from '../src/Components/wrapper/hoc';
import Screen404 from '../src/Components/Screens/404Screen';

export default websitePageHOC(Screen404, {
  pageWrapperProps: {
    seoProps: {
      headTitle: '404',
    },
  },
});

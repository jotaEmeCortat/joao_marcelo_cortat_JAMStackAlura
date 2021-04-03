import HomeScreen from '../src/Components/Screens/HomeScreen';
import websitePageHOC from '../src/Components/wrapper/hoc';

export default websitePageHOC(HomeScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
    },
  },
});

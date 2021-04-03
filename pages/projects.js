import ProjectsScreen from '../src/Components/Screens/ProjectsScreen';
import websitePageHOC from '../src/Components/wrapper/hoc';

export default websitePageHOC(ProjectsScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Projects',
    },
  },
});

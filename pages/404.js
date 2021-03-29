import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../src/Components/commons/Animations/404.json';
import Menu from '../src/Components/Menu';
import { Box } from '../src/layout/Box';

export default function Page404() {
  const animation404 = {
    loop: false,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
    >

      <Menu />
      <div>
        <Lottie
          options={animation404}
          height={500}
          width={500}
        />
      </div>
    </Box>
  );
}

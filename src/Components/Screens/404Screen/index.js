import React from 'react';
import Lottie from 'react-lottie';
import { Box } from '../../../layout/Box';
import animationData from '../../commons/Animations/404.json';

export default function Screen404() {
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

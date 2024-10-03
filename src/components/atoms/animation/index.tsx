'use client';

import Lottie, { LottieComponentProps } from 'lottie-react';

interface AnimationProps {
  animationData: LottieComponentProps['animationData'];
  height: string;
  width: string;
}

const Animation = ({ animationData, height, width }: AnimationProps) => {
  return (
    <Lottie
      autoplay
      loop
      animationData={animationData}
      style={{ height: height, width: width }}
    />
  );
};

export default Animation;

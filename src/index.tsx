import { Animated, requireNativeComponent } from 'react-native';

type AnimatedToReanimatedProps = {
  value: number;
  onValueChange(e: any): void;
};

const AnimatedToReanimatedView = requireNativeComponent<AnimatedToReanimatedProps>(
  'AnimatedToReanimatedView'
);

export const AnimatedToReanimated = Animated.createAnimatedComponent(
  AnimatedToReanimatedView
);

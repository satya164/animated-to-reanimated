import { requireNativeComponent, ViewStyle } from 'react-native';

type AnimatedToReanimatedProps = {
  color: string;
  style: ViewStyle;
};

export const AnimatedToReanimatedViewManager = requireNativeComponent<AnimatedToReanimatedProps>(
  'AnimatedToReanimatedView'
);

export default AnimatedToReanimatedViewManager;

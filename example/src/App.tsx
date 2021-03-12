import * as React from 'react';

import { Animated, StyleSheet, Text, View, Button } from 'react-native';
import { AnimatedToReanimated } from 'react-native-animated-to-reanimated';

export default function App() {
  const [anim] = React.useState(() => new Animated.Value(0));
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    anim.addListener((v) => console.log('changed', v));
  }, [anim]);

  return (
    <View style={styles.container}>
      <Text>Value {value}</Text>
      <Button title="Update value" onPress={() => setValue((v) => ++v)} />
      <Animated.View
        style={{
          backgroundColor: 'tomato',
          height: 50,
          width: 50,
          transform: [{ translateX: Animated.multiply(anim, 10) }],
        }}
      />
      <AnimatedToReanimated
        value={value}
        onValueChange={Animated.event(
          [
            {
              nativeEvent: { value: anim },
            },
          ],
          { useNativeDriver: true }
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SIZES} from 'src/constants';

type Props = {
  active?: boolean;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  text: string;
};

const CustomTab = (props: Props) => {
  const {active, onPress, text} = props;
  const currentStyle = styles(active);
  return (
    <TouchableOpacity style={[currentStyle.container]} onPress={onPress}>
      <Text
        style={{
          fontSize: SIZES.small,
          fontWeight: '500',
          color: active ? '#2571F0' : '#000',
        }}>
        {text}
      </Text>
      <View
        style={[
          currentStyle.activeLine,
          {
            backgroundColor: active ? '#2571F0' : '#fff',
          },
        ]}
      />
    </TouchableOpacity>
  );
};

export default CustomTab;

const styles = (active?: boolean) =>
  StyleSheet.create({
    container: {
      height: SIZES.font * 2 - 2,
      width: SIZES.small * 10,
      alignItems: 'center',
    },
    activeLine: {
      height: SIZES.base / 4,
      width: '100%',
      position: 'absolute',
      bottom: 0,
      backgroundColor: active ? '#2571F0' : '#fff',
    },
  });

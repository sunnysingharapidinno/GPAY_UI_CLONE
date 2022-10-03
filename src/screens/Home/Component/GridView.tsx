import {
  View,
  Text,
  ScrollView,
  FlatList,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React from 'react';
import {SIZES} from 'src/constants';
import ProfileIcon from 'src/components/ProfileIcon';

type Props = {
  data?: readonly any[] | null | undefined;
  circleIconStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

const GridView = (props: Props) => {
  const {data, circleIconStyle, textStyle} = props;
  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        width: '100%',
      }}>
      <FlatList
        nestedScrollEnabled={true}
        style={{
          width: '100%',
        }}
        data={data}
        columnWrapperStyle={{
          flex: 1,
          justifyContent: 'space-between',
          marginTop: SIZES.base * 2,
        }}
        renderItem={({item}) => (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}>
            <ProfileIcon
              image={item.image}
              name={item.name}
              icon={item.icon}
              style={circleIconStyle}
            />
            <Text
              numberOfLines={1}
              style={[
                {
                  textAlign: 'center',
                  fontSize: SIZES.font,
                  fontWeight: '500',
                  marginTop: SIZES.base / 2,
                  flex: 1,
                },
                textStyle,
              ]}>
              {item.name}
            </Text>
          </View>
        )}
        numColumns={4}
        keyExtractor={(_, index) => `${index}`}
      />
    </ScrollView>
  );
};

export default GridView;

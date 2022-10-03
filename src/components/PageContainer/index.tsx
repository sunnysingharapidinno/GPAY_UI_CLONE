import {SafeAreaView, StyleProp, View, ViewStyle} from 'react-native';
import React from 'react';
import {SIZES} from 'src/constants';
import {StatusBar} from 'react-native';
import {useAppSelector} from 'src/hooks/useAppSelector';

type PageContainerProps = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  innerViewStyle?: StyleProp<ViewStyle>;
};

const PageContainer = (props: PageContainerProps) => {
  const {children, style, innerViewStyle} = props;
  const {theme} = useAppSelector(state => state.themeReducer);
  return (
    <SafeAreaView
      style={[
        {flex: 1, paddingHorizontal: SIZES.large, backgroundColor: theme.light},
        style,
      ]}>
      <StatusBar
        barStyle="dark-content"
        animated={true}
        backgroundColor={`transparent`}
        translucent={true}
      />
      <View
        style={[{flex: 1, marginTop: StatusBar.currentHeight}, innerViewStyle]}>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default PageContainer;

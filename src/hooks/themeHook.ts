import {useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';
import {setTheme} from 'src/redux/actions/themeAction';
import {useAppDispatch} from './useAppDispatch';

const useTheme = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [isDark, setIsDark] = useState(isDarkMode);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isDarkMode) {
      setIsDark(true);
      dispatch(setTheme('default'));
    } else {
      setIsDark(false);
      dispatch(setTheme('light'));
    }
  }, [isDarkMode, isDark]);

  return {
    isDark,
    setIsDark,
  };
};

export default useTheme;

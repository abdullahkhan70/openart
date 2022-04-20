import * as React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
type statusBarProps = {
  backgroundColor?: string;
  translucent?: boolean;
  hidden?: boolean;
};
export const FocusAwareStatusBar: React.FC<statusBarProps> = props => {
  const {backgroundColor, translucent, hidden} = props;
  const scheme = useColorScheme();
  const isFocused = useIsFocused();

  return isFocused ? (
    <StatusBar
      backgroundColor={backgroundColor}
      barStyle={scheme == 'light' ? 'dark-content' : 'light-content'}
      hidden={hidden}
      translucent={translucent}
    />
  ) : null;
};

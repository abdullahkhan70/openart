import {
  View,
  Text,
  TouchableOpacity,
  ViewStyle,
  ActivityIndicator,
  PixelRatio,
} from 'react-native';
import React, {Fragment} from 'react';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../Utils/Colors';
import {useSelector} from 'react-redux';
import {selectFollowStepsModal} from '../../Utils/Redux/modalSlice';

interface LinearGradientBackgroundButtonProps {
  onPress?: () => void;
  label?: String;
  style?: ViewStyle;
}

const LinearGradientBackgroundButton = ({
  onPress,
  label,
  style,
}: LinearGradientBackgroundButtonProps) => {
  const selFollowStepsModal = useSelector(selectFollowStepsModal);
  return (
    <Fragment>
      <TouchableOpacity
        style={[styles.placeABidBtn, {...style}]}
        activeOpacity={0.5}
        onPress={onPress}>
        <LinearGradient
          colors={[Colors.PLACEABIDFIRSTCOLOR, Colors.PLACEABIDSECONDCOLOR]}
          start={{x: 0.8, y: -0.8}}
          end={{x: 1, y: 1}}
          style={styles.linearGradient}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {selFollowStepsModal && (
              <ActivityIndicator size={'large'} color={Colors.WHITE} />
            )}

            <Text
              style={[
                styles.placeBidText,
                {
                  marginLeft: selectFollowStepsModal
                    ? PixelRatio.getPixelSizeForLayoutSize(4)
                    : 0,
                },
              ]}>
              {label}
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </Fragment>
  );
};

export default LinearGradientBackgroundButton;

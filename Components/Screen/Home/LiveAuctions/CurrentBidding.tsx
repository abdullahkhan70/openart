import {
  View,
  Text,
  useColorScheme,
  TouchableOpacity,
  PixelRatio,
  Dimensions,
} from 'react-native';
import React from 'react';
import {Lables} from '../../../Utils/Strings';
import {useTheme} from '@react-navigation/native';
import {styles} from '../styles';
import {Colors} from '../../../Utils/Colors';
const {height} = Dimensions.get('window');
type currentBiddingProps = {
  minutes: number;
  seconds: number;
  rate: number;
};

const CurrentBidding: React.FC<currentBiddingProps> = ({
  minutes,
  seconds,
  rate,
}) => {
  const scheme = useColorScheme();
  const {colors} = useTheme();
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.5}
        style={[
          styles.currentBiddingBtn,
          {
            backgroundColor: colors.background,
            height: height * 0.13,
          },
        ]}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flex: 1,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.greenView} />
            <View style={{marginLeft: PixelRatio.getPixelSizeForLayoutSize(5)}}>
              <Text
                adjustsFontSizeToFit
                style={{
                  color:
                    scheme == 'light' ? Colors.DISCOVERMAINTEXT : Colors.WHITE,
                  fontWeight: '400',
                  fontSize: 16,
                }}>
                {Lables.CURRENTBID}
              </Text>
              <Text
                adjustsFontSizeToFit
                style={{
                  fontSize: 18,
                  color:
                    scheme == 'light' ? Colors.DIGITALARTCOLOR : Colors.WHITE,
                  fontWeight: '700',
                  letterSpacing: 1,
                }}>
                {rate + ' ' + Lables.ETHLABEL}
              </Text>
            </View>
          </View>

          <View>
            <Text
              adjustsFontSizeToFit
              style={{
                color:
                  scheme == 'light' ? Colors.DISCOVERMAINTEXT : Colors.WHITE,
                fontWeight: '400',
                fontSize: 16,
              }}>
              {Lables.ENDINGIN}
            </Text>
            <Text
              adjustsFontSizeToFit
              style={{
                fontSize: 18,
                color:
                  scheme == 'light' ? Colors.DIGITALARTCOLOR : Colors.WHITE,
                fontWeight: '700',
                letterSpacing: 1,
              }}>
              {minutes + 'm ' + seconds + 's'}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default CurrentBidding;

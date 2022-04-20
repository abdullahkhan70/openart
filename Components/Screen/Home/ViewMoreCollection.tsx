import {
  View,
  Text,
  TouchableOpacity,
  useColorScheme,
  PixelRatio,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../Utils/Colors';
import {styles} from './styles';
import {Lables} from '../../Utils/Strings';

const ViewMoreCollection: React.FC = () => {
  const scheme = useColorScheme();
  return (
    <View
      style={{
        alignItems: 'center',
        marginTop: PixelRatio.getPixelSizeForLayoutSize(10),
      }}>
      <LinearGradient
        colors={[Colors.PLACEABIDFIRSTCOLOR, Colors.PLACEABIDSECONDCOLOR]}
        start={{x: 0.8, y: -0.8}}
        end={{x: 1, y: 1}}
        style={styles.linearGradientArtWorkViewMoreCollection}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.viewArtworkBtnViewMoreCollection,
            {
              backgroundColor:
                scheme == 'light' ? Colors.BACKGROUND : Colors.BACKGROUND,
            },
          ]}>
          <Text
            style={[
              styles.placeBidText,
              {
                color:
                  scheme == 'light' ? Colors.DIGITALARTCOLOR : Colors.WHITE,
              },
            ]}>
            {Lables.VIEWMORECOLLECTION}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default ViewMoreCollection;

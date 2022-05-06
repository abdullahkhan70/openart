import {View, Text, PixelRatio, useColorScheme} from 'react-native';
import React, {Fragment} from 'react';
import Icon from '../../Customs/Icon';
import {Lables} from '../../Utils/Strings';
import {styles} from './styles';
import {Colors} from '../../Utils/Colors';
import LiveAuctionView from '../../Customs/LiveAuctionView/LiveAuctionView';
import {DummyLiveAuctions} from '../../Utils/Lists/DummyLiveAuctions';
import AnimatedEllipsis from '@xlanor/react-native-animated-ellipsis';
import {useDispatch, useSelector} from 'react-redux';
import {selectServerProcessIsLoading} from '../../Utils/Redux/modalSlice';
import {MotiView} from 'moti';

type ServerProcessProps = {
  mainText: string;
  mainSubText: string;
};
const ServerProcess = ({mainText, mainSubText}: ServerProcessProps) => {
  const scheme = useColorScheme();
  const reduxDispatch = useDispatch();
  const selServerProcessIsLoading = useSelector(selectServerProcessIsLoading);
  return (
    <MotiView
      from={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{
        opacity: {
          delay: 500,
        },
      }}>
      <Icon
        name={selServerProcessIsLoading ? 'process_light' : 'server_light'}
        size={PixelRatio.getPixelSizeForLayoutSize(55)}
        style={{
          alignSelf: 'center',
          marginTop: PixelRatio.getPixelSizeForLayoutSize(6),
        }}
      />
      <View style={styles.mintSubView}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={[
              styles.mintText,
              {
                color:
                  scheme == 'light'
                    ? Colors.DIGITALARTCOLOR
                    : Colors.BACKGROUND,
              },
            ]}>
            {mainText}
          </Text>
          {selServerProcessIsLoading == false && (
            <AnimatedEllipsis
              style={[
                styles.mintText,
                {
                  color:
                    scheme == 'light'
                      ? Colors.DIGITALARTCOLOR
                      : Colors.BACKGROUND,
                },
              ]}
            />
          )}
        </View>
        <Text
          style={[
            styles.mintSubText,
            {
              color:
                scheme == 'light'
                  ? Colors.DISCOVERMAINTEXT
                  : Colors.HIGHTESTBIDDARK,
              textAlign: selServerProcessIsLoading ? 'center' : 'justify',
            },
          ]}>
          {mainSubText}
        </Text>
      </View>
    </MotiView>
  );
};

export default ServerProcess;

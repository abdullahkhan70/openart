import {View, Text, ImageBackground, useColorScheme} from 'react-native';
import React, {Fragment} from 'react';
import {DummyCurrentBiddingNFT} from '../../../Utils/Lists/DummyCurrentBiddingNFT';
import {styles} from '../styles';
import {Colors} from '../../../Utils/Colors';

const ProfileImage: React.FC = () => {
  const scheme = useColorScheme();
  return (
    <Fragment>
      <ImageBackground
        source={DummyCurrentBiddingNFT[0].artImage}
        style={styles.hotCollectionProfileImages}
        imageStyle={{borderRadius: 100}}>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <View style={styles.onlineOuterCircleView}>
            <View style={styles.onlineCircleView} />
          </View>
        </View>
      </ImageBackground>
      <Text
        adjustsFontSizeToFit
        ellipsizeMode="tail"
        style={[
          styles.hotCollectionsCreatorName,
          {
            color: scheme == 'light' ? Colors.SEARCHBARCOLORDARK : Colors.WHITE,
          },
        ]}>
        {'By ' + DummyCurrentBiddingNFT[0].creatorName}
      </Text>
    </Fragment>
  );
};

export default ProfileImage;

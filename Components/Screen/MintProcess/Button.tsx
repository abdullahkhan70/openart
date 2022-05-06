import {PixelRatio, Share} from 'react-native';
import React from 'react';
import LinearGradientWithButton from '../../Customs/LinearGradientButtons/LinearGradientWithButton';
import {Lables} from '../../Utils/Strings';
import {MotiView} from 'moti';
import {useDispatch} from 'react-redux';
import {setCheckoutModal} from '../../Utils/Redux/modalSlice';

const Button = () => {
  const reduxDispatch = useDispatch();
  const handleViewMarketPlace = () => {
    reduxDispatch(setCheckoutModal(Boolean(true)));
  };
  const handleShareBtn = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <MotiView
      from={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{
        opacity: {
          delay: 500,
        },
      }}
      style={{marginTop: PixelRatio.getPixelSizeForLayoutSize(10)}}>
      <LinearGradientWithButton label={Lables.SHARE} onPress={handleShareBtn} />
      <LinearGradientWithButton
        label={Lables.VIEWMARKETPLACE}
        onPress={handleViewMarketPlace}
        style={{marginTop: PixelRatio.getPixelSizeForLayoutSize(7)}}
      />
    </MotiView>
  );
};

export default Button;

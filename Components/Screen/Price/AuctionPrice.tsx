import {View, Text, PixelRatio} from 'react-native';
import React, {Fragment} from 'react';
import MainView from './MainView';
import {Lables} from '../../Utils/Strings';
import AuctionOptions from './AuctionOptions';
import {DummyAuctions} from '../../Utils/Lists/DummyAuctions';
import {DummyExpirationDate} from '../../Utils/Lists/DummyExpirationDate';
import LinearGradientBackgroundButton from '../../Customs/LinearGradientButtons/LinearGradientBackgroundButton';
const AuctionPrice = () => {
  const handleMintNFT = () => {};
  return (
    <Fragment>
      <MainView labels={Lables.MINIMUMBID} />
      <AuctionOptions
        label={Lables.STARTINGDATETEXT}
        data={DummyAuctions}
        placeholder={DummyAuctions[0].text}
      />
      <AuctionOptions
        label={Lables.EXPIRATIONDATE}
        data={DummyExpirationDate}
        placeholder={DummyExpirationDate[0].text}
      />
      <LinearGradientBackgroundButton
        label={Lables.MINTNFT}
        style={{marginTop: PixelRatio.getPixelSizeForLayoutSize(10)}}
        onPress={handleMintNFT}
      />
    </Fragment>
  );
};

export default AuctionPrice;

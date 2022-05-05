import {
  View,
  Text,
  PixelRatio,
  useColorScheme,
  ScrollView,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import React, {Fragment} from 'react';
import {FocusAwareStatusBar} from '../../Customs/FocusStatusBar/FocusAwareStatusBar';
import {useTheme} from '@react-navigation/native';
import Toolbar from '../../Customs/MainToolbar/Toolbar';
import {Colors} from '../../Utils/Colors';
import {Lables} from '../../Utils/Strings';
import {styles} from './styles';
import BrowseAssets from './BrowseAssets';
import ShowAssets from './ShowAssets';
import InputTextFields from './InputTextFields';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectAddToCollection,
  selectDescription,
  selectInstantSalePrice,
  selectItemName,
  selectSaleThisItem,
  selectTag,
  selectUnlockOncePurchased,
  setAddToCollection,
  setDescription,
  setInstantSalePrice,
  setItemName,
  setSaleThisItem,
  setTag,
  setUnlockOncePurchased,
} from '../../Utils/Redux/uploadArtworkSlice';
import AvailableCheckBoxs from './AvailableCheckBoxs';
import NewCollections from './NewCollections';
import {selectUploadPreviewModal} from '../../Utils/Redux/modalSlice';
import UploadArtwork from '../../Customs/Dialogs/UploadArtwork';
const {width} = Dimensions.get('window');
const Index = () => {
  const {colors} = useTheme();
  const scheme = useColorScheme();
  const selItemName = useSelector(selectItemName);
  const selTag = useSelector(selectTag);
  const selDescription = useSelector(selectDescription);
  const selSaleThisItem = useSelector(selectSaleThisItem);
  const selnstantSalePrice = useSelector(selectInstantSalePrice);
  const selAddToCollection = useSelector(selectAddToCollection);
  const selUnlockOncePurchased = useSelector(selectUnlockOncePurchased);
  const selUploadPreviewModal = useSelector(selectUploadPreviewModal);
  return (
    <Fragment>
      <FocusAwareStatusBar
        backgroundColor={colors.background}
        translucent={false}
      />
      <Toolbar />
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        snapToEnd={true}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}>
        <TouchableHighlight>
          <View
            style={{
              backgroundColor:
                scheme == 'light' ? Colors.WHITE : Colors.TOOLBARDARKCOLOR,
              // padding: PixelRatio.getPixelSizeForLayoutSize(5),
              paddingBottom: PixelRatio.getPixelSizeForLayoutSize(10),
            }}>
            <BrowseAssets />
            <ShowAssets />
            <InputTextFields
              label={Lables.ITEMNAME}
              dispatchFunction={setItemName}
              selectDispatch={selItemName}
              hintText={Lables.ENTERITEMNAME}
              style={{marginTop: PixelRatio.getPixelSizeForLayoutSize(4)}}
            />
            <InputTextFields
              label={Lables.TAGTEXT}
              dispatchFunction={setTag}
              selectDispatch={selTag}
              hintText={Lables.ENTERTAGTEXT}
              style={{
                marginTop: PixelRatio.getPixelSizeForLayoutSize(4),
                width: width - 20,
              }}
            />
            <InputTextFields
              label={Lables.DESCRIPTIONHINT}
              dispatchFunction={setDescription}
              selectDispatch={selDescription}
              hintText={Lables.DESCRIPTION}
              style={{
                marginTop: PixelRatio.getPixelSizeForLayoutSize(4),
                width: width - 20,
              }}
            />
            <AvailableCheckBoxs
              dispatchFunction={setSaleThisItem}
              selDispatch={selSaleThisItem}
              label={Lables.SALEITEM}
              subLabel={Lables.SALEITEMTEXT}
            />

            <AvailableCheckBoxs
              dispatchFunction={setInstantSalePrice}
              selDispatch={selnstantSalePrice}
              label={Lables.INSTANTSALE}
              subLabel={Lables.INSTANTSALETEXT}
            />
            <AvailableCheckBoxs
              dispatchFunction={setUnlockOncePurchased}
              selDispatch={selUnlockOncePurchased}
              label={Lables.UNLOCKPURCHASES}
              subLabel={Lables.UNLOCKPURCHASESTEXT}
            />
            <AvailableCheckBoxs
              dispatchFunction={setAddToCollection}
              selDispatch={selAddToCollection}
              label={Lables.ADDCOLLECTION}
              subLabel={Lables.ADDCOLLECTIONTEXT}
            />
            <NewCollections />
          </View>
        </TouchableHighlight>
      </ScrollView>
      {selUploadPreviewModal ? <UploadArtwork /> : <View />}
    </Fragment>
  );
};

export default Index;

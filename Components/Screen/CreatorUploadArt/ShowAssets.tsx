import {
  View,
  Text,
  FlatList,
  Image,
  PixelRatio,
  useColorScheme,
  TouchableWithoutFeedback,
  ImageBackground,
  Alert,
} from 'react-native';
import React, {Fragment, useEffect, useLayoutEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectMultiUploadImages,
  setMultipleUploadImagesRemove,
} from '../../Utils/Redux/uploadArtworkSlice';
import {styles} from './styles';
import {Colors} from '../../Utils/Colors';
import Icon from '../../Customs/Icon';
type showAssetsProps = {
  item: {
    path: string;
    image: string;
    id: string;
  };
  index: number;
};
const ShowAssets = () => {
  const reduxDispatch = useDispatch();
  const selMultiUploadImages = useSelector(selectMultiUploadImages);
  const scheme = useColorScheme();
  useEffect(() => {
    console.log(selMultiUploadImages);
  }, [selMultiUploadImages]);
  const handleRemoveImage = item => {
    // Alert.alert(item);
    reduxDispatch(setMultipleUploadImagesRemove(String(item)));
  };
  const renderItemsView = ({item, index}: showAssetsProps) => (
    <TouchableWithoutFeedback>
      <View
        key={index}
        style={{marginLeft: PixelRatio.getPixelSizeForLayoutSize(3)}}>
        <ImageBackground
          source={{uri: item?.image != '' ? item?.image : item?.path}}
          style={[styles.uploadedImage]}
          imageStyle={{
            borderRadius: 20,
            borderWidth: 2,
            borderColor:
              scheme == 'dark'
                ? Colors.DISCOVERMAINTEXT
                : Colors.PLACEHOLDERCOLOR,
          }}>
          <View style={styles.overLayView}>
            <Icon
              name={'cross_btn'}
              style={styles.crossBtn}
              onPress={() => {
                // handleRemoveImage(item?.image != '' ? item?.image : item?.path)

                reduxDispatch(setMultipleUploadImagesRemove(String(item?.id)));
              }}
            />
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
  return (
    <Fragment>
      <FlatList
        data={selMultiUploadImages}
        renderItem={renderItemsView}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Fragment>
  );
};

export default ShowAssets;

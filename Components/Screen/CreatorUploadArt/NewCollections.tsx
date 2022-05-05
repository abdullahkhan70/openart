import {
  View,
  Text,
  FlatList,
  Image,
  PixelRatio,
  useColorScheme,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import {DummyCollections} from '../../Utils/Lists/DummyCollections';
import {styles} from './styles';
import {Lables, Screen} from '../../Utils/Strings';
import Icon from '../../Customs/Icon';
import {Colors} from '../../Utils/Colors';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectUploadPreviewModal,
  setUploadPreviewModal,
} from '../../Utils/Redux/modalSlice';
import {useNavigation} from '@react-navigation/native';

type NewCollectionsProps = {
  item: {
    profile_image: any;
  };
  index: number;
};
const NewCollections = () => {
  const navigation = useNavigation();
  const reduxDispatch = useDispatch();
  const selUploadPreviewModal = useSelector(selectUploadPreviewModal);
  const scheme = useColorScheme();
  const handleUploadArtwork = () => {
    navigation.navigate(Screen.PURCHASEPROCESS);
  };
  const renderHeader = () => (
    <TouchableOpacity>
      <View style={styles.newCollectionHeaderMainView}>
        <Icon
          name={
            scheme == 'light'
              ? 'create_new_collection_white'
              : 'create_new_collection_dark'
          }
          size={PixelRatio.getPixelSizeForLayoutSize(12)}
        />
        <Text style={styles.newCollectionHeaderMainViewText}>
          {Lables.ADDCOLLECTION}
        </Text>
      </View>
    </TouchableOpacity>
  );
  const renderItem = ({item, index}: NewCollectionsProps) => (
    <TouchableWithoutFeedback>
      <View>
        <FlatList
          data={DummyCollections[index].profile_image}
          renderItem={renderItems}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </TouchableWithoutFeedback>
  );
  const renderItems = ({item, index}) => (
    <View>
      <Image
        style={[
          styles.newCollectionsImage,
          {
            borderTopLeftRadius: index == 0 ? 10 : 0,
            borderBottomLeftRadius: index == 0 ? 10 : 0,
            borderTopRightRadius: index == 1 ? 10 : 0,
            borderBottomRightRadius: index == 1 ? 10 : 0,
          },
        ]}
        source={item}
      />
    </View>
  );
  return (
    <View style={{marginTop: PixelRatio.getPixelSizeForLayoutSize(5)}}>
      <FlatList
        data={DummyCollections}
        ListHeaderComponent={renderHeader}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginRight: PixelRatio.getPixelSizeForLayoutSize(4),
        }}
      />
      <LinearGradient
        colors={[Colors.PLACEABIDFIRSTCOLOR, Colors.PLACEABIDSECONDCOLOR]}
        start={{x: 0.8, y: -0.8}}
        end={{x: 1, y: 1}}
        style={styles.linearGradientArtWork}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() =>
            reduxDispatch(
              setUploadPreviewModal(Boolean(!selUploadPreviewModal)),
            )
          }
          style={[
            styles.viewArtworkBtn,
            {
              backgroundColor:
                scheme == 'light' ? Colors.BACKGROUND : Colors.BACKGROUND,
            },
          ]}>
          <Icon
            size={PixelRatio.getPixelSizeForLayoutSize(10)}
            name={scheme == 'light' ? 'view_white' : 'view_dark'}
          />
          <Text
            style={[
              styles.placeBidText,
              {
                color:
                  scheme == 'light' ? Colors.DIGITALARTCOLOR : Colors.WHITE,
              },
            ]}>
            {Lables.PREVIEW}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
      <TouchableOpacity
        style={styles.placeABidBtn}
        activeOpacity={0.5}
        onPress={handleUploadArtwork}>
        <LinearGradient
          colors={[Colors.PLACEABIDFIRSTCOLOR, Colors.PLACEABIDSECONDCOLOR]}
          start={{x: 0.8, y: -0.8}}
          end={{x: 1, y: 1}}
          style={styles.linearGradient}>
          <Icon
            name="download_white"
            size={PixelRatio.getPixelSizeForLayoutSize(9)}
          />
          <Text style={styles.placeBidText}>{Lables.UPLOAD}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default NewCollections;

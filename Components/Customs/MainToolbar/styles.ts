import { StyleSheet, Dimensions, PixelRatio } from 'react-native';
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    padding: PixelRatio.getPixelSizeForLayoutSize(5),
    alignItems: 'center',
    flexDirection: 'row'
  },
  accountStyles: {
    marginRight: PixelRatio.getPixelSizeForLayoutSize(3)
  }
});

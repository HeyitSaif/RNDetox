import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';

const styles = StyleSheet.create({
  text: {
    fontSize: normalize(12),
    fontWeight: '400',
    color: 'white',
  },
  heading: {
    fontSize: normalize(72),
    fontWeight: '700',
    color: 'white',
  },
  headingView: {
    marginLeft: normalize(28),
    marginTop: normalize(155),
  },
  tabView: {height: normalize(80), flex: 1, justifyContent: 'center'},
  tabLabel: {
    fontWeight: '400',
    fontSize: 12,
  },
});
export default styles;

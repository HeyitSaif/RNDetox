import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
const BgImage = require('../../../Images/HomeImage.jpg');
import styles from '../styles';

//declaring here becuase looks liek variable which will be based upon some api call or something
const LIVESTREAMS = '204 Livestreams';
const MEMBERS = '53 Members ';

function HomeScreen() {
  return (
    <ImageBackground
      style={styleLocal.view}
      source={BgImage}
      testID={'HomeScreen'}>
      <View style={styles.headingView}>
        <Text style={styles.heading}>Hello</Text>
        <View style={styleLocal.row}>
          <Text style={styles.text}>{`${LIVESTREAMS} · ${MEMBERS}`}</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styleLocal = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  view: {
    flex: 1,
  },
});

export default HomeScreen;

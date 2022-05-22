import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
const BgImage = require('../../../Images/NotIFImage.png');
import styles from '../styles';

//declaring here becuase looks liek variable which will be based upon some api call or something
const COURSES = '204 Courses';
const MEMBERS = '53 Members ';

function SettingsScreen() {
  return (
    <ImageBackground style={styleLocal.view} source={BgImage}>
      <View style={styles.headingView}>
        <Text style={styles.heading}>World</Text>
        <View style={styleLocal.row}>
          <Text style={styles.text}>{`${COURSES} · ${MEMBERS}`}</Text>
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

export default SettingsScreen;

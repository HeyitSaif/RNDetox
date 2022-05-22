import {View, Text, TouchableOpacity} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import NotIf from './NotIf';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const Tab = createBottomTabNavigator();

type TabBarType = {state: any; descriptors: any; navigation: any};

function MyTabBar({state, descriptors, navigation}: TabBarType) {
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map(
        (route: {key: string | number; name: any}, index: any) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({name: route.name, merge: true});
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabView}>
              <View style={{alignItems: 'center'}}>
                <Icon
                  name={label === 'HOME' ? 'home-outline' : 'bell-outline'}
                  size={18.91}
                  color={isFocused ? '#000' : '#8E92A2'}
                />
                <Text
                  style={{
                    color: isFocused ? '#000' : '#8E92A2',
                    ...styles.tabLabel,
                  }}>
                  {label}
                </Text>
              </View>
            </TouchableOpacity>
          );
        },
      )}
    </View>
  );
}

function Home() {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        name="HOME"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="NOTIF"
        component={NotIf}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

export default Home;

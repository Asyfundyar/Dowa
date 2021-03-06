import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    color: 'lightblue',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
 
const HomeScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: 'white',
      }}
      //activeColor="white"
      //inactiveColor="black"
      //labelStyle={{ fontSize: 12 }}
      //style={{ backgroundColor: 'white' }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ }) => (
            <MaterialCommunityIcons name="home" color={'black'} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Around the world!"
        component={Notifications}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ }) => (
            <MaterialCommunityIcons name="bell" color={'black'} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ }) => (
            <MaterialCommunityIcons name="account" color={'black'} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
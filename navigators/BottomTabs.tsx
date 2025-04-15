import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeNavigator';
import GalleryScreen from '../screens/GalleryScreen';
import OnlineClassesScreen from '../screens/OnlineClassesScreen';
import AboutScreen from '../screens/AboutScreen';
import ShopScreen from '../screens/ShopScreen';
import { TouchableOpacity, Text } from 'react-native';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        headerRight: () => (
          <TouchableOpacity
            style={{ marginRight: 16 }}
            onPress={() => navigation.navigate('Нәтижелер')}
          >
            <Text style={{ fontSize: 20 }}>📊</Text>
          </TouchableOpacity>
        ),
        headerStyle: { backgroundColor: '#f5f5f5' },
        headerTitleAlign: 'center',
        headerTintColor: '#006600',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: '#ffffff' },
      })}
    >
      <Tab.Screen
        name="Басты бет"
        component={HomeNavigator}
        options={{
          tabBarIcon: () => <Text style={{ fontSize: 20 }}>🏠</Text>,
          tabBarLabel: 'Басты бет',
        }}
      />
      <Tab.Screen
        name="Онлайн сабақтар"
        component={OnlineClassesScreen}
        options={{
          tabBarIcon: () => <Text style={{ fontSize: 20 }}>🎥</Text>,
          tabBarLabel: 'Сабақтар',
        }}
      />
      <Tab.Screen
        name="Біз туралы"
        component={AboutScreen}
        options={{
          tabBarIcon: () => <Text style={{ fontSize: 20 }}>ℹ️</Text>,
          tabBarLabel: 'Біз туралы',
        }}
      />
      <Tab.Screen
        name="Дүкен"
        component={ShopScreen}
        options={{
          tabBarIcon: () => <Text style={{ fontSize: 20 }}>🛒</Text>,
          tabBarLabel: 'Дүкен',
        }}
      />
    </Tab.Navigator>
  );
}

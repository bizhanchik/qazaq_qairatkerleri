import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeNavigator';
import GalleryScreen from '../screens/GalleryScreen';
import OnlineClassesScreen from '../screens/OnlineClassesScreen';
import AboutScreen from '../screens/AboutScreen'; // ← подключаем!
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
            <Text style={{ color: '#006600', fontWeight: 'bold', fontSize: 16 }}>📊</Text>
          </TouchableOpacity>
        ),
        headerStyle: { backgroundColor: '#f5f5f5' },
        headerTitleAlign: 'center',
        headerTintColor: '#006600',
      })}
    >
      <Tab.Screen name="Басты бет" component={HomeNavigator} />
      <Tab.Screen name="Галерея" component={GalleryScreen} />
      <Tab.Screen name="Онлайн сабақтар" component={OnlineClassesScreen} />
      <Tab.Screen name="Біз туралы" component={AboutScreen} />
    </Tab.Navigator>
  );
}

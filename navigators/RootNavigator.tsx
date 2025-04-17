import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import AuezovFirstTestScreen from '../screens/AuezovFirstTestScreen';
import AlashOrdaFirstTestScreen from '../screens/AlashOrdaFirstTestScreen';
import BaitursynovFirstTestScreen from '../screens/BaitursynovFirstTestScreen';
import ResultsScreen from '../screens/ResultsScreen';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Главная навигация — табы */}
        <Stack.Screen name="Main" component={BottomTabs} options={{ headerShown: false }} />

        {/* Глобальные экраны — тесты */}
        <Stack.Screen name="AuezovFirstTest" component={AuezovFirstTestScreen} />
        <Stack.Screen name="AlashOrdaFirstTest" component={AlashOrdaFirstTestScreen} />
        <Stack.Screen name="BaitursynovFirstTest" component={BaitursynovFirstTestScreen} />
        <Stack.Screen name="Нәтижелер" component={ResultsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

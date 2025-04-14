// navigators/HomeNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AkhmetScreen from '../screens/AkhmetScreen';
import AuezovScreen from '../screens/AuezovScreen';
import AlikhanScreen from '../screens/AlikhanScreen';
import AuezovFirstTestScreen from '../screens/AuezovFirstTestScreen';
import AlashOrdaFirstTestScreen from '../screens/AlashOrdaFirstTestScreen';
import BaitursynovFirstTestScreen from '../screens/BaitursynovFirstTestScreen';

const Stack = createNativeStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Қазақ қайраткерлері" component={HomeScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Ахмет Байтұрсынұлы" component={AkhmetScreen} />
      <Stack.Screen name="Мұхтар Әуезов" component={AuezovScreen} />
      <Stack.Screen name="Әлихан Бөкейхан" component={AlikhanScreen} />
      <Stack.Screen name="AuezovFirstTest" component={AuezovFirstTestScreen} />
      <Stack.Screen name="AlashOrdaFirstTest" component={AlashOrdaFirstTestScreen} />
      <Stack.Screen name="BaitursynovFirstTest" component={BaitursynovFirstTestScreen} />
    </Stack.Navigator>
  );
}

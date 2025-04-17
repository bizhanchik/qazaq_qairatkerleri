import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigators/RootNavigator';
import { ScoreProvider } from './context/ScoreContext';

export default function App() {
  return (
    <ScoreProvider>
        <RootNavigator />
    </ScoreProvider>
  );
}

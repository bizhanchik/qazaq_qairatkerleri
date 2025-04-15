// context/ScoreContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ScoreContextType {
  score: number;
  setScore: (value: number) => void;
  reloadScore: () => void;
}

const ScoreContext = createContext<ScoreContextType>({
  score: 0,
  setScore: () => {},
  reloadScore: () => {},
});

export const useScore = () => useContext(ScoreContext);

export const ScoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [score, setScoreState] = useState(0);

  const reloadScore = async () => {
    const stored = await AsyncStorage.getItem('total_score');
    setScoreState(stored ? parseInt(stored, 10) : 0);
  };

  const setScore = async (value: number) => {
    await AsyncStorage.setItem('total_score', value.toString());
    setScoreState(value);
  };

  useEffect(() => {
    reloadScore();
  }, []);

  return (
    <ScoreContext.Provider value={{ score, setScore, reloadScore }}>
      {children}
    </ScoreContext.Provider>
  );
};

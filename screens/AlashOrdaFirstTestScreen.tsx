// всё аналогично, только тексты меняем
import React, { useState } from 'react';
import { View, Text, ScrollView, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TestQuestion from '../components/TestQuestion';

const AlashOrdaFirstTestScreen: React.FC = () => {
  const [score, setScore] = useState(0);
  const [currentQ, setCurrentQ] = useState(0);
  const [completed, setCompleted] = useState(false);

  const questions = Array.from({ length: 10 }).map((_, index) => ({
    question: `Алаш Орда сұрағы ${index + 1}`,
    options: ['A', 'B', 'C', 'D'],
    correctIndex: 0,
  }));

  const saveScore = async (newPoints: number) => {
    try {
      const stored = await AsyncStorage.getItem('total_score');
      const current = stored ? parseInt(stored, 10) : 0;
      const total = current + newPoints;
      await AsyncStorage.setItem('total_score', total.toString());
      await AsyncStorage.setItem('test_alashorda_done', 'true');
      Alert.alert('Нәтиже', `Сіз осы тесттен ${newPoints} балл жинадыңыз. Жалпы: ${total} балл.`);
    } catch (error) {
      Alert.alert('Қате', 'Сақтау кезінде қате болды');
    }
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) setScore((prev) => prev + 10);
    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      const final = score + (isCorrect ? 10 : 0);
      setCompleted(true);
      saveScore(final);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {!completed ? (
        <TestQuestion
          question={questions[currentQ].question}
          options={questions[currentQ].options}
          correctIndex={questions[currentQ].correctIndex}
          onAnswer={handleAnswer}
        />
      ) : (
        <Text style={styles.result}>Тест аяқталды! Сіздің баллыңыз: {score} / 100</Text>
      )}
    </ScrollView>
  );
};

export default AlashOrdaFirstTestScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
    justifyContent: 'center',
  },
  result: {
    fontSize: 24,
    textAlign: 'center',
    color: '#006600',
  },
});

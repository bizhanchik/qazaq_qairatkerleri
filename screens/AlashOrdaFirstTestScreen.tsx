import React, { useState } from 'react';
import { View, Text, ScrollView, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TestQuestion from '../components/TestQuestion';

const AlashOrdaFirstTestScreen: React.FC = () => {
  const [score, setScore] = useState(0);
  const [currentQ, setCurrentQ] = useState(0);
  const [completed, setCompleted] = useState(false);

  const questions = [
    {
      question: '«Алаш» партиясы қашан құрылған?',
      options: ['1905 жылы', '1910 жылы', '1917 жылы', '1920 жылы'],
      correctIndex: 2,
    },
    {
      question: 'Алаш Орда үкіметінің төрағасы кім болған?',
      options: ['Міржақып Дулатов', 'Әлихан Бөкейхан', 'Ахмет Байтұрсынов', 'Мұстафа Шоқай'],
      correctIndex: 1,
    },
    {
      question: 'Алаш Орда қай жерде құрылған?',
      options: ['Орынборда', 'Ташкентте', 'Семейде', 'Қазан қаласында'],
      correctIndex: 2,
    },
    {
      question: 'Алаш Орда үкіметі қандай мақсатпен құрылды?',
      options: ['Кеңестік билікті қолдау үшін', 'Қазақстанды отарлау үшін', 'Қазақ автономиясын орнату үшін', 'Патшалықты қалпына келтіру үшін'],
      correctIndex: 2,
    },
    {
      question: 'Алаш Орда қай жылдары өмір сүрді?',
      options: ['1917–1920', '1910–1915', '1920–1925', '1905–1907'],
      correctIndex: 0,
    },
    {
      question: 'Алаш қайраткерлері қандай білім саласында белсенді болды?',
      options: ['Тек ауыл шаруашылығы', 'Әскери салада', 'Ғылым, ағарту, саясат', 'Саудада'],
      correctIndex: 2,
    },
    {
      question: 'Алаш Орда қай оқиғадан кейін жойылды?',
      options: ['1916 жылғы көтеріліс', 'Қазан төңкерісі', 'Кеңестік биліктің орнауы', 'Азамат соғысы'],
      correctIndex: 2,
    },
    {
      question: 'Алаш автономиясының ресми тілі қандай болды?',
      options: ['Орыс тілі', 'Қазақ тілі', 'Татар тілі', 'Француз тілі'],
      correctIndex: 1,
    },
    {
      question: 'Алаш Орда қай кеңестік құрылыммен келіспеді?',
      options: ['Қызыл армиямен', 'Кеңестік үкіметпен', 'Жас түріктермен', 'Алаш Орда Кеңесімен'],
      correctIndex: 1,
    },
    {
      question: 'Алаш Орда идеясын қазіргі Қазақстанда кімдер зерттеп жүр?',
      options: ['Журналистер', 'Спортшылар', 'Тарихшылар мен ғалымдар', 'Бизнесмендер'],
      correctIndex: 2,
    },
  ];

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

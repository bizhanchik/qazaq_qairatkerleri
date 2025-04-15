import React, { useState } from 'react';
import { View, Text, ScrollView, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TestQuestion from '../components/TestQuestion';

const AuezovFirstTestScreen: React.FC = () => {
  const [score, setScore] = useState(0);
  const [currentQ, setCurrentQ] = useState(0);
  const [completed, setCompleted] = useState(false);

  const questions = [
    {
      question: 'Мұхтар Әуезовтің «Абай жолы» роман-эпопеясы неше жылдық еңбектің жемісі?',
      options: ['10 жыл', '12 жыл', '15 жыл', '20 жыл'],
      correctIndex: 2,
    },
    {
      question: 'М. Әуезов кімнің тойына тарту ретінде «Еңлік-Кебек» пьесасын жазып, сахналаған?',
      options: ['Абайдың баласы Тұрағұлдың', 'Абайдың немересі Ақилиянның', 'Абайдың немересі Мағауияның', 'Абайдың інісі Оспанның'],
      correctIndex: 1,
    },
    {
      question: '«Еңлік-Кебек» пьесасы неше күнде жазылып, сахналанды?',
      options: ['3 күнде', '5 күнде', '7 күнде', '10 күнде'],
      correctIndex: 1,
    },
    {
      question: 'Мұхтар Әуезов жас кезінде қай футбол командасында ойнаған?',
      options: ['«Семей»', '«Ярыш»', '«Томирис»', '«Алаш»'],
      correctIndex: 1,
    },
    {
      question: 'Жазушы өзінің алғашқы әңгімесін қай жылы және қандай бүркеншік атпен жариялаған?',
      options: ['1918 жылы – «Балапан»', '1920 жылы – «Талапкер»', '1921 жылы – «Арғын»', '1922 жылы – «Жас жазушы»'],
      correctIndex: 2,
    },
    {
      question: 'М. Әуезов қай университеттің профессоры болған?',
      options: ['Әл-Фараби атындағы ҚазҰУ', 'Санкт-Петербург университеті', 'Мәскеу мемлекеттік университеті', 'Ташкент университеті'],
      correctIndex: 2,
    },
    {
      question: '1997 жылы ЮНЕСКО қандай жыл деп жариялады?',
      options: ['Абай жылы', 'Әуезов жылы', 'Құрманғазы жылы', 'Шоқан жылы'],
      correctIndex: 1,
    },
    {
      question: 'Мұхтар Әуезов неше жасында үйленген?',
      options: ['13 жасында', '15 жасында', '17 жасында', '20 жасында'],
      correctIndex: 1,
    },
    {
      question: 'Қаламгер кеңестік идеология қысымынан қай эпосты қорғап қалған?',
      options: ['«Қобыланды»', '«Ер Төстік»', '«Алпамыс»', '«Манас»'],
      correctIndex: 3,
    },
    {
      question: 'Мұхтар Әуезовтің атасы кіммен туысқан болған?',
      options: ['Құнанбайдың туған ағасы', 'Құнанбайдың ұлы', 'Құнанбайдың тоқалы Нұрғанымның туған інісі', 'Құнанбайдың күйеу баласы'],
      correctIndex: 2,
    },
  ];

  const saveScore = async (newPoints: number) => {
    try {
      const stored = await AsyncStorage.getItem('total_score');
      const current = stored ? parseInt(stored, 10) : 0;
      const total = current + newPoints;
      await AsyncStorage.setItem('total_score', total.toString());
      await AsyncStorage.setItem('test_auezov_done', 'true');
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

export default AuezovFirstTestScreen;

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

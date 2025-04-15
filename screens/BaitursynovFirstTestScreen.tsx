import React, { useState } from 'react';
import { View, Text, ScrollView, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TestQuestion from '../components/TestQuestion';

const BaitursynovFirstTestScreen: React.FC = () => {
  const [score, setScore] = useState(0);
  const [currentQ, setCurrentQ] = useState(0);
  const [completed, setCompleted] = useState(false);

  const questions = [
    {
      question: 'Ахмет Байтұрсынұлы қай жылы және қай жерде дүниеге келген?',
      options: ['1875 жылы – Торғай', '1872 жылы – Сарытүбек ауылы', '1880 жылы – Ақтөбе', '1870 жылы – Орынбор'],
      correctIndex: 1,
    },
    {
      question: 'Ахмет Байтұрсынұлының алғашқы білім алған жері қайсы?',
      options: ['Орынбор гимназиясы', 'Қостанай мектебі', 'Торғайдағы екі сыныптық орыс-қазақ мектебі', 'Мәскеу университеті'],
      correctIndex: 2,
    },
    {
      question: 'Ол қай жылы мұғалімдер мектебін аяқтап, оқытушылыққа кірісті?',
      options: ['1890 жылы', '1892 жылы', '1895 жылы', '1900 жылы'],
      correctIndex: 2,
    },
    {
      question: 'Ахмет Байтұрсынұлы кімдермен бірге "Қазақ" газетін шығарды?',
      options: ['Мұстафа Шоқай, Әлихан Бөкейхан', 'Әлихан Бөкейхан, Міржақып Дулатов', 'Мағжан Жұмабаев, Жүсіпбек Аймауытов', 'Ілияс Жансүгіров, Сәкен Сейфуллин'],
      correctIndex: 1,
    },
    {
      question: 'Ақынның алғашқы өлеңдер жинағы қалай аталды және қашан шықты?',
      options: ['«Маса» – 1912 жылы', '«Қырық мысал» – 1909 жылы', '«Оян, қазақ!» – 1910 жылы', '«Тіл құралы» – 1914 жылы'],
      correctIndex: 1,
    },
    {
      question: '«Маса» кітабының негізгі мазмұны қандай?',
      options: ['Оқиғалы роман', 'Ертегі мен мысалдар', 'Қараңғылық пен надандықты сынау', 'Ғылыми трактат'],
      correctIndex: 2,
    },
    {
      question: 'Ахмет Байтұрсынұлы қазақ әліпбиін неше таңбадан құралған нұсқада жасады?',
      options: ['28 таңба', '32 таңба', '26 таңба', '24 таңба'],
      correctIndex: 3,
    },
    {
      question: 'Оның «Әліппе» оқулығы неше рет қайта басылып шықты?',
      options: ['5 рет', '7 рет', '3 рет', '10 рет'],
      correctIndex: 1,
    },
    {
      question: 'Ахмет Байтұрсынұлының әдебиетке қосқан үлесі қандай болды?',
      options: ['Роман жазды', 'Тек поэзиямен айналысты', 'Әдебиет теориясын жүйеледі', 'Мәтіндер аудармасымен шектелді'],
      correctIndex: 2,
    },
    {
      question: 'Қазіргі таңда қай қалада Ахмет Байтұрсынұлына арналған мұражай орналасқан?',
      options: ['Астана', 'Қостанай', 'Семей', 'Алматы'],
      correctIndex: 3,
    },
  ];

  const saveScore = async (newPoints: number) => {
    try {
      const stored = await AsyncStorage.getItem('total_score');
      const current = stored ? parseInt(stored, 10) : 0;
      const total = current + newPoints;
      await AsyncStorage.setItem('total_score', total.toString());
      await AsyncStorage.setItem('test_baitursynov_done', 'true');
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

export default BaitursynovFirstTestScreen;

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

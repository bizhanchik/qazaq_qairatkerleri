import React from 'react';
import { View, Text, StyleSheet, Alert, Platform, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useScore } from '../context/ScoreContext';

const ResultsScreen: React.FC = () => {
  const { score, setScore, reloadScore } = useScore();

  const clearAll = async () => {
    try {
      await AsyncStorage.multiRemove([
        'total_score',
        'test_auezov_done',
        'test_alashorda_done',
        'test_baitursynov_done',
      ]);
      setScore(0);
      Alert.alert('🧹 Тазартылды', 'Барлық тесттік деректер жойылды!');
    } catch (error) {
      Alert.alert('Қате', 'Тазарту кезінде қате болды');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📊 Жалпы нәтижелер</Text>
      <Text style={styles.score}>
        Сіздің жалпы жинаған балыңыз: <Text style={styles.scoreNumber}>{score ?? '...'}</Text> / 300
      </Text>

      <TouchableOpacity style={styles.refreshButton} onPress={reloadScore}>
        <Text style={styles.buttonText}>🔄 Балды жаңарту</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.clearButton} onPress={clearAll}>
        <Text style={styles.buttonText}>🧹 Барлық деректерді тазарту</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResultsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#f0fdf4',
    ...(Platform.OS === 'web' && { maxWidth: 800, marginHorizontal: 'auto' }),
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#006600',
    textAlign: 'center',
    marginBottom: 20,
  },
  score: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 40,
    color: '#333',
  },
  scoreNumber: {
    fontWeight: 'bold',
    color: '#008000',
  },
  refreshButton: {
    backgroundColor: '#006600',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 16,
    alignItems: 'center',
  },
  clearButton: {
    backgroundColor: '#aa0000',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

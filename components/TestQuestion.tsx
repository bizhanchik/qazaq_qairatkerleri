import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
  question: string;
  options: string[];
  correctIndex: number;
  onAnswer: (isCorrect: boolean) => void;
};

const TestQuestion: React.FC<Props> = ({ question, options, correctIndex, onAnswer }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.question}>{question}</Text>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.option}
          onPress={() => onAnswer(index === correctIndex)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TestQuestion;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 2,
  },
  question: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#006600',
  },
  option: {
    backgroundColor: '#e0f2e9',
    padding: 12,
    borderRadius: 8,
    marginVertical: 5,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
});

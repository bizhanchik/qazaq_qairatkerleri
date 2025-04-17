import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Alert, Platform, Linking } from 'react-native';
import { useScore } from '../context/ScoreContext';

const ITEMS = [
  { id: '1', name: 'Abai футболка', image: require('../assets/abai.png') },
  { id: '2', name: 'Abai Black', image: require('../assets/abai_black.png') },
  { id: '3', name: 'Abai White', image: require('../assets/abai_white.png') },
  { id: '4', name: 'Chokan', image: require('../assets/chokan.png') },
  { id: '5', name: 'Qazaq Tee', image: require('../assets/tee.png') },
];

const ShopScreen: React.FC = () => {
  const { score: points, setScore } = useScore();

  const handleBuy = () => {
    if (points < 250) {
      Alert.alert('Жеткіліксіз балл', 'Бұл затты сатып алу үшін 250 балл қажет.');
      return;
    }

    const newScore = points - 250;
    setScore(newScore);

    Alert.alert(
      'Сатып алу сәтті!',
      'Байланыс үшін Telegram-арнаға өтіңіз.',
      [
        {
          text: 'ОК',
          onPress: () => Linking.openURL('https://t.me/qazaq_qairatkerleri'),
        },
      ],
      { cancelable: true }
    );
  };

  const renderItem = ({ item }: { item: typeof ITEMS[0] }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>Бағасы: 250 балл</Text>
      <TouchableOpacity style={styles.button} onPress={handleBuy}>
        <Text style={styles.buttonText}>Сатып алу</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.points}>Сіздің балыңыз: {points}</Text>
      <FlatList
        data={ITEMS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
};

export default ShopScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f2f2f2',
    ...(Platform.OS === 'web' && { maxWidth: 900, marginHorizontal: 'auto' }),
  },
  points: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#006600',
    marginBottom: 15,
    textAlign: 'center',
  },
  grid: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    width: '48%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 130,
    borderRadius: 6,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
  },
  price: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#006600',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

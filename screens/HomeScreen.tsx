// screens/HomeScreen.tsx
import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const akhmetImage = require('../assets/akhmettt.png');
const auezovImage = require('../assets/auezov.png');
const alikhanImage = require('../assets/alikhan.png');

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<any>();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Қазақ қайраткерлері</Text>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Ахмет Байтұрсынұлы')}>
        <Image source={akhmetImage} style={styles.image} />
        <Text style={styles.name}>Ахмет Байтұрсынұлы</Text>
        <Text style={styles.desc}>Ағартушы, реформатор қазақ әліпбиін жасаған.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Мұхтар Әуезов')}>
        <Image source={auezovImage} style={styles.image} />
        <Text style={styles.name}>Мұхтар Әуезов</Text>
        <Text style={styles.desc}>«Абай жолы» авторы, жазушы-драматург.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Әлихан Бөкейхан')}>
        <Image source={alikhanImage} style={styles.image} />
        <Text style={styles.name}>Әлихан Бөкейхан</Text>
        <Text style={styles.desc}>Алаш көсемі, қоғам қайраткері, саясаткер.</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    ...(Platform.OS === 'web' && { maxWidth: 900, marginHorizontal: 'auto' }),
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#006600',
    textAlign: 'center',
    marginVertical: 20,
  },
  card: {
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 180,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    color: '#006600',
  },
  desc: {
    fontSize: 15,
    color: '#555',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});

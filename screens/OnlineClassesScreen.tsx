import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import YouTubeVideo from '../components/YouTubeVideo';

const OnlineClassesScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const [completedTests, setCompletedTests] = useState({
    auezov: false,
    alashorda: false,
    baitursynov: false,
  });

  useEffect(() => {
    const loadTestStatus = async () => {
      const auezov = await AsyncStorage.getItem('test_auezov_done');
      const alashorda = await AsyncStorage.getItem('test_alashorda_done');
      const baitursynov = await AsyncStorage.getItem('test_baitursynov_done');

      setCompletedTests({
        auezov: auezov === 'true',
        alashorda: alashorda === 'true',
        baitursynov: baitursynov === 'true',
      });
    };

    const unsubscribe = navigation.addListener('focus', loadTestStatus);
    return unsubscribe;
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Онлайн сабақтар</Text>
        <Text style={styles.desc}>Төмендегі бейнелерді көріп, олар бойынша тесттен өте аласыз.</Text>

        <YouTubeVideo videoId="0AFuG6RkfSI" />
        {completedTests.auezov ? (
          <View style={styles.completedBanner}>
            <Text style={styles.completedText}>✅ Бұл бейне бойынша тест өтілді!</Text>
          </View>
        ) : (
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AuezovFirstTest')}>
            <Text style={styles.buttonText}>Бейне бойынша тестті өту</Text>
          </TouchableOpacity>
        )}

        <YouTubeVideo videoId="3fcFrjkiVmM" />
        {completedTests.alashorda ? (
          <View style={styles.completedBanner}>
            <Text style={styles.completedText}>✅ Бұл бейне бойынша тест өтілді!</Text>
          </View>
        ) : (
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AlashOrdaFirstTest')}>
            <Text style={styles.buttonText}>Бейне бойынша тестті өту</Text>
          </TouchableOpacity>
        )}

        <YouTubeVideo videoId="S1YBXpJxi7E" />
        {completedTests.baitursynov ? (
          <View style={styles.completedBanner}>
            <Text style={styles.completedText}>✅ Бұл бейне бойынша тест өтілді!</Text>
          </View>
        ) : (
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BaitursynovFirstTest')}>
            <Text style={styles.buttonText}>Бейне бойынша тестті өту</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

export default OnlineClassesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    ...(Platform.OS === 'web' && { maxWidth: 900, marginHorizontal: 'auto' }),
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#006600',
    marginBottom: 10,
    textAlign: 'center',
  },
  desc: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#006600',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  completedBanner: {
    backgroundColor: '#d1e7dd',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 25,
  },
  completedText: {
    color: '#0f5132',
    fontSize: 16,
    fontWeight: '600',
  },
});

// screens/AboutScreen.tsx
import React from 'react';
import { ScrollView, StyleSheet, Text, View, Platform } from 'react-native';

const AboutScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Біз туралы</Text>
        <Text style={styles.contentText}>
          Бұл сайт қазақ халқының ұлы тұлғаларына арналған. Қазақтың тарихында ерекше орны бар,
          ел үшін еңбек еткен, халқының болашағы үшін күрескен зиялы адамдар туралы жастарға, оқушыларға,
          жалпы көпшілікке пайдалы мәлімет беру үшін жасалды.
        </Text>
        <Text style={styles.contentText}>
          Біздің мақсатымыз — Ахмет Байтұрсынұлы, Мұхтар Әуезов және Әлихан Бөкейхан сынды ұлы тұлғалардың өмір жолын,
          еңбектерін, айтқан нақыл сөздерін, ұстанған идеясын көрсету.
        </Text>
        <Text style={styles.contentTitle}>Байланыс:</Text>
        <Text style={styles.contentText}>
          Сіз бізге келесі нөмір арқылы хабарласа аласыз: +7 (XXX) XXX-XX-XX{'\n'}
          Электрондық пошта: po2402@gmail.com{'\n'}
          Біз әрдайым сайтты жаңа ақпаратпен толықтырып, қазақтың тарихи тұлғалары туралы деректерді көбейтіп отырамыз.
          Ұсыныс немесе сұрақтарыңыз болса, бізбен еркін түрде байланысыңыз!
        </Text>
      </View>
      <Text style={styles.footer}>© 2025 Қазақ зиялылары сайты ПО2402</Text>
    </ScrollView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 10,
    ...(Platform.OS === 'web' && { maxWidth: 1200, marginHorizontal: 'auto' }),
  },
  content: {
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#006600',
    textAlign: 'center',
    marginVertical: 20,
  },
  contentTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  contentText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginBottom: 10,
  },
  footer: {
    textAlign: 'center',
    padding: 15,
    fontSize: 14,
    color: '#666',
  },
});

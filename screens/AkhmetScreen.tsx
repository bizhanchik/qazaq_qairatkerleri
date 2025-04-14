// screens/AkhmetScreen.tsx
import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Platform } from 'react-native';

const akhmetImage = require('../assets/akhmettt.png');

const AkhmetScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Image source={akhmetImage} style={styles.image} />
      <Text style={styles.title}>Ахмет Байтұрсынұлы: Адамгершілік пен Ұлтшылдықтың Кемеңгері</Text>
      
      <Text style={styles.articleText}>
        20-ғасырдың басында қазақ халқының мәдени және білім саласын жаңғыртуда, ұлттық сана мен әдебиетті қалыптастыруда ерекше
        орынды иеленген Ахмет Байтұрсынұлы, шын мәнінде, нағыз ұлт тәлімгері ретінде бағаланды. Оның өмір жолы мен еңбектері қазіргі
        Қазақстан тарихында алтын әріптермен жазылған.
      </Text>
      
      <Text style={styles.sectionTitle}>Кім болған?</Text>
      <Text style={styles.articleText}>
        Ахмет Байтұрсынұлы – қазақ әліпбиін реформалау ғана емес, жаңа білім мен ағарту үдерістерін бастаған көрнекті қайраткер.
        Ол қазақ тілінің грамматикасы мен стилистикасын жүйелеп, ұлттық мәдениеттің дамуына зор үлес қосты. Оның ой-пікірлері мен шығармалары
        қазақ халқының болашағын жарқын етуге бағытталған.
      </Text>
      
      <Text style={styles.sectionTitle}>Еңбектері мен жетістіктері</Text>
      <Text style={styles.articleText}>
        Оның еңбектері қазақ әдебиеті мен білімінің дамуына үлкен ықпал етті. «Әліпби оқулығы» және «Тіл-құрал» шығармалары арқылы
        ол қазақ тілін жетілдіріп, әдебиетті жақсартуға жол ашты. Сонымен қатар, ол ұлттық автономия мен тәуелсіздік үшін күресіп,
        Алаш қозғалысының белсенді мүшесі болды. Оның еңбегі мен қоғамдық қызметі халықтың сана-сезімін жоғарылатып, ұлттық жаңғыруға
        себебін тигізді.
      </Text>
      
      <Text style={styles.sectionTitle}>Жеке өмірі</Text>
      <Text style={styles.articleText}>
        Ахмет Байтұрсынұлы өз өмірінде отбасылық құндылықтарды жоғары бағалады. Оның жеке өмірі қоғам алдындағы қызметімен
        тығыз байланысты болды. Достық, адалдық және адамгершілік қасиеттері оның өмір сүруінің басты нақталығы болып қалыптасты.
      </Text>
      
      <Text style={styles.footer}>© 2025 Қазақ зиялылары сайты ПО2402</Text>
    </ScrollView>
  );
};

export default AkhmetScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    ...(Platform.OS === 'web' && { maxWidth: 900, marginHorizontal: 'auto' }),
  },
  image: {
    width: '100%',
    height: 220,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#006600',
    marginBottom: 15,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginTop: 20,
    marginBottom: 10,
  },
  articleText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    textAlign: 'justify',
  },
  footer: {
    textAlign: 'center',
    padding: 15,
    fontSize: 14,
    color: '#666',
    marginTop: 30,
  },
});

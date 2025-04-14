// screens/AuezovScreen.tsx
import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Platform } from 'react-native';

const auezovImage = require('../assets/auezov.png');

const AuezovScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Image source={auezovImage} style={styles.image} />
      <Text style={styles.title}>Мұхтар Әуезов: Ұлттың Жүрегі мен Әдебиетінің Негізі</Text>
      
      <Text style={styles.articleText}>
        Мұхтар Әуезов – қазақ әдебиетінің жаңа дәуірін ашып, ұлттық сана мен рухты бейнелеген ұлы жазушы. Оның шығармашылық жолы
        мен өмірі қазақ халқының рухани жаңғыруына зор үлес қосып, әдебиеттің жаңа өрбуіне серпін берді.
      </Text>
      
      <Text style={styles.sectionTitle}>Кім болған?</Text>
      <Text style={styles.articleText}>
        Әуезов – қазақ әдебиетінің жарқын жұлдызы. Ол ұлттық тарихты, дәстүрлерді және заманауи өмірдің қарқындарын өз шығармаларында
        ерекше, терең әрі сезімтал түрде бейнеледі. Оның шығармашылық мұрасы әрдайым оқырмандарды ұлттық болмысқа жақындатты.
      </Text>
      
      <Text style={styles.sectionTitle}>Еңбектері мен жетістіктері</Text>
      <Text style={styles.articleText}>
        Оның атақты шығармасы «Абай жолы» – қазақ әдебиетінің асылы және үлгісі. Бұл роман-эпопея қазақ халқының тарихи тағдыры,
        мәдениеті мен ұлттық болмысының айнасы болып табылады. Сонымен бірге, Мұхтар Әуезовтың әңгімелері, повестері мен очерктері де
        әдебиеттің байлығын арттырып, ұлттық рухты дами түсті.
      </Text>
      
      <Text style={styles.sectionTitle}>Жеке өмірі</Text>
      <Text style={styles.articleText}>
        Мұхтар Әуезов – шығармашылығымен қатар, жеке өмірінде де өзінің адамгершілік қасиеттерімен, отбасы мен достарына деген шынайы
        мейірімімен ерекшеленді. Оның өмір салты, еңбекқорлығы және адамгершілігі оның шығармаларына тереңдік қосып, ұрпақтарға
        үлгі болды.
      </Text>
      
      <Text style={styles.footer}>© 2025 Қазақ зиялылары сайты ПО2402</Text>
    </ScrollView>
  );
};

export default AuezovScreen;

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

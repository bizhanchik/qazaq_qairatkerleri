// screens/AlikhanScreen.tsx
import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Platform } from 'react-native';

const alikhanImage = require('../assets/alinnna.png');

const AlikhanScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Image source={alikhanImage} style={styles.image} />
      <Text style={styles.title}>Әлихан Бөкейхан: Елі мен Тәуелсіздігінің Шын Кемеңгері</Text>
      
      <Text style={styles.articleText}>
        Әлихан Бөкейхан – қазақ ұрпағының есте қаларлық мемлекет қайраткері, ойшыл және реформатор. Оның қызметі ұлттық
        тәуелсіздік пен бірегейлікті қорғау, елдің дамуы мен гүлденуі үшін күрес жолындағы нақты қадамдарымен сипатталады.
      </Text>
      
      <Text style={styles.sectionTitle}>Кім болған?</Text>
      <Text style={styles.articleText}>
        Бөкейхан өз заманында ұлтты біріктіру, ұлттық сана мен мәдениетті нығайту саласында елеулі рөл атқарды. Ол өз өмірінде
        елдің болашағына сенім артып, ұлттық тәуелсіздік және демократиялық қағидаларды қолдады.
      </Text>
      
      <Text style={styles.sectionTitle}>Еңбектері мен жетістіктері</Text>
      <Text style={styles.articleText}>
        Оның қызметі барысында ұлттық автономия, мәдениет және білімді жаңғырту саласында көптеген реформаларды жүзеге асыруға
        мүмкіндік берді. Әлихан Бөкейханның қоғамдық қызметі мен саяси көзқарастары қазақ халқының еркіндігі мен болашағына
        сенім артуға әсер етті. Оның еңбегі ұлттың дамуы үшін бағыт-бағдар беріп, заманауи қоғамның құрылуына негіз салды.
      </Text>
      
      <Text style={styles.sectionTitle}>Жеке өмірі</Text>
      <Text style={styles.articleText}>
        Әлихан Бөкейханның жеке өмірі оның қоғамдық қызметіндегідай терең және мағыналы болды. Отбасына, дәстүріне және
        жақындарына деген адалдығы, адамгершілік қасиеттері оның тұлғасын ерекшелендірді. Өміріндегі қиындықтар мен жетістіктері
        оның ұлылық идеясын нығайтты және оның тарихи мұрасын ұрпақтарға жеткізді.
      </Text>
      
      <Text style={styles.footer}>© 2025 Қазақ зиялылары сайты ПО2402</Text>
    </ScrollView>
  );
};

export default AlikhanScreen;

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

import React from 'react';
import { ScrollView, StyleSheet, Text, View, Platform } from 'react-native';

const AboutScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Біз туралы</Text>
        <Text style={styles.paragraph}>
          Бұл сайт қазақ халқының ұлы тұлғаларына арналған. Қазақтың тарихында ерекше орны бар,
          ел үшін еңбек еткен, халқының болашағы үшін күрескен зиялы адамдар туралы жастарға, оқушыларға,
          жалпы көпшілікке пайдалы мәлімет беру үшін жасалды.
        </Text>
        <Text style={styles.paragraph}>
          Біздің мақсатымыз — Ахмет Байтұрсынұлы, Мұхтар Әуезов және Әлихан Бөкейхан сынды ұлы тұлғалардың өмір жолын,
          еңбектерін, айтқан нақыл сөздерін, ұстанған идеясын көрсету.
        </Text>

        <Text style={styles.subtitle}>Байланыс:</Text>
        <Text style={styles.paragraph}>
          Сіз бізге келесі нөмір арқылы хабарласа аласыз:{' '}
          <Text style={styles.bold}>+7 (XXX) XXX-XX-XX</Text>{'\n'}
          Электрондық пошта: <Text style={styles.bold}>po2402@gmail.com</Text>{'\n'}
          Біз әрдайым сайтты жаңа ақпаратпен толықтырып, қазақтың тарихи тұлғалары туралы деректерді көбейтіп отырамыз.
          Ұсыныс немесе сұрақтарыңыз болса, бізбен еркін түрде байланысыңыз!
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 Қазақ зиялылары сайты ПО2402</Text>
      </View>
    </ScrollView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5fff5',
    ...(Platform.OS === 'web' && { maxWidth: 1000, marginHorizontal: 'auto' }),
  },
  section: {
    backgroundColor: '#e6ffe6',
    margin: 20,
    padding: 30,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007700',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
    color: '#004d00',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#004d00',
    marginBottom: 15,
    textAlign: 'justify',
  },
  bold: {
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#004d00',
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    color: 'white',
    fontSize: 14,
  },
});

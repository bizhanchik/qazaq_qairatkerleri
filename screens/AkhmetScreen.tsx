import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Platform, Linking } from 'react-native';

const akhmetImage = require('../assets/akhmettt.png');

const AkhmetScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Image source={akhmetImage} style={styles.image} />
      <Text style={styles.title}>Ахмет Байтұрсынұлы: Ұлт ұстазы және рухани көсем</Text>

      <Text style={styles.articleText}>
        Ахмет Байтұрсынұлы — қазақ халқының рухани көсемі, ағартушы, тілтанушы, әдебиетші және мемлекет қайраткері. Оның өмірі мен еңбектері
        ұлттың оянуы мен тәуелсіздікке ұмтылу жолындағы күрестің айқын көрінісі болды.
      </Text>

      <Text style={styles.sectionTitle}>Өмір жолы мен ағартушылық қызметі</Text>
      <Text style={styles.articleText}>
        Ахмет Байтұрсынұлы 1872 жылы Қостанай облысының Сартүбек ауылында дүниеге келген. Алғашқы білімін Торғайдағы екі сыныптық орыс-қазақ
        мектебінде алып, кейін Орынбор мұғалімдер мектебінде оқыған. Ол қазақ тілінің грамматикасын жүйелеп, «Әліппе», «Тіл-құрал» сынды
        оқулықтар жазып, қазақ тіл білімінің негізін қалады.
      </Text>

      <Text style={styles.sectionTitle}>«Қазақ» газеті және қоғамдық-саяси қызметі</Text>
      <Text style={styles.articleText}>
        1913 жылы Байтұрсынұлы «Қазақ» газетін ұйымдастырып, оны ұлттық сананы ояту құралына айналдырды. Газет бетінде жер, тіл, мәдениет,
        білім, дін туралы мақалалар жариялап, халықтың саяси және мәдени деңгейін көтерді.
      </Text>

      <Text style={styles.articleText}>
        Оның «Қазақ қалам қайраткерлері жайынан» атты мақаласында:{"\n\n"}
        «Қазақ қалам қайраткерлері орыстың қорлық көрген, таяқ жеген, орыстың табанында езілген жұрттан туған.{"\n"}
        Қазақ қалам қайраткерлері қазақ басына қиын-қыстау зар заман түсіп, үстін торлап, қайғы бұлты қаптаған шақта шыққан».{"\n"}
      </Text>
      <Text style={styles.sourceText} onPress={() => Linking.openURL('https://abai.kz/post/13993')}>
        Дереккөз: abai.kz
      </Text>

      <Text style={styles.sectionTitle}>Бестамақтағы беймәлім мақала</Text>
      <Text style={styles.articleText}>
        2020 жылы «Egemen Qazaqstan» газетінде Ахмет Байтұрсынұлының 1896 жылы орыс тілінде жазған «Бестамақтағы болыстық» мақаласы табылды.
        Бұл мақалада шешек індетіне қарсы екпе салу, санитарлық жағдай мен қазақ халқының денсаулығына алаңдаушылық білдірілген.
      </Text>
      <Text style={styles.articleText}>
        Онда ол: «Қазақтың сауатты әрі тиімді дәрігерлік көмекке көптен мұқтаж екенін» атап өткен.
      </Text>
      <Text style={styles.sourceText} onPress={() => Linking.openURL('https://egemen.kz/article/251902-bestamaqta-dgazylghan-beymalim-maqala-akhmet-baytursynulynynh-taghy-bir-maqalasy')}>
        Дереккөз: egemen.kz
      </Text>

      <Text style={styles.sectionTitle}>Мұрасы мен тағылымы</Text>
      <Text style={styles.articleText}>
        Ахмет Байтұрсынұлының еңбектері ұлттың рухани жаңғыруының негізін қалады. Оның тіл білімі, әдебиеттану, педагогика саласындағы
        ғылыми мұралары қазіргі күнге дейін өзекті. Ол – ұлттық ағартушылықтың, тәуелсіздік идеясының және қазақ мәдениетінің көрнекті өкілі.
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
  sourceText: {
    fontSize: 14,
    color: '#1a0dab',
    textAlign: 'right',
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
  footer: {
    textAlign: 'center',
    padding: 15,
    fontSize: 14,
    color: '#666',
    marginTop: 30,
  },
});

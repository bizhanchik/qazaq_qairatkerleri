import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Platform, Linking } from 'react-native';

const alikhanImage = require('../assets/alikhan.png');

const AlikhanScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Image source={alikhanImage} style={styles.image} />
      <Text style={styles.title}>Әлихан Бөкейхан: Ұлт көсемі және Алаш идеясының негізін қалаушы</Text>

      <Text style={styles.articleText}>
        Әлихан Нұрмұхамедұлы Бөкейхан (1866–1937) — қазақтың көрнекті мемлекет қайраткері, публицист, экономист, ғалым және Алаш қозғалысының жетекшісі.
        Ол патша өкіметіне қарсы күрескен, ұлттық автономия мен тәуелсіз Қазақстан идеясын алғаш ұсынған тұлғалардың бірі.
      </Text>

      <Text style={styles.sectionTitle}>Өмір жолы мен білім алуы</Text>
      <Text style={styles.articleText}>
        Әлихан Бөкейхан 1866 жылы қазіргі Қарағанды облысы Ақтоғай ауданында дүниеге келген. Омбы техникалық училищесінде оқыған,
        кейін Санкт-Петербург орман институтын тәмамдады. Жас кезінен бастап саяси күреске араласып, қазақ халқының құқықтарын қорғауға бел шеше кіріскен.
      </Text>

      <Text style={styles.sectionTitle}>Саяси қызметі</Text>
      <Text style={styles.articleText}>
        1905 жылы Ресейдегі бірінші революция кезінде Әлихан «Қазақ конституциялық-демократиялық партиясын» (Қазақ кадеттері) құруға атсалысты.
        Ол I Мемлекеттік Думаға депутат болып сайланды. 1917 жылы «Алаш» партиясын құрып, сол жылы құрылған Алаш Орда үкіметінің төрағасы болып сайланды.
      </Text>
      <Text style={styles.sourceText} onPress={() => Linking.openURL('https://egemen.kz/article/282559-alash-koshesi-qayratkeri')}>
        Дереккөз: egemen.kz
      </Text>

      <Text style={styles.sectionTitle}>Ғылыми және публицистикалық еңбектері</Text>
      <Text style={styles.articleText}>
        Әлихан Бөкейхан экономикалық зерттеулермен, статистикамен, этнографиямен айналысты. Ол «Брокгауз және Ефрон» энциклопедиясына қазақ халқы туралы
        алғашқы ғылыми мақалалар жазды. Сонымен қатар, ұлттың тарихы мен мәдениеті жайлы публицистикалық мақалалар жариялап, ағартушылық бағытты ұстанды.
      </Text>
      <Text style={styles.sourceText} onPress={() => Linking.openURL('https://abai.kz/post/12791')}>
        Дереккөз: abai.kz
      </Text>

      <Text style={styles.sectionTitle}>Алаш идеясы және мұрасы</Text>
      <Text style={styles.articleText}>
        Алаш партиясы мен Алаш Орда үкіметі — қазақ қоғамының демократиялық, зайырлы мемлекет құру жолындағы алғашқы талпынысы болды.
        Бөкейхан ұсынған автономия, білім, тіл, жер реформасы идеялары бүгінгі Қазақстанда да өзектілігін жоғалтқан жоқ.
      </Text>

      <Text style={styles.sectionTitle}>Жеке өмірі және қуғын-сүргін</Text>
      <Text style={styles.articleText}>
        Әлихан Бөкейхан — отбасын құрған, бірақ өмірінің көп бөлігін ғылым мен саясатқа арнаған. 1920-жылдары ол Кеңестік Қазақстанда ғылыми қызметте
        жұмыс істегенмен, кейіннен сталиндік репрессия құрбаны болды. 1937 жылы Мәскеуде ату жазасына кесілді.
      </Text>

      <Text style={styles.articleText}>
        Бүгінде Әлихан Бөкейхан — қазақ халқының тәуелсіздігі жолындағы күрестің символы. Оның есімі мектептер мен көшелерге беріліп,
        ұлт зиялысының тұлғасы қайта танылып жатыр.
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

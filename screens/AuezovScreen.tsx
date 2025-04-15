import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Platform, Linking } from 'react-native';

const auezovImage = require('../assets/auezov.png');

const AuezovScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Image source={auezovImage} style={styles.image} />
      <Text style={styles.title}>Мұхтар Әуезов: Ұлттың Жүрегі мен Әдебиетінің Негізі</Text>

      <Text style={styles.sectionTitle}>Өмірбаяны</Text>
      <Text style={styles.articleText}>
        Мұхтар Омарханұлы Әуезов 1897 жылы 28 қыркүйекте қазіргі Шығыс Қазақстан облысы, Абай ауданындағы Бөрілі ауылында дүниеге келген. 
        Атасы Әуез — Абайдың тоқалы Нұрғанымның туған інісі болған. Бала Мұхтар арабша, орысша хат танып, ерте жастан әдебиетке қызығушылық танытты.
      </Text>

      <Text style={styles.sectionTitle}>Білім жолы</Text>
      <Text style={styles.articleText}>
        Мұхтар Семей қаласындағы медресе мен орыс мектебінде оқыды. 1919 жылы Семей мұғалімдер семинариясын, кейін Ленинград мемлекеттік 
        университетінің филология факультетін тәмамдады. Бұдан соң Ташкент университетінде ғылыми жұмыс атқарды.
      </Text>

      <Text style={styles.sectionTitle}>Шығармашылығы</Text>
      <Text style={styles.articleText}>
        Мұхтардың алғашқы шығармасы — «Еңлік-Кебек» пьесасы (1917), Абай немересінің тойында сахналанды. Оның ең ірі туындысы — 
        «Абай жолы» роман-эпопеясы төрт томнан тұрады және әлемнің 116 тіліне аударылған. Бұл шығарма қазақ халқының тағдыры мен мәдениетін танытатын 
        ең маңызды әдеби туындылардың бірі.
      </Text>
      <Text style={styles.link} onPress={() => Linking.openURL('https://kk.wikipedia.org/wiki/Абай_жолы_(роман)')}>
        Дереккөз: Уикипедия – «Абай жолы»
      </Text>

      <Text style={styles.sectionTitle}>Ғылыми қызметі</Text>
      <Text style={styles.articleText}>
        Ол — Қазақ КСР Ғылым академиясының академигі, профессор, филология ғылымдарының докторы. Әуезов қазақ фольклоры, әдебиет тарихы және 
        Абайтану ғылымының негізін қалады. Оның ғылыми еңбектері ұлттық мәдениетті зерттеуге үлкен үлес қосты.
      </Text>

      <Text style={styles.sectionTitle}>Марапаттары</Text>
      <Text style={styles.articleText}>
        Әуезов 1949 жылы «Абай» романы үшін Сталиндік сыйлықты, ал 1959 жылы «Абай жолы» эпопеясы үшін Лениндік сыйлықты иеленді. 
        Ол Ленин ордені, Еңбек Қызыл Ту ордені сынды марапаттарға ие болған.
      </Text>

      <Text style={styles.sectionTitle}>Жеке өмірі</Text>
      <Text style={styles.articleText}>
        Әуезов еңбекқор, парасатты әрі ұстамды тұлға ретінде танылды. Оның ұлы Мұрат Әуезов те көрнекті ғалым әрі қоғам қайраткері. 
        Мұхтар Әуезовтің адамгершілігі мен рухани тазалығы оның шығармаларында айқын көрініс табады.
      </Text>

      <Text style={styles.sectionTitle}>Қайтыс болуы</Text>
      <Text style={styles.articleText}>
        Мұхтар Әуезов 1961 жылы 27 маусымда Мәскеу қаласында өмірден өтті. Ол Алматы қаласындағы Орталық зиратқа жерленді.
      </Text>

      <Text style={styles.sectionTitle}>Дереккөздер</Text>
      <Text style={styles.link} onPress={() => Linking.openURL('https://kk.wikipedia.org/wiki/Мұхтар_Омарханұлы_Әуезов')}>
        → Уикипедия – Мұхтар Әуезов
      </Text>
      <Text style={styles.link} onPress={() => Linking.openURL('https://adebiportal.kz/kz/authors/view/709')}>
        → Әдеби портал – Әуезов туралы
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
  link: {
    color: '#1a0dab',
    fontSize: 14,
    textAlign: 'right',
    marginBottom: 8,
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

import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Modal, Platform, Linking } from 'react-native';

const GalleryScreen: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleStartTest = () => {
    Linking.openURL(
      'https://docs.google.com/forms/d/e/1FAIpQLSci6j7ejCKJZbSogts5BjdvstmlZ5Ibvut9IFTW4D152W-gtA/viewform'
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.contentTitle}>Фото және бейне галерея</Text>
        <Text style={styles.contentText}>Галереяда фотолар мен бейнелер көрсетіледі.</Text>
        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>Сынақтан өтіңіз</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Бейне тест</Text>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: '#ff3333' }]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Жабу</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: '#006600' }]}
                onPress={handleStartTest}
              >
                <Text style={styles.modalButtonText}>Бастау</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Text style={styles.footer}>© 2025 Қазақ зиялылары сайты ПО2402</Text>
    </ScrollView>
  );
};

export default GalleryScreen;

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
  contentTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  contentText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#006600',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  footer: {
    textAlign: 'center',
    padding: 15,
    fontSize: 14,
    color: '#666',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 20,
    color: '#006600',
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

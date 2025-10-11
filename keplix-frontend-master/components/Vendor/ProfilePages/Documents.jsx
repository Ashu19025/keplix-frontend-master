import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

export default function Documents({ navigation }) {
  const [documents, setDocuments] = useState([
    { id: '1', name: 'Aadhaar Card', size: '574KB', type: 'PDF', selected: false, fileName: '' },
    { id: '2', name: 'Bank Statement', size: '1.2MB', type: 'Docx', selected: false, fileName: '' },
    { id: '3', name: 'Licenses', size: '1.2MB', type: 'PDF', selected: false, fileName: '' },
  ]);
  const [manageText, setManageText] = useState('Manage');

  const selectFile = async (item) => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: item.type === 'PDF' ? 'application/pdf' : 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      });

      if (result.type === 'success') {
        setDocuments((prev) =>
          prev.map((doc) =>
            doc.id === item.id
              ? { ...doc, selected: true, fileName: result.name }
              : doc
          )
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  const resetSelections = () => {
    setDocuments((prev) =>
      prev.map((doc) => ({ ...doc, selected: false, fileName: '' }))
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.documentContainer}>
      <View>
        <Text style={styles.documentName}>{item.fileName || item.name}</Text>
        <Text style={styles.documentDetails}>
          {item.type} file | {item.size}
        </Text>
      </View>
      <TouchableOpacity onPress={() => selectFile(item)}>
        <Feather
          name={item.selected ? 'check' : 'download'}
          style={styles.icon1}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.backcontainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>Business</Text>
        </View>
         <TouchableOpacity onPress={()=> navigation.navigate("HamburgerMenu")}>
                <Ionicons name="menu-outline" style={styles.icon} />
                </TouchableOpacity>
      </View>

      <Text style={styles.title}>My Documents</Text>
      <Text style={styles.subtitle}>Manage business-related documents</Text>

      <FlatList
        data={documents}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.documentList}
      />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (manageText === 'Manage') {
              setManageText('Save');
            } else {
              navigation.navigate('Profile');
            }
          }}
        >
          <Text style={styles.buttonText}>{manageText}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.uploadButton}
          onPress={resetSelections}
        >
          <Text style={styles.uploadButtonText}>+ Upload Document</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  icon: {
    fontSize: 30, 
    borderColor:'#E2E2E2',
    borderWidth:2,
    borderRadius:50,
  },
  icon1: {
    fontSize: 24,
    color: 'rgba(0, 0, 0, 1)',
    lineHeight: 40,
  },
  text: {
    fontSize: 24,
    marginRight: 30,
    color: '#0000008F',
    fontFamily: 'DM',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontWeight: '500',
    fontSize: 32,
    fontFamily: 'DM',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  documentList: {
    flex: 1,
    marginBottom: 20,
  },
  documentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderColor: '#E2E2E2',
    borderWidth: 2,
    borderRadius: 24,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  documentName: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'DM',
    color: 'rgba(0, 0, 0, 1)',
  },
  documentDetails: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.56)',
    fontFamily: 'DM',
    fontWeight: '500',
  },
  buttonsContainer: {
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#4E46B4',
    borderRadius: 70,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'DM',
  },
  uploadButton: {
    borderRadius: 70,
    borderWidth: 2,
    borderColor: '#E2E2E2',
    paddingVertical: 15,
    alignItems: 'center',
  },
  uploadButtonText: {
    color: '#666',
    fontSize: 14,
    fontFamily: 'DM',
  },
});

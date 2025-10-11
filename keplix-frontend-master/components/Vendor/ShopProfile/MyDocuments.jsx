import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as DocumentPicker from 'expo-document-picker'; // Expo-friendly, works on web too
import { Ionicons } from '@expo/vector-icons'


const MyDocumentsScreen = ({navigation}) => {
  const [gstin, setGstin] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [ifsc, setIfsc] = useState('');
  const [panCard, setPanCard] = useState(null);
  const [tradeLicense, setTradeLicense] = useState(null);

  const pickDocument = async (setFile) => {
    try {
      const res = await DocumentPicker.getDocumentAsync({
        type: ['image/*', 'application/pdf'],
        copyToCacheDirectory: false,
        multiple: false,
      });

      // 🔒 Handle all cancel shapes (older/newer SDKs & web)
      if (!res || res.canceled || res.type === 'cancel') {
        return; // do nothing → UI doesn't flip
      }

      // 🔧 Normalize result shape
      const file =
        res.assets && res.assets.length
          ? res.assets[0]
          : res;

      // Only set if there is a valid selection
      if (file && (file.name || file.uri)) {
        setFile({
          name: file.name || 'document',
          uri: file.uri,
          mimeType: file.mimeType || file.type || undefined,
          size: file.size || undefined,
        });
      }
    } catch (e) {
      console.warn('Document pick error:', e);
      // Do NOT set state on error
    }
  };

  const removeDocument = (setFile) => setFile(null);

  const UploadField = ({ value, onPick, onRemove, label }) => {
    const selected = !!value;
    return (
      <>
        <Text style={styles.label}>{label}</Text>
        <TouchableOpacity
          style={[styles.uploadButton, selected && styles.uploadButtonSelected]}
          onPress={onPick}
          activeOpacity={0.8}
        >
          {selected ? (
            <View style={styles.fileContainer}>
              <Text
                numberOfLines={1}
                ellipsizeMode="middle"
                style={styles.fileName}
              >
                {value.name}
              </Text>
              <TouchableOpacity onPress={onRemove} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
                <Icon name="close-circle" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.placeholderContainer}>
              <Icon name="upload" size={20} color="#888" style={{ marginRight: 8 }} />
              <Text style={styles.uploadPlaceholderText}>Upload jpg, png, pdf</Text>
            </View>
          )}
        </TouchableOpacity>
      </>
    );
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }}>
      <TouchableOpacity
          style={styles.backButton}
          onPress={()=> navigation.navigate("ShopProfile")}
        >
          <View style={styles.backIconWrapper}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </View>
        </TouchableOpacity>


      <Text style={styles.heading}>My Documents</Text>
      <Text style={styles.subHeading}>Review Your Uploaded Documents</Text>

      <Text style={styles.label}>GSTIN number*</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="GSTIN"
          value={gstin}
          onChangeText={setGstin}
        />
        <Icon name="pencil-outline" size={20} color="#888" />
      </View>

      <Text style={styles.label}>Bank account number</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Account number"
          value={accountNumber}
          onChangeText={setAccountNumber}
        />
        <Icon name="pencil-outline" size={20} color="#888" />
      </View>

      <Text style={styles.label}>IFSC code</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="IFSC"
          value={ifsc}
          onChangeText={setIfsc}
        />
        <Icon name="pencil-outline" size={20} color="#888" />
      </View>

      {/* PAN Card */}
      <UploadField
        label="PAN card*"
        value={panCard}
        onPick={() => pickDocument(setPanCard)}
        onRemove={() => removeDocument(setPanCard)}
      />

      {/* Trade License */}
      <UploadField
        label="Trade license*"
        value={tradeLicense}
        onPick={() => pickDocument(setTradeLicense)}
        onRemove={() => removeDocument(setTradeLicense)}
      />

      <TouchableOpacity style={styles.doneButton}>
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>

      <View style={styles.bottomline}/>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 16 },
   backButton: {
    marginTop: 60,
    marginLeft: 3,
  },
  backIconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D3D3D3',
  },

  heading: { fontSize: 30, fontWeight: '700', color: '#000', marginTop: 20 },
  subHeading: { fontSize: 14, color: '#666', marginBottom: 16, marginTop: 8 },

  label: { fontSize: 14, color: '#333', marginTop: 16, marginBottom: 6 },

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    height: 50,
    justifyContent: 'space-between',
  },
  input: { flex: 1, fontSize: 14, color: '#333', outlineStyle: 'none', 
 },

  // Upload button: looks like input UNTIL a file is selected
  uploadButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    paddingVertical: 14,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Selected state turns green and removes border
  uploadButtonSelected: {
    backgroundColor: '#43b3a2',
    borderWidth: 0,
  },

  placeholderContainer: { flexDirection: 'row', alignItems: 'center' },
  uploadPlaceholderText: { fontSize: 14, fontWeight: '600', color: '#888' },

  fileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  fileName: { color: '#fff', fontSize: 14, fontWeight: '500', flexShrink: 1 },

  doneButton: {
    backgroundColor: '#5A32EA',
    borderRadius: 25,
    marginTop: 82,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  doneButtonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
   bottomline: {
    maxWidth: '40%',
    borderRadius: 3,
    height: 5,
    backgroundColor: '#000',
    marginTop: '28%',
    marginLeft: '30%',
    
  },

});

export default MyDocumentsScreen;
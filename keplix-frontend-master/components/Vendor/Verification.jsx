import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from "react-native-vector-icons/Entypo";

export default function Verification({ navigation }) {
  const [aadhaarFile, setAadhaarFile] = useState('');
  const [businessLicense, setBusinessLicense] = useState('');
  const [selfieFile, setSelfieFile] = useState('');
  

  return (
    <SafeAreaView style={styles.container}>
      {/* Back button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
        <Text style={styles.title}>Business</Text>
        </View>
      </View>


      <Text style={styles.pageTitle}>Verification</Text>
      <Text style={styles.subtitle}>
        Upload all the necessary documents for business verification.
      </Text>

              <Text style={styles.label}>Aadhaar card</Text>
        <TouchableOpacity
          style={[styles.uploadContainer, !!aadhaarFile && styles.uploaded]}
          onPress={() => {
            setAadhaarFile('aadhaar.jpg');
          }}>
          <Text style={[styles.uploadText, !!aadhaarFile && styles.textClicked]}>
            {aadhaarFile || 'Upload Aadhaar'}
          </Text>
          {!!aadhaarFile && (
            <Ionicons
              name="close-circle-outline"
              size={24}
              color="#fff"
              onPress={() => setAadhaarFile('')}
            />
          )}
        </TouchableOpacity>

        <Text style={styles.label}>Business license</Text>
        <TouchableOpacity
          style={[styles.uploadContainer, !!businessLicense && styles.uploaded]}
          onPress={() => {
            setBusinessLicense('business_license.jpg');
          }}>
          <Text style={[styles.uploadText, !!businessLicense && styles.textClicked]}>
            {businessLicense || 'Upload Business License'}
          </Text>
          {!!businessLicense && (
            <Ionicons
              name="close-circle-outline"
              size={24}
              color="#fff"
              onPress={() => setBusinessLicense('')}
            />
          )}
        </TouchableOpacity>


      <Text style={styles.note}>File size should not exceed 5MB</Text>
      
            <Text style={styles.label}>Selfie photo</Text>
      <TouchableOpacity
        style={[styles.uploadContainer, !!selfieFile && styles.uploaded]}
        onPress={() => {
          setSelfieFile('selfie.jpg');
        }}>
        {!selfieFile ? ( 
          <Text style={styles.uploadText1}>
            <Entypo name="squared-plus" size={18} color="#0000008F" />
            {' upload selfie'}
          </Text>
        ) : (
          <View style={styles.uploadedContainer}>
            <Text style={styles.uploadText2}>{selfieFile}</Text>
            <Ionicons
              name="close-circle-outline"
              size={24}
              color="#fff"
              onPress={() => setSelfieFile('')}
            />
          </View>
        )}
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ShopSetup")}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  icon: {
    fontSize: 30,
    color: '#000',
    borderWidth: 2,
    borderColor: '#E2E2E2',
    borderRadius: 50,
  },
  titleContainer: {
  flex: 1, 
  alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginRight: 30,
    color: "#0000008F",
    fontFamily:'DM',
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: '500',
    marginBottom: 10,
    fontFamily:'DM',
  },
  subtitle: {
    fontSize: 16,
    color: '#0000008F',
    marginBottom: 20,
    fontFamily:'DM',
  },
  label: {
    fontSize: 16,
    color: '#0000008F',
    marginBottom: 10,
    fontFamily:'DM',
  },
  uploadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 70,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  uploadedContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  flex: 1,
},
  uploaded: {
    backgroundColor: '#40A69F',
    borderColor: 'transparent',
  },
  uploadText: {
    flex: 1,
    fontSize: 16,
    color: '#0000008F',
    fontFamily:'DM',
  },
  textClicked: {
  color: '#fff',
},
  selfieContainer: {
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: 15,
  borderColor: "#ddd",
  borderWidth: 2,
  borderRadius: 70,
  paddingHorizontal: 100,
  marginBottom: 25,
},
uploadText1: {
  fontSize: 16,
  color: "#0000008F",
  marginLeft: 100, 
  fontFamily:'DM',
},
uploadText2: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
    fontFamily:'DM',
  },
  note: {
    fontSize: 14,
    color: '#0000008F',
    marginBottom: 20,
    fontFamily:'DM',
  },
  button: {
    backgroundColor: '#4E46B4',
    borderRadius: 70,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop:120,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
    fontFamily:'DM',
  },
});

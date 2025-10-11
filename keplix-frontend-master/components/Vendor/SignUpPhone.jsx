import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SignUpPhone = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={()=> navigation.navigate("SignUp")}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subtitle}>You will receive an OTP for verification {'\n'}once you enter your phone number</Text>

      {/* Label */}
      <Text style={styles.label}>Enter your phone number</Text>

      {/* Phone Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.prefix}>+91</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder=""
          placeholderTextColor="#999"
        />
      </View>

      {/* Send OTP Button */}
      <TouchableOpacity style={styles.sendOtpButton}>
        <Text style={styles.sendOtpButtonText} onPress={()=> navigation.navigate("SendPhoneOTP")}>Send OTP</Text>
      </TouchableOpacity>

      {/* OR Divider */}
      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or</Text>
        <View style={styles.line} />
      </View>

      {/* Reset via Email Button */}
      <TouchableOpacity style={styles.emailButton}>
        <Text style={styles.emailButtonText} onPress={()=> navigation.navigate("SignUp")}>Log in using E-mail</Text>
      </TouchableOpacity>
      <View style={styles.bottomline}></View>
    </SafeAreaView>
  );
};

export default SignUpPhone;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 55,
    marginLeft: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginTop: 30,
    marginLeft: 16,
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginTop: 20,
    marginLeft: 16,
  },

  label: {
    fontSize: 14,
    color: '#333',
    marginTop: 30,
    marginLeft: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 16,
    marginTop: 16,
    marginLeft: 16,
    height: 48,
   
  },
  prefix: {
    fontSize: 16,
    color: '#000',
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
     outlineStyle: 'none',
  },
  sendOtpButton: {
    backgroundColor: '#4B3CC0',
    borderRadius: 24,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 380,
    marginLeft: 16,
    width: '94%',
  },
  sendOtpButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
    justifyContent: 'center',
  },
  orText: {
    marginHorizontal: 8,
    color: '#888',
  },
  emailButton: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 24,
    paddingVertical: 14,
    alignItems: 'center',
    marginLeft: 16,
     width: '94%',
  },
  emailButtonText: {
    color: '#444',
    fontSize: 14,
  },
  bottomline: {
    position: 'absolute',
    bottom: 10, // adjust spacing from bottom
    left: '30%',
    right: '30%',
    height: 6,
    backgroundColor: '#000',
    borderRadius: 3,
  }
});
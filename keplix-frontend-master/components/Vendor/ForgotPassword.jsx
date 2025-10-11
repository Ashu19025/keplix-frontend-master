import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // or react-native-vector-icons

const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
 
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={()=> navigation.navigate("SignIn")} >
        <Ionicons name="arrow-back" size={20} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>Forgot Password</Text>

      <Text style={styles.label}>Enter your email address</Text>
      <TextInput
        style={styles.input}
        placeholder="Eg: xyz@gmail.com"
        placeholderTextColor="#666"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />



      <TouchableOpacity style={styles.sendotpButton}>
        <Text style={styles.sendotpText} onPress={()=> navigation.navigate("ForgotPasswordOTP")} >Send OTP</Text>
      </TouchableOpacity>

      <Text style={styles.ortext}>Or</Text>

      <TouchableOpacity style={styles.phoneButton}>
        <Text style={styles.phoneButtonText}>Reset the password via phone number</Text>
      </TouchableOpacity>

      <View style={ styles.bottomline}></View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 50,
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
    marginTop: 25,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 40,
    color: '#000',
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginTop: 35,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#ccc',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: 16,
    color: '#000',
    outlineStyle: 'none' ,
  },
  sendotpButton: {
    backgroundColor: '#4B3CC0',
    borderRadius: 24,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 386,
  },
  sendotpText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  ortext: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
    alignSelf: 'center',
  },
  phoneButton: {
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 24,
    paddingVertical: 14,
    marginTop: 16,
    alignItems: 'center',
  },
  phoneButtonText: {
    color: '#000',
    fontSize: 16,
  },
  bottomline: {
    height: 5,
    borderRadius: 24,
    width: '40%',
    backgroundColor: '#000',
    marginTop: 55,
    marginLeft: '30%',
  },
});
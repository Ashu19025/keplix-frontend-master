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
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container} >
      <TouchableOpacity style={styles.backButton} onPress={()=> navigation.navigate("Home")}  >
        <Ionicons name="arrow-back" size={20} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.subtitle}>Log in using your credentials</Text>

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

      <Text style={styles.label} >Enter password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          placeholderTextColor="#666"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <Pressable onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? 'eye' : 'eye-off'}
            size={20}
            color="black"
          />
        </Pressable>
      </View>

      <TouchableOpacity>
        <Text style={styles.forgotPassword} onPress={()=> navigation.navigate("ForgotPassword")}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.verifyButton}>
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.phoneButton}>
        <Text style={styles.phoneButtonText} onPress={()=> navigation.navigate("SignInPhone")}>Sign In using phone number</Text>
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
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 40,
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#66',
    marginTop: 10,
    letterSpacing: 0.5,
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
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#ccc',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: 20,
  },
  passwordInput: {
    flex: 1,
    color: '#000',
     outlineStyle: 'none' ,
  },
  
  forgotPassword: {
    alignSelf: 'flex-end',
    color: '#4B3CC0',
    marginTop: 12,
    fontSize: 16,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  verifyButton: {
    backgroundColor: '#4B3CC0',
    borderRadius: 24,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 226,
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
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
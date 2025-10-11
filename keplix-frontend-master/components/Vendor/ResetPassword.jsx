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

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={()=> navigation.navigate("ForgotPassword")}>
        <Ionicons name="arrow-back" size={20} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>Reset Password</Text>
      <Text style={styles.subtitle}>{`Password must contains these characters \nthat is number, special and uppercase.`}</Text>

      <Text style={styles.label}>Enter your new password </Text>
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
      

      <Text style={styles.label}>Confirm new password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          placeholderTextColor="#666"
          secureTextEntry={!showConfirmPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <Pressable onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
          <Ionicons
            name={showConfirmPassword ? 'eye' : 'eye-off'}
            size={20}
            color="black"
          />
        </Pressable>
      </View>

      <TouchableOpacity style={styles.resetButton}>
        <Text style={styles.resetButtonText} onPress={()=> navigation.navigate("PasswordChanged")}>Reset Password</Text>
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
  resetButton: {
    backgroundColor: '#4B3CC0',
    borderRadius: 24,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 310,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',

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
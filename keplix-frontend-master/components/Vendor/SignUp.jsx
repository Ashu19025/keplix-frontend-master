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
  const [newpassword, setnewPassword] = useState('');
  const [confirmnewpassword, setconfirmnewPassword] = useState('');
  const [shownewPassword, setShownewPassword] = useState(false);
  const [showconfirmnewPassword, setShowconfirmnewPassword] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={()=> navigation.navigate("Home")}>
        <Ionicons name="arrow-back" size={20} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>Sign Up</Text>

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

      <Text style={styles.label}>Enter new password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          placeholderTextColor="#666"
          secureTextEntry={!shownewPassword}
          value={newpassword}
          onChangeText={setnewPassword}
        />
        <Pressable onPress={() => setShownewPassword(!shownewPassword)}>
          <Ionicons
            name={shownewPassword ? 'eye' : 'eye-off'}
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
          secureTextEntry={!showconfirmnewPassword}
          value={confirmnewpassword}
          onChangeText={setconfirmnewPassword}
        />
        <Pressable onPress={() => setShowconfirmnewPassword(!showconfirmnewPassword)}>
          <Ionicons
            name={showconfirmnewPassword ? 'eye' : 'eye-off'}
            size={20}
            color="black"
          />
        </Pressable>
      </View>


      <TouchableOpacity style={styles.verifyButton}>
        <Text style={styles.verifyButtonText} onPress={()=> navigation.navigate("SignUpSendOTP")}>Verify</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.phoneButton}>
        <Text style={styles.phoneButtonText} onPress={()=> navigation.navigate("SignUpPhone")}>Sign In using phone number</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
          By signing or logging in, you agree to the{' '}
          <Text style={styles.linkText}>Terms and Conditions</Text> of service and{' '}
          <Text style={styles.linkText}>Privacy Policy</Text>
        </Text>


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
  verifyButton: {
    backgroundColor: '#4B3CC0',
    borderRadius: 24,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 130,
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
   footerText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#666',
    paddingHorizontal: 16,
    lineHeight: 18,
    marginTop: 20,
    marginLeft: 16,
    marginRight: 16,
   },
   linkText: {
    color: '#5D41E7',
    textDecorationLine: 'underline',
  },

  
  bottomline: {
    height: 5,
    borderRadius: 24,
    width: '40%',
    backgroundColor: '#000',
    marginTop: 35,
    marginLeft: '30%',
  },
});
// App.jsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

const App = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* 🔷 Linear Gradient Background */}
      <StatusBar style="light" />
  <LinearGradient
    colors={['#bbb', '#000']}
    style={styles.topSection}
    locations={[0, 0.8, 1]} 
    start={{ x: 0.5, y: 0 }}
    end={{ x: 0.5, y: 1 }}
  >
        <Text style={styles.title}>Keplix</Text>
        <Text style={styles.subtitle}>Workshop Partner App</Text>
      </LinearGradient>

      {/* 🔘 Pagination */}
      <View style={styles.pagination}>
        <View style={[styles.dotline, styles.activeDotline]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>

      {/* 🔐 Sign Up Button */}
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpButtonText} onPress={()=> navigation.navigate("SignUp")}>Sign Up</Text>
      </TouchableOpacity>

      {/* 🔓 Sign In Text */}
      <TouchableOpacity style={styles.signInPrompt}>
        <Text style={styles.signInText}>
          Already have an account? <Text style={styles.signInLink} onPress={()=> navigation.navigate("SignIn")}>Sign In</Text>
        </Text>
      </TouchableOpacity>

      {/* ➖ Divider */}
      <View style={styles.divider}>
        <View style={styles.line} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line} />
      </View>

      {/* 🌐 Social Buttons */}
      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="apple" size={24} color="black" />
        </TouchableOpacity>

        {/* ✅ Google Logo in Center */}
        <TouchableOpacity style={styles.socialButton}>
          <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Google_icon_2025.png',
                      }}
                      style={styles.googleIcon}
                      resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="facebook" size={24} color="#1877F2" />
        </TouchableOpacity>
      </View>

      {/* 📄 Footer Text */}
      <Text style={styles.footerText}>
        By signing or logging in, you agree to the{' '}
        <Text style={styles.link}>Terms and Conditions</Text> of service and{' '}
        <Text style={styles.link}>Privacy Policy</Text>
      </Text>

      <View style={styles.footerline}></View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  topSection: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
    height: 480,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 180,
    marginRight: 260,
  },
  subtitle: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 8,
     marginRight: 240,
  },
  pagination: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 20,
  },
  dotline:{
    width: 30,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
    marginLeft: 15,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDotline: {
    backgroundColor: '#6D28D9',
  },
  signUpButton: {
    marginTop: 30,
    backgroundColor: '#6D28D9',
    paddingVertical: 14,
    paddingHorizontal: 150,
    borderRadius: 25,
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  signInPrompt: {
    marginTop: 16,
    borderWidth: 2,
    paddingVertical: 14,
    paddingHorizontal: 80,
    borderRadius: 25,
    borderColor: '#D3D3D3',
    overflow: 'hidden'
  },
  signInText: {
    fontSize: 14,
    color: '#555',
  },
  signInLink: {
    color: '#6D28D9',
    fontWeight: '500',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
    width: '90%',
    justifyContent: 'center',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 10,
    color: '#777',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  socialButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 999,
    padding: 12,
    marginHorizontal: 8,
    paddingVertical: 14,
    paddingHorizontal: 40,
    backgroundColor: '#fff',
  },
  googleIcon: {
    width: 24,
    height: 24,
  },
  footerText: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
    paddingHorizontal: 24,
    marginTop: 24,
    marginLeft  : 20,
    marginRight: 20,
  },
  link: {
    textDecorationLine: 'underline',
    color: '#6D28D9',
  },
  footerline: {
    position: 'absolute',
  bottom: 20, // adjust spacing from bottom
  left: '30%',
  right: '30%',
  height: 5,
  backgroundColor: '#000',
  borderRadius: 3,

  },
});
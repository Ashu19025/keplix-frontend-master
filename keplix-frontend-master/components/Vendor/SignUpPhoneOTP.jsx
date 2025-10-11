import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';

// Responsive scaling helpers
const { width, height } = Dimensions.get('window');
const guidelineBaseWidth = 390;
const guidelineBaseHeight = 844;

const scale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

const SignInOTPScreen = ({navigation}) => {
  const router = useRouter();
  const otpInputs = useRef([]);
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [showPopup, setShowPopup] = useState(false);

  const handleOTPChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 5) {
      otpInputs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (index, e) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      otpInputs.current[index - 1]?.focus();
    }
  };

  
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView style={styles.container}>

        <TouchableOpacity
          style={styles.backButton}
        >
          <View style={styles.backIconWrapper}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </View>
        </TouchableOpacity>

        <Text style={styles.heading}>Sign Up</Text>
        <Text style={styles.subtext}>
          An OTP code has been sent to your {'\n'}phone number +91**********
        </Text>

        <View style={styles.otpContainer}>
          {[...Array(6)].map((_, index) => (
            <TextInput
              key={index}
              ref={(ref) => { otpInputs.current[index] = ref }}
              style={styles.otpInput}
              keyboardType="number-pad"
              maxLength={1}
              autoFocus={index === 0}
              onChangeText={(text) => handleOTPChange(text, index)}
              onKeyPress={(e) => handleBackspace(index, e)}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.sendOtpButton}>
          <Text style={styles.sendOtpText} onPress={()=> navigation.navigate("PhnVerified")}>Verify OTP</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.emailButton}>
          <Text style={styles.emailText}>Don't receive OTP?</Text>
          <Text style={styles.emailTextresend}>Resend</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          By signing or logging in, you agree to the{' '}
          <Text style={styles.linkText}>Terms and Conditions</Text> of service and{' '}
          <Text style={styles.linkText}>Privacy Policy</Text>
        </Text>

        <View style={styles.bottomline}></View>
      </SafeAreaView>
    </>
  );
};

export default SignInOTPScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  backButton: {
    marginTop: verticalScale(64),
    marginLeft: scale(16),
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
  overlayWrapper: {
  ...StyleSheet.absoluteFillObject,
  zIndex: 1000, // ensure it's above the rest of the screen
  justifyContent: 'flex-start', // so notification can be at top
  alignItems: 'center',
  paddingTop: 50, // adjust vertical offset for notification
},
dimBackground: {
  ...StyleSheet.absoluteFillObject,
  backgroundColor: 'rgba(0,0,0,0.2)', // the dim effect
},
  heading: {
    fontSize: 28,
    fontWeight: '600',
    marginTop: verticalScale(40),
    marginLeft: scale(16),
  },
  subtext: {
    fontSize: 14,
    color: '#555',
    marginTop: verticalScale(20),
    marginLeft: scale(16),
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: verticalScale(36),
  },
  otpInput: {
    width: 48,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: '#D3D3D3',
  },
  input: {
    height: 48,
    width: '93%',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
    marginTop: verticalScale(10),
    marginLeft: scale(16),
    fontSize: 16,
  },
  sendOtpButton: {
    maxWidth: '93%',
    backgroundColor: '#5D41E7',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: verticalScale(300),
    marginLeft: scale(16),
  },
  sendOtpText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  emailButton: {
    maxWidth: '93%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: verticalScale(15),
    marginLeft: scale(16),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  emailText: {
    fontSize: 16,
    fontWeight: '500',
  },
  emailTextresend: {
    fontSize: 16,
    fontWeight: '500',
    color: '#5D41E7',
    marginLeft: 5,
  },
  footerText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#666',
    paddingHorizontal: 16,
    lineHeight: 18,
    marginTop: verticalScale(40),
    marginLeft: scale(30),
    marginRight: scale(30),
  },
  linkText: {
    color: '#5D41E7',
    textDecorationLine: 'underline',
  },
  bottomline: {
    maxWidth: '40%',
    borderRadius: 3,
    height: 6,
    backgroundColor: '#000',
    marginHorizontal: 16,
    marginTop: verticalScale(35),
    marginLeft: scale(110),
  },
});
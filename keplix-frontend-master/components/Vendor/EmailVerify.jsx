import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const EmailVerified = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.circle}>
        <Ionicons name="checkmark" size={48} color="#000" />
      </View>
      <Text style={styles.message}>Your email address has been{'\n'}verified successfully!</Text>
      <View style={styles.bottomline}></View>
    </SafeAreaView>
  );
};

export default EmailVerified;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4B3CC0', // Purple background
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    backgroundColor: '#fff',
    borderRadius: 100,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // for subtle shadow on Android
    shadowColor: '#000', // for iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  message: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 24,
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